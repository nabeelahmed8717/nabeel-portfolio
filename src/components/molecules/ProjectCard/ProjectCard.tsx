import Link from 'next/link';
import Image from 'next/image';
import type { Project } from '@/lib/projects/projects.types';
import { Heading } from '@/components/atoms/Heading';
import { Text } from '@/components/atoms/Text';

export interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col rounded-xl border border-neutral-200 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
    >
      {project.thumbnail && (
        <div className="relative mb-3 aspect-video overflow-hidden rounded-lg">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="(min-width: 1024px) 400px, 100vw"
          />
        </div>
      )}
      <Heading as="h3" size="md" className="mb-1">
        {project.title}
      </Heading>
      <Text variant="muted" className="mb-2 line-clamp-2">
        {project.shortDescription}
      </Text>
      <div className="mt-auto flex flex-wrap gap-1">
        {project.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}

