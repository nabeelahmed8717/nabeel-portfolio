'use client';

import Link from 'next/link';
import { Container } from '@/components/atoms/Container';
import { useTheme } from '@/components/layout/ThemeProvider';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <header className="sticky top-0 z-20  bg-white/80 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/80">
      <Container className="grid h-16 grid-cols-[auto_1fr_auto] items-center gap-4">
        {/* Left: logo */}
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-black dark:text-white"
        >
          Nabeel
        </Link>

        {/* Center: nav items */}
        <nav className="flex items-center justify-center gap-6 text-sm font-medium">
          <a
            href="#home"
            className="text-[rgb(180,180,180)] transition-colors hover:text-white dark:text-[rgb(180,180,180)] dark:hover:text-white"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-[rgb(180,180,180)] transition-colors hover:text-white dark:text-[rgb(180,180,180)] dark:hover:text-white"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-[rgb(180,180,180)] transition-colors hover:text-white dark:text-[rgb(180,180,180)] dark:hover:text-white"
          >
            Projects
          </a>
          <a
            href="#services"
            className="text-[rgb(180,180,180)] transition-colors hover:text-white dark:text-[rgb(180,180,180)] dark:hover:text-white"
          >
            Services
          </a>
          <a
            href="#experience"
            className="text-[rgb(180,180,180)] transition-colors hover:text-white dark:text-[rgb(180,180,180)] dark:hover:text-white"
          >
            Experience
          </a>
          <a
            href="#contact"
            className="text-[rgb(180,180,180)] transition-colors hover:text-white dark:text-[rgb(180,180,180)] dark:hover:text-white"
          >
            Contact
          </a>
        </nav>

        {/* Right: theme toggle */}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          className="flex h-8 w-8 items-center justify-center justify-self-end rounded-full border border-neutral-300 text-neutral-700 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
        >
          {isDark ? (
            // Sun icon for light mode target
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
            // Moon icon for dark mode target
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
      </Container>
    </header>
  );
}

