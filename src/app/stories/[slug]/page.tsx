import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ArrowLeft } from "@/components/ui/Icons";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CategoryTag, StoryCard } from "@/components/ui/StoryCard";
import { site } from "@/content/site";
import { getRelatedStories, getStory, stories } from "@/content/stories";
import { formatDate } from "@/lib/utils";

export const dynamicParams = false;

export function generateStaticParams() {
  return stories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: PageProps<"/stories/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) return {};
  const path = `/stories/${story.slug}`;
  return {
    title: story.title,
    description: story.dek,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: path,
      title: story.title,
      description: story.dek,
      publishedTime: story.date,
      authors: [story.author],
      section: story.category,
      images: [{ url: story.image.src, width: story.image.width, height: story.image.height, alt: story.imageAlt }],
    },
    twitter: { card: "summary_large_image", title: story.title, description: story.dek, images: [story.image.src] },
  };
}

export default async function StoryPage({ params }: PageProps<"/stories/[slug]">) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();

  const related = getRelatedStories(story);
  const [lead, ...paragraphs] = story.body;
  const quoteAfter = Math.min(1, paragraphs.length - 1);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: story.title,
    description: story.dek,
    datePublished: story.date,
    articleSection: story.category,
    image: [`${site.url}${story.image.src}`],
    author: [{ "@type": "Person", name: story.author }],
    publisher: { "@type": "NewsMediaOrganization", name: site.name, logo: `${site.url}/icon.png` },
    mainEntityOfPage: `${site.url}/stories/${story.slug}`,
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <Container className="pt-8 sm:pt-12 lg:pt-16">
        <div className="mx-auto max-w-3xl animate-fade-up text-center">
          <Link
            href="/#latest"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
          >
            <ArrowLeft className="size-4" />
            All stories
          </Link>
          <div className="mt-8">
            <CategoryTag category={story.category} />
          </div>
          <h1 className="mt-4 font-serif text-[2.375rem] leading-[1.05] font-normal tracking-[-0.03em] text-balance text-ink sm:text-[3.25rem] lg:text-[3.75rem]">
            {story.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-serif text-[1.25rem] leading-snug text-pretty text-ink-soft sm:text-[1.4375rem]">
            {story.dek}
          </p>
          <p className="mt-8 flex flex-wrap items-center justify-center gap-x-2 text-[0.8125rem] text-muted">
            By <span className="font-medium text-ink">{story.author}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={story.date}>{formatDate(story.date)}</time>
            <span aria-hidden="true">·</span>
            {story.readTime} min read
          </p>
        </div>
      </Container>

      <Container className="mt-10 lg:mt-14">
        <figure className="mx-auto max-w-6xl">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[3px] bg-paper sm:aspect-[2/1]">
            <Image
              src={story.image}
              alt={story.imageAlt}
              fill
              preload
              placeholder="blur"
              sizes="(min-width: 1280px) 1152px, 100vw"
              className="object-cover"
            />
          </div>
          {story.caption && (
            <figcaption className="mt-3 flex gap-3 text-[0.8125rem] leading-relaxed text-muted">
              <span aria-hidden="true" className="mt-2 h-px w-5 shrink-0 bg-leaf" />
              {story.caption}
            </figcaption>
          )}
        </figure>
      </Container>

      <Container className="py-14 lg:py-20">
        <div className="mx-auto max-w-[42rem] font-serif text-[1.1875rem] leading-[1.7] text-ink-soft sm:text-[1.25rem]">
          <p className="first-letter:float-left first-letter:mt-1.5 first-letter:mr-3 first-letter:font-serif first-letter:text-[4.25rem] first-letter:leading-[0.8] first-letter:text-leaf-deep">
            {lead}
          </p>
          {paragraphs.map((p, i) => (
            <div key={i}>
              <p className="mt-6">{p}</p>
              {story.pullQuote && i === quoteAfter && (
                <blockquote className="my-12 border-l-2 border-leaf pl-6 text-[1.625rem] leading-[1.25] font-light tracking-[-0.015em] text-ink italic sm:text-[1.875rem]">
                  <p>{story.pullQuote}</p>
                </blockquote>
              )}
            </div>
          ))}

          <div className="mt-14 flex flex-col items-start gap-6 border-t border-line pt-8 font-sans sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted">
              Enjoyed this story? Get the full {site.currentIssue} issue in print and digital.
            </p>
            <ButtonLink href="/#magazine">Subscribe</ButtonLink>
          </div>
        </div>
      </Container>

      <section aria-labelledby="related-title" className="border-t border-line bg-paper py-20">
        <Container>
          <SectionHeader id="related-title" eyebrow="Keep reading" title="More from KhetiBiz" />
          <div className="mt-10 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {related.map((s, i) => (
              <StoryCard key={s.slug} story={s} className={i === 2 ? "md:hidden lg:flex" : undefined} />
            ))}
          </div>
        </Container>
      </section>
    </article>
  );
}
