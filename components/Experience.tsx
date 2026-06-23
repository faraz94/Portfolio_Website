"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface Role {
  company: string;
  period: string;
  location: string;
  logo: string;
  logoFallback: string;
  intro: string;
}

interface CompanyLogoProps {
  src: string;
  alt: string;
  fallback: string;
}

function CompanyLogo({ src, alt, fallback }: CompanyLogoProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-primary to-pink-500 flex items-center justify-center text-white font-extrabold text-lg shadow-md border border-white/10 shrink-0">
        {fallback}
      </div>
    );
  }

  return (
    <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-card-border bg-card-bg shrink-0 flex items-center justify-center shadow-inner">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="48px"
        className="object-contain p-1"
        onError={() => setHasError(true)}
      />
    </div>
  );
}

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (currentRef) {
            observer.unobserve(currentRef);
          }
        }
      },
      {
        threshold: 0.15, // Trigger when 15% of the section is visible
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const experiences: Role[] = [
    {
      company: "Next Generation Innovation (NextGenI)",
      period: "07/2023 - Present",
      location: "Karachi, Pakistan",
      logo: "/nextGenI_logo_1.png",
      logoFallback: "N",
      intro: "NextGenI helps startups to transform their ideas into reality by providing the scalable solutions",
    },
    {
      company: "Haball Private Limited",
      period: "07/2019 - 06/2023",
      location: "Karachi, Pakistan",
      logo: "/haball_2.png",
      logoFallback: "H",
      intro: "Haball is a B2B FinTech, providing a bank and ERP agnostic payment solution for businesses of all sizes",
    },
    {
      company: "Saasbits Solutions",
      period: "05/2017 - 07/2019",
      location: "Karachi, Pakistan",
      logo: "/Saasbits_3.png",
      logoFallback: "S",
      intro: "Saasbit Solutions a subsidiary of (logicinflux.com)",
    },
  ];

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="py-24 relative overflow-hidden border-t border-card-border"
    >
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
        <div className="relative ml-4 md:ml-6 pl-8 md:pl-10 space-y-12">
          
          {/* Static timeline line background */}
          <div className="absolute left-0 top-3 bottom-3 w-[2px] bg-timeline-line rounded-full" />
          
          {/* Animated active gradient line growing from bottom (Saasbits) upwards */}
          <div 
            className={`absolute left-0 top-3 bottom-3 w-[2px] bg-gradient-to-t from-transparent via-pink-500 to-primary origin-bottom transition-transform duration-[1800ms] ease-out ${
              isVisible ? "scale-y-100" : "scale-y-0"
            } rounded-full`}
          />

          {experiences.map((exp, idx) => {
            const delay = `${(experiences.length - idx) * 0.3}s`;
            return (
              <div 
                key={idx} 
                className={`relative group transition-all duration-700 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: delay }}
              >
                
                {/* Timeline Indicator dot */}
                <div 
                  className={`absolute -left-[41px] md:-left-[49px] top-1.5 w-6 h-6 rounded-full border-4 border-background bg-primary group-hover:scale-110 group-hover:bg-pink-500 transition-all duration-300 shadow-md shadow-primary/20 ${
                    isVisible ? "scale-100" : "scale-0"
                  }`}
                  style={{ transitionDelay: delay }}
                />
                
                {/* Work detail card */}
                <div className="p-6 rounded-2xl glass hover:border-primary/20 transition-all duration-300 shadow-sm">
                  
                  {/* Header info */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <CompanyLogo src={exp.logo} alt={`${exp.company} Logo`} fallback={exp.logoFallback} />
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                        {exp.company}
                      </h3>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1 shrink-0">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full border border-card-border glass text-muted-foreground w-fit">
                        {exp.period}
                      </span>
                      <span className="text-[10px] text-muted-foreground font-medium sm:text-right">
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Intro text (Company Description) */}
                  {exp.intro && (
                    <p className="text-sm text-muted-foreground leading-relaxed mt-4">
                      {exp.intro}
                    </p>
                  )}

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
