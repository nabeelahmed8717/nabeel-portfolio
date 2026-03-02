import { Container } from '@/components/atoms/Container';
import { ApproachCard } from './ApproachCard';

const APPROACH_PHASES = [
  {
    phase: 'Phase 1',
    description:
      'Discovery and planning. I work with you to define goals, scope, and a clear roadmap so we start on the same page.'
  },
  {
    phase: 'Phase 2',
    description:
      'Design and development. I translate ideas into clean, responsive interfaces and robust code, with regular check-ins.'
  },
  {
    phase: 'Phase 3',
    description:
      'Launch and iterate. We go live together, then refine based on real usage and feedback so the product keeps improving.'
  }
];

export function ApproachSection() {
  return (
    <section
      id="approach"
      className="border-b border-neutral-900 bg-black py-16 sm:py-24"
    >
      <Container className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            My approach
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {APPROACH_PHASES.map((item) => (
            <ApproachCard
              key={item.phase}
              phase={item.phase}
              description={item.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
