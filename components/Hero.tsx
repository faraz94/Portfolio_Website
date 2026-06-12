"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [tagline, setTagline] = useState("");
  const fullTagline = "Technology Professional | Entrepreneur";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTagline(fullTagline.slice(0, index));
      index++;
      if (index > fullTagline.length) {
        clearInterval(interval);
      }
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Decorative background grid and gradients */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(120,120,120,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,120,120,0.05)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Text Area (7 cols on desktop) */}
        <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left gap-6 animate-fade-in-up">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-card-border glass text-xs font-semibold tracking-wider text-primary">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            OPEN FOR NEW OPPORTUNITIES
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Hi, I&apos;m{" "}
            <span className="text-gradient">
              Muhammad Faraz
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl font-bold h-8 text-foreground min-w-[280px]">
            {tagline}
            <span className="animate-pulse text-primary ml-1">|</span>
          </h2>

          <p className="max-w-lg text-base sm:text-lg text-muted-foreground leading-relaxed">
            I help <strong>businesses, startups, and entrepreneurs</strong> turn ideas into powerful web applications and SaaS platforms. My focus is on building fast, scalable, and reliable solutions designed to support long-term growth and real-world impact.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-row flex-wrap items-center gap-4 mt-6 w-full justify-center md:justify-start">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/muhammad-faraz-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-2xl border border-card-border hover:border-primary/50 hover:bg-badge-bg transition-all duration-300 flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
            
            <a
              href="/Muhammad_Faraz_CV.pdf"
              download="Muhammad_Faraz_CV.pdf"
              className="px-8 py-3.5 border border-card-border glass font-semibold rounded-2xl hover:bg-badge-bg hover:scale-[1.02] transition-all duration-200 text-center cursor-pointer flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download CV
            </a>

            <a
              href="#contact"
              className="px-8 py-3.5 border border-card-border glass font-semibold rounded-2xl hover:bg-badge-bg hover:scale-[1.02] transition-all duration-200 text-center cursor-pointer"
            >
              Contact Me
            </a>
          </div>

        </div>

        {/* Image Area (5 cols on desktop) */}
        <div className="md:col-span-5 flex justify-center animate-float">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-[2.5rem] p-1.5 glass shadow-2xl overflow-hidden hover:rotate-2 transition-transform duration-300">
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
              <Image
                src="/Muhammad_faraz_portfolio.jpg"
                alt="Muhammad Faraz profile photo"
                fill
                priority
                sizes="(max-width: 768px) 256px, 320px"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Glow accent overlay */}
            <div className="absolute inset-0 rounded-[2.5rem] border border-primary/20 pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
}
