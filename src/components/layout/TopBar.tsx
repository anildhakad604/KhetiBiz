import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { socialIcons } from "@/components/ui/Icons";
import { site } from "@/content/site";

export function TopBar() {
  return (
    <div className="hidden border-b border-line bg-paper lg:block">
      <Container className="flex h-9 items-center justify-between text-[0.75rem] text-muted">
        <p className="tracking-[0.04em]">
          <span className="font-semibold tracking-[0.16em] text-ink uppercase">{site.descriptor}</span>
          <span className="mx-3 text-line" aria-hidden="true">|</span>
          {site.currentIssue} Issue
        </p>
        <div className="flex items-center gap-6">
          <Link href={`mailto:${site.email.advertising}`} className="transition-colors hover:text-ink">
            Advertise
          </Link>
          <Link href="/#newsletter" className="transition-colors hover:text-ink">
            Newsletter
          </Link>
          <ul className="flex items-center gap-3.5 border-l border-line pl-6">
            {site.social.map(({ label, href, icon }) => {
              const Icon = socialIcons[icon];
              return (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`KhetiBiz on ${label}`}
                    className="block transition-colors hover:text-ink"
                  >
                    <Icon className="size-3.5" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </div>
  );
}
