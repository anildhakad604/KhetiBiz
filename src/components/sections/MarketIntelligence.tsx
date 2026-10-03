import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { ArrowUpRight, PlayIcon, WaveIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeader";
import { mediaItems } from "@/content/media";
import { site } from "@/content/site";
import { formatDate } from "@/lib/utils";

export function MarketIntelligence() {
  const channel = site.social.find((s) => s.icon === "youtube")!.href;

  return (
    <section id="markets" aria-labelledby="markets-title" className="bg-ink py-20 text-white lg:py-28">
      <Container>
        <header className="border-t-2 border-white pt-5">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <Eyebrow tone="light">Market Intelligence</Eyebrow>
              <h2
                id="markets-title"
                className="mt-3 font-serif text-[2rem] leading-[1.08] font-normal tracking-[-0.02em] text-balance sm:text-[2.5rem] lg:text-[2.875rem]"
              >
                Prices, signals and the people behind them
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/65">
                Weekly mandi bulletins, field reports and conversations — in video and podcast.
              </p>
            </div>
            <a
              href={channel}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium"
            >
              <span className="border-b border-white/30 pb-0.5 transition-colors group-hover:border-white">
                All episodes
              </span>
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </header>

        <ul className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {mediaItems.map((item, i) => {
            const Icon = item.format === "Video" ? PlayIcon : WaveIcon;
            return (
              <Reveal as="li" key={item.title} delay={i * 80} className="group relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[3px] bg-white/5">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    placeholder="blur"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover opacity-90 transition-[transform,opacity] duration-[1200ms] ease-[var(--ease-soft)] group-hover:scale-[1.04] group-hover:opacity-100"
                  />
                  <span className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-white py-1.5 pr-3 pl-1.5 text-[0.75rem] font-medium text-ink">
                    <span className="inline-flex size-6 items-center justify-center rounded-full bg-leaf">
                      <Icon className="size-3" />
                    </span>
                    {item.format} · {item.duration}
                  </span>
                </div>
                <p className="mt-5 text-[0.6875rem] font-semibold tracking-[0.18em] text-leaf uppercase">
                  {item.series}
                </p>
                <h3 className="mt-2 font-serif text-[1.3125rem] leading-[1.22] tracking-[-0.01em] text-balance">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="decoration-white/40 decoration-1 underline-offset-[5px] group-hover:underline after:absolute after:inset-0"
                  >
                    {item.title}
                  </a>
                </h3>
                <p className="mt-2.5 text-[0.8125rem] text-white/50">
                  <time dateTime={item.date}>{formatDate(item.date)}</time>
                </p>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
