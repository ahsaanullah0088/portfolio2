'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { testimonials } from '@/data/profile';
import { Quote, Star } from '@/components/ui/Icons';
import { fadeUp, stagger, viewportOnce } from '@/lib/motion';

const sourceTone: Record<string, string> = {
  Fiverr: 'text-emerald-400',
  LinkedIn: 'text-cyan-400',
  Colleague: 'text-brand-300',
};

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      eyebrow="Testimonials"
      title={
        <>
          Trusted by clients{' '}
          <span className="text-gradient">and teammates.</span>
        </>
      }
      intro="What founders, clients, and fellow engineers say about working with me."
    >
      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid gap-4 md:grid-cols-3"
      >
        {testimonials.map((t) => (
          <motion.div key={t.name + t.title} variants={fadeUp}>
            <SpotlightCard className="flex h-full flex-col p-6">
              <div className="flex items-center justify-between">
                <Quote className="h-7 w-7 text-brand-500/40" />
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              <p className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-[rgb(var(--text))]/85">
                “{t.quote}”
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-[rgb(var(--border)/0.08)] pt-4">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-gradient text-sm font-bold text-white">
                  {t.name.split(' ').map((w) => w[0]).join('').slice(0, 2)}
                </span>
                <div className="min-w-0">
                  <div className="truncate text-sm font-semibold">{t.name}</div>
                  <div className="truncate text-xs text-muted">
                    {t.title}
                    {t.source && (
                      <>
                        {' · '}
                        <span className={sourceTone[t.source] ?? 'text-muted'}>{t.source}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </motion.div>

      <p className="mt-6 text-center text-xs text-muted">
        {/* Placeholder note — swap with real verified reviews in data/profile.ts */}
        Sample testimonials — replace with verified client &amp; colleague reviews.
      </p>
    </Section>
  );
}
