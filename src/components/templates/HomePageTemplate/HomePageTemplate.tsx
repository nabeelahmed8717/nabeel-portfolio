import type { Project } from '@/lib/projects/projects.types';
import { HeroSection } from '@/components/organisms/HeroSection';
import { AboutSection } from '@/components/organisms/AboutSection';
import { ProjectsSection } from '@/components/organisms/ProjectsSection';
import { ApproachSection } from '@/components/organisms/ApproachSection';
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
      <ApproachSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}

