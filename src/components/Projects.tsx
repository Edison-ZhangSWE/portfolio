import { ExternalLink, Star, GitFork } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { featuredProjects, profile } from "@/data/resume";
import { getRepos } from "@/lib/github";

function langColor(lang: string | null) {
  const map: Record<string, string> = {
    Python: "#3572A5",
    JavaScript: "#f1e05a",
    TypeScript: "#3178c6",
    "C++": "#f34b7d",
    C: "#555555",
    Java: "#b07219",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Jupyter: "#DA5B0B",
  };
  return map[lang ?? ""] ?? "#7c5cff";
}

export async function Projects() {
  const repos = await getRepos(profile.githubUser);
  const topRepos = repos.slice(0, 6);

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="03 — Projects"
          title="Things I've built"
          subtitle="Featured work plus live projects pulled straight from my GitHub."
        />

        {/* Featured */}
        <div className="mb-10 grid gap-6">
          {featuredProjects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.05}>
              <div className="glass card-hover rounded-2xl p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-xs uppercase tracking-widest text-accent-2">
                        Featured
                      </span>
                      {p.award && (
                        <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-medium text-accent">
                          {p.award}
                        </span>
                      )}
                      <span className="font-mono text-xs text-muted">
                        {p.date}
                      </span>
                    </div>
                    <h3 className="mt-1.5 text-xl font-semibold">{p.name}</h3>
                  </div>
                  <div className="flex items-center gap-3">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub repo"
                        className="text-muted transition-colors hover:text-foreground"
                      >
                        <FaGithub size={20} />
                      </a>
                    )}
                    {p.devpost && (
                      <a
                        href={p.devpost}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-accent hover:text-foreground"
                      >
                        Devpost <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="mt-3 max-w-3xl text-muted">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border px-2 py-1 font-mono text-xs text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* GitHub repos */}
        {topRepos.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {topRepos.map((repo, i) => (
              <Reveal key={repo.id} delay={i * 0.05}>
                <a
                  href={repo.homepage || repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass card-hover flex h-full flex-col rounded-2xl p-5"
                >
                  <div className="flex items-center justify-between">
                    <FaGithub size={20} className="text-muted" />
                    <ExternalLink size={16} className="text-muted" />
                  </div>
                  <h3 className="mt-3 font-semibold capitalize">
                    {repo.name.replace(/[-_]/g, " ")}
                  </h3>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm text-muted">
                    {repo.description || "No description provided."}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-muted">
                    {repo.language && (
                      <span className="flex items-center gap-1.5">
                        <span
                          className="h-2.5 w-2.5 rounded-full"
                          style={{ background: langColor(repo.language) }}
                        />
                        {repo.language}
                      </span>
                    )}
                    {repo.stargazers_count > 0 && (
                      <span className="flex items-center gap-1">
                        <Star size={13} /> {repo.stargazers_count}
                      </span>
                    )}
                    {repo.forks_count > 0 && (
                      <span className="flex items-center gap-1">
                        <GitFork size={13} /> {repo.forks_count}
                      </span>
                    )}
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        )}

        <Reveal>
          <div className="mt-10 text-center">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-accent"
            >
              <FaGithub size={18} /> See all repositories
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

