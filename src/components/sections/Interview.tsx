import Image from "next/image";

import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ArrowRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeader";
import { getStory } from "@/content/stories";

export function Interview() {
  const story = getStory("farmers-as-entrepreneurs-interview")!;

  return (
    <section id="interview" aria-labelledby="interview-title" className="bg-paper py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[3px] bg-line">
              <Image
                src={story.image}
                alt={story.imageAlt}
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <Eyebrow tone="sky">In Conversation</Eyebrow>
            <h2 id="interview-title" className="sr-only">
              Interview: {story.title}
            </h2>
            <figure className="mt-8">
              <span
                aria-hidden="true"
                className="block font-serif text-[5rem] leading-[0.5] text-sky select-none"
              >
                “
              </span>
              <blockquote className="mt-2 font-serif text-[1.875rem] leading-[1.18] font-light tracking-[-0.02em] text-balance text-ink italic sm:text-[2.5rem] lg:text-[2.875rem]">
                <p>{story.pullQuote}</p>
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <span aria-hidden="true" className="h-px w-10 bg-ink" />
                <span>
                  <span className="block font-medium text-ink">Ananya Rao</span>
                  <span className="text-sm text-muted">Founder, agri supply-chain company</span>
                </span>
              </figcaption>
            </figure>
            <p className="mt-8 max-w-xl text-[1.0625rem] leading-relaxed text-ink-soft">{story.dek}</p>
            <ButtonLink href={`/stories/${story.slug}`} variant="outline" size="lg" className="mt-10">
              Read the interview
              <ArrowRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
            </ButtonLink>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
