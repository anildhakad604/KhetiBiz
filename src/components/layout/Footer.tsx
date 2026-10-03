import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { socialIcons } from "@/components/ui/Icons";
import { Logo } from "@/components/ui/Logo";
import { footerNav, site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-paper">
      <Container className="pt-16 pb-10 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo height={30} />
            <p className="mt-6 max-w-sm font-serif text-[1.375rem] leading-snug tracking-[-0.01em] text-ink">
              Bridging the gaps between the farm, the market and the boardroom.
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {site.descriptor}. Independent reporting and analysis from {site.location}.
            </p>
            <ul className="mt-8 flex items-center gap-2">
              {site.social.map(({ label, href, icon }) => {
                const Icon = socialIcons[icon];
                return (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`KhetiBiz on ${label}`}
                      className="inline-flex size-10 items-center justify-center rounded-full border border-ink/10 text-ink-soft transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-white"
                    >
                      <Icon className="size-4" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
            {footerNav.map((group) => (
              <nav key={group.title} aria-label={group.title}>
                <h2 className="text-[0.6875rem] font-semibold tracking-[0.2em] text-ink uppercase">
                  {group.title}
                </h2>
                <ul className="mt-5 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[0.9375rem] text-muted transition-colors hover:text-ink"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-8 text-[0.8125rem] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} KhetiBiz Media. All rights reserved.</p>
          <p className="font-semibold tracking-[0.18em] text-ink uppercase">{site.tagline}</p>
        </div>
      </Container>
    </footer>
  );
}
