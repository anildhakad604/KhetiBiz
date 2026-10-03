import { Container } from "@/components/ui/Container";
import { ArrowUpRight, MapPin } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { events } from "@/content/events";
import { site } from "@/content/site";

const dayFmt = new Intl.DateTimeFormat("en-IN", { day: "2-digit", timeZone: "Asia/Kolkata" });
const monthFmt = new Intl.DateTimeFormat("en-IN", { month: "short", year: "numeric", timeZone: "Asia/Kolkata" });

export function Events() {
  return (
    <section id="events" aria-labelledby="events-title" className="pb-20 lg:pb-28">
      <Container>
        <SectionHeader
          id="events-title"
          eyebrow="Events & Forums"
          title="Where the sector meets"
          description="Summits, roundtables and forums that bring farmers, founders, investors and policymakers into the same room."
        />

        <ul className="mt-10 border-t border-line lg:mt-12">
          {events.map((event, i) => {
            const date = new Date(event.date);
            return (
              <Reveal as="li" key={event.title} delay={i * 80} className="border-b border-line">
                <a
                  href={`mailto:${site.email.events}?subject=${encodeURIComponent(`Register interest: ${event.title}`)}`}
                  className="group grid grid-cols-[4.5rem_1fr] items-start gap-x-5 gap-y-3 py-7 transition-colors duration-300 sm:grid-cols-[6rem_1fr_auto] sm:items-center sm:gap-x-8 lg:grid-cols-[7rem_1.2fr_1fr_auto] lg:px-4 lg:hover:bg-paper"
                >
                  <time dateTime={event.date} className="row-span-2 sm:row-span-1">
                    <span className="block font-serif text-[2.5rem] leading-none tracking-[-0.02em] text-ink tabular-nums sm:text-[3rem]">
                      {dayFmt.format(date)}
                    </span>
                    <span className="mt-1 block text-[0.75rem] font-medium tracking-[0.08em] text-muted uppercase">
                      {monthFmt.format(date)}
                    </span>
                  </time>
                  <div>
                    <p className="text-[0.6875rem] font-semibold tracking-[0.18em] text-leaf-deep uppercase">
                      {event.format}
                    </p>
                    <h3 className="mt-1.5 font-serif text-[1.375rem] leading-tight tracking-[-0.01em] text-ink sm:text-[1.625rem]">
                      {event.title}
                    </h3>
                    <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted">
                      <MapPin className="size-4" />
                      {event.city}
                    </p>
                  </div>
                  <p className="hidden text-[0.9375rem] leading-relaxed text-muted lg:block">{event.description}</p>
                  <span className="col-start-2 inline-flex items-center gap-1.5 text-sm font-medium text-ink sm:col-start-auto">
                    <span className="border-b border-ink/25 pb-0.5 transition-colors group-hover:border-ink">
                      Register interest
                    </span>
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
