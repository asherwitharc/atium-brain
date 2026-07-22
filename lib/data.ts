export interface Firm {
  name: string;
  fundingScore: number;
  activityScore: number;
  status: string;
  fundings30d: number;
  fundedAmount30d: number;
  fundings365d: number;
  fundedAmount365d: number;
  sentiment: string;
  nfrRate: number | null;
  recordType: "Client" | "Prospect";
  reason: string;
}

export const firms: Firm[] = [
  // Core – Reliable (12)
  { name: "Pena & Kahn", fundingScore: 98, activityScore: 0, status: "Core – Reliable", fundings30d: 97, fundedAmount30d: 1216800, fundings365d: 137, fundedAmount365d: 1532900, sentiment: "No Data", nfrRate: 39, recordType: "Client", reason: "Best firm in the book. Top funding (98), zero touchpoints — invited to the Yankee game in August, easy warm touch." },
  { name: "Chernyy Law", fundingScore: 96, activityScore: 0, status: "Core – Reliable", fundings30d: 45, fundedAmount30d: 332873.08, fundings365d: 64, fundedAmount365d: 526473.08, sentiment: "No Data", nfrRate: 69, recordType: "Client", reason: "Near-top funder (96), no contact. Most likely to go quiet unnoticed." },
  { name: "Ross & Hill", fundingScore: 90, activityScore: 0, status: "Core – Reliable", fundings30d: 13, fundedAmount30d: 181784, fundings365d: 16, fundedAmount365d: 189784, sentiment: "No Data", nfrRate: 100, recordType: "Client", reason: "High funder (90), zero touchpoints. Strong and silent — check in." },
  { name: "Shulman & Hill", fundingScore: 88, activityScore: 0, status: "Core – Reliable", fundings30d: 17, fundedAmount30d: 86761, fundings365d: 33, fundedAmount365d: 137061, sentiment: "No Data", nfrRate: 100, recordType: "Client", reason: "Reliable revenue (88), no relationship coverage." },
  { name: "Lawrence Biondi", fundingScore: 88, activityScore: 0, status: "Core – Reliable", fundings30d: 12, fundedAmount30d: 152000, fundings365d: 22, fundedAmount365d: 291000, sentiment: "No Data", nfrRate: 100, recordType: "Client", reason: "Funding well (88) — don't let the line go silent." },
  { name: "Brian J. Levy & Assoc.", fundingScore: 87, activityScore: 0, status: "Core – Reliable", fundings30d: 19, fundedAmount30d: 41500, fundings365d: 36, fundedAmount365d: 81500, sentiment: "No Data", nfrRate: 100, recordType: "Client", reason: "Steady producer (87) running dark." },
  { name: "Omrani & Taub, P.C.", fundingScore: 85, activityScore: 0, status: "Core – Reliable", fundings30d: 13, fundedAmount30d: 62500, fundings365d: 19, fundedAmount365d: 96000, sentiment: "No Data", nfrRate: 84, recordType: "Client", reason: "Top producer (85), zero contact — protect (Ross)." },
  { name: "Raphaelson & Levine", fundingScore: 85, activityScore: 0, status: "Core – Reliable", fundings30d: 4, fundedAmount30d: 184212.8, fundings365d: 5, fundedAmount365d: 255787.09, sentiment: "No Data", nfrRate: 100, recordType: "Client", reason: "Biggest firm in Steve's book (85), no touchpoints — protect." },
  { name: "Zaremba & Brown", fundingScore: 79, activityScore: 100, status: "Core – Reliable", fundings30d: 7, fundedAmount30d: 26600, fundings365d: 23, fundedAmount365d: 69100, sentiment: "No Data", nfrRate: 22, recordType: "Client", reason: "Strong on funding (79) and activity (100) — top-tier, protect (Ross)." },
  { name: "Wingate Russotti — Shapiro", fundingScore: 79, activityScore: 0, status: "Core – Reliable", fundings30d: 3, fundedAmount30d: 99195.36, fundings365d: 5, fundedAmount365d: 200561.72, sentiment: "No Data", nfrRate: 80, recordType: "Client", reason: "Reliable (79), running dark (Steve)." },
  { name: "Cohan Law Firm", fundingScore: 72, activityScore: 0, status: "Core – Reliable", fundings30d: 4, fundedAmount30d: 19500, fundings365d: 5, fundedAmount365d: 22500, sentiment: "No Data", nfrRate: 100, recordType: "Client", reason: "Solid funder (72), zero touchpoints — don't let it drift (Ross)." },
  { name: "Joseph Stoduto Law", fundingScore: 68, activityScore: 100, status: "Core – Reliable", fundings30d: 3, fundedAmount30d: 16100, fundings365d: 5, fundedAmount365d: 23600, sentiment: "No Data", nfrRate: 100, recordType: "Client", reason: "Strong on both funding (68) and activity (100) — protect (Ryan)." },

  // At Risk (20)
  { name: "Your Insurance Attorney", fundingScore: 66, activityScore: 0, status: "At Risk", fundings30d: 4, fundedAmount30d: 10500, fundings365d: 8, fundedAmount365d: 22000, sentiment: "No Data", nfrRate: 100, recordType: "Client", reason: "Highest at-risk score (66), zero activity — act first (Ilana)." },
  { name: "Block, O'Toole & Murphy", fundingScore: 65, activityScore: 0, status: "At Risk", fundings30d: 3, fundedAmount30d: 11000, fundings365d: 6, fundedAmount365d: 48000, sentiment: "No Data", nfrRate: 100, recordType: "Client", reason: "High-value (65), no touchpoints — top rescue (Ross)." },
  { name: "Oremland Law", fundingScore: 64, activityScore: 0, status: "At Risk", fundings30d: 5, fundedAmount30d: 28500, fundings365d: 7, fundedAmount365d: 34500, sentiment: "Negative", nfrRate: 100, recordType: "Client", reason: "Funding present (64) but flagged Negative: loyal to Liberty Funding, Knicks-tickets deal in place. Watch if business follows (Ross)." },
  { name: "Sanders Aronova", fundingScore: 61, activityScore: 0, status: "At Risk", fundings30d: 2, fundedAmount30d: 22475, fundings365d: 2, fundedAmount365d: 22475, sentiment: "No Data", nfrRate: 100, recordType: "Client", reason: "Volume there (61), relationship untended (Steve)." },
  { name: "Daniel Solinsky, P.C.", fundingScore: 54, activityScore: 0, status: "At Risk", fundings30d: 1, fundedAmount30d: 109080.28, fundings365d: 3, fundedAmount365d: 115580.28, sentiment: "No Data", nfrRate: 100, recordType: "Client", reason: "One $109K funding then silence — biggest single-firm exposure (Ross)." },
  { name: "Robinson Yablon", fundingScore: 53, activityScore: 0, status: "At Risk", fundings30d: 2, fundedAmount30d: 10500, fundings365d: 5, fundedAmount365d: 63000, sentiment: "No Data", nfrRate: 100, recordType: "Client", reason: "Volume fell off (53), going quiet (Ryan)." },
  { name: "Greenstein & Pittari — Shapiro", fundingScore: 49, activityScore: 0, status: "At Risk", fundings30d: 1, fundedAmount30d: 35961, fundings365d: 1, fundedAmount365d: 35961, sentiment: "No Data", nfrRate: 100, recordType: "Client", reason: "Slipping (49), no recent contact (Steve)." },
  { name: "Mark Bodner", fundingScore: 48, activityScore: 0, status: "At Risk", fundings30d: 1, fundedAmount30d: 30000, fundings365d: 1, fundedAmount365d: 30000, sentiment: "No Data", nfrRate: 100, recordType: "Client", reason: "Revenue without relationship (48) is fragile — call now." },
  { name: "Wingate Russotti — Mallor", fundingScore: 47, activityScore: 0, status: "At Risk", fundings30d: 2, fundedAmount30d: 7000, fundings365d: 5, fundedAmount365d: 16000, sentiment: "No Data", nfrRate: 0, recordType: "Client", reason: "Cooling (47), zero touchpoints (Ross)." },
  { name: "Gjelaj Law", fundingScore: 46, activityScore: 0, status: "At Risk", fundings30d: 2, fundedAmount30d: 6000, fundings365d: 2, fundedAmount365d: 6000, sentiment: "No Data", nfrRate: 100, recordType: "Client", reason: "Revenue present (46) but going dark (Ross)." },
  { name: "Greenstein & Pittari — Mallor", fundingScore: 44, activityScore: 0, status: "At Risk", fundings30d: 2, fundedAmount30d: 4500, fundings365d: 5, fundedAmount365d: 94820, sentiment: "No Data", nfrRate: 100, recordType: "Client", reason: "No activity (44) — reconnect now (Ross)." },
  { name: "Chernyy Law — Tkach", fundingScore: 42, activityScore: 0, status: "At Risk", fundings30d: 2, fundedAmount30d: 4000, fundings365d: 2, fundedAmount365d: 4000, sentiment: "No Data", nfrRate: 100, recordType: "Client", reason: "Drifting (42) — needs a touchpoint before it cools." },
  { name: "Parker Waichman", fundingScore: 42, activityScore: 0, status: "At Risk", fundings30d: 1, fundedAmount30d: 12000, fundings365d: 1, fundedAmount365d: 12000, sentiment: "No Data", nfrRate: 100, recordType: "Client", reason: "Solid funding (42), no engagement (Ross)." },
  { name: "Koval & Associates", fundingScore: 42, activityScore: 0, status: "At Risk", fundings30d: 2, fundedAmount30d: 4000, fundings365d: 2, fundedAmount365d: 4000, sentiment: "No Data", nfrRate: 100, recordType: "Client", reason: "No engagement logged (42) — call before cold (Steve)." },
  { name: "Khavinson & Mandronico", fundingScore: 41, activityScore: 0, status: "At Risk", fundings30d: 1, fundedAmount30d: 11815, fundings365d: 1, fundedAmount365d: 11815, sentiment: "No Data", nfrRate: 100, recordType: "Client", reason: "Needs engagement (41) before it slips (Steve)." },
  { name: "Steinger, Greene & Feiner", fundingScore: 39, activityScore: 0, status: "At Risk", fundings30d: 2, fundedAmount30d: 2000, fundings365d: 3, fundedAmount365d: 2800, sentiment: "No Data", nfrRate: 100, recordType: "Client", reason: "Slipping (39) — needs outreach now (Ilana)." },
  { name: "Neuhausser Law", fundingScore: 34, activityScore: 0, status: "At Risk", fundings30d: 1, fundedAmount30d: 10000, fundings365d: 1, fundedAmount365d: 10000, sentiment: "No Data", nfrRate: 100, recordType: "Client", reason: "Losing momentum (34), no engagement (Steve)." },
  { name: "Gary A. Zucker", fundingScore: 34, activityScore: 0, status: "At Risk", fundings30d: 1, fundedAmount30d: 10000, fundings365d: 2, fundedAmount365d: 20000, sentiment: "No Data", nfrRate: 100, recordType: "Client", reason: "Some history (34), zero touchpoints (Ross)." },
  { name: "Edelman Kraisin Jaye", fundingScore: 34, activityScore: 0, status: "At Risk", fundings30d: 1, fundedAmount30d: 10000, fundings365d: 1, fundedAmount365d: 10000, sentiment: "No Data", nfrRate: 100, recordType: "Client", reason: "No activity (34) — reconnect before it fades (Ross)." },
  { name: "Oleg Smolyar, P.C.", fundingScore: 33, activityScore: 0, status: "At Risk", fundings30d: 1, fundedAmount30d: 7500, fundings365d: 1, fundedAmount365d: 7500, sentiment: "No Data", nfrRate: 100, recordType: "Client", reason: "Funding 33, zero touchpoints — reconnect before it slips to Dormant (Ryan)." },

  // Active – Core (3)
  { name: "Greg Garber, Esq.", fundingScore: 60, activityScore: 100, status: "Active – Core", fundings30d: 2, fundedAmount30d: 20000, fundings365d: 3, fundedAmount365d: 21000, sentiment: "No Data", nfrRate: 100, recordType: "Client", reason: "High activity (100), solid funding (60). Relationship live — keep pressure on (Ryan)." },
  { name: "Nass Roper & Levin", fundingScore: 41, activityScore: 100, status: "Active – Core", fundings30d: 2, fundedAmount30d: 3700, fundings365d: 4, fundedAmount365d: 6200, sentiment: "No Data", nfrRate: 100, recordType: "Client", reason: "Activity 100, but your own note says 'do not pursue' — confirm which is right (Ryan)." },
  { name: "Sanocki Newman & Turret", fundingScore: 34, activityScore: 100, status: "Active – Core", fundings30d: 1, fundedAmount30d: 10000, fundings365d: 1, fundedAmount365d: 10000, sentiment: "No Data", nfrRate: 100, recordType: "Client", reason: "Perfect activity (100), solid funding (34) — protect (Ryan)." },

  // Active – Growth Potential (4)
  { name: "Zachary Margulis-Ohnuma", fundingScore: 30, activityScore: 100, status: "Active – Growth Potential", fundings30d: 1, fundedAmount30d: 5000, fundings365d: 2, fundedAmount365d: 10000, sentiment: "No Data", nfrRate: 100, recordType: "Client", reason: "In the door (activity 100) — turn it into fundings (Ryan)." },
  { name: "Friedland Law", fundingScore: 25, activityScore: 100, status: "Active – Growth Potential", fundings30d: 1, fundedAmount30d: 3000, fundings365d: 2, fundedAmount365d: 4000, sentiment: "No Data", nfrRate: 100, recordType: "Client", reason: "Working it (activity 100), fundings light — convert (Ilana)." },
  { name: "Held & Hines", fundingScore: 23, activityScore: 100, status: "Active – Growth Potential", fundings30d: 1, fundedAmount30d: 1500, fundings365d: 4, fundedAmount365d: 15150, sentiment: "No Data", nfrRate: 100, recordType: "Client", reason: "Relationship there (activity 100), low fundings — keep pressing (Ross)." },
  { name: "Geffon & Associates", fundingScore: 20, activityScore: 100, status: "Active – Growth Potential", fundings30d: 1, fundedAmount30d: 500, fundings365d: 2, fundedAmount365d: 3500, sentiment: "No Data", nfrRate: 100, recordType: "Client", reason: "Engaged (activity 100), low fundings — convert (Ilana)." },

  // New (12)
  { name: "Philip J. Sporn", fundingScore: 0, activityScore: 0, status: "New", fundings30d: 0, fundedAmount30d: 0, fundings365d: 0, fundedAmount365d: 0, sentiment: "No Data", nfrRate: null, recordType: "Client", reason: "No fundings or activity yet — schedule intro call." },
  { name: "Roth & Khalife", fundingScore: 0, activityScore: 0, status: "New", fundings30d: 0, fundedAmount30d: 0, fundings365d: 0, fundedAmount365d: 0, sentiment: "No Data", nfrRate: null, recordType: "Client", reason: "No fundings or touchpoints yet — first outreach." },
  { name: "Mendoza Law Group", fundingScore: 0, activityScore: 0, status: "New", fundings30d: 0, fundedAmount30d: 0, fundings365d: 0, fundedAmount365d: 0, sentiment: "No Data", nfrRate: null, recordType: "Client", reason: "Early stage — first outreach (Ryan)." },
  { name: "Cannon & Acosta", fundingScore: 0, activityScore: 0, status: "New", fundings30d: 0, fundedAmount30d: 0, fundings365d: 0, fundedAmount365d: 0, sentiment: "No Data", nfrRate: null, recordType: "Client", reason: "No fundings yet — schedule intro call." },
  { name: "Rubenstein & Rynecki", fundingScore: 0, activityScore: 0, status: "New", fundings30d: 0, fundedAmount30d: 0, fundings365d: 0, fundedAmount365d: 0, sentiment: "No Data", nfrRate: null, recordType: "Client", reason: "Early stage — first meeting (Ross)." },
  { name: "Chubb Law", fundingScore: 0, activityScore: 0, status: "New", fundings30d: 0, fundedAmount30d: 0, fundings365d: 0, fundedAmount365d: 0, sentiment: "No Data", nfrRate: null, recordType: "Client", reason: "No touchpoints yet — initiate outreach." },
  { name: "Grauman Law", fundingScore: 0, activityScore: 0, status: "New", fundings30d: 0, fundedAmount30d: 0, fundings365d: 0, fundedAmount365d: 0, sentiment: "No Data", nfrRate: null, recordType: "Client", reason: "Early stage — first outreach (Steve)." },
  { name: "Sacco & Fillas", fundingScore: 0, activityScore: 0, status: "New", fundings30d: 0, fundedAmount30d: 0, fundings365d: 0, fundedAmount365d: 0, sentiment: "No Data", nfrRate: null, recordType: "Client", reason: "Early stage — first call (Steve)." },
  { name: "Jeffrey A. Rosenberg", fundingScore: 0, activityScore: 0, status: "New", fundings30d: 0, fundedAmount30d: 0, fundings365d: 0, fundedAmount365d: 0, sentiment: "No Data", nfrRate: null, recordType: "Client", reason: "No fundings yet — first outreach." },
  { name: "Marc C. DeSalvo", fundingScore: 0, activityScore: 0, status: "New", fundings30d: 0, fundedAmount30d: 0, fundings365d: 0, fundedAmount365d: 0, sentiment: "No Data", nfrRate: null, recordType: "Client", reason: "Early stage — initiate contact." },
  { name: "Reiner Slaughter", fundingScore: 0, activityScore: 0, status: "New", fundings30d: 0, fundedAmount30d: 0, fundings365d: 0, fundedAmount365d: 0, sentiment: "No Data", nfrRate: null, recordType: "Client", reason: "No fundings yet — intro call." },
  { name: "Maune Raichle", fundingScore: 0, activityScore: 0, status: "New", fundings30d: 0, fundedAmount30d: 0, fundings365d: 0, fundedAmount365d: 0, sentiment: "No Data", nfrRate: null, recordType: "Client", reason: "Large national firm, unworked — high upside if engaged." },
  { name: "Shimko Law, P.C.", fundingScore: 0, activityScore: 0, status: "New", fundings30d: 0, fundedAmount30d: 0, fundings365d: 0, fundedAmount365d: 0, sentiment: "No Data", nfrRate: null, recordType: "Prospect", reason: "Prospect — no contact yet, initiate first outreach." },
  { name: "Harper Law", fundingScore: 0, activityScore: 0, status: "New", fundings30d: 0, fundedAmount30d: 0, fundings365d: 0, fundedAmount365d: 0, sentiment: "No Data", nfrRate: null, recordType: "Prospect", reason: "Prospect — schedule first outreach (Ross)." },
  { name: "Jake Kimmelman P.C.", fundingScore: 0, activityScore: 0, status: "New", fundings30d: 0, fundedAmount30d: 0, fundings365d: 0, fundedAmount365d: 0, sentiment: "No Data", nfrRate: null, recordType: "Prospect", reason: "Prospect — prioritize first outreach." },
  { name: "Essner & Kobin, LLP", fundingScore: 0, activityScore: 0, status: "New", fundings30d: 0, fundedAmount30d: 0, fundings365d: 0, fundedAmount365d: 0, sentiment: "Negative", nfrRate: null, recordType: "Prospect", reason: "Real volume potential, currently with 5 Star Funding — compete for it (Ryan)." },
  { name: "Thornfield & Associates", fundingScore: 0, activityScore: 0, status: "New", fundings30d: 0, fundedAmount30d: 0, fundings365d: 0, fundedAmount365d: 0, sentiment: "No Data", nfrRate: null, recordType: "Prospect", reason: "Prospect — initiate first contact (Ryan)." },
];

export const TOTAL_FIRMS = 594;
export const LAST_RUN = "July 21, 2026";
export const nfrShare30d = 0.81;

export const recordTypeSplit = {
  clients: 480,
  prospects: 114,
  clientsByStatus: { "Core – Reliable": 12, "At Risk": 20, "Active – Core": 3, "Active – Growth Potential": 4, "New": 12, "Dormant": 429 },
  prospectsByStatus: { "New": 7, "Dormant": 107 },
};

export const atiumSummary = {
  generatedAt: "July 21, 2026",
  narrative: "Lawfund's book is 594 firms — 480 clients, 114 prospects. Funding is healthy and almost entirely client-side: 67–102 contracts executed per week over the last seven weeks (~$5.9M), running 81% new-case volume. The risk isn't funding — it's relationship coverage. Ten of the twelve Core-Reliable firms — the top producers, including Pena & Kahn (98) and Chernyy Law (96) — have zero relationship touchpoints logged. They're funding well and being ignored. Below them, 20 client firms sit At Risk: real funding history, no recent contact, one step from the 429 clients already Dormant. The seven firms now showing Active moved the moment relationship activity got logged.",
  actions: [
    { firm: "Top producers going dark (10)", priority: "Retain", reason: "Pena & Kahn, Chernyy, Ross & Hill and 7 other Core-Reliable firms are funding strongly with zero touchpoints. Highest-value, lowest-effort protection — a single check-in keeps them from drifting." },
    { firm: "At Risk clients (20)", priority: "Rescue", reason: "Twenty client firms with real funding history and no recent contact. Cheapest way to stop the slide into Dormant, where 429 clients already sit." },
    { firm: "Active – Growth (4)", priority: "Convert", reason: "Zachary Margulis-Ohnuma, Friedland, Held & Hines, Geffon — relationship live, fundings light. Keep the pressure on to convert activity into volume." },
  ],
};
