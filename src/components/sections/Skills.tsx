'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { skillGroups } from '@/data/profile';
import { iconMap, Code } from '@/components/ui/Icons';
import { fadeUp, stagger, viewportOnce } from '@/lib/motion';

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={
        <>
          A full-stack toolkit,{' '}
          <span className="text-gradient">end to end.</span>
        </>
      }
      intro="The languages, frameworks, and platforms I reach for to take an idea from blank file to deployed product."
    >
      <motion.div
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skillGroups.map((group) => {
          const Icon = iconMap[group.icon as keyof typeof iconMap] ?? Code;
          return (
            <motion.div key={group.category} variants={fadeUp}>
              <SpotlightCard className="h-full p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-[rgb(var(--border)/0.1)] bg-[rgb(var(--surface)/0.04)] text-brand-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-base font-semibold">{group.category}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="group/skill inline-flex items-center gap-1.5 rounded-lg border border-[rgb(var(--border)/0.08)] bg-[rgb(var(--surface)/0.03)] px-2.5 py-1.5 text-sm text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-500/30 hover:text-[rgb(var(--text))]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-500/50 transition-colors group-hover/skill:bg-brand-400" />
                      {skill}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
