import { AgriTech } from "@/components/sections/AgriTech";
import { Coverage } from "@/components/sections/Coverage";
import { Events } from "@/components/sections/Events";
import { Hero } from "@/components/sections/Hero";
import { Interview } from "@/components/sections/Interview";
import { LatestStories } from "@/components/sections/LatestStories";
import { Magazine } from "@/components/sections/Magazine";
import { MarketIntelligence } from "@/components/sections/MarketIntelligence";
import { MarketStrip } from "@/components/sections/MarketStrip";
import { Newsletter } from "@/components/sections/Newsletter";
import { site } from "@/content/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "NewsMediaOrganization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      slogan: site.tagline,
      description: site.description,
      logo: `${site.url}/icon.png`,
      email: site.email.editorial,
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      publisher: { "@id": `${site.url}/#organization` },
      inLanguage: "en-IN",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Hero />
      <MarketStrip />
      <LatestStories />
      <MarketIntelligence />
      <Coverage />
      <AgriTech />
      <Interview />
      <Magazine />
      <Events />
      <Newsletter />
    </>
  );
}
