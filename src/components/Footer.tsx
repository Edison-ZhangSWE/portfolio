import { profile } from "@/data/resume";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js,
          Tailwind &amp; a lot of agents.
        </p>
        <p className="font-mono text-xs">Designed &amp; coded by Edison.</p>
      </div>
    </footer>
  );
}
