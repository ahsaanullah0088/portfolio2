'use client';

import { useRef, type ReactNode } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { cn } from '@/lib/utils';

/**
 * Glass card with a radial spotlight that follows the cursor and an animated
 * gradient border on hover. The signature surface of the Aurora theme.
 */
export function SpotlightCard({
  children,
  className,
  spotlightColor = 'rgba(124,92,255,0.18)',
  as = 'div',
}: {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
  as?: 'div' | 'article' | 'li';
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(-200);
  const my = useMotionValue(-200);
  const background = useMotionTemplate`radial-gradient(340px circle at ${mx}px ${my}px, ${spotlightColor}, transparent 70%)`;

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  const MotionTag = motion[as];

  return (
    <MotionTag
      ref={ref as never}
      onMouseMove={onMove}
      className={cn(
        'group relative overflow-hidden rounded-3xl border border-[rgb(var(--border)/0.08)] bg-[rgb(var(--surface)/0.03)] backdrop-blur-sm transition-colors duration-300 hover:border-[rgb(var(--border)/0.16)]',
        className
      )}
    >
      {/* spotlight layer */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background }}
      />
      {/* subtle top highlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />
      <div className="relative">{children}</div>
    </MotionTag>
  );
}
