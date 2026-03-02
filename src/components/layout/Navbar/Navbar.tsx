'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/atoms/Container';
import { useTheme } from '@/components/layout/ThemeProvider';

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

const linkClass =
  'transition-colors text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-transparent bg-white/80 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/80">
      <Container className="flex h-14 items-center justify-between gap-4 sm:h-16 lg:grid lg:grid-cols-[auto_1fr_auto] lg:items-center">
        {/* Left: logo */}
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-black dark:text-white"
        >
          Nabeel
        </Link>

        {/* Desktop: center nav (hidden on mobile) */}
        <nav
          className="hidden items-center justify-center gap-6 text-sm font-medium lg:flex"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} className={linkClass}>
              {label}
            </a>
          ))}
        </nav>

        {/* Right: theme toggle + mobile menu button */}
        <div className="flex items-center gap-2 lg:justify-self-end">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
          >
            {isDark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="M4.93 4.93l1.41 1.41" />
                <path d="M17.66 17.66l1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="M4.93 19.07l1.41-1.41" />
                <path d="M17.66 6.34l1.41-1.41" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Mobile: hamburger button */}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-lg border border-neutral-300 text-neutral-700 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800 lg:hidden"
          >
            <span
              className={`h-0.5 w-4 rounded-full bg-current transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span
              className={`h-0.5 w-4 rounded-full bg-current transition-transform ${menuOpen ? '-translate-y-0.5 -rotate-45' : ''}`}
            />
            <span
              className={`h-0.5 w-4 rounded-full bg-current transition-all ${menuOpen ? 'scale-0 opacity-0' : ''}`}
            />
          </button>
        </div>
      </Container>

      {/* Mobile: slide-down menu */}
      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-neutral-200 bg-white/95 backdrop-blur transition-[max-height] duration-300 ease-out dark:border-neutral-800 dark:bg-neutral-950/95 lg:hidden ${menuOpen ? 'max-h-[320px]' : 'max-h-0'}`}
        aria-hidden={!menuOpen}
      >
        <nav
          className="flex flex-col gap-1 px-4 py-4"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`rounded-lg px-3 py-2.5 text-sm font-medium ${linkClass}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

