"use client";

import React from "react";
import { 
  Award, 
  Terminal, 
  Code2, 
  Server, 
  ShieldCheck, 
  Cpu, 
  Mail,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { GithubIcon } from "./Icons";

export default function DirectorProfile() {
  return (
    <section id="director" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 lg:p-14 border border-white/10 relative overflow-hidden">
          
          {/* Subtle Ambient Radial */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Director Bio & Message */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                <span>Executive Leadership</span>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight">
                  Chinonso Ajali
                </h2>
                <p className="text-base sm:text-lg font-medium text-cyan-400 mt-1">
                  Director & Principal Systems Architect • The Global Pick
                </p>
              </div>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  As Director of <strong className="text-white">The Global Pick</strong>, Chinonso Ajali steers the engineering and architectural direction of production-grade commercial software. With expertise bridging modern React/Next.js runtimes, scalable database backends, and multi-tenant architectures, Chinonso transforms complex business operations into frictionless digital platforms.
                </p>
                <p>
                  From building food logistics networks like <strong className="text-cyan-300">Lifab Foods</strong> to operational dry cleaning suites like <strong className="text-cyan-300">Chrismon Laundry</strong> and multi-vendor marketplaces like <strong className="text-cyan-300">Nmart</strong>, the driving focus is always: high availability, airtight role security, and immediate business utility.
                </p>
              </div>

              {/* Guiding Principles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 bg-white/5 p-3 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Production-First Engineering</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 bg-white/5 p-3 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Multi-Tenant Role Dashboards</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 bg-white/5 p-3 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>Edge & Serverless Deployment</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 bg-white/5 p-3 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Automated Realtime Workflows</span>
                </div>
              </div>

              {/* Quick Contact Links */}
              <div className="flex items-center gap-4 pt-4">
                <a
                  href="https://github.com/Nonnybest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 text-xs font-semibold border border-white/10 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub (@Nonnybest)</span>
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/30 text-xs font-semibold transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Consult Director</span>
                </a>
              </div>

            </div>

            {/* Right: Technical Stack Matrix */}
            <div className="lg:col-span-5 bg-slate-950/70 p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2 text-white font-heading font-bold text-base">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span>Architectural Competency Matrix</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
                  Verified
                </span>
              </div>

              {/* Group 1: Modern Frontends */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                  Frontend & Client Runtimes:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {["Next.js 14-16", "React 18/19", "Tailwind CSS v4", "TypeScript", "Vite", "Zustand", "TanStack Query"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-slate-300 font-mono"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Group 2: APIs & Databases */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                  Backend, APIs & Cloud Persistence:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {["FastAPI (Python)", "Node.js", "PostgreSQL", "Supabase BaaS", "REST APIs", "WebSockets"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-slate-300 font-mono"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Group 3: Infrastructure */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                  Cloud Ops & Automation:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {["Vercel Edge Network", "CI/CD Git Workflows", "Background Scrapers", "Digital Wallets", "POS Systems"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-slate-300 font-mono"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Director Quote Badge */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 to-blue-950/40 border border-cyan-500/20 text-xs text-cyan-200/90 italic">
                “Every line of code at The Global Pick is engineered for concrete operational value, high uptime, and zero friction for end users.”
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
