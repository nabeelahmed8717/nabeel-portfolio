import type { Project } from '@/lib/projects/projects.types';
import { Container } from '@/components/atoms/Container';
import { ProjectCard } from './ProjectCard';

export interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  if (!projects.length) return <section id="projects" />;

  return (
    <section
      id="projects"
      className="border-b border-neutral-200 bg-neutral-50 py-16 dark:border-neutral-800 dark:bg-neutral-950 sm:py-24"
    >
      <Container className="space-y-10">
        {/* Section header: "A small selection of" + "recent projects" (accent) */}
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-3xl md:text-4xl">
            A small selection of{' '}
            <span className="bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent dark:from-violet-400 dark:to-violet-500">
              recent projects
            </span>
          </h2>
        </div>

        {/* Project cards grid — max width so cards stay a comfortable size */}
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:gap-8">
          {projects.map((project) =>
            project.thumbnail ? (
              <ProjectCard
                key={project.slug}
                title={project.title}
                description={project.shortDescription}
                image={project.thumbnail}
                url={project.liveUrl}
                techStack={project.techStack ?? project.tags}
                slug={project.slug}
              />
            ) : null
          )}
        </div>
      </Container>
    </section>
  );
}
