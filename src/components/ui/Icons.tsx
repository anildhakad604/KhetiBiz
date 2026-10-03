type IconProps = React.SVGProps<SVGSVGElement>;

function Stroke({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const ArrowRight = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Stroke>
);

export const ArrowUpRight = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </Stroke>
);

export const ArrowLeft = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </Stroke>
);

export const MenuIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M4 8h16M4 16h16" />
  </Stroke>
);

export const CloseIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Stroke>
);

export const TrendUp = (p: IconProps) => (
  <Stroke strokeWidth={2} {...p}>
    <path d="m6 15 6-6 6 6" />
  </Stroke>
);

export const TrendDown = (p: IconProps) => (
  <Stroke strokeWidth={2} {...p}>
    <path d="m6 9 6 6 6-6" />
  </Stroke>
);

export const Check = (p: IconProps) => (
  <Stroke strokeWidth={2} {...p}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </Stroke>
);

export const MapPin = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </Stroke>
);

export const PlayIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" />
  </svg>
);

export const WaveIcon = (p: IconProps) => (
  <Stroke strokeWidth={2.5} {...p}>
    <path d="M4 10v4M8 6v12M12 9v6M16 4v16M20 10v4" />
  </Stroke>
);

/* Coverage verticals */
export const Briefcase = (p: IconProps) => (
  <Stroke {...p}>
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7M3 13h18" />
  </Stroke>
);

export const Chip = (p: IconProps) => (
  <Stroke {...p}>
    <rect x="7" y="7" width="10" height="10" rx="1.5" />
    <path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4" />
  </Stroke>
);

export const Chart = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M4 4v16h16" />
    <path d="m8 15 3.5-4 3 3L20 8" />
  </Stroke>
);

export const Landmark = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M3 21h18M5 18h14M6 18v-7M10 18v-7M14 18v-7M18 18v-7M12 3 3 8.5h18L12 3Z" />
  </Stroke>
);

export const Leaf = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M5 19c0-8 5-13 15-14-.5 9.5-5.5 14.5-13 14.5" />
    <path d="M4 20c3.5-4.5 6.5-7.5 10-10" />
  </Stroke>
);

export const Rupee = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M7 4h11M7 9h11M11 4c3 0 4.5 1.9 4.5 4.5S13.8 13 11 13H7l7.5 7" />
  </Stroke>
);

/* Social */
export const LinkedInIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M4.98 3.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM.5 8h4v16h-4V8Zm7 0h3.8v2.2h.05c.53-1 1.84-2.2 3.8-2.2 4.06 0 4.85 2.67 4.85 6.15V24h-4v-8.5c0-2.03-.04-4.64-2.83-4.64-2.83 0-3.27 2.21-3.27 4.5V24h-4V8Z" />
  </svg>
);

export const XIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
  </svg>
);

export const InstagramIcon = (p: IconProps) => (
  <Stroke strokeWidth={1.75} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" />
  </Stroke>
);

export const YouTubeIcon = (p: IconProps) => (
  <Stroke strokeWidth={1.75} {...p}>
    <rect x="2" y="5" width="20" height="14" rx="4" />
    <path d="m10 9 5 3-5 3V9Z" fill="currentColor" />
  </Stroke>
);

export const socialIcons = {
  linkedin: LinkedInIcon,
  x: XIcon,
  instagram: InstagramIcon,
  youtube: YouTubeIcon,
} as const;
