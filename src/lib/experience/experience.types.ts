export interface Experience {
  id: string;
  jobTitle: string;
  isCurrent?: boolean;
  company: string;
  companyUrl?: string;
  location: string;
  duration: string;
  description: string;
  bullets: string[];
  skills: string[];
}
