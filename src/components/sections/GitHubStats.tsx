'use client';

/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { ButtonLink } from '@/components/ui/Button';
import { coding, social } from '@/data/profile';
import { ArrowUpRight, Code, GitHub, LeetCode } from '@/components/ui/Icons';
import { fadeUp, stagger, viewportOnce } from '@/lib/motion';

const user = social.githubUser;
// Shared theming for github-readme-stats services.
const theme =
  'hide_border=true&bg_color=00000000&title_color=8B86FF&text_color=a1a1b4&icon_color=22D3EE';

const statsUrl = `https://github-readme-stats.vercel.app/api?username=${user}&show_icons=true&${theme}&include_all_commits=true&count_private=true`;
const langsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${user}&layout=compact&langs_count=8&${theme}`;
const streakUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${user}&hide_border=true&background=00000000&stroke=8B86FF&ring=22D3EE&fire=22D3EE&currStreakLabel=8B86FF&sideLabels=a1a1b4&dates=6b6b80&currStreakNum=f4f4f8&sideNums=f4f4f8`;
const chartUrl = `https://ghchart.rshah.org/7C5CFF/${user}`;

const leetStats = [
  { label: 'Easy', value: coding.leetcode.easy, total: coding.leetcode.solved, color: 'bg-emerald-400' },
  { label: 'Medium', value: coding.leetcode.medium, total: coding.leetcode.solved, color: 'bg-amber-400' },
  { label: 'Hard', value: coding.leetcode.hard, total: coding.leetcode.solved, color: 'bg-rose-400' },
];

export function GitHubStats() {
  return (
    <Section
      id="github"
      eyebrow="Code & Contributions"
      title={
        <>
          I write code{' '}
          <span className="text-gradient">in the open.</span>
        </>
      }
      intro="Live stats straight from GitHub and LeetCode — consistency, contributions, and problem-solving in one place."
    >
      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid gap-4 lg:grid-cols-3"
      >
        {/* GitHub stats */}
        <motion.div variants={fadeUp} className="min-w-0 lg:col-span-2">
          <SpotlightCard className="h-full p-5 sm:p-6">
            <CardHeader
              icon={<GitHub className="h-4 w-4" />}
              title="GitHub Statistics"
              href={social.github}
            />
            <div className="mt-4 grid items-center gap-4 sm:grid-cols-[1.4fr_1fr]">
              <StatImage src={statsUrl} alt={`${user} GitHub statistics`} label="GitHub stats" />
              <StatImage src={langsUrl} alt={`${user} most used languages`} label="Top languages" />
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Streak */}
        <motion.div variants={fadeUp} className="min-w-0">
          <SpotlightCard className="flex h-full flex-col p-5 sm:p-6">
            <CardHeader icon={<Code className="h-4 w-4" />} title="Contribution Streak" />
            <div className="grid flex-1 place-items-center py-2">
              <StatImage src={streakUrl} alt={`${user} contribution streak`} label="Streak stats" />
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Contribution graph */}
        <motion.div variants={fadeUp} className="min-w-0 lg:col-span-2">
          <SpotlightCard className="h-full p-5 sm:p-6">
            <CardHeader
              icon={<GitHub className="h-4 w-4" />}
              title="Contribution Graph"
              href={social.github}
            />
            <div className="mt-5 min-w-0 overflow-x-auto no-scrollbar">
              <StatImage
                src={chartUrl}
                alt={`${user} contribution graph`}
                label="Contribution graph"
                className="min-w-[560px]"
              />
            </div>
          </SpotlightCard>
        </motion.div>

        {/* LeetCode */}
        <motion.div variants={fadeUp} className="min-w-0">
          <SpotlightCard className="flex h-full flex-col p-5 sm:p-6">
            <CardHeader
              icon={<LeetCode className="h-4 w-4" />}
              title="LeetCode"
              href={social.leetcode}
            />
            <div className="mt-4 flex items-baseline gap-2">
              <span className="font-display text-4xl font-bold text-gradient">
                {coding.leetcode.solved}+
              </span>
              <span className="text-sm text-muted">problems solved</span>
            </div>
            <span className="mt-1 inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-500/10 px-2.5 py-0.5 text-xs font-medium text-brand-300">
              {coding.leetcode.rank}
            </span>

            <div className="mt-5 space-y-3">
              {leetStats.map((s) => (
                <div key={s.label}>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted">{s.label}</span>
                    <span className="font-medium text-[rgb(var(--text))]">{s.value}</span>
                  </div>
                  <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-[rgb(var(--surface)/0.06)]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${Math.min((s.value / s.total) * 100, 100)}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                      className={`h-full rounded-full ${s.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </SpotlightCard>
        </motion.div>
      </motion.div>

      {/* Journey */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-6"
      >
        <SpotlightCard className="p-6 sm:p-8">
          <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:items-center">
            <h3 className="font-display text-lg font-semibold">
              My coding
              <br className="hidden sm:block" /> journey
            </h3>
            <div className="grid gap-3 sm:grid-cols-3">
              {coding.journey.map((j, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-[rgb(var(--border)/0.08)] bg-[rgb(var(--surface)/0.03)] p-4 text-sm leading-relaxed text-muted"
                >
                  <span className="mb-2 block font-mono text-xs text-brand-400">0{i + 1}</span>
                  {j}
                </div>
              ))}
            </div>
          </div>
        </SpotlightCard>
      </motion.div>

      <div className="mt-8 flex justify-center">
        <ButtonLink href={social.github} target="_blank" rel="noopener noreferrer" variant="secondary">
          <GitHub className="h-4 w-4" />
          Follow on GitHub
          <ArrowUpRight className="h-4 w-4" />
        </ButtonLink>
      </div>
    </Section>
  );
}

/**
 * Loads a third-party stat image (github-readme-stats / streak / ghchart).
 * These public services are rate-limited and occasionally fail — on error we
 * retry once with a cache-buster, then show a clean fallback tile instead of a
 * broken image.
 */
function StatImage({
  src,
  alt,
  label,
  className,
}: {
  src: string;
  alt: string;
  label: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);

  if (failed) {
    return (
      <a
        href={social.github}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex min-h-[120px] w-full flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-[rgb(var(--border)/0.14)] bg-[rgb(var(--surface)/0.02)] p-5 text-center transition-colors hover:border-brand-500/30 ${className ?? ''}`}
      >
        <GitHub className="h-5 w-5 text-brand-300" />
        <span className="text-xs text-muted">
          {label} unavailable right now — view live on GitHub
        </span>
        <span className="inline-flex items-center gap-1 text-xs font-medium text-brand-300">
          @{user} <ArrowUpRight className="h-3 w-3" />
        </span>
      </a>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      key={attempt}
      src={attempt === 0 ? src : `${src}${src.includes('?') ? '&' : '?'}r=${attempt}`}
      alt={alt}
      loading="lazy"
      referrerPolicy="no-referrer"
      className={`w-full ${className ?? ''}`}
      onError={() => (attempt < 1 ? setAttempt((a) => a + 1) : setFailed(true))}
    />
  );
}

function CardHeader({
  icon,
  title,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  href?: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        <span className="grid h-8 w-8 place-items-center rounded-lg border border-[rgb(var(--border)/0.1)] bg-[rgb(var(--surface)/0.04)] text-brand-300">
          {icon}
        </span>
        <h3 className="text-sm font-semibold">{title}</h3>
      </div>
      {href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${title}`}
          className="text-muted transition-colors hover:text-[rgb(var(--text))]"
        >
          <ArrowUpRight className="h-4 w-4" />
        </a>
      )}
    </div>
  );
}
