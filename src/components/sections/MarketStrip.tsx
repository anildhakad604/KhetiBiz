import { Container } from "@/components/ui/Container";
import { TrendDown, TrendUp } from "@/components/ui/Icons";
import { commodities, marketUpdate } from "@/content/markets";
import { cn, formatNumber } from "@/lib/utils";

export function MarketStrip() {
  return (
    <section aria-labelledby="market-title" className="border-b border-line bg-paper">
      <Container className="flex flex-col gap-4 py-6 lg:flex-row lg:items-center lg:gap-10">
        <div className="shrink-0 lg:w-48">
          <h2
            id="market-title"
            className="flex items-center gap-2 text-[0.6875rem] font-semibold tracking-[0.2em] text-sky-deep uppercase"
          >
            <span aria-hidden="true" className="size-1.5 rounded-full bg-sky" />
            {marketUpdate.label}
          </h2>
          <p className="mt-1.5 text-[0.75rem] text-muted">
            {marketUpdate.unit} · {marketUpdate.period}
          </p>
        </div>

        {/* Scrolls horizontally inside its own box on small screens — never the page. */}
        <ul
          className="no-scrollbar -mx-4 flex snap-x scroll-px-4 overflow-x-auto px-4 sm:-mx-6 sm:scroll-px-6 sm:px-6 lg:mx-0 lg:grid lg:flex-1 lg:grid-cols-8 lg:overflow-visible lg:px-0"
          aria-label="Commodity prices"
        >
          {commodities.map((c) => {
            const up = c.change >= 0;
            return (
              <li
                key={c.name}
                className="relative min-w-[8.25rem] shrink-0 snap-start border-l border-line px-4 first:border-l-0 first:pl-0 lg:min-w-0 lg:first:border-l lg:first:pl-4"
              >
                <p className="text-[0.75rem] font-medium text-ink-soft">{c.name}</p>
                <p className="mt-1 font-serif text-[1.25rem] leading-none tracking-[-0.01em] text-ink tabular-nums">
                  ₹{formatNumber(c.price)}
                </p>
                <p
                  className={cn(
                    "mt-1.5 inline-flex items-center gap-0.5 text-[0.75rem] font-medium tabular-nums",
                    up ? "text-leaf-deep" : "text-rust",
                  )}
                >
                  {up ? <TrendUp className="size-3" /> : <TrendDown className="size-3" />}
                  <span className="sr-only">{up ? "Up" : "Down"}</span>
                  {Math.abs(c.change).toFixed(1)}%
                </p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
