'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Tag } from '@/components/ui/Tag';
import { Magnetic } from '@/components/ui/Magnetic';
import { projects, type Project } from '@/data/profile';
import { ArrowUpRight, Check, GitHub } from '@/components/ui/Icons';
import { fadeUp, viewportOnce } from '@/lib/motion';
import { cn } from '@/lib/utils';

const accentMap = {
  violet: {
    glow: 'from-brand-500/30 via-brand-700/10',
    ring: 'group-hover:border-brand-500/40',
    text: 'text-brand-300',
    dot: 'bg-brand-500',
  },
  cyan: {
    glow: 'from-cyan-500/30 via-cyan-600/10',
    ring: 'group-hover:border-cyan-500/40',
    text: 'text-cyan-400',
    dot: 'bg-cyan-500',
  },
  emerald: {
    glow: 'from-emerald-500/30 via-emerald-600/10',
    ring: 'group-hover:border-emerald-500/40',
    text: 'text-emerald-400',
    dot: 'bg-emerald-500',
  },
} as const;

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Work"
      title={
        <>
          Products I’ve designed,{' '}
          <span className="text-gradient">built, and shipped.</span>
        </>
      }
      intro="Real applications solving real problems — with the architecture decisions, features, and impact behind each one."
    >
      <div className="grid gap-6 lg:gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const accent = accentMap[project.accent];
  const reversed = index % 2 === 1;

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={cn(
        'group relative grid overflow-hidden rounded-4xl border border-[rgb(var(--border)/0.08)] bg-[rgb(var(--surface)/0.02)] transition-colors duration-500 lg:grid-cols-2',
        accent.ring
      )}
    >
      {/* ---- Visual ---- */}
      <div className={cn('relative min-h-[260px] p-6 sm:p-8 lg:min-h-[420px]', reversed && 'lg:order-2')}>
        <div
          className={cn(
            'relative h-full w-full overflow-hidden rounded-2xl border border-[rgb(var(--border)/0.08)] bg-gradient-to-br',
            accent.glow,
            'to-transparent'
          )}
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={project.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          ) : (
            <BrowserMock project={project} />
          )}
          {/* sheen */}
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-30 mask-fade-b" />
        </div>
      </div>

      {/* ---- Content ---- */}
      <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
        <div className="flex items-center gap-2">
          <span className={cn('h-2 w-2 rounded-full', accent.dot)} />
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
            {project.tagline}
          </span>
        </div>

        <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-[1.7rem]">
          {project.name}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
          {project.problem}
        </p>

        {/* metrics */}
        {project.metrics && (
          <div className="mt-5 flex flex-wrap gap-2.5">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-[rgb(var(--border)/0.08)] bg-[rgb(var(--surface)/0.03)] px-3.5 py-2"
              >
                <div className={cn('font-display text-lg font-semibold', accent.text)}>
                  {m.value}
                </div>
                <div className="text-2xs uppercase tracking-wide text-muted">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* features */}
        <ul className="mt-5 grid gap-2 sm:grid-cols-2">
          {project.features.map((f) => (
            <li key={f} className="flex gap-2 text-sm text-muted">
              <Check className={cn('mt-0.5 h-4 w-4 shrink-0', accent.text)} />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        {/* stack */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>

        {/* links */}
        <div className="mt-7 flex flex-wrap items-center gap-3">
          {project.liveUrl && (
            <Magnetic>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex h-11 items-center gap-2 rounded-full bg-brand-gradient px-5 text-sm font-medium text-white shadow-glow transition-shadow hover:shadow-[0_10px_40px_-8px_rgba(124,92,255,0.6)]"
              >
                Live Demo
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            </Magnetic>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-[rgb(var(--border)/0.1)] bg-[rgb(var(--surface)/0.04)] px-5 text-sm font-medium text-muted transition-colors hover:text-[rgb(var(--text))]"
            >
              <GitHub className="h-4 w-4" />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

/** Stylized browser window mockup used as a project cover when no image is set. */
function BrowserMock({ project }: { project: Project }) {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex items-center gap-1.5 border-b border-white/5 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        <span className="ml-3 truncate rounded-md bg-white/5 px-3 py-1 text-2xs text-white/50">
          {project.liveUrl?.replace('https://', '') ?? project.slug}
        </span>
      </div>
      <div className="relative grid flex-1 place-items-center p-6">
        <div className="text-center">
          <div className="font-display text-3xl font-bold text-white/90 sm:text-4xl">
            {project.name.split('—')[0].trim()}
          </div>
          <div className="mt-2 text-xs uppercase tracking-[0.2em] text-white/40">
            {project.stack.slice(0, 3).join('  ·  ')}
          </div>
        </div>
        {/* faux UI bars */}
        <div className="absolute inset-x-6 bottom-6 space-y-2">
          <div className="h-2 w-3/4 rounded-full bg-white/10" />
          <div className="h-2 w-1/2 rounded-full bg-white/[0.07]" />
        </div>
      </div>
    </div>
  );
}
