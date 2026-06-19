export type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  fork: boolean;
  archived: boolean;
  pushed_at: string;
};

export async function getRepos(user: string): Promise<Repo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=100&sort=updated`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          // Optional: set GITHUB_TOKEN in env to raise rate limits.
          ...(process.env.GITHUB_TOKEN
            ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
            : {}),
        },
        // Revalidate hourly so new repos show up automatically.
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) return [];

    const repos: Repo[] = await res.json();

    return repos
      .filter((r) => !r.fork && !r.archived)
      .sort(
        (a, b) =>
          b.stargazers_count - a.stargazers_count ||
          new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
      );
  } catch {
    return [];
  }
}
