import { Container } from '@/components/atoms/Container';
import { StarfieldBackground } from './StarfieldBackground';

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-x-hidden overflow-y-auto  bg-[#050510] "
    >
      

      <Container className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center py-16 text-center sm:py-28">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-neutral-400">
          First, solve the problem then write the &quot;code&quot;;
        </p>

        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
          Transforming Concepts into
          <br />
          <span className="bg-gradient-to-r from-violet-300 via-sky-300 to-fuchsia-300 bg-clip-text text-transparent">
            Seamless User Experiences
          </span>
        </h1>

        <p className="mt-5 max-w-xl text-sm text-neutral-300 sm:text-base">
          Hi! I&apos;m Nabeel, a frontend developer focused on crafting clean,
          accessible, and delightful digital products.
        </p>

        <a
          href="#projects"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
        >
          Show my work
          <span aria-hidden="true">↗</span>
        </a>
      </Container>
      <StarfieldBackground />
    </section>
  );
}

