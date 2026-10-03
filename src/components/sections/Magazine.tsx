import Image from "next/image";

import logo from "@/assets/brand/khetibiz-logo.png";
import wheatSunset from "@/assets/images/wheat-sunset.jpg";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Check } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeader";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

const inside = [
  "The New Mandi — our investigation into digital agri-trade",
  "The FPO 50: producer organisations to watch",
  "Agri-tech funding: where the money went this quarter",
  "Rabi outlook and commodity price analysis",
];

const plans = [
  {
    name: "Digital",
    price: "₹999",
    note: "per year",
    features: ["Every issue on web & mobile", "Full story archive", "The Monday Harvest newsletter"],
    featured: false,
  },
  {
    name: "Print + Digital",
    price: "₹1,799",
    note: "per year",
    features: ["12 print issues delivered", "Everything in Digital", "Priority event invitations"],
    featured: true,
  },
];

export function Magazine() {
  return (
    <section id="magazine" aria-labelledby="magazine-title" className="overflow-hidden py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Issue cover */}
          <Reveal className="lg:col-span-5">
            <div className="relative mx-auto w-[calc(100%-2rem)] max-w-[20rem] sm:max-w-[24rem]">
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-4 translate-y-4 rotate-[3deg] rounded-[3px] bg-paper ring-1 ring-line"
              />
              <div className="relative flex aspect-[3/4] flex-col overflow-hidden rounded-[3px] bg-white shadow-[0_40px_80px_-40px_rgba(15,23,18,0.45)] ring-1 ring-ink/10">
                <div className="px-5 pt-4 pb-3 sm:px-6">
                  <div className="flex items-center justify-between text-[0.5rem] font-semibold tracking-[0.18em] text-ink uppercase sm:text-[0.5625rem]">
                    <span>{site.descriptor}</span>
                    <span className="text-muted">{site.currentIssue}</span>
                  </div>
                  <Image src={logo} alt="" sizes="384px" className="mt-2.5" style={{ width: "100%", height: "auto" }} />
                </div>
                <div className="relative flex-1">
                  <Image
                    src={wheatSunset}
                    alt=""
                    fill
                    placeholder="blur"
                    sizes="(min-width: 640px) 384px, 352px"
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-5 pt-16 pb-5 sm:px-6">
                    <p className="text-[0.5625rem] font-semibold tracking-[0.2em] text-leaf uppercase">
                      Cover Story
                    </p>
                    <p className="mt-1 font-serif text-[1.75rem] leading-none tracking-[-0.02em] text-white sm:text-[2rem]">
                      The New Mandi
                    </p>
                    <p className="mt-1.5 text-[0.6875rem] leading-snug text-white/80">
                      How digital trade is rewiring India’s farm economy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Copy + plans */}
          <Reveal delay={120} className="lg:col-span-7">
            <Eyebrow tone="leaf">The Magazine · {site.currentIssue}</Eyebrow>
            <h2
              id="magazine-title"
              className="mt-5 font-serif text-[2.25rem] leading-[1.08] font-normal tracking-[-0.025em] text-balance text-ink sm:text-[3rem]"
            >
              The issue shaping India’s agri-economy
            </h2>
            <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-ink-soft">
              Long-form reporting, data and interviews for the people who run, fund and govern Indian
              agriculture — delivered every month in print and online.
            </p>

            <h3 className="mt-10 text-[0.6875rem] font-semibold tracking-[0.2em] text-ink uppercase">
              Inside this issue
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 sm:gap-x-8">
              {inside.map((item) => (
                <li key={item} className="flex gap-3 text-[0.9375rem] leading-snug text-ink-soft">
                  <Check className="mt-0.5 size-4 shrink-0 text-leaf-deep" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={cn(
                    "relative flex flex-col rounded-md border p-6",
                    plan.featured ? "border-ink bg-ink text-white" : "border-line bg-white",
                  )}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold">{plan.name}</h3>
                    {plan.featured && (
                      <span className="rounded-full bg-leaf px-2.5 py-1 text-[0.625rem] font-semibold tracking-[0.12em] text-ink uppercase">
                        Most popular
                      </span>
                    )}
                  </div>
                  <p className="mt-4 flex items-baseline gap-1.5">
                    <span className="font-serif text-[2.25rem] leading-none tracking-[-0.02em]">{plan.price}</span>
                    <span className={cn("text-sm", plan.featured ? "text-white/60" : "text-muted")}>
                      {plan.note}
                    </span>
                  </p>
                  <ul className={cn("mt-5 space-y-2 text-sm", plan.featured ? "text-white/80" : "text-ink-soft")}>
                    {plan.features.map((f) => (
                      <li key={f} className="flex gap-2.5">
                        <Check className={cn("mt-0.5 size-4 shrink-0", plan.featured ? "text-leaf" : "text-leaf-deep")} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <ButtonLink
                    href={`mailto:${site.email.subscriptions}?subject=${encodeURIComponent(`${plan.name} subscription`)}`}
                    variant={plan.featured ? "accent" : "outline"}
                    className="mt-6 w-full"
                  >
                    Subscribe
                  </ButtonLink>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
