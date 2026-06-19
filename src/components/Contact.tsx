import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { profile } from "@/data/resume";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="06 — Contact"
          title="Let's build something"
          subtitle="I'm open to new-grad and internship opportunities. The fastest way to reach me is email."
        />

        <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <a
              href={`mailto:${profile.email}`}
              className="glass card-hover group flex h-full flex-col justify-between rounded-2xl p-8"
            >
              <div className="inline-flex w-fit rounded-xl bg-accent/10 p-3 text-accent">
                <Mail size={24} />
              </div>
              <div className="mt-8">
                <p className="text-sm text-muted">Email me at</p>
                <p className="mt-1 flex items-center gap-2 text-2xl font-semibold sm:text-3xl">
                  {profile.email}
                  <ArrowUpRight
                    className="text-accent transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    size={24}
                  />
                </p>
              </div>
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid h-full gap-4">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass card-hover flex items-center gap-4 rounded-2xl p-6"
              >
                <FaLinkedin className="text-accent" size={24} />
                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <p className="text-sm text-muted">Connect with me</p>
                </div>
                <ArrowUpRight className="ml-auto text-muted" size={20} />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass card-hover flex items-center gap-4 rounded-2xl p-6"
              >
                <FaGithub className="text-accent" size={24} />
                <div>
                  <p className="font-semibold">GitHub</p>
                  <p className="text-sm text-muted">See my code</p>
                </div>
                <ArrowUpRight className="ml-auto text-muted" size={20} />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
