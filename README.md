# Edison Zhang — Portfolio

My personal portfolio site. Built with Next.js, React, Tailwind CSS, and Framer Motion.

🌐 **Live:** _add your Vercel URL here_

## Features

- Dark, modern, fully responsive design with scroll animations
- Experience timeline, skills, and education pulled from my resume
- Projects section that **auto-pulls my repos live from the GitHub API**
- Featured hackathon projects with Devpost links
- Dedicated AI / agentic-engineering section
- Visitor analytics via Vercel Analytics + PostHog

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router) + React 19
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Vercel Analytics](https://vercel.com/analytics) + [PostHog](https://posthog.com/) for analytics

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```bash
NEXT_PUBLIC_POSTHOG_KEY=phc_your_key_here
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
# Optional, raises GitHub API rate limit for the Projects section:
# GITHUB_TOKEN=ghp_your_token_here
```

## Deploy

Deployed on [Vercel](https://vercel.com/) — every push to `main` auto-redeploys.
