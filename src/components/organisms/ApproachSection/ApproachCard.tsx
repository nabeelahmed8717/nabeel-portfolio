'use client';

import { useState } from 'react';
import clsx from 'clsx';

export interface ApproachCardProps {
  phase: string;
  description: string;
}

export function ApproachCard({ phase, description }: ApproachCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={clsx(
        'relative flex min-h-[450px] flex-col rounded-xl border-2 transition-all duration-300',
        'border-neutral-800 bg-neutral-900/80 backdrop-blur-sm',
        'hover:border-violet-500/60',
        isHovered && 'shadow-[0_0_40px_rgba(139,92,246,0.3)]'
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Corner accents (crosshairs) */}
      <span className="absolute left-3 top-3 text-neutral-600" aria-hidden>+</span>
      <span className="absolute right-3 top-3 text-neutral-600" aria-hidden>+</span>
      <span className="absolute bottom-3 left-3 text-neutral-600" aria-hidden>+</span>
      <span className="absolute bottom-3 right-3 text-neutral-600" aria-hidden>+</span>

      {/* Centered content: pill by default, description on hover */}
      <div className="absolute inset-0 flex items-center justify-center p-6">
        {!isHovered ? (
          <span className="gradient-border-horizontal">
            <span className="gradient-border-horizontal-inner px-5 py-2.5 text-sm font-medium text-white">
              {phase}
            </span>
          </span>
        ) : (
          <p className="text-center text-sm leading-relaxed text-white/90 sm:text-base">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
