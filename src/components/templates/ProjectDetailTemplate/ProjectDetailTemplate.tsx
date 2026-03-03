import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/lib/projects/projects.types';
import { Container } from '@/components/atoms/Container';

export interface ProjectDetailTemplateProps {
  project: Project;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 text-xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-2xl">
      {children}
    </h2>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10 last:mb-0">
      <SectionHeading>{title}</SectionHeading>
      <div className="text-neutral-600 dark:text-neutral-300 [&>p]:mb-3 [&>p:last-child]:mb-0">
        {children}
      </div>
    </section>
  );
}

export function ProjectDetailTemplate({ project }: ProjectDetailTemplateProps) {
  const overview = project.overview ?? project.description;
  const problem = project.problem ?? project.shortDescription;
  const approach = project.approach ?? `This project was built with ${(project.techStack ?? project.tags).join(', ')}. Architecture and implementation details can be added here.`;
  const keyFeatures = project.keyFeatures ?? (project.techStack ?? project.tags).slice(0, 5).map((t) => `Built with ${t}`);
  const impact = project.impact ?? 'Impact and results will be documented here.';

  const techStack = project.techStack ?? project.tags;

  return (
    <article className="min-h-screen">
      {/* Back link */}
      <div className="border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
        <Container className="py-4">
          <Link
            href="/#projects"
            className="inline-flex items-center text-sm font-medium text-neutral-600 underline-offset-4 hover:underline dark:text-neutral-400 dark:hover:text-white"
          >
            &larr; Back to projects
          </Link>
        </Container>
      </div>

      {/* Hero: dark block, title, tagline, tech pills, screenshot, CTA */}
      <header className="bg-neutral-950 px-4 py-12 text-white sm:py-16">
        <Container className="max-w-4xl">
          <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {project.title}
          </h1>
          <p className="mb-6 max-w-2xl text-lg text-neutral-300">
            {project.shortDescription}
          </p>
          {techStack.length > 0 && (
            <div className="mb-8 flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg bg-violet-600/90 px-3 py-1.5 text-sm font-medium text-white dark:bg-violet-500/90"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
          {project.thumbnail && (
            <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-xl border border-neutral-700 bg-neutral-800">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 896px, 100vw"
                priority
              />
            </div>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-violet-500 dark:bg-violet-500 dark:hover:bg-violet-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              View Live Site
            </a>
          )}
        </Container>
      </header>

      {/* Main content + sidebar */}
      <div className="bg-white dark:bg-neutral-950">
        <Container className="py-12 lg:flex lg:gap-12 lg:py-16">
          <div className="min-w-0 flex-1 lg:max-w-[65%]">
            <Section title="Overview">
              <p>{overview}</p>
            </Section>
            <Section title="The Problem">
              <p>{problem}</p>
            </Section>
            <Section title="Approach & Architecture">
              <p>{approach}</p>
            </Section>
            <Section title="Key Features">
              <ul className="space-y-2">
                {keyFeatures.map((feature, i) => (
                  <li key={i} className="flex gap-3">
                    <span
                      className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-violet-500 dark:bg-violet-400"
                      aria-hidden
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Section>
            <Section title="Impact & Results">
              <p>{impact}</p>
            </Section>
          </div>

          <aside className="mt-12 shrink-0 lg:mt-0 lg:w-80">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-800 dark:bg-neutral-900">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-neutral-200 bg-white px-2.5 py-1 text-xs font-medium text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-800 dark:bg-neutral-900">
                <h3 className="mb-2 text-sm font-semibold text-neutral-900 dark:text-white">
                  Interested in Similar Work?
                </h3>
                <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-300">
                  Let&apos;s discuss how I can help bring your project to life.
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-violet-500 dark:bg-violet-500 dark:hover:bg-violet-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-4 w-4"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  Get in Touch
                </Link>
              </div>
            </div>
          </aside>
        </Container>
      </div>
    </article>
  );
}
