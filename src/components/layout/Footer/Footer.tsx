import { Container } from '@/components/atoms/Container';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative h-[400px] overflow-hidden border-t border-neutral-200 text-xs text-neutral-600 dark:border-neutral-800 dark:text-white"
    >
      {/* Background layers (behind content) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-white dark:bg-neutral-950"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(255, 99, 8, 0.1), rgba(255, 99, 8, 0.1), rgba(189, 201, 230, 0.1), rgba(151, 196, 255, 0.1), rgba(151, 196, 255, 0.1))',
          WebkitMaskImage:
            'radial-gradient(at center top, black, transparent 60%)',
          maskImage: 'radial-gradient(at center top, black, transparent 60%)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col">
        {/* CTA section */}
        <Container className="flex flex-1 flex-col items-center justify-center px-4 text-center">
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            Ready to take{' '}
            <span className="bg-gradient-to-r from-violet-400 to-sky-300 bg-clip-text text-transparent">
              your
            </span>{' '}
            digital presence to the next level?
          </h2>
          <p className="mt-4 max-w-xl text-sm text-neutral-600 dark:text-neutral-300">
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
          </p>
          <a
            href="#contact"
            className="mt-7 inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-white/60 px-4 py-2 text-sm font-medium text-neutral-900 backdrop-blur transition-colors hover:bg-white dark:border-neutral-700 dark:bg-neutral-950/40 dark:text-white dark:hover:bg-neutral-900"
          >
            Let&apos;s get in touch
            <span aria-hidden="true">↗</span>
          </a>
        </Container>

        {/* Separate footer bar */}
        <div className="border-t border-neutral-200/70 py-6 dark:border-neutral-800/70">
          <Container className="flex items-center justify-between gap-2">
            <span>&copy; {year} Nabeel. All rights reserved.</span>
            <span className="text-[11px] text-neutral-500 dark:text-neutral-300">
              Built with Next.js, TypeScript, and Tailwind CSS.
            </span>
          </Container>
        </div>
      </div>
    </footer>
  );
}

