import Image from "next/image";
import Link from "next/link";

import { categoryTone, type Story } from "@/content/stories";
import { cn, formatDate } from "@/lib/utils";

export function CategoryTag({ category, className }: { category: Story["category"]; className?: string }) {
  const tone = categoryTone(category);
  return (
    <span
      className={cn(
        "text-[0.6875rem] font-semibold tracking-[0.18em] uppercase",
        tone === "sky" ? "text-sky-deep" : "text-leaf-deep",
        className,
      )}
    >
      {category}
    </span>
  );
}

export function StoryMeta({ story, className }: { story: Story; className?: string }) {
  return (
    <p className={cn("flex flex-wrap items-center gap-x-2 text-[0.8125rem] text-muted", className)}>
      <span className="text-ink-soft">{story.author}</span>
      <span aria-hidden="true">·</span>
      <time dateTime={story.date}>{formatDate(story.date)}</time>
      <span aria-hidden="true">·</span>
      <span>{story.readTime} min read</span>
    </p>
  );
}

type StoryCardProps = {
  story: Story;
  size?: "md" | "lg";
  sizes?: string;
  showDek?: boolean;
  className?: string;
};

/** Vertical card: image on top, text below. */
export function StoryCard({
  story,
  size = "md",
  sizes = "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw",
  showDek = true,
  className,
}: StoryCardProps) {
  return (
    <article className={cn("group relative flex flex-col", className)}>
      <div
        className={cn(
          "relative overflow-hidden rounded-[3px] bg-paper",
          size === "lg" ? "aspect-[16/10]" : "aspect-[3/2]",
        )}
      >
        <Image
          src={story.image}
          alt={story.imageAlt}
          fill
          sizes={sizes}
          placeholder="blur"
          className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-soft)] group-hover:scale-[1.03]"
        />
      </div>
      <div className={cn("flex flex-1 flex-col", size === "lg" ? "pt-6" : "pt-5")}>
        <CategoryTag category={story.category} />
        <h3
          className={cn(
            "mt-2.5 font-serif font-normal tracking-[-0.015em] text-balance text-ink",
            size === "lg"
              ? "text-[1.75rem] leading-[1.12] sm:text-[2.125rem]"
              : "text-[1.375rem] leading-[1.2]",
          )}
        >
          <Link
            href={`/stories/${story.slug}`}
            className="decoration-ink/30 decoration-1 underline-offset-[5px] group-hover:underline after:absolute after:inset-0"
          >
            {story.title}
          </Link>
        </h3>
        {showDek && (
          <p
            className={cn(
              "mt-3 leading-relaxed text-muted",
              size === "lg" ? "max-w-2xl text-[1.0625rem]" : "line-clamp-2 text-[0.9375rem]",
            )}
          >
            {story.dek}
          </p>
        )}
        <StoryMeta story={story} className="mt-4" />
      </div>
    </article>
  );
}

/** Compact horizontal row: text left, thumbnail right. */
export function StoryListItem({ story, className }: { story: Story; className?: string }) {
  return (
    <article className={cn("group relative flex gap-5 py-6", className)}>
      <div className="min-w-0 flex-1">
        <CategoryTag category={story.category} />
        <h3 className="mt-2 font-serif text-[1.25rem] leading-[1.22] font-normal tracking-[-0.01em] text-balance text-ink">
          <Link
            href={`/stories/${story.slug}`}
            className="decoration-ink/30 decoration-1 underline-offset-[5px] group-hover:underline after:absolute after:inset-0"
          >
            {story.title}
          </Link>
        </h3>
        <p className="mt-2.5 text-[0.8125rem] text-muted">
          <time dateTime={story.date}>{formatDate(story.date)}</time> · {story.readTime} min read
        </p>
      </div>
      <div className="relative aspect-square w-24 shrink-0 overflow-hidden rounded-[3px] bg-paper sm:w-28">
        <Image
          src={story.image}
          alt=""
          fill
          sizes="112px"
          placeholder="blur"
          className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-soft)] group-hover:scale-[1.05]"
        />
      </div>
    </article>
  );
}
