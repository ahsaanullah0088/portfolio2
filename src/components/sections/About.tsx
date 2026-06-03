'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { Reveal } from '@/components/ui/Reveal';
import { about, education, profile } from '@/data/profile';
import { iconMap, GraduationCap, Check } from '@/components/ui/Icons';
import { fadeUp, stagger, viewportOnce } from '@/lib/motion';

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={
        <>
          Engineer by craft,{' '}
          <span className="text-gradient">product-minded</span> by instinct.
        </>
      }
      intro="I care about the details that make software feel fast, trustworthy, and effortless — from the first paint to the last edge case."
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        {/* Narrative */}
        <div>
          <motion.div
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="space-y-5"
          >
            {about.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="text-pretty text-base leading-relaxed text-muted sm:text-[1.05rem]"
              >
                {i === 0 ? (
                  <span className="float-left mr-3 mt-1 font-display text-5xl font-bold leading-none text-gradient">
                    {p.charAt(0)}
                  </span>
                ) : null}
                {i === 0 ? p.slice(1) : p}
              </motion.p>
            ))}
          </motion.div>

          {/* Education card */}
          <Reveal className="mt-8" delay={0.1}>
            <SpotlightCard className="p-6">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-brand-500/20 bg-brand-500/10 text-brand-300">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold">{education.degree}</h3>
                  <p className="text-sm text-muted">
                    {education.school} · {education.location}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {education.coursework.map((c) => (
                      <span
                        key={c}
                        className="rounded-md border border-[rgb(var(--border)/0.08)] bg-[rgb(var(--surface)/0.03)] px-2 py-0.5 text-2xs text-muted"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>

        {/* Highlight cards */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-4 sm:grid-cols-2"
        >
          {about.highlights.map((h) => {
            const Icon = iconMap[h.icon as keyof typeof iconMap] ?? Check;
            return (
              <motion.div key={h.title} variants={fadeUp}>
                <SpotlightCard className="h-full p-5">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-[rgb(var(--border)/0.1)] bg-[rgb(var(--surface)/0.04)] text-brand-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold">{h.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{h.body}</p>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}
