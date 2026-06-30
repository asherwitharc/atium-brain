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
  { name: "Pena & Kahn", fundingScore: 98, activityScore: 100, status: "Core – Reliable", fundings30d: 49, fundedAmount30d: 361600, fundings365d: 48, fundedAmount365d: 347600, sentiment: "No Data", recordType: "Client", nfrRate: 47, reason: "Core – Reliable. Funding: 98, Activity: 100." },
  { name: "Chernyy Law", fundingScore: 94, activityScore: 0, status: "Core – Reliable", fundings30d: 23, fundedAmount30d: 158600, fundings365d: 23, fundedAmount365d: 211100, sentiment: "No Data", recordType: "Client", nfrRate: 84, reason: "Strong funding score but zero touchpoints. Don't let this one go dark." },
  { name: "Shulman & Hill", fundingScore: 88, activityScore: 0, status: "Core – Reliable", fundings30d: 21, fundedAmount30d: 65725, fundings365d: 16, fundedAmount365d: 50300, sentiment: "No Data", recordType: "Client", nfrRate: 100, reason: "Core – Reliable. Funding: 88, Activity: 0." },
  { name: "Lawrence Biondi, Esq.", fundingScore: 88, activityScore: 0, status: "Core – Reliable", fundings30d: 9, fundedAmount30d: 119000, fundings365d: 10, fundedAmount365d: 139000, sentiment: "No Data", recordType: "Client", nfrRate: 100, reason: "Core – Reliable. Funding: 88, Activity: 0." },
  { name: "The Law Offices Of Omrani & Taub, P.C.", fundingScore: 83, activityScore: 0, status: "Core – Reliable", fundings30d: 9, fundedAmount30d: 44500, fundings365d: 6, fundedAmount365d: 33500, sentiment: "No Data", recordType: "Client", nfrRate: 100, reason: "Core – Reliable. Funding: 83, Activity: 0." },
  { name: "Brian J. Levy & Associates", fundingScore: 83, activityScore: 0, status: "Core – Reliable", fundings30d: 16, fundedAmount30d: 41000, fundings365d: 17, fundedAmount365d: 40000, sentiment: "No Data", recordType: "Client", nfrRate: 100, reason: "Core – Reliable. Funding: 83, Activity: 0." },
  { name: "Greenstein & Pittari, LLP", fundingScore: 79, activityScore: 0, status: "Core – Reliable", fundings30d: 4, fundedAmount30d: 91820, fundings365d: 3, fundedAmount365d: 90320, sentiment: "No Data", recordType: "Client", nfrRate: 100, reason: "Core – Reliable. Funding: 79, Activity: 0." },
  { name: "Raphaelson & Levine (SS)", fundingScore: 79, activityScore: 0, status: "Core – Reliable", fundings30d: 3, fundedAmount30d: 233337, fundings365d: 1, fundedAmount365d: 71574, sentiment: "No Data", recordType: "Client", nfrRate: 100, reason: "Core – Reliable. Funding: 79, Activity: 0." },
  { name: "Zaremba & Brown PLLC", fundingScore: 76, activityScore: 0, status: "Core – Reliable", fundings30d: 7, fundedAmount30d: 24100, fundings365d: 16, fundedAmount365d: 42500, sentiment: "No Data", recordType: "Client", nfrRate: 24, reason: "Core – Reliable. Funding: 76, Activity: 0." },
  { name: "Robinson Yablon Cooper & Bonfante, LLP", fundingScore: 76, activityScore: 0, status: "Core – Reliable", fundings30d: 4, fundedAmount30d: 53000, fundings365d: 3, fundedAmount365d: 52500, sentiment: "No Data", recordType: "Client", nfrRate: 100, reason: "Core – Reliable. Funding: 76, Activity: 0." },
  { name: "Ross & Hill", fundingScore: 76, activityScore: 0, status: "Core – Reliable", fundings30d: 5, fundedAmount30d: 36284, fundings365d: 4, fundedAmount365d: 26284, sentiment: "No Data", recordType: "Client", nfrRate: 100, reason: "Core – Reliable. Funding: 76, Activity: 0." },
  { name: "Block, O'Toole & Murphy", fundingScore: 68, activityScore: 0, status: "Core – Reliable", fundings30d: 3, fundedAmount30d: 37000, fundings365d: 3, fundedAmount365d: 37000, sentiment: "No Data", recordType: "Client", nfrRate: 100, reason: "Core – Reliable. Funding: 68, Activity: 0." },

  // At Risk (12)
  { name: "Your Insurance Attorney", fundingScore: 66, activityScore: 0, status: "At Risk", fundings30d: 4, fundedAmount30d: 11500, fundings365d: 4, fundedAmount365d: 11500, sentiment: "No Data", recordType: "Client", nfrRate: 100, reason: "Funding score declining. No recent touchpoints." },
  { name: "Wingate, Russotti, Shapiro & Halperin, LLP (SS)", fundingScore: 66, activityScore: 0, status: "At Risk", fundings30d: 2, fundedAmount30d: 101366, fundings365d: 1, fundedAmount365d: 41169, sentiment: "No Data", recordType: "Client", nfrRate: 100, reason: "Funding score declining. No recent touchpoints." },
  { name: "Held & Hines LLP", fundingScore: 63, activityScore: 0, status: "At Risk", fundings30d: 3, fundedAmount30d: 13650, fundings365d: 3, fundedAmount365d: 13650, sentiment: "No Data", recordType: "Client", nfrRate: 100, reason: "Funding score declining. No recent touchpoints." },
  { name: "Oremland Law", fundingScore: 54, activityScore: 0, status: "At Risk", fundings30d: 4, fundedAmount30d: 17000, fundings365d: 2, fundedAmount365d: 6000, sentiment: "Negative", recordType: "Client", nfrRate: 100, reason: "Negative sentiment detected. Funding declining." },
  { name: "Cohan Law Firm, PLLC", fundingScore: 54, activityScore: 0, status: "At Risk", fundings30d: 3, fundedAmount30d: 10000, fundings365d: 3, fundedAmount365d: 10000, sentiment: "No Data", recordType: "Client", nfrRate: 100, reason: "Funding score declining. No recent touchpoints." },
  { name: "Greg Garber, Esq.", fundingScore: 50, activityScore: 0, status: "At Risk", fundings30d: 2, fundedAmount30d: 11000, fundings365d: 1, fundedAmount365d: 1000, sentiment: "No Data", recordType: "Client", nfrRate: 100, reason: "Funding score declining. No recent touchpoints." },
  { name: "Zachary Margulis-Ohnuma, Esq.", fundingScore: 44, activityScore: 0, status: "At Risk", fundings30d: 2, fundedAmount30d: 10000, fundings365d: 1, fundedAmount365d: 5000, sentiment: "No Data", recordType: "Client", nfrRate: 100, reason: "Funding score declining. No recent touchpoints." },
  { name: "Joseph Stoduto Law", fundingScore: 43, activityScore: 0, status: "At Risk", fundings30d: 2, fundedAmount30d: 7500, fundings365d: 2, fundedAmount365d: 7500, sentiment: "No Data", recordType: "Client", nfrRate: 100, reason: "Funding score declining. No recent touchpoints." },
  { name: "Wingate, Russotti, Shapiro & Halperin, LLP", fundingScore: 42, activityScore: 0, status: "At Risk", fundings30d: 2, fundedAmount30d: 7000, fundings365d: 4, fundedAmount365d: 69197, sentiment: "No Data", recordType: "Client", nfrRate: 0, reason: "Funding score declining. No recent touchpoints." },
  { name: "Law Offices of Daniel Solinsky, P.C.", fundingScore: 41, activityScore: 0, status: "At Risk", fundings30d: 2, fundedAmount30d: 6500, fundings365d: 2, fundedAmount365d: 6500, sentiment: "No Data", recordType: "Client", nfrRate: 100, reason: "Funding score declining. No recent touchpoints." },
  { name: "Gjelaj Law PLLC", fundingScore: 40, activityScore: 0, status: "At Risk", fundings30d: 2, fundedAmount30d: 6000, fundings365d: 0, fundedAmount365d: 0, sentiment: "No Data", recordType: "Client", nfrRate: 100, reason: "Funding score declining. No recent touchpoints." },
  { name: "Parker Waichman LLP", fundingScore: 35, activityScore: 0, status: "At Risk", fundings30d: 1, fundedAmount30d: 12000, fundings365d: 1, fundedAmount365d: 12000, sentiment: "No Data", recordType: "Client", nfrRate: 100, reason: "Funding score declining. No recent touchpoints." },

  // New (activity-flagged, no fundings)
  { name: "Essner & Kobin, LLP", fundingScore: 10, activityScore: 100, status: "New", fundings30d: 0, fundedAmount30d: 0, fundings365d: 0, fundedAmount365d: 0, sentiment: "Positive", recordType: "Client", nfrRate: null, reason: "New firm — activity-flagged. No fundings yet." },

  // Dormant — funded-once tail
  { name: "Nass Roper & Levin, P.C.", fundingScore: 30, activityScore: 0, status: "Dormant", fundings30d: 0, fundedAmount30d: 0, fundings365d: 2, fundedAmount365d: 2500, sentiment: "No Data", recordType: "Client", nfrRate: null, reason: "Funded but gone quiet. Follow up to re-engage." },
  { name: "Gary A. Zucker", fundingScore: 26, activityScore: 0, status: "Dormant", fundings30d: 0, fundedAmount30d: 0, fundings365d: 1, fundedAmount365d: 10000, sentiment: "No Data", recordType: "Client", nfrRate: null, reason: "Funded but gone quiet. Follow up to re-engage." },
  { name: "Sanocki, Newman & Turret, LLP", fundingScore: 26, activityScore: 0, status: "Dormant", fundings30d: 0, fundedAmount30d: 0, fundings365d: 0, fundedAmount365d: 0, sentiment: "No Data", recordType: "Client", nfrRate: null, reason: "Funded but gone quiet. Follow up to re-engage." },
  { name: "Neuhausser Law PLLC (SS)", fundingScore: 26, activityScore: 0, status: "Dormant", fundings30d: 0, fundedAmount30d: 0, fundings365d: 0, fundedAmount365d: 0, sentiment: "No Data", recordType: "Client", nfrRate: null, reason: "Funded but gone quiet. Follow up to re-engage." },
  { name: "Elefterakis, Elefterakis & Panek", fundingScore: 17, activityScore: 0, status: "Dormant", fundings30d: 1, fundedAmount30d: 5000, fundings365d: 1, fundedAmount365d: 5000, sentiment: "No Data", recordType: "Client", nfrRate: null, reason: "Funded but gone quiet. Follow up to re-engage." },
  { name: "Liakas Law", fundingScore: 17, activityScore: 0, status: "Dormant", fundings30d: 1, fundedAmount30d: 5000, fundings365d: 1, fundedAmount365d: 5000, sentiment: "No Data", recordType: "Client", nfrRate: null, reason: "Funded but gone quiet. Follow up to re-engage." },
  { name: "Chopra & Nocerino, LLP", fundingScore: 17, activityScore: 0, status: "Dormant", fundings30d: 1, fundedAmount30d: 5000, fundings365d: 1, fundedAmount365d: 5000, sentiment: "No Data", recordType: "Client", nfrRate: null, reason: "Funded but gone quiet. Follow up to re-engage." },
  { name: "Hecht, Kleeger & Damashek, P.C.", fundingScore: 17, activityScore: 0, status: "Dormant", fundings30d: 1, fundedAmount30d: 5000, fundings365d: 1, fundedAmount365d: 5000, sentiment: "No Data", recordType: "Client", nfrRate: null, reason: "Funded but gone quiet. Follow up to re-engage." },
  { name: "Geffon & Associates, PLLC", fundingScore: 16, activityScore: 0, status: "Dormant", fundings30d: 1, fundedAmount30d: 3000, fundings365d: 1, fundedAmount365d: 3000, sentiment: "No Data", recordType: "Client", nfrRate: null, reason: "Funded but gone quiet. Follow up to re-engage." },
  { name: "Rheingold Giuffra Ruffo Plotkin & Hellman LLP", fundingScore: 12, activityScore: 0, status: "Dormant", fundings30d: 1, fundedAmount30d: 2500, fundings365d: 1, fundedAmount365d: 2500, sentiment: "No Data", recordType: "Client", nfrRate: null, reason: "Funded but gone quiet. Follow up to re-engage." },
  { name: "Big Ben Injury Law, PLLC", fundingScore: 12, activityScore: 0, status: "Dormant", fundings30d: 1, fundedAmount30d: 2500, fundings365d: 1, fundedAmount365d: 2500, sentiment: "No Data", recordType: "Client", nfrRate: null, reason: "Funded but gone quiet. Follow up to re-engage." },
  { name: "L Pincus Law, PLLC", fundingScore: 11, activityScore: 0, status: "Dormant", fundings30d: 1, fundedAmount30d: 2300, fundings365d: 1, fundedAmount365d: 2300, sentiment: "No Data", recordType: "Client", nfrRate: null, reason: "Funded but gone quiet. Follow up to re-engage." },
  { name: "Morgan & Morgan", fundingScore: 9, activityScore: 0, status: "Dormant", fundings30d: 1, fundedAmount30d: 1500, fundings365d: 1, fundedAmount365d: 1500, sentiment: "No Data", recordType: "Client", nfrRate: null, reason: "Funded but gone quiet. Follow up to re-engage." },
  { name: "Sim & Associates PLLC", fundingScore: 7, activityScore: 0, status: "Dormant", fundings30d: 1, fundedAmount30d: 1000, fundings365d: 1, fundedAmount365d: 1000, sentiment: "No Data", recordType: "Client", nfrRate: null, reason: "Funded but gone quiet. Follow up to re-engage." },
  { name: "Steinger, Greene, & Feiner", fundingScore: 1, activityScore: 0, status: "Dormant", fundings30d: 1, fundedAmount30d: 800, fundings365d: 1, fundedAmount365d: 800, sentiment: "No Data", recordType: "Client", nfrRate: null, reason: "Funded but gone quiet. Follow up to re-engage." },
  { name: "Law Offices of Neil Wollerstein", fundingScore: 1, activityScore: 0, status: "Dormant", fundings30d: 1, fundedAmount30d: 500, fundings365d: 1, fundedAmount365d: 500, sentiment: "No Data", recordType: "Client", nfrRate: null, reason: "Funded but gone quiet. Follow up to re-engage." },
  { name: "Friedland Law", fundingScore: 1, activityScore: 0, status: "Dormant", fundings30d: 1, fundedAmount30d: 1000, fundings365d: 1, fundedAmount365d: 1000, sentiment: "No Data", recordType: "Client", nfrRate: null, reason: "Funded but gone quiet. Follow up to re-engage." },
];

export const TOTAL_FIRMS = 588;
export const LAST_RUN = "June 29, 2026";
export const nfrShare30d = 0.84;

export const recordTypeSplit = {
  clients: 473,
  prospects: 114,
  clientsByStatus: { "Core – Reliable": 12, "At Risk": 12, "New": 12, "Dormant": 437 },
  prospectsByStatus: { "New": 7, "Dormant": 107 },
};

export const atiumSummary = {
  generatedAt: "June 29, 2026",
  narrative: "Lawfund's portfolio splits into 473 client firms and 114 prospects. Funding is entirely client-side and healthy — 177 fundings (~$1.4M) over 30 days at steady 90–140/week, 84% new-case volume. Two gaps stand out. First, 11 of 12 Core-Reliable clients have zero logged touchpoints — the strongest producers have no relationship coverage, and a top firm like Chernyy Law (funding 94, 23 fundings, no contact) could go quiet unnoticed. Second, 12 clients sit in At Risk with thin recent activity — a defensible reach-out list before they slip to dormant, where 437 clients already sit.",
  actions: [
    { firm: "At Risk clients (12)", priority: "Rescue", reason: "Twelve client firms are flagged At Risk with declining funding and no recent touchpoints — a batch reach-out now is the cheapest way to stop the slide into dormant." },
  ],
};
