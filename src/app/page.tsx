import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { GitHubStats } from '@/components/sections/GitHubStats';
import { Testimonials } from '@/components/sections/Testimonials';
import { Certifications } from '@/components/sections/Certifications';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <GitHubStats />
      <Testimonials />
      <Certifications />
      <Contact />
    </>
  );
}
