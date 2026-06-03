import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/** Small pill used for tech-stack chips and labels. */
export function Tag({
  children,
  className,
  tone = 'default',
}: {
  children: ReactNode;
  className?: string;
  tone?: 'default' | 'brand';
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium tracking-tight transition-colors',
        tone === 'default' &&
          'border-[rgb(var(--border)/0.1)] bg-[rgb(var(--surface)/0.04)] text-muted hover:text-[rgb(var(--text))]',
        tone === 'brand' &&
          'border-brand-500/30 bg-brand-500/10 text-brand-300',
        className
      )}
    >
      {children}
    </span>
  );
}
