import { GraduationCap } from "lucide-react";
import { Reveal } from "./Reveal";
import { education } from "@/data/resume";

export function Education() {
  return (
    <section className="px-6 pb-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="glass card-hover flex flex-col gap-4 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="inline-flex rounded-xl bg-accent/10 p-3 text-accent">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{education.school}</h3>
                <p className="text-muted">{education.degree}</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 sm:justify-end">
              <span className="rounded-full bg-accent-2/15 px-3 py-1 text-sm font-medium text-accent-2">
                {education.gpa}
              </span>
              <span className="rounded-full border border-border px-3 py-1 text-sm text-muted">
                {education.honors}
              </span>
              <span className="font-mono text-sm text-muted">
                {education.date}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
