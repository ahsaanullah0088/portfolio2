'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Container } from './Container';
import { fadeUp, stagger, viewportOnce } from '@/lib/motion';

/**
 * Section wrapper with a consistent eyebrow + heading rhythm.
 */
export function Section({
  id,
  eyebrow,
  title,
  intro,
  align = 'left',
  className,
  containerClassName,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
  containerClassName?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn('relative scroll-mt-24 py-20 sm:py-28', className)}
    >
      <Container className={containerClassName}>
        {(eyebrow || title || intro) && (
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className={cn(
              'mb-12 max-w-2xl sm:mb-16',
              align === 'center' && 'mx-auto text-center'
            )}
          >
            {eyebrow && (
              <motion.p variants={fadeUp} className="eyebrow mb-4">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-gradient" />
                {eyebrow}
              </motion.p>
            )}
            {title && (
              <motion.h2
                variants={fadeUp}
                className="text-balance font-display text-3xl font-semibold tracking-tightest sm:text-4xl md:text-[2.75rem] md:leading-[1.1]"
              >
                {title}
              </motion.h2>
            )}
            {intro && (
              <motion.p
                variants={fadeUp}
                className="mt-4 text-balance text-base leading-relaxed text-muted sm:text-lg"
              >
                {intro}
              </motion.p>
            )}
          </motion.div>
        )}
        {children}
      </Container>
    </section>
  );
}
