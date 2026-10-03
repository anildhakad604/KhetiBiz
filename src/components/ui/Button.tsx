import Link from "next/link";

import { cn } from "@/lib/utils";

type Variant = "primary" | "accent" | "outline" | "inverse";
type Size = "md" | "lg";

const base =
  "group/btn inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-[-0.005em] whitespace-nowrap transition-colors duration-300 ease-[var(--ease-soft)]";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-white hover:bg-leaf-deep",
  accent: "bg-leaf text-ink hover:bg-[#8bcc24]",
  outline: "border border-ink/15 text-ink hover:border-ink hover:bg-ink hover:text-white",
  inverse: "bg-white text-ink hover:bg-leaf",
};

const sizes: Record<Size, string> = {
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-7 text-[0.9375rem]",
};

export function buttonClasses({
  variant = "primary",
  size = "md",
  className,
}: { variant?: Variant; size?: Size; className?: string } = {}) {
  return cn(base, variants[variant], sizes[size], className);
}

type ButtonLinkProps = React.ComponentPropsWithoutRef<typeof Link> & {
  variant?: Variant;
  size?: Size;
};

export function ButtonLink({ variant, size, className, ...props }: ButtonLinkProps) {
  return <Link className={buttonClasses({ variant, size, className })} {...props} />;
}
