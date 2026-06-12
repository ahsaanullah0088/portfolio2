/**
 * Inline SVG icon set — keeps the bundle lean (no icon library).
 * All icons are 24×24, inherit `currentColor`, and accept standard SVG props.
 */
import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps): IconProps => ({
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  ...props,
});

/* --- UI / feature icons --- */
export const ArrowUpRight = (p: IconProps) => (
  <svg {...base(p)}><path d="M7 17 17 7M8 7h9v9" /></svg>
);
export const ArrowDown = (p: IconProps) => (
  <svg {...base(p)}><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
);
export const Download = (p: IconProps) => (
  <svg {...base(p)}><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" /></svg>
);
export const Mail = (p: IconProps) => (
  <svg {...base(p)}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
);
export const Phone = (p: IconProps) => (
  <svg {...base(p)}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></svg>
);
export const MapPin = (p: IconProps) => (
  <svg {...base(p)}><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" /><circle cx="12" cy="10" r="2.5" /></svg>
);
export const Sparkles = (p: IconProps) => (
  <svg {...base(p)}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2 2M16 16l2 2M18 6l-2 2M8 16l-2 2" /></svg>
);
export const Rocket = (p: IconProps) => (
  <svg {...base(p)}><path d="M5 15c-1 1-1.5 4-1.5 4s3-.5 4-1.5M9 11a6 6 0 0 1 9-5 6 6 0 0 1-5 9l-2 2-4-4 2-2Z" /><circle cx="15" cy="9" r="1.2" /></svg>
);
export const Gauge = (p: IconProps) => (
  <svg {...base(p)}><path d="M12 13l4-4M4 18a9 9 0 1 1 16 0" /><circle cx="12" cy="13" r="1.3" /></svg>
);
export const Users = (p: IconProps) => (
  <svg {...base(p)}><circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0 1 12 0M16 5.5a3 3 0 0 1 0 5M21 20a6 6 0 0 0-4-5.6" /></svg>
);
export const Layout = (p: IconProps) => (
  <svg {...base(p)}><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M9 9v11" /></svg>
);
export const Server = (p: IconProps) => (
  <svg {...base(p)}><rect x="3" y="4" width="18" height="7" rx="2" /><rect x="3" y="13" width="18" height="7" rx="2" /><path d="M7 7.5h.01M7 16.5h.01" /></svg>
);
export const Database = (p: IconProps) => (
  <svg {...base(p)}><ellipse cx="12" cy="6" rx="8" ry="3" /><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></svg>
);
export const Cloud = (p: IconProps) => (
  <svg {...base(p)}><path d="M7 18a4 4 0 0 1-.5-7.97A6 6 0 0 1 18 9.5 3.5 3.5 0 0 1 17.5 18H7Z" /></svg>
);
export const Wrench = (p: IconProps) => (
  <svg {...base(p)}><path d="M14.5 6a3.5 3.5 0 0 0-4.6 4.6l-5.6 5.6a2 2 0 1 0 2.8 2.8l5.6-5.6A3.5 3.5 0 0 0 18 9.5l-2.3 2.3-1.5-1.5L16.5 8" /></svg>
);
export const Code = (p: IconProps) => (
  <svg {...base(p)}><path d="m8 9-3 3 3 3M16 9l3 3-3 3M13 6l-2 12" /></svg>
);
export const Star = (p: IconProps) => (
  <svg {...base(p)}><path d="m12 3 2.7 5.5 6 .9-4.3 4.2 1 6L12 17l-5.4 2.6 1-6L3.3 9.4l6-.9L12 3Z" /></svg>
);
export const Trophy = (p: IconProps) => (
  <svg {...base(p)}><path d="M6 4h12v3a6 6 0 0 1-12 0V4ZM6 6H3v1a3 3 0 0 0 3 3M18 6h3v1a3 3 0 0 1-3 3M9 17h6M10 17l-.5 3h5l-.5-3M8 20h8" /></svg>
);
export const Badge = (p: IconProps) => (
  <svg {...base(p)}><path d="M12 2 4 5v6c0 5 3.5 8 8 11 4.5-3 8-6 8-11V5l-8-3Z" /><path d="m9 12 2 2 4-4" /></svg>
);
export const Check = (p: IconProps) => (
  <svg {...base(p)}><path d="M5 12.5 10 17l9-10" /></svg>
);
export const Sun = (p: IconProps) => (
  <svg {...base(p)}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19" /></svg>
);
export const Moon = (p: IconProps) => (
  <svg {...base(p)}><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" /></svg>
);
export const Menu = (p: IconProps) => (
  <svg {...base(p)}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);
export const Close = (p: IconProps) => (
  <svg {...base(p)}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const Eye = (p: IconProps) => (
  <svg {...base(p)}><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
);
export const Quote = (p: IconProps) => (
  <svg {...base({ ...p, fill: 'currentColor', stroke: 'none' })}><path d="M9 7H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2v2a2 2 0 0 1-2 2H4v2h1a4 4 0 0 0 4-4V7Zm10 0h-4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2v2a2 2 0 0 1-2 2h-1v2h1a4 4 0 0 0 4-4V7Z" /></svg>
);
export const Briefcase = (p: IconProps) => (
  <svg {...base(p)}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" /></svg>
);
export const GraduationCap = (p: IconProps) => (
  <svg {...base(p)}><path d="M22 9 12 5 2 9l10 4 10-4Z" /><path d="M6 11v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5" /></svg>
);

/* --- Brand / social icons (filled) --- */
export const GitHub = (p: IconProps) => (
  <svg {...base({ ...p, fill: 'currentColor', stroke: 'none' })}><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.93.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85l-.01 2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" /></svg>
);
export const LinkedIn = (p: IconProps) => (
  <svg {...base({ ...p, fill: 'currentColor', stroke: 'none' })}><path d="M6.94 7.5A1.94 1.94 0 1 1 7 3.62a1.94 1.94 0 0 1-.06 3.88ZM5.5 9h2.9v9.5H5.5V9Zm5 0h2.78v1.3h.04c.39-.74 1.34-1.52 2.76-1.52 2.95 0 3.5 1.94 3.5 4.46v5.26h-2.9v-4.66c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.74H10.5V9Z" /></svg>
);
export const Fiverr = (p: IconProps) => (
  <svg {...base({ ...p, fill: 'currentColor', stroke: 'none' })}><path d="M16.3 7.9v8.6h2.5V5.6h-4.7c-2 0-3.5 1.5-3.5 3.6v.3H8.4v2.3h2.2v4.7h2.5v-4.7h2.8V9.8h-2.8v-.3c0-.9.5-1.6 1.4-1.6h1.8ZM6.3 5.5a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8ZM5 9.8h2.5v6.7H5V9.8Z" /></svg>
);
export const LeetCode = (p: IconProps) => (
  <svg {...base({ ...p, fill: 'currentColor', stroke: 'none' })}><path d="M13.5 2.5 7.1 9a3.6 3.6 0 0 0 0 5.1l3.4 3.4a3.6 3.6 0 0 0 5.1 0l1.9-1.9-1.6-1.6-1.9 1.9a1.4 1.4 0 0 1-1.9 0l-3.4-3.4a1.4 1.4 0 0 1 0-1.9l6.4-6.5-1.1-1.6Zm.6 7.3H21v2.2h-6.9V9.8Z" /></svg>
);

export const iconMap = {
  gauge: Gauge,
  sparkles: Sparkles,
  rocket: Rocket,
  users: Users,
  layout: Layout,
  server: Server,
  database: Database,
  cloud: Cloud,
  wrench: Wrench,
  code: Code,
} as const;

export type IconName = keyof typeof iconMap;
