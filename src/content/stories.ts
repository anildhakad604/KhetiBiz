import type { StaticImageData } from "next/image";

import citrusOrchard from "@/assets/images/citrus-orchard.jpg";
import farmlandHorizon from "@/assets/images/farmland-horizon.jpg";
import fieldRows from "@/assets/images/field-rows.jpg";
import harvestCrew from "@/assets/images/harvest-crew.jpg";
import maizeRows from "@/assets/images/maize-rows.jpg";
import paddySpraying from "@/assets/images/paddy-spraying.jpg";
import paddyTractor from "@/assets/images/paddy-tractor.jpg";
import produceMarket from "@/assets/images/produce-market.jpg";
import seedlingTray from "@/assets/images/seedling-tray.jpg";
import seedlings from "@/assets/images/seedlings.jpg";
import vegetableMarket from "@/assets/images/vegetable-market.jpg";
import wheatCloseup from "@/assets/images/wheat-closeup.jpg";
import wheatSunset from "@/assets/images/wheat-sunset.jpg";

export type Category =
  | "Markets"
  | "Agri-Tech"
  | "Agribusiness"
  | "Policy"
  | "Sustainability"
  | "Rural Finance"
  | "Horticulture"
  | "Interview";

export type Story = {
  slug: string;
  title: string;
  dek: string;
  category: Category;
  author: string;
  date: string;
  readTime: number;
  image: StaticImageData;
  imageAlt: string;
  caption?: string;
  pullQuote?: string;
  body: string[];
};

export const stories: Story[] = [
  {
    slug: "the-new-mandi",
    title: "The New Mandi: How Digital Trade Is Rewiring India’s Farm Economy",
    dek: "From e-NAM to private trading apps, price discovery is moving online. We trace who gains, who is left behind, and what it means for the next harvest.",
    category: "Markets",
    author: "Meera Kulkarni",
    date: "2026-10-01",
    readTime: 14,
    image: paddyTractor,
    imageAlt:
      "A farmer on a tractor and another guiding a pair of bullocks through a flooded paddy field",
    caption:
      "Machines and bullocks share the field during transplanting season — a fitting picture of a farm economy in transition.",
    pullQuote:
      "The mandi is no longer a place. It is a network — and the question is who gets to sit at its centre.",
    body: [
      "For generations, the mandi was where an Indian farmer learned what a season’s work was worth. Prices were called out across crowded yards, commission agents controlled credit and information, and distance from the market often decided the margin. That geography is now being redrawn on a screen.",
      "Electronic trading platforms, both public and private, have pushed thousands of traders into a single, searchable market. Early data suggests that farmers with access to reliable connectivity, grading facilities and timely payments are capturing better prices. Those without them risk becoming invisible to the very buyers the new systems were meant to attract.",
      "The gap, in other words, is no longer only about distance. It is about assaying labs, warehouse receipts, digital literacy and trust. The platforms that bridge those gaps — not merely list prices — will define how the next decade of Indian agri-trade is shared.",
      "Policymakers and investors are watching closely. If digital mandis can be paired with on-ground infrastructure and farmer producer organisations, they may finally deliver the transparent, competitive market that reforms have promised for years.",
    ],
  },
  {
    slug: "drone-spraying-punjab-paddy",
    title: "Drone Spraying Takes Off in the Paddy Belt",
    dek: "Custom-hiring centres are turning agri-drones from a novelty into a service farmers can book by the acre.",
    category: "Agri-Tech",
    author: "Arjun Sethi",
    date: "2026-09-29",
    readTime: 7,
    image: paddySpraying,
    imageAlt: "A farmer with a backpack sprayer walking through a green paddy field",
    caption: "Manual spraying remains the norm — but service providers are betting that drones will change that within a few seasons.",
    body: [
      "Walk the paddy belt this season and you will hear a new sound over the fields. Agri-drones, once confined to demonstrations, are being booked through village-level entrepreneurs who charge by the acre and handle everything from mixing to flight paths.",
      "Operators say the economics are compelling for large, contiguous plots: lower chemical use, less exposure for labourers and faster coverage during narrow spraying windows. Smaller farmers are joining through aggregated bookings organised by cooperatives.",
      "The bottlenecks are now regulatory clarity on approved formulations, trained pilots and reliable after-sales service. Solve those, operators argue, and drone spraying could become as routine as hiring a harvester.",
    ],
  },
  {
    slug: "fpos-agribusiness-customers",
    title: "Why FPOs Are Becoming Agribusiness’s Most Important Customers",
    dek: "Input companies, lenders and food brands are rebuilding their go-to-market around farmer producer organisations.",
    category: "Agribusiness",
    author: "Ritika Bansal",
    date: "2026-09-28",
    readTime: 9,
    image: harvestCrew,
    imageAlt: "Farm workers harvesting produce in a misty field, one carrying a crate on their shoulder",
    body: [
      "For agribusinesses, selling to millions of individual smallholders has always been expensive. Farmer producer organisations change that arithmetic by aggregating demand for seeds, fertiliser and machinery — and supply for buyers further down the chain.",
      "Seed and crop-protection companies now run dedicated FPO desks. Lenders are designing working-capital products against aggregated produce. Food brands are signing multi-season sourcing agreements that would have been impossible with fragmented supply.",
      "The strongest FPOs behave like small enterprises, with professional management and clear governance. The challenge for the sector is helping the long tail of younger organisations reach that maturity.",
    ],
  },
  {
    slug: "rabi-wheat-procurement-outlook",
    title: "Wheat Outlook: What the Rabi Season Signals for Prices",
    dek: "Sowing intentions, stock positions and weather risk point to a finely balanced year for India’s staple grain.",
    category: "Markets",
    author: "Kabir Menon",
    date: "2026-09-26",
    readTime: 6,
    image: wheatSunset,
    imageAlt: "A golden wheat field stretching to the horizon at sunset",
    body: [
      "As the rabi season approaches, traders are weighing healthy reservoir levels against the growing risk of early heat at grain-filling time — the factor that has unsettled wheat output in recent years.",
      "Government stock positions give policymakers room to manage prices, but private buyers are expected to stay active, especially for higher-protein varieties favoured by flour mills.",
      "For farmers, the decision is less about whether to sow wheat than which variety and when. Heat-tolerant seed and timely sowing remain the most effective hedges available.",
    ],
  },
  {
    slug: "seed-tech-climate-resilient",
    title: "The Seed-Tech Startups Betting on Climate-Resilient Varieties",
    dek: "A new generation of breeders is using genomics and data to shorten the road from lab to field.",
    category: "Agri-Tech",
    author: "Neha Iyer",
    date: "2026-09-24",
    readTime: 8,
    image: seedlingTray,
    imageAlt: "A hand placing seedlings into a black nursery tray",
    body: [
      "Breeding a new crop variety has traditionally taken a decade or more. Startups using marker-assisted selection and field-data platforms say they can cut that time significantly while targeting traits farmers actually ask for.",
      "Drought tolerance, shorter duration and pest resistance top the list. Several companies are partnering with state agricultural universities to run multi-location trials and accelerate approvals.",
      "Investors are cautiously optimistic. Seed is a trust business, and the winners will be those who combine strong science with distribution that reaches farmers season after season.",
    ],
  },
  {
    slug: "horticulture-cold-chain-economics",
    title: "Cold Chains, Hot Margins: The Economics of Horticulture Logistics",
    dek: "India grows more fruit and vegetables than ever. Getting them to market fresh is where the real value — and loss — lies.",
    category: "Horticulture",
    author: "Siddharth Rao",
    date: "2026-09-22",
    readTime: 11,
    image: citrusOrchard,
    imageAlt: "Ripe oranges hanging from a citrus tree in an orchard",
    caption: "Post-harvest losses in fruit can erase a grower’s margin within days of picking.",
    pullQuote: "Every hour between harvest and cooling is a cost someone pays — usually the grower.",
    body: [
      "Horticulture has quietly become the engine of value growth in Indian agriculture. Yet a significant share of fruit and vegetables is lost between farm and fork, much of it in the first mile.",
      "Pack-houses, pre-cooling units and reefer transport are drawing fresh investment, often structured around anchor buyers in modern retail and exports. Solar-powered cold rooms at the village level are proving their worth for growers far from cities.",
      "The opportunity is large, but so is the execution challenge. Utilisation, not capacity, is the metric that separates profitable cold-chain businesses from stranded assets.",
    ],
  },
  {
    slug: "natural-farming-at-scale",
    title: "Natural Farming at Scale: Can the Numbers Add Up?",
    dek: "States are expanding chemical-free farming programmes. We look at yields, costs and the market for what it produces.",
    category: "Sustainability",
    author: "Meera Kulkarni",
    date: "2026-09-20",
    readTime: 10,
    image: fieldRows,
    imageAlt: "Neat rows of young crops growing in freshly tilled soil",
    body: [
      "Natural farming promises lower input costs, healthier soils and reduced chemical dependency. Its critics point to yield dips during transition and a thin premium market.",
      "Early adopters report that savings on inputs can offset modest yield losses, especially where farmers use on-farm preparations and diversify crops. Certification and traceability remain the missing link to better prices.",
      "Scaling will depend on extension support, patient transition finance and buyers willing to commit to multi-year offtake.",
    ],
  },
  {
    slug: "rural-fintech-credit-gap",
    title: "Credit Where It’s Due: Rural Fintech and the Farm Credit Gap",
    dek: "Digital lenders are using land records, satellite data and crop histories to reach farmers the banking system has missed.",
    category: "Rural Finance",
    author: "Arjun Sethi",
    date: "2026-09-18",
    readTime: 8,
    image: farmlandHorizon,
    imageAlt: "Wide farmland with rows of crops under a bright sky",
    body: [
      "Millions of farmers still rely on informal lenders for seasonal credit. Fintechs are betting that new data sources can make lending to them both safer and cheaper.",
      "Digitised land records, satellite crop monitoring and payment histories from agri-input purchases are being combined into credit scores. Partnerships with banks and NBFCs provide the balance sheet.",
      "Regulators are watching for over-lending and opaque pricing. The models that last will be those that pair credit with advisory and insurance, reducing risk for both sides.",
    ],
  },
  {
    slug: "farm-gate-to-retail-shelf",
    title: "From Farm Gate to Retail Shelf: The Rise of Direct Sourcing",
    dek: "Quick-commerce and modern retail are shortening supply chains — and changing what farmers are asked to grow.",
    category: "Agribusiness",
    author: "Ritika Bansal",
    date: "2026-09-16",
    readTime: 7,
    image: produceMarket,
    imageAlt: "A colourful market stall stacked with fresh vegetables and fruit",
    body: [
      "Retailers are increasingly bypassing traditional intermediaries to source directly from farmer groups, promising better prices in exchange for consistent quality and volumes.",
      "The shift brings new demands: grading standards, packaging at source and data-driven harvest planning. Farmers who meet them gain steadier income; those who cannot risk exclusion.",
      "The healthiest models share risk fairly, with transparent pricing formulas and support for on-farm infrastructure.",
    ],
  },
  {
    slug: "maize-ethanol-kharif",
    title: "Maize’s Moment: Ethanol Demand Reshapes Kharif Sowing",
    dek: "Blending targets have turned maize into a fuel crop. Poultry and starch industries are feeling the squeeze.",
    category: "Markets",
    author: "Kabir Menon",
    date: "2026-09-14",
    readTime: 6,
    image: maizeRows,
    imageAlt: "Close view of young maize plants growing in rows",
    body: [
      "Demand from distilleries has lifted maize prices and encouraged farmers to expand acreage. For growers, it has been one of the more profitable kharif choices in recent seasons.",
      "Feed and starch manufacturers, however, face higher raw-material costs and are pressing for imports or alternative feedstocks.",
      "Balancing fuel, feed and food will require higher yields — and that brings hybrid seed, mechanisation and drying infrastructure into sharp focus.",
    ],
  },
  {
    slug: "protected-cultivation-mainstream",
    title: "Nursery to Network: Protected Cultivation Goes Mainstream",
    dek: "Polyhouses and high-tech nurseries are giving growers control over quality, timing and price.",
    category: "Agri-Tech",
    author: "Neha Iyer",
    date: "2026-09-12",
    readTime: 7,
    image: seedlings,
    imageAlt: "Top-down view of young seedlings growing in black pots",
    body: [
      "Protected cultivation — from simple shade nets to climate-controlled polyhouses — is helping growers produce higher-value crops with more predictable output.",
      "Professional nurseries supplying disease-free seedlings have become a business in their own right, often the first link in a more organised value chain.",
      "Financing and technical know-how remain barriers, but government subsidies and private agronomy services are lowering them.",
    ],
  },
  {
    slug: "heat-tolerant-wheat-research",
    title: "The Lab-to-Field Race for Heat-Tolerant Wheat",
    dek: "As spring heatwaves grow more frequent, researchers and seed companies are racing to protect India’s staple.",
    category: "Agri-Tech",
    author: "Siddharth Rao",
    date: "2026-09-10",
    readTime: 9,
    image: wheatCloseup,
    imageAlt: "Close-up of golden wheat ears against a blue sky",
    body: [
      "Terminal heat during grain filling can cut wheat yields sharply. New varieties bred for heat tolerance and earlier maturity are now moving from research stations to farmers’ fields.",
      "Seed replacement rates will determine how quickly the benefits are felt. Extension agencies and private seed companies are running demonstrations to build confidence.",
      "Researchers caution that varieties alone are not enough — sowing dates, residue management and irrigation scheduling matter just as much.",
    ],
  },
  {
    slug: "farmers-as-entrepreneurs-interview",
    title: "“Treat farmers as entrepreneurs, not beneficiaries”",
    dek: "Ananya Rao, founder of an agri supply-chain company, on building businesses that work for growers and buyers alike.",
    category: "Interview",
    author: "Meera Kulkarni",
    date: "2026-09-08",
    readTime: 12,
    image: vegetableMarket,
    imageAlt: "Baskets of fresh green vegetables, carrots and chillies at a market",
    pullQuote:
      "We must stop treating farmers as beneficiaries and start treating them as entrepreneurs. Everything changes when you do.",
    body: [
      "Ananya Rao spent a decade in consumer goods before starting a business that sources fresh produce directly from farmer groups. We spoke about trust, margins and what agribusiness still gets wrong.",
      "“The biggest gap is not technology — it is respect,” she says. “When you design products assuming the farmer is a customer with choices, you build very different services.”",
      "Rao believes the next wave of agri-enterprises will be built on transparent pricing, shared data and long-term relationships rather than one-off transactions.",
    ],
  },
];

export function getStory(slug: string) {
  return stories.find((story) => story.slug === slug);
}

export function pickStories(...slugs: string[]) {
  return slugs.map((slug) => {
    const story = getStory(slug);
    if (!story) throw new Error(`Unknown story: ${slug}`);
    return story;
  });
}

export function getRelatedStories(story: Story, count = 3) {
  const others = stories.filter((s) => s.slug !== story.slug);
  const sameCategory = others.filter((s) => s.category === story.category);
  const rest = others.filter((s) => s.category !== story.category);
  return [...sameCategory, ...rest].slice(0, count);
}

const blueCategories: Category[] = ["Agri-Tech", "Markets", "Rural Finance"];

export function categoryTone(category: Category) {
  return blueCategories.includes(category) ? "sky" : "leaf";
}
