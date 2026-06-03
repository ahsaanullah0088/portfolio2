'use client';

import { forwardRef, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

const variants: Record<Variant, string> = {
  primary:
    'text-white bg-brand-gradient bg-[length:200%_auto] hover:bg-[position:right_center] shadow-glow hover:shadow-[0_10px_50px_-10px_rgba(124,92,255,0.7)]',
  secondary:
    'glass text-[rgb(var(--text))] hover:border-[rgb(var(--border)/0.2)] hover:bg-[rgb(var(--surface)/0.08)]',
  ghost:
    'text-muted hover:text-[rgb(var(--text))] hover:bg-[rgb(var(--surface)/0.06)]',
};

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm gap-1.5',
  md: 'h-11 px-5 text-sm gap-2',
  lg: 'h-12 px-7 text-[0.95rem] gap-2.5 sm:h-14',
};

const baseClasses =
  'group relative inline-flex items-center justify-center rounded-full font-medium tracking-tight transition-all duration-300 ease-out will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--bg))] disabled:pointer-events-none disabled:opacity-50';

export type ButtonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  )
);
Button.displayName = 'Button';

export type ButtonLinkProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => (
    <a
      ref={ref}
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </a>
  )
);
ButtonLink.displayName = 'ButtonLink';
