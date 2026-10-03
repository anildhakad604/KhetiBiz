import Link from "next/link";

import { cn } from "@/lib/utils";

import { ArrowRight } from "./Icons";

type SectionHeaderProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  action?: { label: string; href: string };
  id?: string;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  id,
  className,
}: SectionHeaderProps) {
  return (
    <header className={cn("border-t-2 border-ink pt-5", className)}>
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2
            id={id}
            className="mt-3 font-serif text-[2rem] leading-[1.08] font-normal tracking-[-0.02em] text-balance text-ink sm:text-[2.5rem] lg:text-[2.875rem]"
          >
            {title}
          </h2>
          {description && (
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">{description}</p>
          )}
        </div>
        {action && (
          <Link
            href={action.href}
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-ink"
          >
            <span className="border-b border-ink/25 pb-0.5 transition-colors group-hover:border-ink">
              {action.label}
            </span>
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        )}
      </div>
    </header>
  );
}

export function Eyebrow({
  children,
  className,
  tone = "ink",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "ink" | "leaf" | "sky" | "light";
}) {
  const tones = {
    ink: "text-ink-soft",
    leaf: "text-leaf-deep",
    sky: "text-sky-deep",
    light: "text-leaf",
  };
  return (
    <p
      className={cn(
        "flex items-center gap-2.5 text-[0.6875rem] font-semibold tracking-[0.2em] uppercase",
        tones[tone],
        className,
      )}
    >
      <span aria-hidden="true" className="h-px w-6 bg-current opacity-60" />
      {children}
    </p>
  );
}
