import React from "react";
import Image from "next/image";

export default function About() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "Node JS", "C# (ASP.Net)", "SQL", "HTML5", "CSS3"],
    },
    {
      title: "Backend & Systems",
      skills: ["Node JS", "ASP.Net Web API", "Pub-Sub Queues", "MSMQ", "Windows Services", "Dapper ORM"],
    },
    {
      title: "Frontend & Web",
      skills: ["Angular", "React / Next.js", "jQuery", "Tailwind CSS", "Bootstrap", "AJAX"],
    },
    {
      title: "Databases & Tools",
      skills: ["SQL Server", "MySQL", "Git & GitHub", "Docker", "IIS Server", "Project Management"],
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden border-t border-card-border">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center gap-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-pink-500 rounded-full" />
        </div>

        {/* Narrative & Skills Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Text Description (6 columns) */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-muted-foreground leading-relaxed text-base">
            <h3 className="text-xl font-bold text-foreground">
              Engineering reliable backends and scalable integrations.
            </h3>
            
            <p>
              I am a **Technology Professional | Entrepreneur** with a proven track record of developing reliable and scalable systems, such as customer support systems, digital payment engines, and process automation tools.
            </p>
            
            <p>
              With strong experience across the full software development lifecycle, I am capable of taking a software project from initial analysis and architectural design through to containerized deployment, performance tuning, and support.
            </p>

            <p>
              My expertise spans modern JavaScript ecosystems (Node JS, Angular), Microsoft Dot Net frameworks (ASP.Net, Dapper ORM), message queue systems (Pub-Sub, MSMQ) for microservice orchestration, and relational database systems (SQL Server, MySQL).
            </p>

            <div className="grid grid-cols-2 gap-6 mt-4 pt-6 border-t border-card-border">
              <div>
                <span className="block text-2xl font-black text-primary">8+</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-muted">Years Experience</span>
              </div>
              <div>
                <span className="block text-2xl font-black text-primary">FAST-NUCES</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-muted">Alma Mater</span>
              </div>
            </div>
          </div>

          {/* Skill Groups (6 columns) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="p-6 rounded-2xl glass hover:border-primary/20 transition-all duration-300 group"
              >
                <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4 border-b border-card-border pb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs rounded-lg bg-badge-bg text-badge-text font-medium hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Education Timeline */}
        <div className="mt-20 pt-16 border-t border-card-border">
          <h3 className="text-xl font-bold text-foreground mb-10 text-center lg:text-left">
            Education
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl glass hover:border-primary/10 transition-all duration-300 flex gap-4 items-start">
              <div className="relative w-12 h-12 flex-shrink-0 rounded-xl overflow-hidden flex items-center justify-center">
                <Image
                  src="/NU-logo.jpg"
                  alt="FAST-NUCES logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start gap-4">
                  <span className="px-3 py-1 text-[10px] font-bold tracking-wider rounded-md bg-primary/10 text-primary uppercase">
                    09/2019 - 06/2022
                  </span>
                  <span className="text-xs text-muted-foreground font-semibold">Karachi, Pakistan</span>
                </div>
                <h4 className="text-lg font-bold text-foreground mt-3">
                  MS - Software Project Management
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  National University of Computer and Emerging Sciences (FAST-NUCES)
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl glass hover:border-primary/10 transition-all duration-300 flex gap-4 items-start">
              <div className="relative w-12 h-12 flex-shrink-0 rounded-xl overflow-hidden flex items-center justify-center">
                <Image
                  src="/NU-logo.jpg"
                  alt="FAST-NUCES logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start gap-4">
                  <span className="px-3 py-1 text-[10px] font-bold tracking-wider rounded-md bg-primary/10 text-primary uppercase">
                    08/2012 - 01/2017
                  </span>
                  <span className="text-xs text-muted-foreground font-semibold">Karachi, Pakistan</span>
                </div>
                <h4 className="text-lg font-bold text-foreground mt-3">
                  BS - Computer Science
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  National University of Computer and Emerging Sciences (FAST-NUCES)
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
