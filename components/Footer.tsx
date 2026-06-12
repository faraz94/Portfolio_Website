import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 border-t border-card-border mt-auto bg-background/50">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo and Tagline */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <a href="#" className="flex items-center gap-2 group">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-pink-500 flex items-center justify-center text-white font-bold text-base shadow-sm">
              F
            </span>
            <span className="text-lg font-bold tracking-tight text-foreground">
              Faraz<span className="text-primary font-black">.</span>
            </span>
          </a>
          <span className="text-xs text-muted-foreground">
            Crafting premium web interfaces and architectures.
          </span>
        </div>

        {/* Quick Links */}
        <ul className="flex items-center gap-6 text-xs font-semibold text-muted-foreground">
          <li>
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-primary transition-colors">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-primary transition-colors">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </li>
        </ul>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground">
          &copy; {currentYear} Muhammad Faraz. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
