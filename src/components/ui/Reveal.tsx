"use client";

import { useEffect, useRef } from "react";

type RevealProps<T extends React.ElementType> = {
  as?: T;
  delay?: number;
} & Omit<React.ComponentPropsWithoutRef<T>, "as">;

/**
 * Fades content in once it scrolls into view. Hidden state is only
 * applied when JS is running (see `.js [data-reveal]` in globals.css),
 * and is disabled entirely for users who prefer reduced motion.
 */
export function Reveal<T extends React.ElementType = "div">({
  as,
  delay = 0,
  style,
  ...props
}: RevealProps<T>) {
  const Component = (as ?? "div") as React.ElementType;
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={ref}
      data-reveal=""
      style={{ ...style, "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      {...props}
    />
  );
}
