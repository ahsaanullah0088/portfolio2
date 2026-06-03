'use client';

import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { Button } from '@/components/ui/Button';
import { profile, social } from '@/data/profile';
import {
  ArrowUpRight,
  Check,
  Fiverr,
  GitHub,
  LinkedIn,
  Mail,
  MapPin,
  Phone,
} from '@/components/ui/Icons';
import { fadeUp, viewportOnce } from '@/lib/motion';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const channels = [
  { label: 'Email', value: profile.email, href: social.email, Icon: Mail },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phoneHref}`, Icon: Phone },
  { label: 'Location', value: profile.location, href: undefined, Icon: MapPin },
];

const socials = [
  { label: 'GitHub', href: social.github, Icon: GitHub },
  { label: 'LinkedIn', href: social.linkedin, Icon: LinkedIn },
  { label: 'Fiverr', href: social.fiverr, Icon: Fiverr },
];

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    setStatus('submitting');
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (!res.ok || !json.ok) {
        throw new Error(json.error || 'Something went wrong.');
      }

      // No mail provider configured server-side → open prefilled email client.
      if (json.fallback) {
        const subject = encodeURIComponent(`Portfolio enquiry from ${data.name}`);
        const bodyText = encodeURIComponent(`${data.message}\n\n— ${data.name} (${data.email})`);
        window.location.href = `mailto:${profile.email}?subject=${subject}&body=${bodyText}`;
      }

      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={
        <>
          Let’s build something{' '}
          <span className="text-gradient">worth shipping.</span>
        </>
      }
      intro="Have a role, a project, or an idea? I’m open to remote opportunities and freelance work — drop me a line and I’ll reply within a day."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        {/* ---- Left: info ---- */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-col gap-4"
        >
          <SpotlightCard className="p-6 sm:p-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-emerald-400" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {profile.availability}
            </span>

            <h3 className="mt-5 font-display text-xl font-semibold">
              Prefer a direct line?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Reach me on any of these — I read every message.
            </p>

            <ul className="mt-6 space-y-3">
              {channels.map(({ label, value, href, Icon }) => {
                const content = (
                  <div className="flex items-center gap-3.5">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-[rgb(var(--border)/0.1)] bg-[rgb(var(--surface)/0.04)] text-brand-300">
                      <Icon className="h-[18px] w-[18px]" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-2xs uppercase tracking-wide text-muted">{label}</div>
                      <div className="truncate text-sm font-medium text-[rgb(var(--text))]">
                        {value}
                      </div>
                    </div>
                  </div>
                );
                return (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        className="block rounded-2xl p-1 transition-colors hover:bg-[rgb(var(--surface)/0.04)]"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="p-1">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 hairline" />
            <div className="mt-5 flex items-center gap-2">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-[rgb(var(--border)/0.1)] bg-[rgb(var(--surface)/0.04)] text-muted transition-all hover:-translate-y-0.5 hover:text-[rgb(var(--text))]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </SpotlightCard>
        </motion.div>

        {/* ---- Right: form ---- */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <SpotlightCard className="p-6 sm:p-8">
            {status === 'success' ? (
              <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 14 }}
                  className="grid h-16 w-16 place-items-center rounded-full bg-brand-gradient text-white shadow-glow"
                >
                  <Check className="h-8 w-8" />
                </motion.span>
                <h3 className="mt-5 font-display text-xl font-semibold">Message on its way!</h3>
                <p className="mt-2 max-w-sm text-sm text-muted">
                  Thanks for reaching out, I’ll get back to you shortly. If your mail client opened,
                  just hit send.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-sm font-medium text-brand-300 hover:text-brand-200"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4" noValidate>
                {/* honeypot */}
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  className="absolute left-[-9999px]"
                  aria-hidden
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name" htmlFor="name">
                    <input
                      id="name"
                      name="name"
                      required
                      minLength={2}
                      placeholder="Jane Doe"
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Email" htmlFor="email">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@company.com"
                      className={inputClass}
                    />
                  </Field>
                </div>

                <Field label="Message" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    required
                    minLength={10}
                    rows={5}
                    placeholder="Tell me about your role, project, or idea…"
                    className={`${inputClass} resize-none`}
                  />
                </Field>

                {status === 'error' && (
                  <p className="text-sm text-rose-400" role="alert">
                    {error}
                  </p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </Button>

                <p className="text-center text-2xs text-muted">
                  Protected against spam. Your details are only used to reply.
                </p>
              </form>
            )}
          </SpotlightCard>
        </motion.div>
      </div>
    </Section>
  );
}

const inputClass =
  'w-full rounded-xl border border-[rgb(var(--border)/0.1)] bg-[rgb(var(--surface)/0.03)] px-4 py-3 text-sm text-[rgb(var(--text))] placeholder:text-muted/60 transition-colors focus:border-brand-500/50 focus:outline-none focus:ring-2 focus:ring-brand-500/20';

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 block text-xs font-medium text-muted">{label}</span>
      {children}
    </label>
  );
}
