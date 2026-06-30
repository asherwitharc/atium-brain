'use client';

import { useState, useEffect, useMemo } from 'react';
import {
  ComposedChart, BarChart, Bar, XAxis, YAxis, Tooltip,
  ResponsiveContainer, Cell,
} from 'recharts';
import { firms, TOTAL_FIRMS, LAST_RUN, atiumSummary, recordTypeSplit } from '../lib/data';

// ─── chart data ───────────────────────────────────────────────────────────────
const weeklyData = [
  { week: 'May 4',  advances: 38, amountK: 190.5 },
  { week: 'May 11', advances: 42, amountK: 575.8 },
  { week: 'May 18', advances: 32, amountK: 456.1 },
  { week: 'May 25', advances: 52, amountK: 394.3 },
  { week: 'Jun 1',  advances: 74, amountK: 543.6 },
  { week: 'Jun 8',  advances: 94, amountK: 890.5 },
  { week: 'Jun 15', advances: 69, amountK: 307.3 },
  { week: 'Jun 22', advances: 76, amountK: 502.8 },
];

const distributionData = [
  { range: '90–100', count: 2   },
  { range: '80–89',  count: 4   },
  { range: '70–79',  count: 5   },
  { range: '60–69',  count: 4   },
  { range: '50–59',  count: 3   },
  { range: '40–49',  count: 5   },
  { range: '30–39',  count: 2   },
  { range: '20–29',  count: 3   },
  { range: '10–19',  count: 10  },
  { range: '1–9',    count: 5   },
];

// ─── types ────────────────────────────────────────────────────────────────────
type SortKey = 'rank' | 'name' | 'fundingScore' | 'activityScore' | 'fundings30d' | 'fundedAmount30d' | 'nfrRate';
type SortDir = 'asc' | 'desc';
type StatusFilter = 'All' | 'Core – Reliable' | 'Active – Core' | 'Active – Growth Potential' | 'At Risk' | 'Dormant';

// ─── helpers ─────────────────────────────────────────────────────────────────
const STATUS_STYLES: Record<string, { pill: string }> = {
  'Core – Reliable':           { pill: 'bg-emerald-950 text-emerald-400 border border-emerald-800' },
  'Active – Core':             { pill: 'bg-blue-950 text-blue-400 border border-blue-800' },
  'Active – Growth Potential': { pill: 'bg-violet-950 text-violet-400 border border-violet-800' },
  'At Risk':                   { pill: 'bg-orange-950 text-orange-400 border border-orange-800' },
  'Dormant':                   { pill: 'bg-zinc-900 text-zinc-300 border border-zinc-700' },
  'New':                       { pill: 'bg-teal-950 text-teal-400 border border-teal-800' },
};

const STATUS_DOT: Record<string, string> = {
  'Core – Reliable':           '#34D399',
  'Active – Core':             '#60A5FA',
  'Active – Growth Potential': '#C084FC',
  'At Risk':                   '#FB923C',
  'Dormant':                   '#525252',
  'New':                       '#2DD4BF',
};

const PRIORITY_BADGE: Record<string, React.CSSProperties> = {
  'Retain':  { background: 'rgba(45,212,191,0.08)',  color: '#2DD4BF', border: '1px solid rgba(45,212,191,0.2)'  },
  'Rescue':  { background: 'rgba(232,169,60,0.08)', color: '#E8A93C', border: '1px solid rgba(232,169,60,0.2)' },
  'Convert': { background: 'rgba(52,211,153,0.08)',  color: '#34D399', border: '1px solid rgba(52,211,153,0.2)'  },
};

function fmt(n: number): string {
  return '$' + n.toLocaleString();
}

function truncate(s: string, n: number): string {
  return s.length > n ? s.slice(0, n) + '…' : s;
}

// ─── chart tooltip ────────────────────────────────────────────────────────────
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ChartTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div style={{
      background: '#1A1A1A',
      border: '1px solid #2A2A2A',
      borderRadius: '6px',
      padding: '8px 12px',
      fontSize: '12px',
      fontFamily: 'var(--font-space)',
    }}>
      <p style={{ color: '#aaaaaa', marginBottom: '4px', fontSize: '11px' }}>{label}</p>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {payload.map((p: any) => (
        <p key={p.name} style={{ color: p.color, margin: '2px 0' }}>
          {p.name}: {p.name === 'Amount ($K)' ? `$${p.value}K` : p.value}
        </p>
      ))}
    </div>
  );
}

// ─── score bar ────────────────────────────────────────────────────────────────
function ScoreBar({ value, color, animate, delay }: {
  value: number;
  color: 'amber' | 'blue';
  animate: boolean;
  delay: number;
}) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!animate) { setWidth(value); return; }
    const t = setTimeout(() => setWidth(value), delay);
    return () => clearTimeout(t);
  }, [animate, value, delay]);

  const fillColor = color === 'amber' ? '#E8A93C' : '#4F7FE8';

  return (
    <div className="flex items-center gap-2">
      <span
        className="font-mono text-sm font-semibold w-7 text-right tabular-nums"
        style={{ color: value === 0 ? '#3A3A3A' : color === 'amber' ? '#E8A93C' : '#4F7FE8' }}
      >
        {value}
      </span>
      <div
        className="w-20 h-[3px] rounded-full"
        style={{ background: '#1E1E1E' }}
      >
        <div
          className="h-[3px] rounded-full score-bar-fill"
          style={{
            width: `${width}%`,
            background: fillColor,
            transition: `width 700ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
            opacity: value === 0 ? 0.25 : 1,
          }}
        />
      </div>
    </div>
  );
}

// ─── sort indicator ───────────────────────────────────────────────────────────
function SortIndicator({ active, dir }: { active: boolean; dir: SortDir }) {
  if (!active) return <span className="ml-1 opacity-20">↕</span>;
  return <span className="ml-1" style={{ color: '#E8A93C' }}>{dir === 'asc' ? '↑' : '↓'}</span>;
}

// ─── page ────────────────────────────────────────────────────────────────────
export default function Home() {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('All');
  const [search, setSearch] = useState('');
  const [sortKey, setSortKey] = useState<SortKey>('fundingScore');
  const [sortDir, setSortDir] = useState<SortDir>('desc');
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(t);
  }, []);

  const coreCount    = firms.filter(f => f.status === 'Core – Reliable').length;
  const atRiskCount  = firms.filter(f => f.status === 'At Risk').length;
  const dormantCount = firms.filter(f => f.status === 'Dormant').length;

  const filtered = useMemo(() => {
    let list = [...firms];
    if (statusFilter !== 'All') list = list.filter(f => f.status === statusFilter);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(f => f.name.toLowerCase().includes(q));
    }
    list.sort((a, b) => {
      let av: number | string = 0;
      let bv: number | string = 0;
      if (sortKey === 'rank' || sortKey === 'fundingScore') { av = a.fundingScore; bv = b.fundingScore; }
      else if (sortKey === 'name') { av = a.name; bv = b.name; }
      else if (sortKey === 'activityScore') { av = a.activityScore; bv = b.activityScore; }
      else if (sortKey === 'fundings30d') { av = a.fundings30d; bv = b.fundings30d; }
      else if (sortKey === 'fundedAmount30d') { av = a.fundedAmount30d; bv = b.fundedAmount30d; }
      else if (sortKey === 'nfrRate') {
        if (a.nfrRate === null && b.nfrRate === null) return 0;
        if (a.nfrRate === null) return 1;
        if (b.nfrRate === null) return -1;
        av = a.nfrRate; bv = b.nfrRate;
      }

      if (typeof av === 'string') {
        return sortDir === 'asc' ? av.localeCompare(bv as string) : (bv as string).localeCompare(av);
      }
      return sortDir === 'asc' ? (av as number) - (bv as number) : (bv as number) - (av as number);
    });
    return list;
  }, [statusFilter, search, sortKey, sortDir]);

  function toggleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDir('desc');
    }
  }

  function thCls(key: SortKey) {
    const isActive = sortKey === key || (key === 'rank' && sortKey === 'fundingScore');
    return [
      'text-left text-xs font-medium uppercase tracking-wider cursor-pointer select-none px-3 py-3 whitespace-nowrap transition-colors',
      isActive ? 'text-zinc-200' : 'text-zinc-300 hover:text-zinc-100',
    ].join(' ');
  }

  const STATUS_FILTERS: StatusFilter[] = [
    'All', 'Core – Reliable', 'Active – Core', 'Active – Growth Potential', 'At Risk', 'Dormant',
  ];

  return (
    <div
      className="min-h-screen"
      style={{ background: '#0A0A0A', color: '#F0F0F0', fontFamily: 'var(--font-space)' }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');
        :root { --font-space: 'Space Grotesk', 'Inter', system-ui, sans-serif; --font-mono: 'JetBrains Mono', 'Fira Mono', monospace; }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 5px; height: 5px; }
        ::-webkit-scrollbar-track { background: #0A0A0A; }
        ::-webkit-scrollbar-thumb { background: #222; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: #333; }
        @media (prefers-reduced-motion: reduce) { .score-bar-fill { transition: none !important; } }
      `}</style>

      {/* ── header ── */}
      <header
        className="sticky top-0 z-40 px-6 py-4 flex items-center justify-between"
        style={{
          background: 'rgba(10,10,10,0.94)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid #181818',
        }}
      >
        <div>
          <div className="flex items-center gap-2">
            <span style={{ fontSize: '18px', lineHeight: 1 }}>⚡</span>
            <span
              style={{
                fontSize: '18px',
                fontWeight: 700,
                letterSpacing: '-0.025em',
                color: '#F0F0F0',
                fontFamily: 'var(--font-space)',
              }}
            >
              Atium Pulse
            </span>
          </div>
          <p
            className="mt-0.5"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: '#aaaaaa',
              letterSpacing: '0.02em',
            }}
          >
            Lawfund · {TOTAL_FIRMS} firms scored · Last run {LAST_RUN}
          </p>
        </div>
        <span
          style={{
            fontSize: '11px',
            padding: '3px 10px',
            borderRadius: '4px',
            background: '#111',
            border: '1px solid #1E1E1E',
            color: '#aaaaaa',
            fontFamily: 'var(--font-space)',
            letterSpacing: '0.04em',
          }}
        >
          Powered by Atium
        </span>
      </header>

      <main className="px-6 py-6" style={{ maxWidth: '1400px', margin: '0 auto' }}>

        {/* ── Atium Summary ── */}
        <div style={{ background: '#0F0F0F', border: '1px solid #181818', borderRadius: '8px', padding: '20px 24px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '14px' }}>
            <span style={{ fontWeight: 600, fontSize: '14px', color: '#E8E8E8', fontFamily: 'var(--font-space)' }}>
              Atium Summary
            </span>
            <span style={{ fontSize: '11px', color: '#444444', fontFamily: 'var(--font-mono)', letterSpacing: '0.02em' }}>
              Generated {atiumSummary.generatedAt}
            </span>
          </div>
          <p style={{ fontSize: '14px', color: '#B8B8B8', lineHeight: 1.7, maxWidth: '860px', marginBottom: '10px', fontFamily: 'var(--font-space)' }}>
            {atiumSummary.narrative}
          </p>
          <p style={{ fontSize: '11px', color: '#444444', fontFamily: 'var(--font-mono)', marginBottom: '16px', letterSpacing: '0.02em' }}>
            {recordTypeSplit.clients} clients · {recordTypeSplit.prospects} prospects
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {atiumSummary.actions.map((action, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{
                  flexShrink: 0,
                  fontSize: '10px',
                  fontWeight: 600,
                  padding: '3px 9px',
                  borderRadius: '100px',
                  letterSpacing: '0.06em',
                  fontFamily: 'var(--font-space)',
                  marginTop: '1px',
                  ...(PRIORITY_BADGE[action.priority] ?? PRIORITY_BADGE['Rescue']),
                }}>
                  {action.priority.toUpperCase()}
                </span>
                <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.55, fontFamily: 'var(--font-space)' }}>
                  <span style={{ fontWeight: 600, color: '#E0E0E0' }}>{action.firm}</span>
                  <span style={{ color: '#666666', marginLeft: '8px' }}>{action.reason}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── stats ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {[
            { label: 'Firms Scored',    value: TOTAL_FIRMS, color: '#E8A93C' },
            { label: 'Core – Reliable', value: coreCount,   color: '#34D399' },
            { label: 'At Risk',         value: atRiskCount,  color: '#FB923C' },
            { label: 'Dormant',         value: dormantCount, color: '#3A3A3A' },
          ].map(({ label, value, color }) => (
            <div
              key={label}
              style={{ background: '#0F0F0F', border: '1px solid #181818', borderRadius: '8px', padding: '16px 18px' }}
            >
              <p style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#aaaaaa', marginBottom: '6px' }}>
                {label}
              </p>
              <p style={{ fontSize: '30px', fontWeight: 600, color, fontFamily: 'var(--font-mono)', letterSpacing: '-0.03em', lineHeight: 1 }}>
                {value}
              </p>
            </div>
          ))}
        </div>

        {/* ── filter pills ── */}
        <div className="flex flex-wrap gap-2 mb-5">
          {STATUS_FILTERS.map(s => {
            const active = statusFilter === s;
            return (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                style={{
                  fontSize: '12px',
                  fontWeight: 500,
                  padding: '5px 14px',
                  borderRadius: '100px',
                  border: active ? '1px solid #F0F0F0' : '1px solid #222',
                  background: active ? '#F0F0F0' : 'transparent',
                  color: active ? '#0A0A0A' : '#aaaaaa',
                  cursor: 'pointer',
                  transition: 'all 150ms ease',
                  fontFamily: 'var(--font-space)',
                }}
              >
                {s}
              </button>
            );
          })}
        </div>

        {/* ── charts ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>

          {/* Chart A — Weekly funding volume */}
          <div style={{ background: '#0F0F0F', border: '1px solid #181818', borderRadius: '8px', padding: '16px 16px 12px' }}>
            <p style={{ fontWeight: 600, fontSize: '13px', color: '#E8E8E8', marginBottom: '2px' }}>Portfolio funding volume</p>
            <p style={{ fontSize: '11px', color: '#aaaaaa', marginBottom: '16px' }}>Last 8 weeks · Lawfund origination</p>
            <ResponsiveContainer width="100%" height={180}>
              <ComposedChart data={weeklyData} margin={{ top: 4, right: 52, bottom: 0, left: -8 }}>
                <XAxis
                  dataKey="week"
                  tick={{ fill: '#aaaaaa', fontSize: 11 }}
                  axisLine={{ stroke: '#222' }}
                  tickLine={false}
                />
                <YAxis
                  yAxisId="left"
                  tick={{ fill: '#34D399', fontSize: 10 }}
                  axisLine={false}
                  tickLine={false}
                  width={28}
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  tick={{ fill: '#4F7FE8', fontSize: 10 }}
                  axisLine={false}
                  tickLine={false}
                  width={50}
                  tickFormatter={(v: number) => `$${v}K`}
                />
                <Tooltip content={<ChartTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
                <Bar yAxisId="left"  dataKey="advances" name="Advances"    fill="#34D399" radius={[2, 2, 0, 0]} maxBarSize={18} />
                <Bar yAxisId="right" dataKey="amountK"  name="Amount ($K)" fill="#4F7FE8" radius={[2, 2, 0, 0]} maxBarSize={18} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          {/* Chart B — Score distribution */}
          <div style={{ background: '#0F0F0F', border: '1px solid #181818', borderRadius: '8px', padding: '16px 16px 12px' }}>
            <p style={{ fontWeight: 600, fontSize: '13px', color: '#E8E8E8', marginBottom: '2px' }}>Funding score distribution</p>
            <p style={{ fontSize: '11px', color: '#aaaaaa', marginBottom: '16px' }}>588 firms scored tonight</p>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart layout="vertical" data={distributionData} margin={{ top: 0, right: 8, bottom: 0, left: 0 }}>
                <XAxis
                  type="number"
                  tick={{ fill: '#aaaaaa', fontSize: 11 }}
                  axisLine={{ stroke: '#222' }}
                  tickLine={false}
                />
                <YAxis
                  type="category"
                  dataKey="range"
                  tick={{ fill: '#aaaaaa', fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  width={52}
                />
                <Tooltip content={<ChartTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
                <Bar dataKey="count" name="Firms" radius={[0, 2, 2, 0]} maxBarSize={14}>
                  {distributionData.map((_entry, i) => (
                    <Cell key={i} fill="#34D399" />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <p style={{ fontSize: '10px', color: '#555555', marginTop: '6px', fontFamily: 'var(--font-mono)' }}>
              545 firms have no recent funding activity
            </p>
          </div>

        </div>

        {/* ── two-column ── */}
        <div className="flex gap-5 items-start">

          {/* ── table column ── */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <input
              type="text"
              placeholder="Search firms…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{
                width: '100%',
                fontSize: '13px',
                padding: '8px 12px',
                borderRadius: '6px',
                background: '#0F0F0F',
                border: '1px solid #1E1E1E',
                color: '#F0F0F0',
                fontFamily: 'var(--font-space)',
                outline: 'none',
                marginBottom: '12px',
                transition: 'border-color 150ms ease',
              }}
              onFocus={e => { e.currentTarget.style.borderColor = 'rgba(232,169,60,0.35)'; }}
              onBlur={e => { e.currentTarget.style.borderColor = '#1E1E1E'; }}
            />

            <div style={{ border: '1px solid #181818', borderRadius: '8px', overflow: 'hidden' }}>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '840px' }}>
                  <thead>
                    <tr style={{ background: '#0F0F0F', borderBottom: '1px solid #181818' }}>
                      <th className={thCls('rank')} style={{ width: '44px' }} onClick={() => toggleSort('rank')}>
                        # <SortIndicator active={sortKey === 'rank' || sortKey === 'fundingScore'} dir={sortDir} />
                      </th>
                      <th className={thCls('name')} onClick={() => toggleSort('name')}>
                        Firm <SortIndicator active={sortKey === 'name'} dir={sortDir} />
                      </th>
                      <th
                        className="text-left text-xs font-medium uppercase tracking-wider px-3 py-3 text-zinc-300"
                        style={{ minWidth: '140px' }}
                      >
                        Status
                      </th>
                      <th className={thCls('fundingScore')} style={{ minWidth: '140px' }} onClick={() => toggleSort('fundingScore')}>
                        Funding <SortIndicator active={sortKey === 'fundingScore'} dir={sortDir} />
                      </th>
                      <th className={thCls('activityScore')} style={{ minWidth: '140px' }} onClick={() => toggleSort('activityScore')}>
                        Activity <SortIndicator active={sortKey === 'activityScore'} dir={sortDir} />
                      </th>
                      <th className={thCls('fundings30d')} style={{ width: '72px' }} onClick={() => toggleSort('fundings30d')}>
                        30d # <SortIndicator active={sortKey === 'fundings30d'} dir={sortDir} />
                      </th>
                      <th className={thCls('fundedAmount30d')} style={{ minWidth: '108px' }} onClick={() => toggleSort('fundedAmount30d')}>
                        30d $ <SortIndicator active={sortKey === 'fundedAmount30d'} dir={sortDir} />
                      </th>
                      <th
                        className={thCls('nfrRate')}
                        style={{ width: '72px' }}
                        onClick={() => toggleSort('nfrRate')}
                        title="NFR = new-firm rate: share of fundings that are new cases vs. re-funding existing ones"
                      >
                        NFR % <SortIndicator active={sortKey === 'nfrRate'} dir={sortDir} />
                      </th>
                      <th
                        className="text-left text-xs font-medium uppercase tracking-wider px-3 py-3 text-zinc-300"
                        style={{ minWidth: '180px' }}
                      >
                        Insight
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((firm, i) => {
                      const pillStyle = STATUS_STYLES[firm.status] || STATUS_STYLES['Dormant'];
                      const dotColor = STATUS_DOT[firm.status] || '#525252';
                      const barDelay = i * 10;
                      const isDormant = firm.status === 'Dormant';

                      return (
                        <tr
                          key={firm.name}
                          style={{ borderBottom: '1px solid #141414' }}
                          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(232,169,60,0.035)'; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
                        >
                          <td className="px-3 py-2.5">
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#2E2E2E' }}>
                              {String(i + 1).padStart(2, '0')}
                            </span>
                          </td>
                          <td className="px-3 py-2.5">
                            <span style={{ fontSize: '13px', fontWeight: 500, color: isDormant ? '#aaaaaa' : '#E8E8E8' }}>
                              {firm.name}
                            </span>
                          </td>
                          <td className="px-3 py-2.5">
                            <span
                              className={`inline-flex items-center gap-1.5 text-xs px-2 py-0.5 rounded-full font-medium ${pillStyle.pill}`}
                              style={{ fontFamily: 'var(--font-space)', whiteSpace: 'nowrap', fontSize: '11px' }}
                            >
                              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: dotColor, display: 'inline-block', flexShrink: 0 }} />
                              {firm.status}
                            </span>
                          </td>
                          <td className="px-3 py-2.5">
                            <ScoreBar value={firm.fundingScore} color="amber" animate={animated} delay={barDelay} />
                          </td>
                          <td className="px-3 py-2.5">
                            <ScoreBar value={firm.activityScore} color="blue" animate={animated} delay={barDelay + 50} />
                          </td>
                          <td className="px-3 py-2.5">
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: firm.fundings30d === 0 ? '#2E2E2E' : '#aaaaaa' }}>
                              {firm.fundings30d === 0 ? '—' : firm.fundings30d}
                            </span>
                          </td>
                          <td className="px-3 py-2.5">
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: firm.fundedAmount30d === 0 ? '#2E2E2E' : '#aaaaaa' }}>
                              {firm.fundedAmount30d === 0 ? '—' : fmt(firm.fundedAmount30d)}
                            </span>
                          </td>
                          <td className="px-3 py-2.5">
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: firm.nfrRate === null ? '#2E2E2E' : '#aaaaaa' }}>
                              {firm.nfrRate === null ? '—' : `${firm.nfrRate}%`}
                            </span>
                          </td>
                          <td className="px-3 py-2.5">
                            <span
                              style={{ fontSize: '12px', color: '#aaaaaa' }}
                              title={firm.reason}
                            >
                              {truncate(firm.reason, 60)}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                    {filtered.length === 0 && (
                      <tr>
                        <td colSpan={9} style={{ padding: '48px 24px', textAlign: 'center', color: '#aaaaaa', fontSize: '13px' }}>
                          No firms match.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <p style={{ marginTop: '8px', fontSize: '11px', color: '#aaaaaa', fontFamily: 'var(--font-mono)' }}>
              {filtered.length} of {TOTAL_FIRMS} firms
            </p>
          </div>

          {/* ── right panel ── */}
          <div style={{ width: '272px', flexShrink: 0 }}>

            {/* tasks */}
            <div style={{ background: '#0F0F0F', border: '1px solid #181818', borderRadius: '8px', padding: '16px', marginBottom: '12px' }}>
              <p style={{ fontWeight: 600, fontSize: '13px', color: '#E8E8E8', marginBottom: '2px' }}>Upcoming tasks</p>
              <p style={{ fontSize: '11px', color: '#aaaaaa', marginBottom: '16px' }}>Agent-scheduled actions</p>
              <div
                style={{
                  border: '1px dashed #222',
                  borderRadius: '8px',
                  padding: '20px 16px',
                  textAlign: 'center',
                  background: 'rgba(232,169,60,0.015)',
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'rgba(232,169,60,0.07)',
                    border: '1px solid rgba(232,169,60,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 10px',
                    fontSize: '14px',
                  }}
                >
                  ⚡
                </div>
                <p style={{ fontSize: '12px', fontWeight: 500, color: '#aaaaaa', marginBottom: '6px' }}>No tasks scheduled</p>
                <p style={{ fontSize: '11px', color: '#aaaaaa', lineHeight: 1.5 }}>
                  Status Manager agent coming soon — will notify Ryan when firms change status.
                </p>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    marginTop: '14px',
                    padding: '4px 10px',
                    borderRadius: '100px',
                    background: 'rgba(232,169,60,0.05)',
                    border: '1px solid rgba(232,169,60,0.1)',
                    fontSize: '10px',
                    color: 'rgba(232,169,60,0.5)',
                    letterSpacing: '0.04em',
                    fontFamily: 'var(--font-space)',
                  }}
                >
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#E8A93C', opacity: 0.4, display: 'inline-block' }} />
                  Coming in v2
                </div>
              </div>
            </div>

            {/* legend */}
            <div style={{ background: '#0F0F0F', border: '1px solid #181818', borderRadius: '8px', padding: '16px' }}>
              <p style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#aaaaaa', marginBottom: '12px' }}>
                Score legend
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '40px', height: '3px', borderRadius: '2px', background: '#E8A93C' }} />
                  <span style={{ fontSize: '12px', color: '#aaaaaa' }}>Funding score</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '40px', height: '3px', borderRadius: '2px', background: '#4F7FE8' }} />
                  <span style={{ fontSize: '12px', color: '#aaaaaa' }}>Activity score</span>
                </div>
              </div>
              <p style={{ fontSize: '11px', color: '#aaaaaa', marginTop: '12px', lineHeight: 1.5 }}>
                Activity scores populate as Ryan logs touchpoints in Salesforce.
              </p>
            </div>

          </div>
        </div>
      </main>

      {/* ── footer ── */}
      <footer style={{ borderTop: '1px solid #141414', marginTop: '48px', padding: '20px 0' }}>
        <p style={{ textAlign: 'center', fontSize: '11px', color: '#aaaaaa', fontFamily: 'var(--font-space)', letterSpacing: '0.02em' }}>
          Atium scores your portfolio nightly at 2am ET · Activity scores will populate as Ryan logs touchpoints · Built by Atium
        </p>
      </footer>
    </div>
  );
}
