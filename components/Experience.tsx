import React from "react";

interface Role {
  company: string;
  role: string;
  period: string;
  description: string[];
  location: string;
}

export default function Experience() {
  const experiences: Role[] = [
    {
      company: "Next Generation Innovation (NextGenI)",
      role: "Technology Professional | Entrepreneur",
      period: "07/2023 - Present",
      location: "Karachi, Pakistan",
      description: [
        "Architect and develop a custom middleware integration platform to facilitate seamless microservices communication.",
        "Implement robust, high-throughput Pub-Sub messaging queue systems for decoupled, event-driven service architectures.",
        "Collaborate closely with startups to analyze project ideas and successfully deliver end-to-end scalable backend solutions.",
        "Handle API design, service deployment orchestrations, and post-deployment application monitoring support.",
      ],
    },
    {
      company: "Haball Private Limited",
      role: "Senior Software Engineer",
      period: "07/2019 - 06/2023",
      location: "Karachi, Pakistan",
      description: [
        "Developed secure, end-to-end encrypted B2B FinTech REST APIs using Node JS and MySQL.",
        "Built and maintained core transaction endpoints integrating client CRM platforms with agnostic payment structures.",
        "Designed responsive corporate user interface dashboards using Angular components, modules, and router layouts.",
        "Integrated client-side Angular applications with secure backend REST services, ensuring high data consistency.",
      ],
    },
    {
      company: "Saasbit Solutions (Subsidiary of Logicinflux)",
      role: "Dot Net Developer",
      period: "05/2017 - 07/2019",
      location: "Karachi, Pakistan",
      description: [
        "Contributed to the design, database architecture, and full-stack coding of enterprise B2B SaaS web applications.",
        "Developed high-performance RESTful APIs using ASP.Net Web API, Dapper micro-ORM, and MS SQL Server databases.",
        "Crafted interactive client-side controllers and DOM animation triggers using jQuery and AJAX libraries.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden border-t border-card-border">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center gap-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Work Experience
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-pink-500 rounded-full" />
        </div>

        {/* Timeline container */}
        <div className="relative border-l-2 border-timeline-line ml-4 md:ml-6 pl-8 md:pl-10 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Indicator dot */}
              <div className="absolute -left-[41px] md:-left-[49px] top-1.5 w-6 h-6 rounded-full border-4 border-background bg-primary group-hover:scale-110 group-hover:bg-pink-500 transition-all duration-300 shadow-md shadow-primary/20" />
              
              {/* Work detail card */}
              <div className="p-6 rounded-2xl glass hover:border-primary/20 transition-all duration-300 shadow-sm">
                
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                      {exp.role}
                    </h3>
                    <span className="text-sm font-semibold text-gradient">
                      {exp.company}
                    </span>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full border border-card-border glass text-muted-foreground w-fit">
                      {exp.period}
                    </span>
                    <span className="text-[10px] text-muted-foreground font-medium sm:text-right">
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullet details */}
                <ul className="space-y-2.5 text-sm text-muted-foreground leading-relaxed">
                  {exp.description.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex gap-2 items-start">
                      <span className="text-primary font-bold mt-0.5">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
