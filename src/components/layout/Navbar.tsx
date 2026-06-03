'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { navLinks, profile } from '@/data/profile';
import { ThemeToggle } from './ThemeToggle';
import { ButtonLink } from '@/components/ui/Button';
import { Close, Menu } from '@/components/ui/Icons';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>('');
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 24));

  // Active-section tracking via IntersectionObserver.
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
      >
        <nav
          className={cn(
            'flex w-full max-w-3xl items-center justify-between gap-2 rounded-full px-2.5 py-2 transition-all duration-300',
            scrolled
              ? 'glass shadow-card'
              : 'border border-transparent bg-transparent'
          )}
        >
          {/* Brand */}
          <a
            href="#top"
            className="group ml-1.5 flex items-center gap-2 rounded-full px-1 py-1"
            aria-label="Back to top"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-gradient text-sm font-bold text-white shadow-glow">
              {profile.monogram}
            </span>
            <span className="hidden text-sm font-semibold tracking-tight sm:block">
              {profile.firstName}
              <span className="text-muted">.dev</span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-0.5 md:flex">
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={cn(
                      'relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors',
                      isActive
                        ? 'text-[rgb(var(--text))]'
                        : 'text-muted hover:text-[rgb(var(--text))]'
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-[rgb(var(--surface)/0.07)]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-1.5">
            <ThemeToggle />
            <ButtonLink
              href="#contact"
              size="sm"
              className="hidden sm:inline-flex"
            >
              Let’s talk
            </ButtonLink>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-full border border-[rgb(var(--border)/0.1)] bg-[rgb(var(--surface)/0.04)] text-[rgb(var(--text))] md:hidden"
            >
              {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-[rgb(var(--bg))]/80 backdrop-blur-xl"
              onClick={() => setOpen(false)}
            />
            <motion.ul
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ delay: 0.05 }}
              className="relative mx-4 mt-24 flex flex-col gap-1 rounded-3xl glass p-4 shadow-card"
            >
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-lg font-medium text-[rgb(var(--text))] transition-colors hover:bg-[rgb(var(--surface)/0.06)]"
                  >
                    {link.label}
                    <span className="text-muted">↗</span>
                  </a>
                </motion.li>
              ))}
              <ButtonLink href="#contact" onClick={() => setOpen(false)} className="mt-2">
                Let’s talk
              </ButtonLink>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
