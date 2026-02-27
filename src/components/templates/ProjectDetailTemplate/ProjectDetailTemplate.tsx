import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/lib/projects/projects.types';
import { Container } from '@/components/atoms/Container';
import { Heading } from '@/components/atoms/Heading';
import { Text } from '@/components/atoms/Text';
import { Button } from '@/components/atoms/Button';

export interface ProjectDetailTemplateProps {
  project: Project;
}

export function ProjectDetailTemplate({ project }: ProjectDetailTemplateProps) {
  return (
    <article className="py-16">
      <Container>
        <div className="mb-6">
          <Link
            href="/#projects"
            className="text-sm text-neutral-600 underline underline-offset-4"
          >
            &larr; Back to projects
          </Link>
        </div>

        <header className="mb-8">
          <Heading as="h1" size="2xl" className="mb-2">
            {project.title}
          </Heading>
          <Text variant="muted" className="max-w-2xl">
            {project.shortDescription}
          </Text>
          {project.year && (
            <Text className="mt-2 text-sm text-neutral-600">
              {project.year} {project.role ? `· ${project.role}` : null}
            </Text>
          )}
        </header>

        {project.thumbnail && (
          <div className="relative mb-8 aspect-video overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 800px, 100vw"
            />
          </div>
        )}

        <section className="prose prose-neutral max-w-none">
          <p>{project.description}</p>
        </section>

        <section className="mt-8 flex flex-wrap items-center gap-4">
          {project.techStack?.length ? (
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          ) : null}

          <div className="ml-auto flex gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
              >
                View Live
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-100"
              >
                View Code
              </a>
            )}
          </div>
        </section>
      </Container>
    </article>
  );
