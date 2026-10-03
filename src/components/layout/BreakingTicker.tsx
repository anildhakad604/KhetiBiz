import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { breaking } from "@/content/media";

function Items({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {breaking.map((item) => (
        <li key={item.label} className="flex items-center">
          <Link
            href={item.href}
            tabIndex={hidden ? -1 : undefined}
            className="px-6 text-[0.8125rem] whitespace-nowrap text-ink-soft transition-colors hover:text-ink"
          >
            {item.label}
          </Link>
          <span aria-hidden="true" className="size-1 rounded-full bg-leaf" />
        </li>
      ))}
    </ul>
  );
}

/**
 * Slow, pausable headline ticker. The list is rendered twice so the
 * loop is seamless; the copy is hidden from assistive tech. With
 * reduced motion it becomes a static, horizontally scrollable row.
 */
export function BreakingTicker() {
  return (
    <div className="border-b border-line bg-white">
      <Container className="flex h-10 items-center gap-4">
        <p className="flex shrink-0 items-center gap-2 text-[0.6875rem] font-semibold tracking-[0.18em] text-leaf-deep uppercase">
          <span aria-hidden="true" className="relative flex size-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-leaf opacity-60 motion-reduce:hidden" />
            <span className="relative size-2 rounded-full bg-leaf" />
          </span>
          Latest
        </p>
        <nav
          aria-label="Latest headlines"
          className="group relative min-w-0 flex-1 overflow-hidden mask-x-from-90% motion-reduce:no-scrollbar motion-reduce:overflow-x-auto"
        >
          <div className="flex w-max animate-ticker group-focus-within:[animation-play-state:paused] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
            <Items />
            <Items hidden />
          </div>
        </nav>
      </Container>
    </div>
  );
}
