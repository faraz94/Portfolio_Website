"use client";

import React, { useState } from "react";
import { submitContactForm } from "../app/actions/contact";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim()) newErrors.name = "Name is required";
    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formState.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    // Clear error for that field when user types
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    try {
      const res = await submitContactForm(formState);
      if (res.success) {
        setStatus("success");
        setFormState({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden border-t border-card-border">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center gap-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Get In Touch
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-pink-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Info Column (5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Let&apos;s discuss your next project
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Have an exciting project idea, looking for a full stack developer, or just want to chat about engineering? Shoot me a message, and I&apos;ll get back to you as soon as possible.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl border border-card-border glass">
                <span className="p-3 bg-primary/10 text-primary rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.25v11.5a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 0 012.25 17.75V6.25m19.5 0A2.25 2.25 0 0019.5 4H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.41a2.25 2.25 0 01-1.07-1.916V6.25"
                    />
                  </svg>
                </span>
                <div>
                  <span className="block text-xs text-muted-foreground uppercase tracking-wider font-semibold">Email</span>
                  <a href="mailto:faraz94.khan@gmail.com" className="text-sm font-semibold hover:text-primary transition-colors text-foreground break-all">
                    faraz94.khan@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl border border-card-border glass">
                <span className="p-3 bg-primary/10 text-primary rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25A7.5 7.5 0 1119.5 10.5z"
                    />
                  </svg>
                </span>
                <div>
                  <span className="block text-xs text-muted-foreground uppercase tracking-wider font-semibold">Location</span>
                  <span className="text-sm font-semibold text-foreground">Karachi, Pakistan</span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl border border-card-border glass">
                <span className="p-3 bg-primary/10 text-primary rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.47-5.112-3.758-6.58-6.58l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>
                <div>
                  <span className="block text-xs text-muted-foreground uppercase tracking-wider font-semibold">Phone</span>
                  <a href="tel:03032108753" className="text-sm font-semibold hover:text-primary transition-colors text-foreground">
                    03032108753
                  </a>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block text-[11px] text-muted">
              * Fully responsive form validated using strict TypeScript standards.
            </div>
          </div>

          {/* Form Column (7 columns) */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl glass space-y-6">
              
              {status === "success" && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-sm font-semibold flex items-center gap-2 animate-fade-in-up">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {status === "error" && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-semibold flex items-center gap-2 animate-fade-in-up">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Oops! Something went wrong on the server. Please try again.
                </div>
              )}

              {status !== "success" ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-foreground">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm transition-all duration-200 ${
                          errors.name ? "border-red-500" : "border-card-border focus:border-primary"
                        }`}
                        placeholder="John Doe"
                        disabled={status === "submitting"}
                      />
                      {errors.name && <span className="text-xs text-red-500 font-medium">{errors.name}</span>}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-foreground">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm transition-all duration-200 ${
                          errors.email ? "border-red-500" : "border-card-border focus:border-primary"
                        }`}
                        placeholder="john@example.com"
                        disabled={status === "submitting"}
                      />
                      {errors.email && <span className="text-xs text-red-500 font-medium">{errors.email}</span>}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wider text-foreground">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-card-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm transition-all duration-200"
                      placeholder="Collaborating on a project"
                      disabled={status === "submitting"}
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm transition-all duration-200 resize-none ${
                        errors.message ? "border-red-500" : "border-card-border focus:border-primary"
                      }`}
                      placeholder="Write your message details here..."
                      disabled={status === "submitting"}
                    />
                    {errors.message && <span className="text-xs text-red-500 font-medium">{errors.message}</span>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className={`w-full py-4 px-6 rounded-xl font-semibold text-white bg-primary hover:bg-primary/95 hover:scale-[1.01] transition-all duration-200 cursor-pointer shadow-lg shadow-primary/20 flex items-center justify-center gap-2 ${
                      status === "submitting" ? "opacity-85 cursor-not-allowed" : ""
                    }`}
                  >
                    {status === "submitting" ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending Message...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </>
              ) : (
                <div className="flex flex-col gap-6 items-center text-center mt-4 animate-fade-in-up">
                  <div className="text-xs font-semibold tracking-wider text-muted-foreground">
                    WHILE YOU WAIT, HERE IS A PEEK AT MY WORKSPACE:
                  </div>
                  <div className="w-full relative rounded-2xl border border-card-border overflow-hidden shadow-2xl bg-black aspect-video">
                    <video
                      src="/coding_video.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-xl border border-card-border glass hover:bg-badge-bg hover:scale-[1.02] transition-all duration-200 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              )}

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
