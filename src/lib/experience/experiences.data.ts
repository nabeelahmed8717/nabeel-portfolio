import type { Experience } from './experience.types';

export const experiences: Experience[] = [
  {
    id: 'consultancy-outfit',
    jobTitle: 'Frontend Developer',
    isCurrent: true,
    company: 'ConsultancyOutfit',
    companyUrl: 'https://consultancyoutfit.com',
    location: 'Rawalpindi, Pakistan',
    duration: 'April 2022 - Present',
    description:
      'Developing and maintaining scalable, high-performance web applications using React, Next.js, and TypeScript. Focused on clean architecture, modern UI, and seamless API integration.',
    bullets: [
      'Built and maintained scalable web applications with React and Next.js.',
      'Increased page load performance by 30% through optimization and best practices.',
      'Implemented SSR, SSG, and ISR strategies for improved SEO and user experience.',
      'Integrated RESTful APIs and GraphQL APIs with robust error handling and caching.',
      'Delivered accessible UI with Tailwind, MUI, Ant Design & Styled Components.',
      'Built analytics dashboards using Recharts, Chart.js & ApexCharts.',
      'Reduced UI defects by 25% through testing and code review practices.',
      'Collaborated closely with UI/UX, backend, and product teams in an agile setup.'
    ],
    skills: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Styled Components',
      'MUI',
      'Ant Design',
      'RTK Query',
      'Redux Thunk',
      'Zustand',
      'GraphQL',
      'Axios',
      'Recharts',
      'Chart.js',
      'ApexCharts',
      'Jest',
      'React Testing Library',
      'Git',
      'Jira'
    ]
  },
  {
    id: 'cane-technologies',
    jobTitle: 'Frontend React.js Developer',
    isCurrent: false,
    company: 'Cane Technologies Pvt Ltd',
    companyUrl: undefined,
    location: 'Wah Cantt, Pakistan',
    duration: 'Oct 2020 - March 2022',
    description:
      'Developed user-facing features and reusable components for client projects using React.js. Worked with REST APIs and state management to deliver consistent, responsive interfaces.',
    bullets: [
      'Developed and maintained React-based web applications for multiple clients.',
      'Built reusable component libraries and shared UI patterns.',
      'Integrated REST APIs and managed application state with Redux and Context.',
      'Collaborated with designers and backend developers in an agile environment.',
      'Participated in code reviews and improved frontend testing coverage.'
    ],
    skills: [
      'React.js',
      'JavaScript',
      'Redux',
      'REST APIs',
      'HTML/CSS',
      'Git',
      'Jira'
    ]
  }
];
