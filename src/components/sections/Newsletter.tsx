import { Container } from "@/components/ui/Container";
import { NewsletterForm } from "@/components/ui/NewsletterForm";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeader";

export function Newsletter() {
  return (
    <section id="newsletter" aria-labelledby="newsletter-title" className="bg-ink py-20 text-white lg:py-24">
      <Container>
        <Reveal className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <Eyebrow tone="light">The Monday Harvest</Eyebrow>
            <h2
              id="newsletter-title"
              className="mt-5 font-serif text-[2.25rem] leading-[1.08] font-normal tracking-[-0.025em] text-balance sm:text-[3rem]"
            >
              The week in Indian agribusiness, in one five-minute read.
            </h2>
            <p className="mt-5 max-w-lg text-[1.0625rem] leading-relaxed text-white/70">
              Prices, policy, deals and the stories behind them — curated by our editors and sent every
              Monday morning.
            </p>
          </div>
          <div className="lg:col-span-5">
            <NewsletterForm />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
