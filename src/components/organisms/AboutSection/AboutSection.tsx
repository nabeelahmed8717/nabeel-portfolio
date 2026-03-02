'use client';

import Image from 'next/image';
import { Container } from '@/components/atoms/Container';
import developerImage from '@/assets/developer.png';

const TECH_STACK = ['Next.Js', 'Node.Js', 'Typescript', 'React.Js'];

function GlobeIcon({ className }: { className?: string }) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      <path d="M2 12h20" />
    </svg>
  );
}

export function AboutSection() {
  return (
    <section
      id="about"
      className=" py-16 dark:border-neutral-800  sm:py-24"
    >
      <Container>
        <div className="grid gap-6 lg:grid-cols-[1fr_440px] lg:gap-8" style={{ paddingTop:'10px' }}>
          {/* Left: large card with image + overlay text */}
          <div className="relative min-h-[280px] overflow-hidden rounded-2xl bg-neutral-200 dark:bg-neutral-800 sm:min-h-[320px]">
            <Image
              src={developerImage}
              alt="Developer at desk with multi-monitor setup"
              className="object-cover object-center"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
              aria-hidden
            />
            <p className="absolute bottom-0 left-0 right-0 p-6 text-left text-lg leading-snug text-white text-[28px] font-extrabold">
              I prioritize client
              <br />
              collaboration, fostering
              <br />
              open communication
            </p>
          </div>

          {/* Right: two stacked cards */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* Top: flexibility card */}
            <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-[#dfe1fd] p-6 dark:border-neutral-800 dark:bg-[#111111] sm:p-8">
              <p className="relative text-[23px] font-extrabold  text-neutral-800 dark:text-neutral-200">
                I&apos;m very flexible with time zone communication
              </p>
            </div>

            {/* Bottom: tech stack card */}
            <div className="rounded-2xl border border-neutral-200 bg-neutral-100 p-6 dark:border-neutral-800 dark:bg-[#111111] sm:p-8">
              <p className="text-base text-neutral-600 dark:text-neutral-300">
                I constantly try to
                <br />
                improve
              </p>
              <p className="mt-3 text-xl font-semibold text-neutral-900 sm:text-2xl dark:text-white">
                My tech stack
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {TECH_STACK.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-neutral-300 bg-neutral-200 px-3 py-1.5 text-sm font-medium text-neutral-800 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
