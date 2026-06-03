import { Container } from '@/components/ui/Container';
import { navLinks, profile, social } from '@/data/profile';
import { GitHub, LinkedIn, Fiverr, Mail } from '@/components/ui/Icons';

const socials = [
  { label: 'GitHub', href: social.github, Icon: GitHub },
  { label: 'LinkedIn', href: social.linkedin, Icon: LinkedIn },
  { label: 'Fiverr', href: social.fiverr, Icon: Fiverr },
  { label: 'Email', href: social.email, Icon: Mail },
];

export function Footer() {
  return (
    <footer className="relative border-t border-[rgb(var(--border)/0.08)] py-14">
      <Container>
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-gradient text-sm font-bold text-white shadow-glow">
                {profile.monogram}
              </span>
              <span className="text-base font-semibold tracking-tight">
                {profile.name}
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {profile.shortBio} Currently building the AI construction OS at Sledge.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-sm text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-emerald-400" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {profile.availability}
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Navigate
              </h3>
              <ul className="mt-4 space-y-2.5">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-sm text-muted transition-colors hover:text-[rgb(var(--text))]"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Connect
              </h3>
              <ul className="mt-4 space-y-2.5">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted transition-colors hover:text-[rgb(var(--text))]"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Get in touch
              </h3>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a
                    href={social.email}
                    className="text-sm text-muted transition-colors hover:text-[rgb(var(--text))]"
                  >
                    {profile.email}
                  </a>
                </li>
                <li className="text-sm text-muted">{profile.location}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 hairline" />

        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {profile.name}. Designed & built with care.
          </p>
          <div className="flex items-center gap-2">
            {socials.map(({ label, href, Icon }) => (
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
          </div>
        </div>
      </Container>
    </footer>
  );
}
