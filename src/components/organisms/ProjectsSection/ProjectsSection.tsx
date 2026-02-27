export interface ProjectsSectionProps {
  // kept for future use when projects content is added
  projects: unknown[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  void projects;
  return <section id="projects" />;
}

