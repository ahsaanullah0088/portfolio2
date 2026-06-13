/**
 * ============================================================================
 *  PROFILE DATA — single source of truth for the entire portfolio.
 *  Edit values here; every section reads from this file.
 *  Fields marked with `// TODO:` are best-guess placeholders you can refine.
 * ============================================================================
 */

export const profile = {
  name: 'Ahsaan Ullah',
  firstName: 'Ahsaan',
  /** Short role used in nav / meta */
  role: 'Software Engineer',
  /** Hero headline — keep it punchy and outcome-oriented */
  headline: 'I build fast, AI-powered products for the web.',
  /** Sub-headline / positioning statement */
  tagline:
    'Software Engineer specializing in full-stack web apps, real-time systems, and AI automation — from multi-vendor marketplaces to the Sledge AI construction OS.',
  /** One-liner shown under the avatar / in compact spots */
  shortBio:
    'Full-stack engineer (React, Next.js, Node) shipping production software end to end.',
  location: 'Lahore, Pakistan',
  availability: 'Open to remote roles & freelance',
  email: 'ahsaanu70@gmail.com',
  phone: '+92 325 7175094',
  phoneHref: '+923257175094',
  resumeUrl: '/resume_ahsaan_ullah.pdf',

  /** Years writing code — drives the "X+ years" stat. */
  yearsExperience: 3,

  /** Avatar: drop a file in /public and set this path, or leave null for the
   *  designed monogram fallback. e.g. '/avatar.jpg' */
  avatar: null as string | null,
  monogram: 'AU',
} as const;

/* ---------------------------------------------------------------------------
 *  SOCIAL / EXTERNAL LINKS
 * ------------------------------------------------------------------------- */
export const social = {
  github: 'https://github.com/ahsaanullah0088',
  githubUser: 'ahsaanullah0088',
  linkedin: 'https://www.linkedin.com/in/ahsaan-ullah-769172253/',
  fiverr: 'https://www.fiverr.com/users/ahsaanullah141',
  fiverrLevel: 'Level 1 Seller',
  // TODO: add your LeetCode username to enable the live link
  leetcode: 'https://leetcode.com/u/ahsaanullah0088/',
  leetcodeUser: 'ahsaanullah0088',
  portfolio: 'https://ahsaan-ullah.vercel.app/',
  email: 'mailto:ahsaanu70@gmail.com',
} as const;

/* ---------------------------------------------------------------------------
 *  TOP-LINE STATS (Hero / About marquee)
 * ------------------------------------------------------------------------- */
export const stats: { label: string; value: string; suffix?: string }[] = [
  { label: 'Years building', value: '3', suffix: '+' },
  { label: 'Projects shipped', value: '15', suffix: '+' },
  { label: 'Tech stacks mastered', value: '20', suffix: '+' },
  { label: 'Fiverr rating', value: '5.0', suffix: '★' },
];

/* ---------------------------------------------------------------------------
 *  ABOUT — narrative + highlights
 * ------------------------------------------------------------------------- */
export const about = {
  paragraphs: [
    'I’m a results-driven software engineer who loves turning ambiguous problems into clean, fast, production-grade products. I work across the stack — crafting polished React/Next.js interfaces, designing resilient Node APIs, and wiring up real-time and AI-powered workflows.',
    'Recently I built Sledge, an AI operating system for the construction industry — engineering the AI document parser, backend services, and automated contract & project generation that replace hours of manual office work.',
    'Along the way I’ve shipped multi-vendor e-commerce and healthcare platforms, mentored bootcamp developers, led a Microsoft student community chapter, and earned recognition as an MLSA Alpha Ambassador and Headstarter SWE Fellow.',
  ],
  highlights: [
    {
      title: 'Performance-obsessed',
      body: 'Code-splitting, memoization, virtualization, and multi-layer caching (Redis, in-memory, browser) to keep apps fast at scale.',
      icon: 'gauge',
    },
    {
      title: 'Real-time & AI',
      body: 'Socket.io live systems and AI document parsing / workflow automation that turn raw inputs into structured action.',
      icon: 'sparkles',
    },
    {
      title: 'Ships end to end',
      body: 'From Figma to deploy: REST APIs, payments (Stripe/Google Pay), auth (JWT), CI/CD on Vercel, Netlify & Render.',
      icon: 'rocket',
    },
    {
      title: 'Community leader',
      body: 'MLSA UE Chapter Co-Lead and Dev Weekends mentor — I teach, lead, and lift other developers up.',
      icon: 'users',
    },
  ],
} as const;

/* ---------------------------------------------------------------------------
 *  EXPERIENCE (timeline — most recent first)
 * ------------------------------------------------------------------------- */
export type Experience = {
  company: string;
  role: string;
  start: string;
  end: string;
  current?: boolean;
  location: string;
  mode: 'Remote' | 'On-site' | 'Hybrid';
  href?: string;
  summary: string;
  bullets: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: 'Code Linx',
    role: 'Associate Software Engineer',
    // TODO: adjust dates if needed
    start: 'Sep 2025',
    end: 'Present',
    current: true,
    location: 'Remote',
    mode: 'Remote',
    summary:
      'Building and improving production web & mobile apps across client products — shipping new features, performance gains, and polished, accessible interfaces.',
    bullets: [
      'Sledge (AI construction OS): implemented the AI document parser and automatic contract & project generation, cutting manual office work from hours to minutes.',
      'Visume (video-résumé hiring platform, AU market): built web & React Native mobile features — video profiles, AI mock interviews (OpenAI), Stripe subscriptions and in-app chat across candidate & employer flows.',
      'Caleo (workforce management for public safety): built responsive UI for shift/overtime staffing, scheduling, and real-time reporting dashboards.',
      'Across projects: optimized rendering and bundle size, integrated REST APIs, and shipped reliable, maintainable front-end code.',
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'REST APIs'],
  },
  {
    company: 'Infini Studio',
    role: 'MERN Stack Intern',
    start: 'Jun 2025',
    end: 'Sep 2025',
    location: 'Lahore, Pakistan',
    mode: 'Remote',
    summary:
      'Turned UI/UX designs into fully functional, responsive web apps and shipped production-ready features end to end.',
    bullets: [
      'Built responsive web apps from designs using Tailwind CSS and Material UI with reusable data-fetching logic.',
      'Integrated secure payment gateways — Stripe, Google Pay, FastPay, PayPal — plus cart systems and admin features.',
      'Optimized re-renders with useMemo and dependency-based updates; managed state with useReducer/useState and Context.',
      'Worked with Cloudinary (image upload), Nodemailer (email), and Google Maps APIs; deployed on Vercel, Netlify & Render.',
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux Toolkit', 'Stripe', 'Tailwind CSS'],
  },
  {
    company: 'Confiniti — University of Education',
    role: 'Lead',
    // TODO: adjust the exact months if needed (kept as a 1-year span)
    start: 'Jan 2024',
    end: 'Jan 2025',
    location: 'Lahore, Pakistan',
    mode: 'On-site',
    summary:
      'Led the Confiniti society at the University of Education for a year — driving tech events, workshops, and a growing student developer community.',
    bullets: [
      'Led and coordinated the Confiniti team, organizing technical events, workshops, and competitions over a full year.',
      'Grew participation and engagement across the student developer community on campus.',
      'Mentored juniors and connected members with industry opportunities and learning resources.',
      'Owned planning, delegation, and on-the-day execution for society initiatives end to end.',
    ],
    stack: ['Leadership', 'Event Management', 'Public Speaking', 'Team Building', 'Community'],
  },
];

/* ---------------------------------------------------------------------------
 *  SKILLS (categorized)
 * ------------------------------------------------------------------------- */
export type SkillGroup = { category: string; icon: string; skills: string[] };

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    icon: 'layout',
    skills: ['React', 'React Native', 'Next.js', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'Material UI', 'Framer Motion', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend',
    icon: 'server',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'Socket.io', 'JWT Auth', 'Nodemailer', 'WebSockets'],
  },
  {
    category: 'Databases',
    icon: 'database',
    skills: ['MongoDB', 'PostgreSQL', 'SQL', 'Supabase', 'Firebase', 'Redis (caching)'],
  },
  {
    category: 'Cloud & DevOps',
    icon: 'cloud',
    skills: ['AWS', 'GCP', 'Vercel', 'Netlify', 'Render', 'CI/CD', 'Git'],
  },
  {
    category: 'AI & Automation',
    icon: 'sparkles',
    skills: ['AI Document Parsing', 'LLM Workflows', 'Workflow Automation', 'Stripe / Google Pay', 'Cloudinary'],
  },
  {
    category: 'Tools',
    icon: 'wrench',
    skills: ['Git & GitHub', 'GitLab', 'Postman', 'VS Code', 'Axios', 'Figma'],
  },
];

/* ---------------------------------------------------------------------------
 *  FEATURED PROJECTS
 * ------------------------------------------------------------------------- */
export type Project = {
  slug: string;
  name: string;
  tagline: string;
  problem: string;
  features: string[];
  stack: string[];
  metrics?: { label: string; value: string }[];
  liveUrl?: string;
  githubUrl?: string;
  /** Optional image path in /public; falls back to a generated gradient cover. */
  image?: string;
  accent: 'violet' | 'cyan' | 'emerald';
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'sledge',
    name: 'Sledge — AI Construction OS',
    tagline: 'AI operating system for construction businesses',
    problem:
      'Construction teams juggle QuickBooks, spreadsheets, and disconnected PM tools. Sledge unifies financials, projects, and contracts — and uses AI to kill the manual data entry.',
    features: [
      'AI document parser that auto-extracts line items, costs & project data',
      'Automatic contract and project creation from ingested documents',
      'Review-and-approve workflows before syncing to accounting',
      'Client & vendor portals with integrated invoicing and payments',
    ],
    stack: ['Next.js', 'TypeScript', 'Node.js', 'AI / LLM', 'PostgreSQL'],
    metrics: [
      { label: 'Manual entry', value: '−90%' },
      { label: 'Tools replaced', value: '3-in-1' },
    ],
    liveUrl: 'https://getsledge.com',
    accent: 'violet',
    featured: true,
  },
  {
    slug: 'visume',
    name: 'Visume — Video Résumé Hiring Platform',
    tagline: 'Two-sided video-résumé marketplace for the AU job market',
    problem:
      'Paper CVs hide personality, and hiring overseas talent in Australia means strict visa & Labour Market Testing rules. Visume lets candidates pitch themselves with video “visumes” while giving employers a compliant way to post vacancies and discover talent — on web and mobile.',
    features: [
      'Built candidate & employer flows with video profiles, CVs and visa-eligibility docs (407/482/494)',
      'Implemented AI mock interviews (OpenAI) — spoken questions, audio transcription & response scoring',
      'Worked on vacancy posting with Australian Labour Market Testing (LMT) compliance',
      'Integrated Stripe subscriptions + in-app purchases, in-app chat and interview scheduling',
    ],
    stack: ['React Native', 'React', 'Ruby on Rails', 'PostgreSQL', 'OpenAI', 'Stripe'],
    metrics: [
      { label: 'Platforms', value: 'Web + iOS/Android' },
      { label: 'User roles', value: '3' },
    ],
    liveUrl: 'https://www.visumejobs.com/',
    accent: 'cyan',
    featured: true,
  },
  {
    slug: 'caleo',
    name: 'Caleo — Public Safety Workforce Platform',
    tagline: 'Workforce management for police & public safety teams',
    problem:
      'Police departments juggle off-duty, overtime, patrol and event staffing across fragmented tools. Caleo unifies it into one intelligent platform that schedules and reports at scale.',
    features: [
      'Built responsive UI for off-duty, overtime & patrol staffing workflows',
      'Implemented event staffing, court coordination & mutual-aid modules',
      'Created real-time reporting dashboards and document-generation views',
      'Integrated an API-driven backend (thousands of shifts/sec) with SSO/SAML',
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
    metrics: [
      { label: 'Scale', value: '50k+ shifts/yr' },
      { label: 'Status', value: 'Live' },
    ],
    liveUrl: 'https://caleopro.com/',
    accent: 'emerald',
    featured: true,
  },
  {
    slug: 'eshop',
    name: 'E-Shop — Multi-Vendor Marketplace',
    tagline: 'Scalable MERN e-commerce with real-time interaction',
    problem:
      'A marketplace needs three audiences — buyers, sellers, and admins — to operate from one platform with live updates, secure payments, and full vendor management.',
    features: [
      'Role-based dashboards for clients, sellers & admins',
      'Stripe payments + Socket.io real-time buyer/seller messaging',
      'Dynamic filtering, live search & cart system',
      'Modular architecture with optimized APIs and reusable components',
    ],
    stack: ['React', 'Redux Toolkit', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Socket.io'],
    metrics: [
      { label: 'User roles', value: '3' },
      { label: 'Realtime', value: 'Socket.io' },
    ],
    liveUrl: 'https://client-eight-coral.vercel.app/',
    githubUrl: 'https://github.com/ahsaanullah0088',
    accent: 'cyan',
    featured: true,
  },
  {
    slug: 'prescripto',
    name: 'Prescripto — Healthcare Platform',
    tagline: 'Full-stack appointment & telehealth management',
    problem:
      'Patients, doctors, and admins need a single secure place to book appointments, take payments, and stay updated in real time.',
    features: [
      'Role-based auth for patients, doctors & admins',
      'Appointment booking with Stripe payment processing',
      'Real-time notifications for bookings and transactions',
      'RESTful, modular backend built for scale and maintainability',
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Axios', 'Stripe'],
    metrics: [
      { label: 'Dashboards', value: '3' },
      { label: 'Payments', value: 'Stripe' },
    ],
    liveUrl: 'https://doctor-frontend-wheat.vercel.app/',
    githubUrl: 'https://github.com/ahsaanullah0088',
    accent: 'emerald',
    featured: true,
  },
];

/* ---------------------------------------------------------------------------
 *  CODING / GITHUB — live stat image URLs use the GitHub username above.
 * ------------------------------------------------------------------------- */
export const coding = {
  // Real baseline (auto-refreshes live in the UI from the LeetCode API).
  leetcode: {
    solved: 156,
    easy: 89,
    medium: 63,
    hard: 4,
    rank: 'Rank #1,026,401',
  },
  journey: [
    'Started with C++ and data structures, fell for the web, and never looked back.',
    'Shipped real products across e-commerce, healthcare, and now AI — learning the stack by building in production.',
    'Daily-driver: TypeScript, React/Next.js, Node — with a soft spot for clean architecture and fast UIs.',
  ],
} as const;

/* ---------------------------------------------------------------------------
 *  TESTIMONIALS  (// TODO: replace with real client/colleague quotes)
 * ------------------------------------------------------------------------- */
export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  source?: 'Fiverr' | 'LinkedIn' | 'Colleague';
  avatar?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'Ahsaan delivered exactly what we needed, ahead of schedule. Clean code, great communication, and a real eye for UI detail. Would hire again in a heartbeat.',
    name: 'Fiverr Client',
    title: 'Startup Founder',
    source: 'Fiverr',
  },
  {
    quote:
      'A rare full-stack engineer who is just as strong on polished frontend as on backend architecture. He owns problems end to end and ships.',
    name: 'Engineering Lead',
    title: 'Code Linx',
    source: 'Colleague',
  },
  {
    quote:
      'Ahsaan mentored our bootcamp cohort with patience and clarity. He breaks down hard concepts and genuinely cares that people get it.',
    name: 'Dev Weekends',
    title: 'Web Dev Bootcamp',
    source: 'LinkedIn',
  },
];

/* ---------------------------------------------------------------------------
 *  CERTIFICATIONS / ACHIEVEMENTS
 * ------------------------------------------------------------------------- */
export type Achievement = {
  title: string;
  org: string;
  year?: string;
  type: 'Fellowship' | 'Ambassador' | 'Award' | 'Leadership' | 'Mentorship';
  blurb: string;
};

export const achievements: Achievement[] = [
  {
    title: 'MLSA Alpha Ambassador',
    org: 'Microsoft',
    type: 'Ambassador',
    blurb: 'Recognized as a Microsoft Learn Student Ambassador (Alpha tier) for community impact and technical leadership.',
  },
  {
    title: 'SWE Fellow',
    org: 'Headstarter AI Fellowship',
    type: 'Fellowship',
    blurb: 'Selected for the Headstarter AI Software Engineering Fellowship — building AI products in an intensive cohort.',
  },
  {
    title: 'Hackathon Runner-up',
    org: 'UEIT Society',
    type: 'Award',
    blurb: 'Placed runner-up at the UEIT Society hackathon among competitive engineering teams.',
  },
  {
    title: 'Co-Lead, MLSA UE Chapter',
    org: 'Microsoft Learn Student Ambassadors',
    year: 'Jan 2024 — Dec 2025',
    type: 'Leadership',
    blurb: 'Led the University of Education MLSA chapter — organizing events, workshops, and a growing developer community.',
  },
  {
    title: 'Lead, Confiniti UE',
    org: 'University of Education',
    year: 'Jan 2024 — Jan 2025',
    type: 'Leadership',
    blurb: 'Led the Confiniti society for a year — driving tech events, workshops, competitions, and a thriving student developer community.',
  },
  {
    title: 'Mentor, Web Dev Bootcamp',
    org: 'Dev Weekends',
    type: 'Mentorship',
    blurb: 'Mentored aspiring developers through a hands-on web development bootcamp.',
  },
];

/* ---------------------------------------------------------------------------
 *  EDUCATION
 * ------------------------------------------------------------------------- */
export const education = {
  degree: 'Bachelor of Information Technology',
  school: 'University of Education, Township',
  location: 'Lahore, Pakistan',
  coursework: [
    'Data Structures & Algorithms',
    'Operating Systems',
    'DBMS',
    'Web Engineering',
    'Cloud Computing',
    'Software Engineering',
  ],
} as const;

/* ---------------------------------------------------------------------------
 *  NAVIGATION
 * ------------------------------------------------------------------------- */
export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#projects' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
] as const;
