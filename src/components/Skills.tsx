import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { skills } from "@/data/resume";

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="05 — Skills"
          title="My toolbox"
          subtitle="Languages, frameworks, and tools I reach for."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.05}>
              <div className="glass card-hover h-full rounded-2xl p-6">
                <h3 className="mb-4 font-mono text-sm uppercase tracking-widest text-accent-2">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-border bg-background/40 px-3 py-1.5 text-sm text-foreground/90 transition-colors hover:border-accent"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
