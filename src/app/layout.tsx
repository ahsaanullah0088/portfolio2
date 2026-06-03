import type { Metadata, Viewport } from 'next';
import { Inter, Sora, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Aurora } from '@/components/effects/Aurora';
import { Grain } from '@/components/effects/Grain';
import { ScrollProgress } from '@/components/effects/ScrollProgress';
import { profile, social } from '@/data/profile';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['500', '600', '700', '800'],
});
const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const siteUrl = 'https://ahsaanullah.netlify.app';
const description = `${profile.name} — ${profile.role} building fast, AI-powered web apps with React, Next.js, Node and TypeScript. Currently engineering the AI construction OS at Sledge.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s · ${profile.name}`,
  },
  description,
  keywords: [
    'Ahsaan Ullah',
    'Software Engineer',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'Node.js',
    'TypeScript',
    'MERN Stack',
    'AI Engineer',
    'Freelance Developer',
    'Lahore Pakistan',
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: `${profile.name} — Portfolio`,
    title: `${profile.name} — ${profile.role}`,
    description,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: `${profile.name} — ${profile.role}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} — ${profile.role}`,
    description,
    images: ['/opengraph-image'],
  },
  alternates: { canonical: siteUrl },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  category: 'technology',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#06060A' },
    { media: '(prefers-color-scheme: light)', color: '#FAFAFC' },
  ],
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: profile.role,
  email: profile.email,
  telephone: profile.phone,
  url: siteUrl,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lahore',
    addressCountry: 'PK',
  },
  worksFor: { '@type': 'Organization', name: 'Sledge', url: 'https://getsledge.com' },
  sameAs: [social.github, social.linkedin, social.fiverr],
  knowsAbout: [
    'React',
    'Next.js',
    'Node.js',
    'TypeScript',
    'MongoDB',
    'AI Automation',
    'Full Stack Development',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${sora.variable} ${mono.variable}`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-500 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
          >
            Skip to content
          </a>
          <Aurora />
          <Grain />
          <ScrollProgress />
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
