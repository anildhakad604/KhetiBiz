// Placeholder figures — wire this up to a live price feed (e.g. Agmarknet) in production.
export type Commodity = {
  name: string;
  price: number; // ₹ per quintal, national average modal price
  change: number; // week-on-week %
};

export const marketUpdate = {
  label: "Mandi Watch",
  unit: "Modal price · ₹/quintal",
  period: "Week 40, 2026",
};

export const commodities: Commodity[] = [
  { name: "Wheat", price: 2575, change: 0.8 },
  { name: "Paddy", price: 2369, change: 0.3 },
  { name: "Maize", price: 2240, change: 1.9 },
  { name: "Cotton", price: 7710, change: -1.2 },
  { name: "Soybean", price: 4980, change: -0.6 },
  { name: "Mustard", price: 5950, change: 1.1 },
  { name: "Chana", price: 5650, change: 0.4 },
  { name: "Onion", price: 1840, change: -3.5 },
];
