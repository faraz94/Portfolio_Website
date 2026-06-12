"use client";

import React, { useState } from "react";

interface Project {
  title: string;
  description: string;
  category: "frontend" | "fullstack" | "systems";
  tech: string[];
  github: string;
  demo: string;
}

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "frontend" | "fullstack" | "systems">("all");

  const projects: Project[] = [
    {
      title: "Contextual Transaction Engine (CTE)",
      description: "A secure supply chain digital payment solution. Automates client orders, transaction routes, and invoice payments. Integrates CRM data models directly with bank-agnostic financial networks.",
      category: "fullstack",
      tech: ["Node JS", "MySQL", "Angular", "REST APIs"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "FeedbackRig SaaS",
      description: "A subscription-based customer feedback aggregation engine. Measures real-time consumer satisfaction trends and generates automated reports for corporate business decision-makers.",
      category: "fullstack",
      tech: ["ASP.Net Web API", "SQL Server", "Dapper ORM", "jQuery"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Microservice Middleware Broker",
      description: "A high-performance middleware integration platform to coordinate data exchange across microservice structures. Engineered using Pub-Sub queues and MSMQ brokers.",
      category: "systems",
      tech: ["Node JS", "Pub-Sub", "MSMQ", "Windows Services"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "B2B FinTech Payment Portal",
      description: "Front-end integration client dashboard built with Angular routing interfaces, allowing businesses of all scales to connect secure ERP endpoints with backend servers.",
      category: "frontend",
      tech: ["Angular", "JavaScript", "HTML5/CSS3", "Bootstrap"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden border-t border-card-border">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center gap-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            My Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-pink-500 rounded-full" />
        </div>

        {/* Categories Selector */}
        <div className="flex justify-center flex-wrap gap-2.5 mb-16">
          {(["all", "fullstack", "systems", "frontend"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 text-xs font-semibold uppercase tracking-wider rounded-xl border transition-all duration-300 cursor-pointer ${
                filter === cat
                  ? "bg-primary border-primary text-white shadow-md shadow-primary/20 scale-[1.02]"
                  : "border-card-border glass text-muted-foreground hover:text-foreground hover:border-foreground/20"
              }`}
            >
              {cat === "all"
                ? "All Projects"
                : cat === "fullstack"
                ? "Full Stack"
                : cat === "systems"
                ? "Systems / Middleware"
                : "Frontend UI"}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col justify-between p-6 rounded-2xl glass hover:border-primary/20 hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded-md bg-badge-bg text-badge-text"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-4 border-t border-card-border pt-4 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                  </svg>
                  Source Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
