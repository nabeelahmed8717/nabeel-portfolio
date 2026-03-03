'use client';

import { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { Container } from '@/components/atoms/Container';
import { experiences } from '@/lib/experience/experiences.data';
import type { Experience } from '@/lib/experience/experience.types';

const DESCRIPTION_PREVIEW_LENGTH = 120;
const BULLETS_PREVIEW_COUNT = 2;
const SKILLS_PREVIEW_COUNT = 6;

function BuildingIcon({ className }: { className?: string }) {
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
      <rect x="2" y="9" width="20" height="13" rx="1" />
      <path d="M6 9V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" />
      <path d="M10 13h4" />
    </svg>
  );
}

function BriefcaseIcon({ className }: { className?: string }) {
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
      <path d="M12 8v4l2 2" />
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
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
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

function ExperienceEntry({
  experience,
  onReadMore
}: {
  experience: Experience;
  onReadMore: () => void;
}) {
  const Icon = experience.isCurrent ? BuildingIcon : BriefcaseIcon;

  const descriptionPreview =
    experience.description.length <= DESCRIPTION_PREVIEW_LENGTH
      ? experience.description
      : experience.description.slice(0, DESCRIPTION_PREVIEW_LENGTH).trim() + '…';
  const showDescriptionMore = experience.description.length > DESCRIPTION_PREVIEW_LENGTH;

  const bulletsPreview = experience.bullets.slice(0, BULLETS_PREVIEW_COUNT);
  const hasMoreBullets = experience.bullets.length > BULLETS_PREVIEW_COUNT;

  const skillsPreview = experience.skills.slice(0, SKILLS_PREVIEW_COUNT);
  const hasMoreSkills = experience.skills.length > SKILLS_PREVIEW_COUNT;
  const showReadMore = showDescriptionMore || hasMoreBullets || hasMoreSkills;

  const companyEl = experience.companyUrl ? (
    <Link
      href={experience?.companyUrl as any}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-violet-400 hover:text-violet-300 transition-colors"
    >
      {experience.company}
    </Link>
  ) : (
    <span className="font-medium text-white/90">{experience.company}</span>
  );

  return (
    <div className="relative flex gap-6 sm:gap-8">
      <div className="relative z-10 flex flex-shrink-0">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-violet-500/60 bg-black text-violet-400"
          aria-hidden
        >
          <Icon className="h-5 w-5" />
        </div>
      </div>

      <div className="flex-1 pb-12 sm:pb-14">
        <div className="flex flex-wrap items-baseline gap-2">
          <h3 className="text-xl font-bold text-white sm:text-2xl">
            {experience.jobTitle}
          </h3>
          {experience.isCurrent && (
            <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
              Current
            </span>
          )}
        </div>

        <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-white/70">
          {companyEl}
          <span className="text-white/40" aria-hidden>·</span>
          <span>{experience.location}</span>
          <span className="flex items-center gap-1.5 text-white/60">
            <CalendarIcon className="h-4 w-4 flex-shrink-0" />
            <span>{experience.duration}</span>
          </span>
        </div>

        <p className="mt-4 text-base leading-relaxed text-white/80">
          {descriptionPreview}
        </p>

        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-white/70">
          {bulletsPreview.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {skillsPreview.map((skill) => (
            <span
              key={skill}
              className="rounded-md bg-neutral-800 px-2.5 py-1 text-xs font-medium text-white/90"
            >
              {skill}
            </span>
          ))}
        </div>

        {showReadMore && (
          <button
            type="button"
            onClick={onReadMore}
            className="mt-5 inline-flex items-center gap-2 rounded-lg border border-violet-500/60 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-400 transition-colors hover:bg-violet-500/20 hover:border-violet-500/80"
          >
            Read more
            <ChevronRightIcon className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

function ExperienceModal({
  experience,
  onClose
}: {
  experience: Experience;
  onClose: () => void;
}) {
  const Icon = experience.isCurrent ? BuildingIcon : BriefcaseIcon;

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  const companyEl = experience.companyUrl ? (
    <Link
      href={experience?.companyUrl as any}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-violet-400 hover:text-violet-300 transition-colors"
    >
      {experience.company}
    </Link>
  ) : (
    <span className="font-medium text-white/90">{experience.company}</span>
  );

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center px-4 pb-4 pt-0"
      role="dialog"
      aria-modal="true"
      aria-labelledby="experience-modal-title"
    >
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <div
        className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto scrollbar-themed rounded-2xl border border-neutral-700 bg-neutral-900 p-6 shadow-xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-1.5 text-white/60 transition-colors hover:bg-neutral-800 hover:text-white"
          aria-label="Close modal"
        >
          <CloseIcon className="h-5 w-5" />
        </button>

        <div className="flex items-start gap-4 pr-10">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-violet-500/60 bg-black text-violet-400">
            <Icon className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <h2 id="experience-modal-title" className="text-xl font-bold text-white sm:text-2xl">
              {experience.jobTitle}
            </h2>
            {experience.isCurrent && (
              <span className="mt-2 inline-block rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                Current
              </span>
            )}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-white/70">
          {companyEl}
          <span className="text-white/40" aria-hidden>·</span>
          <span>{experience.location}</span>
          <span className="flex items-center gap-1.5 text-white/60">
            <CalendarIcon className="h-4 w-4 flex-shrink-0" />
            <span>{experience.duration}</span>
          </span>
        </div>

        <p className="mt-5 text-base leading-relaxed text-white/80">
          {experience.description}
        </p>

        <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-relaxed text-white/70">
          {experience.bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>

        <div className="mt-6">
          <p className="text-xs font-medium uppercase tracking-wider text-white/60">Technologies & skills</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {experience.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-md bg-neutral-800 px-2.5 py-1 text-xs font-medium text-white/90"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-8 w-full rounded-lg border border-violet-500/60 bg-violet-500/10 py-2.5 text-sm font-medium text-violet-400 transition-colors hover:bg-violet-500/20 sm:w-auto sm:px-6"
        >
          Close
        </button>
      </div>
    </div>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [fillProgress, setFillProgress] = useState(0);
  const [trackHeight, setTrackHeight] = useState(0);
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  useEffect(() => {
    let rafId: number;

    function updateProgress() {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      const rect = section.getBoundingClientRect();
      const height = rect.height;
      if (height <= 0) return;

      // Progress: fill over ~1 viewport of scroll so the line grows noticeably as user scrolls
      // 0 when section top at viewport top; 1 after scrolling one viewport height into the section
      const viewportHeight = window.innerHeight;
      const raw = -rect.top / viewportHeight;
      const progress = Math.min(1, Math.max(0, raw));
      const heightPx = track.offsetHeight;

      setFillProgress(progress);
      setTrackHeight(heightPx);
    }

    function onScroll() {
      rafId = requestAnimationFrame(updateProgress);
    }

    updateProgress();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="border-b border-neutral-900 bg-black py-16 sm:py-24"
    >
      <Container className="space-y-12">
        <div className="text-center space-y-4">
          <p className="text-sm font-medium uppercase tracking-wider text-violet-400">
            Career Journey
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            Professional Experience
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Experienced Frontend Developer crafting high-performance web apps
            with React, TypeScript, and Next.js. Focused on clean architecture
            and modern UI excellence.
          </p>
        </div>

        <div ref={trackRef} className="relative">
          {/* Background timeline line (full height) */}
          <div
            className="absolute left-5 top-5 bottom-0 w-px bg-neutral-800 sm:left-6"
            aria-hidden
          />
          {/* Scroll-driven fill: violet line grows as user scrolls through section */}
          <div
            className="absolute left-5 top-5 w-px bg-gradient-to-b from-violet-500 to-violet-400 transition-[height] duration-150 ease-out sm:left-6"
            style={{
              height: `${fillProgress * Math.max(0, trackHeight - 20)}px`
            }}
            aria-hidden
          />
          <div className="space-y-0">
            {experiences.map((exp) => (
              <ExperienceEntry
                key={exp.id}
                experience={exp}
                onReadMore={() => setSelectedExperience(exp)}
              />
            ))}
          </div>
        </div>

        {typeof document !== 'undefined' &&
          selectedExperience &&
          createPortal(
            <ExperienceModal
              experience={selectedExperience}
              onClose={() => setSelectedExperience(null)}
            />,
            document.body
          )}
      </Container>
    </section>
  );
}
