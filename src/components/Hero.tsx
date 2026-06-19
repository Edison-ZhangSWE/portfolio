"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "@/data/resume";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-6 pt-24"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.3fr_1fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-accent-2"
          >
            {profile.citizenship} · {profile.location}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m <span className="gradient-text">{profile.firstName}</span>.
            <br />
            I build agentic AI &amp; cloud software.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-xl text-lg text-muted"
          >
            {profile.blurb}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 font-medium text-black transition-transform hover:scale-105"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border px-6 py-3 font-medium text-foreground transition-colors hover:border-accent"
            >
              Get in touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex items-center gap-5"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted transition-colors hover:text-foreground"
            >
              <FaGithub size={22} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted transition-colors hover:text-foreground"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-muted transition-colors hover:text-foreground"
            >
              <Mail size={22} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-full max-w-xs"
        >
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-accent/40 to-accent-2/40 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-border">
            <Image
              src={profile.photo}
              alt={profile.name}
              width={500}
              height={750}
              priority
              className="h-[28rem] w-full object-cover object-top"
            />
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
        aria-label="Scroll down"
      >
        <ArrowDown className="animate-bounce" size={22} />
      </a>
    </section>
  );
}
