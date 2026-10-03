export const site = {
  name: "KhetiBiz",
  tagline: "Bridging the Gaps",
  descriptor: "India’s Agriculture Business Magazine",
  description:
    "KhetiBiz is India’s agriculture business magazine — independent reporting on agribusiness, agri-tech, markets, policy and the people building the future of Indian farming.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.khetibiz.com",
  currentIssue: "October 2026",
  location: "New Delhi, India",
  email: {
    editorial: "editor@khetibiz.com",
    advertising: "advertise@khetibiz.com",
    subscriptions: "subscribe@khetibiz.com",
    events: "events@khetibiz.com",
  },
  // Replace with the brand's real profile URLs.
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" },
    { label: "X", href: "https://x.com/", icon: "x" },
    { label: "Instagram", href: "https://www.instagram.com/", icon: "instagram" },
    { label: "YouTube", href: "https://www.youtube.com/", icon: "youtube" },
  ],
} as const;

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: "Latest", href: "/#latest" },
  { label: "Markets", href: "/#markets" },
  { label: "Agri-Tech", href: "/#agritech" },
  { label: "Interviews", href: "/#interview" },
  { label: "Events", href: "/#events" },
  { label: "Magazine", href: "/#magazine" },
];

export const footerNav: { title: string; links: NavItem[] }[] = [
  {
    title: "Read",
    links: [
      { label: "Latest stories", href: "/#latest" },
      { label: "Market intelligence", href: "/#markets" },
      { label: "Cover story", href: "/stories/the-new-mandi" },
      { label: "Agri-Tech", href: "/#agritech" },
      { label: "Interviews", href: "/#interview" },
    ],
  },
  {
    title: "KhetiBiz",
    links: [
      { label: "What we cover", href: "/#coverage" },
      { label: "Magazine & subscriptions", href: "/#magazine" },
      { label: "Events & forums", href: "/#events" },
      { label: "Newsletter", href: "/#newsletter" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Editorial", href: `mailto:${site.email.editorial}` },
      { label: "Advertise with us", href: `mailto:${site.email.advertising}` },
      { label: "Subscriptions", href: `mailto:${site.email.subscriptions}` },
    ],
  },
];
