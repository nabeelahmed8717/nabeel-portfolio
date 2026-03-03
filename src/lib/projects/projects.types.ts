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
  /** Case study: overview paragraph */
  overview?: string;
  /** Case study: the problem section */
  problem?: string;
  /** Case study: approach & architecture */
  approach?: string;
  /** Case study: key features list */
  keyFeatures?: string[];
  /** Case study: impact & results */
  impact?: string;
}

