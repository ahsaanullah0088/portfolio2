'use client';

import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';
import { fadeUp, viewportOnce } from '@/lib/motion';

/**
 * Scroll-triggered reveal. Respects prefers-reduced-motion automatically via
 * Framer Motion's reducedMotion handling + our global CSS override.
 */
export function Reveal({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  as = 'div',
}: {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  as?: 'div' | 'section' | 'li' | 'article' | 'span';
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </MotionTag>
  );
}
