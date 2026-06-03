'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { Tag } from '@/components/ui/Tag';
import { experience } from '@/data/profile';
import { ArrowUpRight, Briefcase, Check } from '@/components/ui/Icons';
import { fadeUp, viewportOnce } from '@/lib/motion';

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={
        <>
          A track record of{' '}
          <span className="text-gradient">shipping in production.</span>
        </>
      }
      intro="From AI systems at a venture-backed startup to freelance and intern roles — here’s where I’ve built and shipped."
    >
      <div className="relative">
        {/* vertical line */}
        <div
          aria-hidden
          className="absolute left-[19px] top-2 h-[calc(100%-2rem)] w-px bg-gradient-to-b from-brand-500/40 via-[rgb(var(--border)/0.12)] to-transparent sm:left-[27px]"
        />

        <ol className="space-y-6">
          {experience.map((exp, i) => (
            <motion.li
              key={exp.company}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              transition={{ delay: i * 0.05 }}
              className="relative pl-12 sm:pl-20"
            >
              {/* node */}
              <span className="absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-full border border-[rgb(var(--border)/0.12)] bg-[rgb(var(--bg-elevated))] sm:h-14 sm:w-14">
                {exp.current && (
                  <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-brand-500/40" />
                )}
                <span
                  className={`grid h-7 w-7 place-items-center rounded-full sm:h-10 sm:w-10 ${
                    exp.current
                      ? 'bg-brand-gradient text-white shadow-glow'
                      : 'bg-[rgb(var(--surface)/0.05)] text-muted'
                  }`}
                >
                  <Briefcase className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </span>
              </span>

              <SpotlightCard className="p-5 sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-lg font-semibold sm:text-xl">
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/10 px-2 py-0.5 text-2xs font-medium text-emerald-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          Current
                        </span>
                      )}
                    </div>
                    <p className="mt-0.5 text-sm text-muted">
                      {exp.href ? (
                        <a
                          href={exp.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-medium text-brand-300 transition-colors hover:text-brand-200"
                        >
                          {exp.company}
                          <ArrowUpRight className="h-3 w-3" />
                        </a>
                      ) : (
                        <span className="font-medium text-[rgb(var(--text))]">{exp.company}</span>
                      )}
                      {' · '}
                      {exp.mode} · {exp.location}
                    </p>
                  </div>
                  <span className="whitespace-nowrap rounded-full border border-[rgb(var(--border)/0.1)] bg-[rgb(var(--surface)/0.03)] px-3 py-1 text-xs font-medium text-muted">
                    {exp.start} — {exp.end}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-muted">{exp.summary}</p>

                <ul className="mt-4 grid gap-2">
                  {exp.bullets.map((b) => (
                    <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {exp.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </SpotlightCard>
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
