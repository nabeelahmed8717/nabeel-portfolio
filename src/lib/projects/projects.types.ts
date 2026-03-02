import type { StaticImageData } from 'next/image';

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  thumbnail?: string | StaticImageData;
  tags: string[];
  year?: number;
  role?: string;
  techStack?: string[];
  repoUrl?: string;
  liveUrl?: string;
}

