import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/brand/khetibiz-logo.png";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  /** Rendered height in px; width follows the logo’s aspect ratio. */
  height?: number;
};

export function Logo({ className, height = 32 }: LogoProps) {
  const width = Math.round((logo.width / logo.height) * height);
  return (
    <Link
      href="/"
      aria-label="KhetiBiz — home"
      className={cn("inline-flex shrink-0 items-center", className)}
    >
      <Image
        src={logo}
        alt="KhetiBiz"
        width={width}
        height={height}
        sizes={`${width}px`}
        loading="eager"
      />
    </Link>
  );
}
