'use client';

import { useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import type { StaticImageData } from 'next/image';

const SPRING = { type: 'spring' as const, stiffness: 175, damping: 17 };
const TILT_BACK = 42;

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string | StaticImageData;
  url?: string;
  techStack: string[];
  slug?: string;
}

export function ProjectCard({
  title,
  description,
  image,
  url,
  techStack,
  slug
}: ProjectCardProps) {
  const tiltProgress = useMotionValue(0);
  const scale = useMotionValue(1);
  const imageY = useMotionValue(0);
  const badgeOpacity = useMotionValue(0);
  const badgeY = useMotionValue(-8);
  const lineScale = useMotionValue(0);
  const elevation = useMotionValue(0);
  const paddingTop = useMotionValue(0);
  const marginTop = useMotionValue(0);

  const rotateX = useTransform(tiltProgress, [0, 1], [0, TILT_BACK]);
  const boxShadow = useTransform(
    elevation,
    [0, 1],
    [
      '0 24px 60px rgba(0,0,0,0.35)',
      '0 32px 64px rgba(0,0,0,0.45)'
    ]
  );

  const handleMouseEnter = useCallback(() => {
    animate(tiltProgress, 1, SPRING);
    animate(scale, 1.03, SPRING);
    animate(imageY, -12, SPRING);
    animate(elevation, 1, SPRING);
    animate(paddingTop, 0, SPRING);
    animate(marginTop, 0, SPRING);
    if (url) {
      animate(badgeOpacity, 1, SPRING);
      animate(badgeY, 0, SPRING);
      animate(lineScale, 1, SPRING);
    }
  }, [tiltProgress, scale, imageY, elevation, paddingTop, marginTop, badgeOpacity, badgeY, lineScale, url]);

  const handleMouseLeave = useCallback(() => {
    animate(tiltProgress, 0, SPRING);
    animate(scale, 1, SPRING);
    animate(imageY, 0, SPRING);
    animate(elevation, 0, SPRING);
    animate(paddingTop, 0, SPRING);
    animate(marginTop, 0, SPRING);
    if (url) {
      animate(badgeOpacity, 0, SPRING);
      animate(badgeY, -8, SPRING);
      animate(lineScale, 0, SPRING);
    }
  }, [tiltProgress, scale, imageY, elevation, paddingTop, marginTop, badgeOpacity, badgeY, lineScale, url]);

  const displayUrl = url ? url.replace(/^https?:\/\//, '').replace(/\/$/, '') : null;

  return (
    <div
      className="relative [perspective:1200px]"
      style={{ perspectiveOrigin: '50% 100%' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Badge + line: outside tilting card so they stay upright (90°) */}
      {displayUrl && (
        <div style={{top:"115px"}} className="pointer-events-none absolute left-0 right-0 top-10 z-10 flex flex-col items-center pt-3">
          <motion.div
            className="pointer-events-auto shrink-0"
            style={{
              opacity: badgeOpacity,
              y: badgeY,
              willChange: 'transform, opacity'
            }}
          >
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-full border border-white/15 bg-neutral-800 px-4 py-2 text-xs font-medium text-white shadow-xl dark:border-white/10 dark:bg-neutral-950"
              onClick={(e) => e.stopPropagation()}
            >
              {displayUrl}
            </a>
          </motion.div>
          <motion.div
            className="h-[158px] w-0.5 origin-top rounded-full bg-cyan-400/90 shadow-[0_0_8px_2px_rgba(34,211,238,0.5)] dark:bg-cyan-400/80 dark:shadow-[0_0_10px_2px_rgba(103,232,249,0.4)]"
            style={{
              scaleY: lineScale,
              willChange: 'transform'
            }}
            aria-hidden
          />
        </div>
      )}

      <motion.article
        className="flex flex-col overflow-visible rounded-[14px] border border-neutral-800 bg-[rgb(17,17,17)] dark:border-neutral-800 dark:bg-[rgb(17,17,17)]"
        style={{
          rotateX,
          scale,
          boxShadow,
          transformStyle: 'preserve-3d',
          transformOrigin: 'center bottom',
          willChange: 'transform',
          paddingTop,
          marginTop,
        }}
        transition={SPRING}
      >
        <div className="relative aspect-video w-full overflow-visible bg-neutral-800">
          <motion.div
            className="absolute inset-0 overflow-hidden rounded-t-[14px]"
            style={{
              y: imageY,
              willChange: 'transform'
            }}
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </motion.div>
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h3 className="text-center text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {title}
          </h3>
          <p className="mt-2 line-clamp-2 text-center text-sm text-neutral-300">
            {description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {techStack.slice(0, 5).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-lg border border-neutral-700 bg-neutral-800 px-3 py-1.5 text-xs font-medium text-white"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-end">
          <Link
                href={`/projects/${slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-300 transition-colors hover:text-white"
              >
                View Case Study
                <span aria-hidden="true">↗</span>
              </Link>
          </div>
        </div>
      </motion.article>
    </div>
  );
}
