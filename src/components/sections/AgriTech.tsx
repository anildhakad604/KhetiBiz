import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StoryCard } from "@/components/ui/StoryCard";
import { pickStories } from "@/content/stories";

export function AgriTech() {
  const items = pickStories(
    "seed-tech-climate-resilient",
    "protected-cultivation-mainstream",
    "heat-tolerant-wheat-research",
  );

  return (
    <section id="agritech" aria-labelledby="agritech-title" className="py-20 lg:py-28">
      <Container>
        <SectionHeader
          id="agritech-title"
          eyebrow="Agri-Tech & Innovation"
          title="The technology moving from lab to field"
          description="Breeders, engineers and founders building the tools Indian farmers will rely on next."
          action={{ label: "All latest stories", href: "/#latest" }}
        />
        <div className="mt-10 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {items.map((story, i) => (
            <Reveal key={story.slug} delay={i * 100} className={i === 2 ? "md:hidden lg:block" : undefined}>
              <StoryCard story={story} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
