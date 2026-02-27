import { HomePageTemplate } from '@/components/templates/HomePageTemplate';
import { getAllProjects } from '@/lib/projects/projects.data';

export default async function HomePage() {
  const projects = await getAllProjects();

  return <HomePageTemplate projects={projects} />;
}

