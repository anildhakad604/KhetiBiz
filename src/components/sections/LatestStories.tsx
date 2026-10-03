import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StoryCard, StoryListItem } from "@/components/ui/StoryCard";
import { pickStories } from "@/content/stories";

export function LatestStories() {
  const [feature, ...rest] = pickStories(
    "horticulture-cold-chain-economics",
    "natural-farming-at-scale",
    "rural-fintech-credit-gap",
    "farm-gate-to-retail-shelf",
    "maize-ethanol-kharif",
  );

  return (
    <section id="latest" aria-labelledby="latest-title" className="py-20 lg:py-28">
      <Container>
        <SectionHeader
          id="latest-title"
          eyebrow="Latest"
          title="Reporting from the field to the boardroom"
          action={{ label: "Read the cover story", href: "/stories/the-new-mandi" }}
        />

        <div className="mt-10 grid gap-12 lg:mt-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-7">
            <StoryCard
              story={feature}
              size="lg"
              sizes="(min-width: 1840px) 1020px, (min-width: 1024px) 56vw, 100vw"
            />
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5">
            <div className="divide-y divide-line border-y border-line lg:border-t-0">
              {rest.map((story) => (
                <StoryListItem key={story.slug} story={story} className="lg:first:pt-0" />
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
