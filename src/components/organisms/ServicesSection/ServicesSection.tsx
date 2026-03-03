'use client';

import { Container } from '@/components/atoms/Container';

const SERVICES = [
  {
    title: 'Custom Web Development',
    description:
      'Production-ready web applications built with scalable architecture, reusable components, and clean, maintainable code.',
    tags: [
      'React.js',
      'Next.js',
      'Nest.js',
      'Node.js',
      'TypeScript',
      'App Router',
      'SSR / SSG / ISR',
      'Component Architecture',
      'Reusable UI Library',
      'Clean Code'
    ],
    icon: CodeIcon
  },
  {
    title: 'Responsive UI & Design Systems',
    description:
      'Consistent, accessible, and pixel-perfect interfaces built with design-system driven components across all devices.',
    tags: [
      'Responsive UI',
      'Accessibility (WCAG / A11y)',
      'Design Systems',
      'Pixel-Perfect UI',
      'Tailwind CSS',
      'MUI',
      'Ant Design',
      'Styled Components'
    ],
    icon: GridIcon
  },
  {
    title: 'API Integration & State Management',
    description:
      'Reliable REST/GraphQL integration with predictable state management for scalable, smooth, and maintainable data flows.',
    tags: [
      'REST APIs',
      'GraphQL',
      'Authentication (JWT)',
      'Redux Toolkit',
      'RTK Query',
      'Zustand',
      'Caching & Refetching',
      'Error Handling'
    ],
    icon: IntegrationIcon
  },
  {
    title: 'Performance & SEO Optimization',
    description:
      'Improve Core Web Vitals, load speed, and SEO using modern rendering strategies and performance best practices.',
    tags: [
      'Core Web Vitals',
      'Code Splitting',
      'Lazy Loading',
      'Caching Strategy',
      'SSR Optimization',
      'Bundle Optimization',
      'SEO Best Practices',
      'Page Speed'
    ],
    icon: PerformanceIcon
  },
  {
    title: 'SaaS Dashboards & Admin Panels',
    description:
      'Data-driven SaaS dashboards with charts, tables, filters, and role-based workflows designed for real products.',
    tags: [
      'Role-Based UI',
      'Admin Workflows',
      'Data Tables',
      'Filters & Reporting',
      'Analytics UI',
      'Recharts',
      'Chart.js',
      'ApexCharts'
    ],
    icon: DashboardIcon
  },
  {
    title: 'Testing & Code Quality',
    description:
      'Maintainable codebases with testing, best practices, and review-friendly structure to reduce bugs and scale confidently.',
    tags: [
      'Jest',
      'React Testing Library',
      'Storybook',
      'Unit & Integration Tests',
      'Code Reviews',
      'Reusable Patterns',
      'Best Practices',
      'Git & GitHub'
    ],
    icon: ShieldIcon
  }
];

function CodeIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function GridIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function IntegrationIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function PerformanceIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12a9 9 0 1 1-6.22-8.56" />
      <path d="M21 12h-4" />
      <path d="M21 12a9 9 0 0 1-9 9" />
    </svg>
  );
}

function DashboardIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="7" height="9" rx="1" />
      <rect x="14" y="3" width="7" height="5" rx="1" />
      <rect x="14" y="12" width="7" height="9" rx="1" />
      <rect x="3" y="16" width="7" height="5" rx="1" />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

export function ServicesSection() {
  return (
    <section
      id="services"
      className="border-b border-neutral-900 bg-black py-16 sm:py-24"
    >
      <Container className="space-y-12">
        <div className="text-center space-y-4">
          <p className="text-sm font-medium uppercase tracking-wider text-violet-400">
            Services
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            Frontend Development for Modern Web Products
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            I help businesses build fast, scalable, and user-friendly web
            applications using React, Next.js, and TypeScript — with clean UI,
            smooth performance, and reliable API integration.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="flex flex-col rounded-xl border-2 border-neutral-800 bg-neutral-900/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-violet-500/60"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center text-violet-400">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">
                  {service.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-neutral-800 px-2.5 py-1 text-xs font-medium text-white/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
