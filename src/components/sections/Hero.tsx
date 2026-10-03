import Image from "next/image";
import Link from "next/link";

import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ArrowRight } from "@/components/ui/Icons";
import { Eyebrow } from "@/components/ui/SectionHeader";
import { CategoryTag } from "@/components/ui/StoryCard";
import { site } from "@/content/site";
import { pickStories } from "@/content/stories";
import { formatDate } from "@/lib/utils";

export function Hero() {
  const [cover, ...alsoInIssue] = pickStories(
    "the-new-mandi",
    "drone-spraying-punjab-paddy",
    "fpos-agribusiness-customers",
    "rabi-wheat-procurement-outlook",
  );

  return (
    <section aria-labelledby="cover-title" className="border-b border-line">
      <Container className="pt-8 pb-14 sm:pt-12 lg:pt-16 lg:pb-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="flex animate-fade-up flex-col lg:col-span-5 lg:py-4">
            <Eyebrow tone="leaf">Cover Story · {site.currentIssue}</Eyebrow>

            <h1
              id="cover-title"
              className="mt-6 font-serif text-[3.25rem] leading-[0.98] font-normal tracking-[-0.035em] text-ink sm:text-[4.5rem] lg:text-[5.25rem] xl:text-[5.75rem] 2xl:text-[6.75rem]"
            >
              The New <em className="font-light text-leaf-deep">Mandi</em>
            </h1>

            <p className="mt-6 max-w-md font-serif text-[1.375rem] leading-snug tracking-[-0.01em] text-ink-soft sm:text-[1.5rem]">
              How digital trade is rewiring India’s farm economy — and who gets left behind.
            </p>

            <p className="mt-5 max-w-md text-[0.9375rem] leading-relaxed text-muted">{cover.dek}</p>

            <p className="mt-6 text-[0.8125rem] text-muted">
              By <span className="font-medium text-ink">{cover.author}</span>
              <span className="mx-2" aria-hidden="true">·</span>
              {cover.readTime} min read
            </p>

            <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap sm:items-center lg:mt-auto lg:pt-10">
              <ButtonLink href={`/stories/${cover.slug}`} size="lg">
                Read the cover story
                <ArrowRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
              </ButtonLink>
              <ButtonLink href="/#magazine" variant="outline" size="lg">
                Get the issue
              </ButtonLink>
            </div>
          </div>

          <figure className="lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[3px] bg-paper lg:aspect-[6/5]">
              <Image
                src={cover.image}
                alt={cover.imageAlt}
                fill
                preload
                placeholder="blur"
                sizes="(min-width: 1840px) 1040px, (min-width: 1024px) 56vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 flex gap-3 text-[0.8125rem] leading-relaxed text-muted">
              <span aria-hidden="true" className="mt-2 h-px w-5 shrink-0 bg-leaf" />
              {cover.caption}
            </figcaption>
          </figure>
        </div>

        <div className="mt-14 border-t border-ink pt-2 lg:mt-16">
          <h2 className="sr-only">Also in this issue</h2>
          <ol className="grid divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {alsoInIssue.map((story, i) => (
              <li key={story.slug} className="group relative py-6 sm:px-6 sm:first:pl-0 sm:last:pr-0">
                <div className="flex items-center gap-3">
                  <span className="font-serif text-sm text-muted tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <CategoryTag category={story.category} />
                </div>
                <h3 className="mt-3 font-serif text-[1.25rem] leading-[1.22] tracking-[-0.01em] text-balance text-ink">
                  <Link
                    href={`/stories/${story.slug}`}
                    className="decoration-ink/30 decoration-1 underline-offset-[5px] group-hover:underline after:absolute after:inset-0"
                  >
                    {story.title}
                  </Link>
                </h3>
                <p className="mt-2 text-[0.8125rem] text-muted">
                  <time dateTime={story.date}>{formatDate(story.date)}</time>
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
