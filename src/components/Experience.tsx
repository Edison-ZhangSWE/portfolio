import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { experiences } from "@/data/resume";

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="02 — Experience"
          title="Where I've worked"
          subtitle="Internships and research roles across AI agents, data, and full-stack systems."
        />

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-[7px] top-1 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-8">
            {experiences.map((exp, i) => {
              const right = i % 2 === 1;
              return (
                <Reveal key={`${exp.company}-${exp.start}`} delay={i * 0.05}>
                  <div className="relative md:grid md:grid-cols-2 md:gap-12">
                    {/* dot */}
                    <span
                      className={`absolute left-0 top-2 z-10 h-4 w-4 rounded-full border-2 border-accent bg-background md:left-1/2 md:-translate-x-1/2 ${
                        exp.current
                          ? "shadow-[0_0_0_4px_rgba(124,92,255,0.25)]"
                          : ""
                      }`}
                    />

                    <div
                      className={`pl-8 md:pl-0 ${
                        right ? "md:col-start-2" : "md:col-start-1"
                      }`}
                    >
                      <div className="glass card-hover rounded-2xl p-5">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-lg font-semibold">{exp.role}</h3>
                          {exp.current && (
                            <span className="rounded-full bg-accent-2/15 px-2 py-0.5 text-xs font-medium text-accent-2">
                              Now
                            </span>
                          )}
                        </div>
                        <p className="text-accent">{exp.company}</p>
                        <p className="mt-1 font-mono text-xs text-muted">
                          {exp.start} — {exp.end} · {exp.location}
                        </p>
                        <ul className="mt-3 space-y-2 text-sm text-muted">
                          {exp.bullets.map((b, bi) => (
                            <li key={bi} className="flex gap-2">
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {exp.tags.map((t) => (
                            <span
                              key={t}
                              className="rounded-md border border-border px-2 py-1 font-mono text-xs text-muted"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
