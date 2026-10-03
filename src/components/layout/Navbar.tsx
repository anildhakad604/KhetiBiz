"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ArrowUpRight, CloseIcon, MenuIcon } from "@/components/ui/Icons";
import { mainNav, site } from "@/content/site";
import { cn } from "@/lib/utils";

type NavbarProps = {
  /** Logo is rendered on the server and passed in to keep it out of the client bundle. */
  logo: React.ReactNode;
};

export function Navbar({ logo }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    // Wait until the panel's visibility transition has begun, or focus() is ignored.
    const focusTimer = window.setTimeout(() => firstLinkRef.current?.focus(), 50);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onBreakpoint = (e: MediaQueryListEvent) => e.matches && setOpen(false);

    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onBreakpoint);
    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md transition-[border-color,box-shadow] duration-300 supports-[backdrop-filter]:bg-white/80",
          scrolled || open ? "border-line shadow-[0_1px_0_0_rgba(15,23,18,0.02)]" : "border-transparent",
        )}
      >
        <Container className="flex h-16 items-center justify-between gap-6 lg:h-20">
          {logo}

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group relative inline-flex h-10 items-center px-3.5 text-[0.875rem] font-medium text-ink-soft transition-colors hover:text-ink"
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-3.5 bottom-1.5 h-px origin-left scale-x-0 bg-leaf transition-transform duration-300 ease-[var(--ease-soft)] group-hover:scale-x-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            {/* Wrapper owns visibility so it can't conflict with the button's own display class. */}
            <div className="hidden sm:block">
              <ButtonLink href="/#magazine" variant="primary">
                Subscribe
              </ButtonLink>
            </div>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="-mr-2 inline-flex size-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-paper lg:hidden"
            >
              {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile / tablet menu — a sibling of <header>, because the header's
          backdrop-filter would otherwise become the containing block for `fixed`. */}
      <div
        id="mobile-menu"
        inert={!open}
        className={cn(
          "fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-white transition-[opacity,visibility] duration-300 ease-[var(--ease-soft)] lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <Container className="flex min-h-full flex-col pt-4 pb-10">
          <nav aria-label="Mobile">
            <ul>
              {mainNav.map((item, i) => (
                <li
                  key={item.href}
                  className={cn(
                    "border-b border-line transition-[opacity,transform] duration-500 ease-[var(--ease-soft)]",
                    open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
                  )}
                  style={{ transitionDelay: open ? `${60 + i * 40}ms` : "0ms" }}
                >
                  <Link
                    ref={i === 0 ? firstLinkRef : undefined}
                    href={item.href}
                    onClick={close}
                    className="flex items-baseline justify-between py-4 font-serif text-[1.875rem] leading-tight tracking-[-0.015em] text-ink"
                  >
                    {item.label}
                    <span className="font-sans text-xs text-muted tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto pt-10">
            <ButtonLink href="/#magazine" onClick={close} variant="primary" size="lg" className="w-full">
              Subscribe to the magazine
            </ButtonLink>
            <div className="mt-6 flex items-center justify-between text-sm text-muted">
              <Link
                href="/#newsletter"
                onClick={close}
                className="inline-flex items-center gap-1 hover:text-ink"
              >
                Newsletter <ArrowUpRight className="size-3.5" />
              </Link>
              <a href={`mailto:${site.email.editorial}`} className="hover:text-ink">
                {site.email.editorial}
              </a>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
