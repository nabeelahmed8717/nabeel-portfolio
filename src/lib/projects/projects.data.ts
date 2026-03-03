import type { Project } from './projects.types';
import peoplescreedImage from '@/assets/peoplescreed.jpg';
import identitygramImage from '@/assets/identitygram.jpg';
import agenticcreedImage from '@/assets/agenticcreed.jpg';
import compliancesheetImage from '@/assets/compliancesheet.jpg';
import buzzhrImage from '@/assets/buzzhr.jpg';
import clocklogImage from '@/assets/clocklog.jpg';

const projects: Project[] = [
  {
    slug: 'peoplescreed-ai',
    title: 'Peoplescreed.AI',
    shortDescription:
      'Revolutionize workforce management with Peoplescreed.AI\'s integrated platform for seamless HR processes.',
    description:
      'Revolutionize workforce management with Peoplescreed.AI\'s integrated platform for seamless HR processes. Built with React, Next.js, and modern tooling for scalable HR solutions.',
    thumbnail: peoplescreedImage,
    tags: ['React.js', 'Next.js', 'TypeScript', 'RTK Query', 'Redux Thunk', 'MUI', 'Apexcharts'],
    year: 2025,
    role: 'Frontend Engineer',
    techStack: ['React.js', 'Next.js', 'TypeScript', 'RTK Query', 'Redux Thunk', 'MUI', 'Apexcharts'],
    liveUrl: 'https://peoplescreed.ai'
  },
  {
    slug: 'identity-gram',
    title: 'Identity Gram',
    shortDescription:
      'AI-powered, secure, and compliant identity verification platform with KYC, KYB, and AML solutions.',
    description:
      'AI-powered, secure, and compliant identity verification platform with KYC, KYB, and AML solutions. Dashboard for registered products, APIs, users, and verification status.',
    thumbnail: identitygramImage,
    tags: ['React.js', 'Next.js', 'TypeScript', 'Redux Toolkit', 'RTK Query', 'MUI', 'Recharts'],
    year: 2025,
    role: 'Frontend Engineer',
    techStack: ['React.js', 'Next.js', 'TypeScript', 'Redux Toolkit', 'RTK Query', 'MUI', 'Recharts'],
    liveUrl: 'https://identitygram.com',
    overview:
      'Identity Gram is an AI-powered identity verification platform that delivers advanced KYC, KYB, and AML verification capabilities. The platform leverages facial recognition, biometrics, and geolocation tracking to help organizations verify identities, prevent fraud, and ensure regulatory compliance.',
    problem:
      'Organizations need secure and reliable identity verification that meets compliance requirements while minimizing fraud risk. Manual checks are slow, error-prone, and difficult to scale.',
    approach:
      'We built a React and Next.js–based platform with biometric verification, AI-driven KYC/KYB/AML checks, and real-time verification flows. Compliance reporting dashboards give full visibility into verification status, APIs, and user activity.',
    keyFeatures: [
      'AI-powered KYC, KYB, and AML compliance',
      'Facial and biometric verification',
      'Right to Work and pre-employment screening services',
      'Social media and reference checks for background validation',
      'Geolocation tracking and real-time customer monitoring',
      'Proprietary Identity Gram algorithm for enhanced accuracy and efficiency',
      'SMS signature verification'
    ],
    impact:
      'The platform has strengthened digital trust and compliance for clients, enabling faster, more accurate, and fraud-resistant identity verification at scale.'
  },
  {
    slug: 'agentic-creed',
    title: 'Agentic Creed',
    shortDescription:
      'Agentic Creed empowers businesses with unified sales, service, and marketing solutions to enhance customer experience and boost growth.',
    description:
      'Agentic Creed empowers businesses with unified sales, service, and marketing solutions to enhance customer experience and boost growth. Unified platform for loyalty, services, partners, and sales.',
    thumbnail: agenticcreedImage,
    tags: ['React.js', 'Next.js', 'TypeScript', 'Redux Toolkit', 'RTK Query', 'MUI', 'AWS', 'Recharts'],
    year: 2025,
    role: 'Frontend Engineer',
    techStack: ['React.js', 'Next.js', 'TypeScript', 'Redux Toolkit', 'RTK Query', 'MUI', 'AWS', 'Recharts'],
    liveUrl: 'https://agenticcreed.com',
    overview:
      'Agentic Creed redefines how businesses connect with their customers by providing unified solutions across loyalty program, sales, service, operations, and marketing. The platform integrates loyalty programs and next-generation call center services to enhance customer experience and accelerate organizational growth.',
    problem:
      'Businesses face inefficiency and poor customer experiences due to disconnected sales, marketing, and service systems. Agentic Creed solves this by providing a unified, data-driven platform that centralizes operations, strengthens loyalty, and improves communication through modern call-center solutions.',
    approach:
      'Built with a component-driven architecture using Redux Toolkit Query for efficient data handling, Formik and React Hook Form for robust form management, and deployed on AWS for scalability and reliability.',
    keyFeatures: [
      'Sales Management: Deal tracking, quotes, invoicing, and task automation',
      'Customer Service: Integrated ticketing and support system for real-time assistance',
      'Operations Management: Dashboard-based performance insights for streamlined workflows',
      'Marketing Automation: Campaign tools to boost engagement and conversions',
      'Loyalty Programs: Customizable reward systems for customer retention',
      'Call Center Integration: Advanced technology enabling efficient and professional customer support'
    ],
    impact:
      'Boosted customer satisfaction, sales efficiency, and team productivity through a unified, scalable platform that drives loyalty and future-ready innovation.'
  },
  {
    slug: 'compliance-sheet',
    title: 'Compliance Sheet',
    shortDescription:
      'A unified compliance management platform that enables organizations to inspect, train, communicate, and maintain workplace well-being with ease.',
    description:
      'A unified compliance management platform that enables organizations to inspect, train, communicate, and maintain workplace well-being with ease. Tracks daily activity, issues, and actions with clear dashboards.',
    thumbnail: compliancesheetImage,
    tags: ['React.js', 'Next.js', 'TypeScript', 'RTK Query', 'Redux Toolkit', 'MUI', 'Leaflet', 'Apexcharts', 'Recharts'],
    year: 2025,
    role: 'Frontend Engineer',
    techStack: ['React.js', 'Next.js', 'TypeScript', 'RTK Query', 'Redux Toolkit', 'MUI', 'Leaflet', 'Apexcharts', 'Recharts'],
    liveUrl: 'https://compliancesheet.com',
    overview:
      'Compliance Sheet empowers organizations to streamline inspections, identify issues instantly, manage tasks, and facilitate team communication. With integrated modules for E-Inspections, Learning & Development, Well-Being, and Assurance, it helps teams stay compliant, informed, and efficient.',
    problem:
      'Companies struggle with manual inspections, scattered compliance processes, and lack of real-time visibility into issues. This leads to delays, miscommunication, and difficulty maintaining regulatory standards across teams.',
    approach:
      'Compliance Sheet uses a modular, scalable architecture with real-time data capture, automated workflows, and a highly intuitive UI for seamless compliance management. Powered by React, Next.js, and RTK Query, it delivers fast performance, role-based dashboards, and maintainable, responsive interfaces.',
    keyFeatures: [
      'E-Inspect: Capture and analyze real-time inspection data for instant insights and swift compliance actions.',
      'L&D: Provide continuous learning with curated content and expert training resources.',
      'Well-Being: Support employee mental health, safety, and workplace wellness.',
      'Assurance Pack: Identify risks, audit processes, and maintain high compliance standards.',
      'Task & Issue Management: Track tasks, assign responsibilities, and resolve issues efficiently.',
      'Team Communication: Enable clear and structured communication across compliance workflows.'
    ],
    impact:
      'Improved compliance efficiency, real-time visibility, and team performance through automated workflows and unified inspection, training, and well-being management.'
  },
  {
    slug: 'buzzhr',
    title: 'BuzzHr',
    shortDescription:
      'A real-time employee engagement platform that strengthens communication, feedback, and team culture.',
    description:
      'A real-time employee engagement platform that strengthens communication, feedback, and team culture. Features include attendance, check-in/check-out, team updates, and workforce visibility.',
    thumbnail: buzzhrImage,
    tags: ['React.js', 'Next.js', 'TypeScript', 'RTK Query', 'Redux Toolkit', 'MUI', 'Apexcharts'],
    year: 2025,
    role: 'Frontend Engineer',
    techStack: ['React.js', 'Next.js', 'TypeScript', 'RTK Query', 'Redux Toolkit', 'MUI', 'Apexcharts'],
    liveUrl: 'https://buzzhr.com',
    overview:
      'BuzzHR empowers organizations to build a more connected workplace through real-time polls, surveys, and feedback tools. It enhances communication, boosts employee engagement, and helps teams stay aligned and motivated every day.',
    problem:
      'Companies struggle to maintain continuous employee engagement, transparent communication, and timely feedback. Traditional surveys and manual engagement methods fail to keep pace with modern, fast-moving teams.',
    approach:
      'Designed with a modular, scalable architecture using React, Next.js, and RTK Query for fast, real-time engagement features. Built interactive UIs, instant feedback flows, and responsive dashboards that support polls, surveys, and direct communication channels.',
    keyFeatures: [
      'Real-Time Polls: Gather instant team opinions and insights.',
      'Employee Surveys: Collect feedback to improve workplace culture.',
      'Direct Communication Channels: Enable fast and transparent team interaction.',
      'Engagement Insights: Track employee sentiment and participation levels.',
      'Interactive UI: Smooth, responsive design for daily team engagement.',
      'Feedback Tools: Encourage open communication and continuous improvement.'
    ],
    impact:
      'Boosted team engagement, improved communication transparency, and strengthened workplace culture through real-time feedback and interactive collaboration tools.'
  },
  {
    slug: 'clocklog',
    title: 'ClockLog',
    shortDescription:
      'A streamlined time and attendance management platform that simplifies tracking, reporting, and workforce productivity.',
    description:
      'A streamlined time and attendance management platform that simplifies tracking, reporting, and workforce productivity. Dashboard for productive hours, idle time, most used services, and top projects.',
    thumbnail: clocklogImage,
    tags: ['React.js', 'Next.js', 'TypeScript', 'RTK Query', 'Redux Toolkit', 'Apexcharts', 'MUI'],
    year: 2025,
    role: 'Frontend Engineer',
    techStack: ['React.js', 'Next.js', 'TypeScript', 'RTK Query', 'Redux Toolkit', 'Apexcharts', 'MUI'],
    liveUrl: 'https://clocklog.com',
    overview:
      'ClockLog enables organizations to manage time tracking, attendance, and scheduling with precision and ease, ensuring accurate payroll, optimized productivity, and effortless workforce coordination through real-time reporting and automated workflows.',
    problem:
      'Businesses face challenges with manual attendance tracking, inaccurate payroll data, and inefficient scheduling, leading to reduced productivity, errors in reporting, and difficulty maintaining workforce accountability.',
    approach:
      'Built with a scalable React + Next.js frontend and RTK Query for fast, reliable data operations across attendance workflows. Designed intuitive dashboards, automated logs, and real-time reporting tools to streamline tracking and help teams work smarter.',
    keyFeatures: [
      'Time Tracking: Easily record employee work hours with precision.',
      'Attendance Management: Monitor presence, leaves, and shift activities.',
      'Real-Time Reporting: Access instant productivity and attendance insights.',
      'Scheduling Tools: Streamline shift planning and workforce coordination.',
      'Accurate Payroll Support: Reduce errors with automated time and attendance logs.',
      'Productivity Optimization: Improve efficiency through data-driven workforce insights.'
    ],
    impact:
      'Improved attendance accuracy, streamlined scheduling, and enhanced workforce productivity through automated tracking and real-time reporting.'
  }
];

export async function getAllProjects(): Promise<Project[]> {
  return projects;
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const project = projects.find((p) => p.slug === slug);
  return project ?? null;
}

