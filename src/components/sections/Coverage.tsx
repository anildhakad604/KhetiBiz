import { Container } from "@/components/ui/Container";
import { Briefcase, Chart, Chip, Landmark, Leaf, Rupee } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

const verticals = [
  {
    title: "Agribusiness",
    description: "Strategy, deals and leadership across inputs, processing, food and retail.",
    icon: Briefcase,
    tone: "leaf",
  },
  {
    title: "Agri-Tech",
    description: "Drones, data, biotech and the startups bringing them to the farm gate.",
    icon: Chip,
    tone: "sky",
  },
  {
    title: "Markets & Trade",
    description: "Mandi prices, procurement, exports and the forces moving commodities.",
    icon: Chart,
    tone: "sky",
  },
  {
    title: "Policy",
    description: "Clear analysis of the laws, schemes and budgets that shape the sector.",
    icon: Landmark,
    tone: "leaf",
  },
  {
    title: "Sustainability",
    description: "Soil health, water, climate resilience and the business of greener farming.",
    icon: Leaf,
    tone: "leaf",
  },
  {
    title: "Rural Finance",
    description: "Credit, insurance and fintech — capital for farmers and agri-enterprises.",
    icon: Rupee,
    tone: "sky",
  },
] as const;

export function Coverage() {
  return (
    <section id="coverage" aria-labelledby="coverage-title" className="bg-paper py-20 lg:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-8">
            <Eyebrow>Why KhetiBiz</Eyebrow>
            <h2
              id="coverage-title"
              className="mt-5 font-serif text-[2.25rem] leading-[1.08] font-normal tracking-[-0.025em] text-balance text-ink sm:text-[3rem] lg:text-[3.5rem]"
            >
              Bridging the gaps between the <em className="text-leaf-deep">farm</em>, the{" "}
              <em className="text-sky-deep">market</em> and the boardroom.
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-4 lg:self-end">
            <p className="text-[1.0625rem] leading-relaxed text-ink-soft">
              Indian agriculture is one of the world’s largest farm economies, yet it is too often covered
              only as a welfare story. We report it as a business — with rigour, context and respect for the
              people who make it work.
            </p>
          </Reveal>
        </div>

        {/* gap-px over a line-coloured background draws hairline dividers at every breakpoint */}
        <ul className="mt-14 grid gap-px border-y border-line bg-line sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {verticals.map(({ title, description, icon: Icon, tone }, i) => (
            <Reveal as="li" key={title} delay={(i % 3) * 80} className="bg-paper px-1 py-8 sm:p-8">
              <span
                className={cn(
                  "inline-flex size-11 items-center justify-center rounded-full",
                  tone === "sky" ? "bg-sky-tint text-sky-deep" : "bg-leaf-tint text-leaf-deep",
                )}
              >
                <Icon className="size-5" />
              </span>
              <h3 className="mt-6 font-serif text-[1.5rem] leading-tight tracking-[-0.01em] text-ink">
                {title}
              </h3>
              <p className="mt-2 max-w-xs text-[0.9375rem] leading-relaxed text-muted">{description}</p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
