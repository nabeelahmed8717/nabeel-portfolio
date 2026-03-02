import type { Project } from './projects.types';
import developerImage from '@/assets/developer.png';

const projects: Project[] = [
  {
    slug: 'nextjs-portfolio',
    title: 'Next.js Portfolio',
    shortDescription:
      'A clean, atomic-design portfolio built with Next.js, TypeScript, and Tailwind CSS.',
    description:
      'This portfolio showcases a modular architecture using Atomic Design, Next.js App Router, and Tailwind CSS. It focuses on reusability, performance, and clean code structure.',
    thumbnail: developerImage,
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    year: 2025,
    role: 'Frontend Engineer',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    repoUrl: 'https://github.com/your-username/nextjs-portfolio',
    liveUrl: 'https://example.com'
  }
];

export async function getAllProjects(): Promise<Project[]> {
  return projects;
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const project = projects.find((p) => p.slug === slug);
  return project ?? null;
}

