"use client";

import { motion } from "framer-motion";
import {
  Bot,
  GitBranch,
  Gauge,
  Workflow,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const capabilities = [
  {
    icon: Workflow,
    title: "Agent Orchestration",
    body: "Designed and shipped a production sales agent orchestrating LLM calls through LangChain & LangGraph, processing thousands of records per hour.",
  },
  {
    icon: GitBranch,
    title: "Agentic Routing",
    body: "Built intent-scoring + custom-metric routing to pick the next outreach action (email, SMS, segmentation) — lifting conversion by 3%.",
  },
  {
    icon: Gauge,
    title: "Eval & Observability",
    body: "Deployed Langfuse tracing and offline eval scripts to monitor latency, cost, and quality across every agent run.",
  },
  {
    icon: Bot,
    title: "Agentic Coding",
    body: "I build with AI agents daily — Cursor, multi-step coding agents, and custom tools — to ship faster while keeping a tight review loop.",
  },
];

const terminalLines = [
  { p: "$", t: "agent plan --goal \"enrich CRM lead\"", c: "text-foreground" },
  { p: "→", t: "scoring intent... confidence 0.92", c: "text-accent-2" },
  { p: "→", t: "routing: next_action = personalized_email", c: "text-accent-2" },
  { p: "→", t: "calling LangGraph node: draft_outreach", c: "text-muted" },
  { p: "✓", t: "trace logged to Langfuse · latency 1.2s · $0.004", c: "text-accent" },
  { p: "✓", t: "lead enriched — conversion +3%", c: "text-accent" },
];

export function AISection() {
  return (
    <section
      id="ai"
      className="relative px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="04 — AI & Agents"
          title="I build with — and on top of — AI"
          subtitle="From production LLM agents at Intuit to agentic coding workflows, AI is core to how I design and ship software."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Animated terminal */}
          <Reveal>
            <div className="glass overflow-hidden rounded-2xl">
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-500/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                <span className="h-3 w-3 rounded-full bg-green-500/70" />
                <span className="ml-2 font-mono text-xs text-muted">
                  agent-run.log
                </span>
              </div>
              <div className="space-y-2 p-5 font-mono text-sm">
                {terminalLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.4, duration: 0.3 }}
                    className="flex gap-3"
                  >
                    <span className="text-accent">{line.p}</span>
                    <span className={line.c}>{line.t}</span>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + terminalLines.length * 0.4 }}
                  className="flex items-center gap-2 pt-1 text-foreground"
                >
                  <Sparkles size={14} className="text-accent-2" />
                  <span className="inline-block h-4 w-2 animate-pulse bg-accent" />
                </motion.div>
              </div>
            </div>
          </Reveal>

          {/* Capability cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((cap, i) => (
              <Reveal key={cap.title} delay={i * 0.08}>
                <div className="glass card-hover h-full rounded-2xl p-5">
                  <div className="mb-3 inline-flex rounded-xl bg-accent/10 p-2.5 text-accent">
                    <cap.icon size={20} />
                  </div>
                  <h3 className="font-semibold">{cap.title}</h3>
                  <p className="mt-2 text-sm text-muted">{cap.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
