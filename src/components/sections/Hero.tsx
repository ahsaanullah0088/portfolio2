'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { Magnetic } from '@/components/ui/Magnetic';
import { Counter } from '@/components/ui/Counter';
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  GitHub,
  LinkedIn,
  MapPin,
  Sparkles,
} from '@/components/ui/Icons';
import { profile, social, stats } from '@/data/profile';
import { easePremium } from '@/lib/motion';

const marquee = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'PostgreSQL',
  'Tailwind CSS', 'Framer Motion', 'Stripe', 'Socket.io', 'AWS', 'AI / LLM',
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easePremium } },
};

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-40">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          {/* ---- Left: copy ---- */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--border)/0.1)] bg-[rgb(var(--surface)/0.04)] px-3.5 py-1.5 text-xs font-medium text-muted backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-emerald-400" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                {profile.availability}
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tightest sm:text-6xl lg:text-[4.1rem]"
            >
              <span className="block text-muted/90 text-[0.42em] font-medium uppercase tracking-[0.28em] mb-4">
                {profile.name}
              </span>
              <span className="text-shimmer">Software Engineer</span>{' '}
              <span className="text-[rgb(var(--text))]">building</span>
              <br className="hidden sm:block" />{' '}
              <span className="text-[rgb(var(--text))]">AI-powered products</span>{' '}
              <span className="text-gradient">that ship.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
            >
              {profile.tagline}
            </motion.p>

            <motion.div variants={item} className="mt-6 flex items-center gap-2 text-sm text-muted">
              <MapPin className="h-4 w-4 text-brand-400" />
              {profile.location}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
              <Magnetic>
                <ButtonLink href="#projects" size="lg">
                  View Projects
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </ButtonLink>
              </Magnetic>
              <ButtonLink
                href={profile.resumeUrl}
                download
                variant="secondary"
                size="lg"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </ButtonLink>
              <ButtonLink href="#contact" variant="ghost" size="lg">
                Contact Me
              </ButtonLink>
            </motion.div>

            {/* quick socials */}
            <motion.div variants={item} className="mt-8 flex items-center gap-3">
              <span className="text-xs uppercase tracking-[0.18em] text-muted">Find me</span>
              <div className="h-px w-8 bg-[rgb(var(--border)/0.15)]" />
              {[
                { href: social.github, Icon: GitHub, label: 'GitHub' },
                { href: social.linkedin, Icon: LinkedIn, label: 'LinkedIn' },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-[rgb(var(--border)/0.1)] bg-[rgb(var(--surface)/0.04)] text-muted transition-all hover:-translate-y-0.5 hover:text-[rgb(var(--text))]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* ---- Right: profile orb ---- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: easePremium, delay: 0.3 }}
            className="relative mx-auto aspect-square w-full max-w-[360px] lg:max-w-[420px]"
          >
            {/* orbit rings */}
            <div className="absolute inset-0 rounded-full border border-[rgb(var(--border)/0.08)]" />
            <div className="absolute inset-[8%] rounded-full border border-[rgb(var(--border)/0.06)]" />
            <div className="absolute inset-[16%] rounded-full border border-[rgb(var(--border)/0.05)]" />

            {/* glow */}
            <div className="absolute inset-[12%] rounded-full bg-brand-gradient opacity-30 blur-3xl" />

            {/* avatar / monogram */}
            <div className="absolute inset-[18%] overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-ink-200 to-ink shadow-glow">
              {profile.avatar ? (
                <Image
                  src={profile.avatar}
                  alt={`${profile.name} — ${profile.role}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 70vw, 320px"
                  className="object-cover"
                />
              ) : (
                <div className="grid h-full w-full place-items-center bg-[radial-gradient(circle_at_30%_20%,rgba(124,92,255,0.35),transparent_60%)]">
                  <span className="font-display text-7xl font-bold text-gradient">
                    {profile.monogram}
                  </span>
                </div>
              )}
            </div>

            {/* floating chips */}
            <FloatingChip className="left-[-6%] top-[22%]" delay={0.6}>
              <Sparkles className="h-3.5 w-3.5 text-brand-400" /> AI Parser @ Sledge
            </FloatingChip>
            <FloatingChip className="right-[-8%] top-[14%]" delay={0.8}>
              ⚡ Next.js + TS
            </FloatingChip>
            <FloatingChip className="bottom-[10%] right-[-4%]" delay={1}>
              🟢 {profile.yearsExperience}+ yrs shipping
            </FloatingChip>
            <FloatingChip className="bottom-[16%] left-[-6%]" delay={1.2}>
              ★ Fiverr {social.fiverrLevel.replace(' Seller', '')}
            </FloatingChip>
          </motion.div>
        </div>

        {/* ---- Stats ---- */}
        <motion.dl
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-[rgb(var(--border)/0.08)] bg-[rgb(var(--border)/0.06)] sm:mt-20 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={item}
              className="bg-[rgb(var(--bg))] px-5 py-6 text-center sm:px-6 sm:py-7"
            >
              <dd className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                <Counter value={s.value} />
                <span className="text-gradient">{s.suffix}</span>
              </dd>
              <dt className="mt-1.5 text-xs text-muted sm:text-sm">{s.label}</dt>
            </motion.div>
          ))}
        </motion.dl>
      </Container>

      {/* ---- Tech marquee ---- */}
      <div className="relative mt-16 overflow-hidden py-2 mask-fade-x sm:mt-20">
        <div className="flex w-max animate-marquee gap-3">
          {[...marquee, ...marquee].map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="whitespace-nowrap rounded-full border border-[rgb(var(--border)/0.08)] bg-[rgb(var(--surface)/0.03)] px-4 py-2 text-sm text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* scroll cue */}
      <div className="mt-10 flex justify-center pb-4">
        <a
          href="#about"
          aria-label="Scroll to about"
          className="flex flex-col items-center gap-2 text-muted transition-colors hover:text-[rgb(var(--text))]"
        >
          <span className="text-[0.65rem] uppercase tracking-[0.2em]">Scroll</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="h-4 w-4" />
          </motion.span>
        </a>
      </div>
    </section>
  );
}

function FloatingChip({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5, ease: easePremium }}
      className={`absolute z-10 ${className ?? ''}`}
    >
      <div className="animate-float">
        <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[rgb(var(--border)/0.12)] bg-[rgb(var(--bg-elevated))]/80 px-3 py-1.5 text-xs font-medium text-[rgb(var(--text))] shadow-card backdrop-blur-md">
          {children}
        </span>
      </div>
    </motion.div>
  );
}
