export const profile = {
  name: "Edison Zhang",
  firstName: "Edison",
  tagline: "Software Engineer • AI & Agentic Systems",
  blurb:
    "CS student at UC San Diego building agentic AI systems and cloud-scale software. Currently a Software Engineering Intern at Intuit, where I work on agent-based systems and distributed data infrastructure.",
  location: "San Diego / Bay Area, CA",
  email: "edisonzhangsw@gmail.com",
  phone: "925-663-5353",
  photo: "/edison.png",
  resumeUrl: "/Edison_Zhang_resume.pdf",
  github: "https://github.com/Edison-ZhangSWE",
  githubUser: "Edison-ZhangSWE",
  linkedin: "https://www.linkedin.com/in/Edison-Zhang-SWE",
  citizenship: "US Citizen",
};

export type Experience = {
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  bullets: string[];
  tags: string[];
};

export const experiences: Experience[] = [
  {
    role: "Software Engineering Intern",
    company: "Intuit Inc.",
    location: "Mountain View, CA",
    start: "Apr 2026",
    end: "Present",
    current: true,
    bullets: [
      "Working on agent-based systems, distributed data infrastructure, and cloud-scale services on the Datacloud team.",
    ],
    tags: ["Agents", "Distributed Systems", "Cloud"],
  },
  {
    role: "Software Engineering Intern",
    company: "Intuit Inc.",
    location: "Mountain View, CA",
    start: "Jun 2025",
    end: "Sep 2025",
    bullets: [
      "Spearheaded end-to-end design and implementation of a Python sales agent that enriches Salesforce CRM leads by orchestrating LLM calls through LangChain/LangGraph and SQL, processing thousands of records per hour.",
      "Built agentic routing logic with intent scoring and custom metrics to choose the next outreach action (email, SMS, list segmentation), improving customer conversion by 3% — one-fifth of the division's quarterly growth target.",
      "Deployed Langfuse tracing and offline eval scripts to monitor latency, cost, and quality across agent runs.",
      "Shipped weekly releases in Agile/Scrum, owning stories end-to-end from planning through review, demo, and rollout.",
    ],
    tags: ["LangChain", "LangGraph", "Langfuse", "Salesforce", "Python"],
  },
  {
    role: "Software Engineering Intern",
    company: "Lawrence Livermore National Laboratory",
    location: "Livermore, CA",
    start: "Aug 2024",
    end: "Jan 2025",
    bullets: [
      "Developed full-stack features for DARC, a secure data archive platform — Angular search and metadata workflows plus FastAPI/Pydantic endpoints with REST/OpenAPI contracts, deployed via Uvicorn in Docker across classified and unclassified data.",
      "Optimized search and metadata retrieval by redesigning query patterns and adding targeted indexes in MongoDB, improving search speed and reducing data overhead by ~7%.",
      "Reduced backend p95 latency by caching hot metadata paths with Redis, offloading full-text queries to Elasticsearch, and trimming payloads with selective projection and server-side pagination.",
    ],
    tags: ["Angular", "FastAPI", "MongoDB", "Redis", "Elasticsearch", "Docker"],
  },
  {
    role: "Software Research Assistant",
    company: "University of California",
    location: "Remote",
    start: "Sep 2023",
    end: "Aug 2024",
    bullets: [
      "Implemented economic flood loss modeling by joining geospatial hazard layers with asset exposure and crop impact datasets in Python and DuckDB, computing scenario damages across return periods and vulnerability parameters.",
      "Built a reproducible ETL pipeline with caching and vectorized computation in Pandas/NumPy, accelerating repeated model runs.",
      "Ran uncertainty analysis via Monte Carlo simulation and trained baseline predictive models in scikit-learn, visualizing loss distributions with Matplotlib.",
    ],
    tags: ["Python", "DuckDB", "Pandas", "NumPy", "scikit-learn", "ArcGIS"],
  },
  {
    role: "Software Engineering Intern",
    company: "AMAX Engineering",
    location: "Fremont, CA",
    start: "May 2021",
    end: "Aug 2021",
    bullets: [
      "Built backend services in C++ and deployed workloads on AWS (EC2, S3, IAM), containerizing services with Docker and standardizing config and permissions for repeatable deployments.",
      "Reduced production defects by 2.6% by implementing CI quality gates for builds, unit tests, and linting, paired with structured PR reviews and Kubernetes (EKS) deployments with safe rollout and rollback.",
    ],
    tags: ["C++", "AWS", "Docker", "Kubernetes", "CI/CD"],
  },
];

export type Project = {
  name: string;
  description: string;
  date: string;
  award?: string;
  tags: string[];
  github?: string;
  devpost?: string;
  demo?: string;
};

// Featured projects (manually curated). The Projects section also auto-pulls
// repos live from the GitHub API.
export const featuredProjects: Project[] = [
  {
    name: "CareSync",
    description:
      "Autonomous multi-agent healthcare platform built at TreeHacks 2026. AI agents monitor wearable health data, detect anomalies against a 28-day baseline, and a Secretary Agent (Claude Agent SDK) triages alerts, queries PubMed/FDA for clinical context, and books appointments via Google Calendar. Patients talk face-to-face with an AI doctor through a HeyGen streaming avatar in 12+ languages.",
    date: "Feb 2026",
    award: "TreeHacks 2026",
    tags: [
      "Claude Agent SDK",
      "GPT-4o",
      "Multi-Agent",
      "HeyGen",
      "Deepgram",
      "TypeScript",
      "Python",
    ],
    github: "https://github.com/SpartaKushK/treehacks2026",
    devpost: "https://devpost.com/software/test-zdxlf0",
  },
  {
    name: "Healthy UC",
    description:
      "1st-place winner at HackMerced VIII. An iOS app that gives students personalized meal recommendations from dining-hall menus based on dietary restrictions, BMI, and fitness goals. Led a team of four; web-scraped and filtered menu data into SQLite and served it through a Flask REST API.",
    date: "2023",
    award: "🏆 1st Place — HackMerced VIII",
    tags: ["Python", "Flask", "SQLite", "Web Scraping", "iOS"],
    github: "https://github.com/jm2601/HealthyUC",
    devpost: "https://devpost.com/software/healthy-uc",
  },
  {
    name: "Herd",
    description:
      "A Chrome extension that lets college students split Costco bulk purchases into bite-sized portions. Users bid on parts of a wholesale item so individuals can access wholesale pricing without committing to massive quantities — cutting cost and food waste.",
    date: "2024",
    tags: ["Chrome Extension", "JavaScript", "Web"],
    devpost: "https://devpost.com/software/herd-0dv8e7",
  },
];

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Languages",
    items: ["Python", "C++", "C", "Java", "JavaScript", "HTML/CSS"],
  },
  {
    category: "Frameworks",
    items: [
      "React",
      "Node.js",
      "Express.js",
      "Flask",
      "FastAPI",
      "TailwindCSS",
      "WordPress",
    ],
  },
  {
    category: "AI / ML",
    items: [
      "LangChain",
      "LangGraph",
      "Langfuse",
      "OpenAI API",
      "TensorFlow",
      "PyTorch",
    ],
  },
  {
    category: "Developer Tools",
    items: [
      "Git",
      "Docker",
      "Kubernetes",
      "AWS",
      "Google Cloud",
      "Firebase",
      "Poetry",
      "Agile / Scrum",
    ],
  },
  {
    category: "Data",
    items: ["Pandas", "NumPy", "Matplotlib", "Pydantic"],
  },
  {
    category: "Databases",
    items: [
      "MongoDB",
      "PostgreSQL",
      "DuckDB",
      "CockroachDB",
      "MySQL",
      "SQLite",
    ],
  },
  {
    category: "Technologies",
    items: [
      "Salesforce",
      "Redis",
      "Elasticsearch",
      "OpenAPI",
      "Uvicorn",
      "ArcGIS",
      "Riot API",
      "Discord API",
    ],
  },
];

export const education = {
  school: "University of California, San Diego",
  degree: "B.S. in Computer Science",
  date: "Expected June 2026",
  gpa: "3.7 GPA",
  honors: "Dean's Honors List",
};

export const achievements = [
  { label: "Grandmaster", game: "League of Legends" },
  { label: "Top 500", game: "Overwatch" },
  { label: "Legend", game: "Hearthstone" },
  { label: "Top 0.1%", game: "Chess.com" },
];
