import type { Project } from '@/lib/projects/projects.types';
import { HeroSection } from '@/components/organisms/HeroSection';
import { AboutSection } from '@/components/organisms/AboutSection';
import { ProjectsSection } from '@/components/organisms/ProjectsSection';
import { ServicesSection } from '@/components/organisms/ServicesSection';
import { ExperienceSection } from '@/components/organisms/ExperienceSection';
import { ContactSection } from '@/components/organisms/ContactSection';

export interface HomePageTemplateProps {
  projects: Project[];
}

export function HomePageTemplate({ projects }: HomePageTemplateProps) {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection projects={projects} />
      <ServicesSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}

