export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  thumbnail?: string;
  tags: string[];
  year?: number;
  role?: string;
  techStack?: string[];
  repoUrl?: string;
  liveUrl?: string;
}

