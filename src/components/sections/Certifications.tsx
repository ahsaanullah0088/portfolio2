'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { achievements, type Achievement } from '@/data/profile';
import { Badge, Trophy, Sparkles, Users, GraduationCap } from '@/components/ui/Icons';
import { fadeUp, stagger, viewportOnce } from '@/lib/motion';

const typeMeta: Record<
  Achievement['type'],
  { Icon: typeof Badge; tone: string }
> = {
  Ambassador: { Icon: Badge, tone: 'text-cyan-400 border-cyan-500/25 bg-cyan-500/10' },
  Fellowship: { Icon: Sparkles, tone: 'text-brand-300 border-brand-500/25 bg-brand-500/10' },
  Award: { Icon: Trophy, tone: 'text-amber-400 border-amber-500/25 bg-amber-500/10' },
  Leadership: { Icon: Users, tone: 'text-emerald-400 border-emerald-500/25 bg-emerald-500/10' },
  Mentorship: { Icon: GraduationCap, tone: 'text-rose-400 border-rose-500/25 bg-rose-500/10' },
};

export function Certifications() {
  return (
    <Section
      id="achievements"
      eyebrow="Certifications & Achievements"
      title={
        <>
          Recognized for{' '}
          <span className="text-gradient">impact and leadership.</span>
        </>
      }
      intro="Fellowships, ambassadorships, awards, and the communities I help lead and grow."
    >
      <motion.div
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {achievements.map((a) => {
          const meta = typeMeta[a.type];
          const Icon = meta.Icon;
          return (
            <motion.div key={a.title} variants={fadeUp}>
              <SpotlightCard className="flex h-full flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <span
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl border ${meta.tone}`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span
                    className={`rounded-full border px-2.5 py-0.5 text-2xs font-medium uppercase tracking-wide ${meta.tone}`}
                  >
                    {a.type}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-base font-semibold">{a.title}</h3>
                <p className="text-sm text-muted">{a.org}</p>
                {a.year && <p className="mt-0.5 text-xs text-muted/70">{a.year}</p>}

                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{a.blurb}</p>
              </SpotlightCard>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
