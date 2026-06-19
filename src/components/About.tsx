import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { achievements } from "@/data/resume";

const stats = [
  { value: "4+", label: "SWE internships" },
  { value: "3.7", label: "GPA · Dean's List" },
  { value: "2026", label: "UCSD CS grad" },
];

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="01 — About" title="A bit about me" />

        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div className="space-y-4 text-lg leading-relaxed text-muted">
              <p>
                I&apos;m a Computer Science student at{" "}
                <span className="text-foreground">UC San Diego</span> who loves
                turning messy, large-scale problems into reliable software. Most
                of my recent work lives at the intersection of{" "}
                <span className="text-foreground">
                  AI agents, data infrastructure, and full-stack engineering
                </span>
                .
              </p>
              <p>
                At <span className="text-foreground">Intuit</span> I&apos;ve
                shipped production agentic systems — orchestrating LLMs with
                LangChain/LangGraph, building intent-based routing logic, and
                instrumenting agent runs with tracing and offline evals. Before
                that I built secure archival platforms at{" "}
                <span className="text-foreground">
                  Lawrence Livermore National Lab
                </span>{" "}
                and economic models as a UC research assistant.
              </p>
              <p>
                Outside of code, I&apos;m relentlessly competitive — which
                tends to show up in my games.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {achievements.map((a) => (
                <div
                  key={a.game}
                  className="glass rounded-full px-4 py-2 text-sm"
                >
                  <span className="font-semibold text-accent-2">{a.label}</span>
                  <span className="text-muted"> · {a.game}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="grid gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="glass card-hover rounded-2xl p-6"
                >
                  <div className="text-4xl font-bold gradient-text">
                    {s.value}
                  </div>
                  <div className="mt-1 text-sm text-muted">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
