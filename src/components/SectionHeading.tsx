import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal>
      <div className="mb-12">
        <p className="mb-2 font-mono text-sm uppercase tracking-[0.2em] text-accent-2">
          {eyebrow}
        </p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-muted">{subtitle}</p>
        )}
      </div>
    </Reveal>
  );
}
