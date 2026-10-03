export type EventItem = {
  title: string;
  date: string;
  city: string;
  format: string;
  description: string;
};

export const events: EventItem[] = [
  {
    title: "KhetiBiz Agri Leaders Summit 2026",
    date: "2026-11-14",
    city: "New Delhi",
    format: "Summit",
    description:
      "A day of keynotes and closed-door roundtables with agribusiness leaders, policymakers and investors.",
  },
  {
    title: "Agri-Tech Founders Roundtable",
    date: "2026-12-05",
    city: "Bengaluru",
    format: "Roundtable",
    description:
      "An invitation-only evening for founders and investors building the next generation of farm technology.",
  },
  {
    title: "FPO Growth Forum",
    date: "2027-01-22",
    city: "Pune",
    format: "Forum",
    description:
      "Practical sessions on governance, market linkages and finance for farmer producer organisations.",
  },
];
