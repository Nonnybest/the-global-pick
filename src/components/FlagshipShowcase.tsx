"use client";

import React from "react";
import { 
  ExternalLink, 
  MonitorPlay, 
  Check, 
  Sparkles, 
  ShoppingBag, 
  Shirt, 
  Store, 
  ChevronRight,
  ShieldCheck,
  CreditCard,
  Truck,
  FileText,
  Clock,
  Layers
} from "lucide-react";
import { ProjectDemo } from "./DeviceSimulatorModal";

interface FlagshipShowcaseProps {
  onSelectProject: (p: ProjectDemo) => void;
}

export const FLAGSHIP_PROJECTS: (ProjectDemo & {
  tag: string;
  icon: any;
  tech: string[];
  features: string[];
  summary: string;
  architecture: string;
})[] = [
  {
    id: "lifab-foods",
    name: "Lifab Foods",
    tagline: "High-Volume Food Logistics & Digital Ordering Platform",
    url: "https://lifabfoods.vercel.app",
    category: "Hospitality & Food Tech",
    badge: "Finished & Production Ready",
    color: "from-amber-500 to-orange-600",
    tag: "Food Ordering & Tracking",
    icon: ShoppingBag,
    summary:
      "A complete food ordering, fulfillment, and customer receipt ecosystem engineered for rapid turnaround, seamless payment reconciliation, and real-time order visibility.",
    architecture:
      "Next.js frontend with SSR and edge caching, backed by a high-throughput API architecture with automated receipt generation and owner administration.",
    tech: ["Next.js", "React", "Tailwind CSS", "FastAPI", "PostgreSQL", "Vercel"],
    features: [
      "Dynamic food catalog & interactive ordering cart",
      "Real-time order tracking portal (/track) with status updates",
      "Digital receipt generator (/r/<receipt>) with sharing capability",
      "Comprehensive restaurant owner dashboard (/admin)",
      "Instant WhatsApp checkout and phone fulfillment integration",
    ],
  },
  {
    id: "chrismon-laundry",
    name: "Chrismon Laundry",
    tagline: "Sparkling Clean — Commercial Dry Cleaning & Laundry Operations ERP",
    url: "https://sparkling-clean-demo.vercel.app",
    category: "Enterprise Operations & ERP",
    badge: "Finished & Production Ready",
    color: "from-cyan-500 to-blue-600",
    tag: "Commercial Laundry ERP",
    icon: Shirt,
    summary:
      "An end-to-end commercial operations suite combining a 4-step public customer booking portal with an internal staff Point-of-Sale (POS), financial cashflow charts, and expense auditing.",
    architecture:
      "Next.js 16 App Router with React 19, Tailwind CSS v4, client-side persistence with pluggable database layer, and full multi-tier role authorization.",
    tech: ["Next.js 16", "React 19", "Tailwind CSS v4", "Lucide", "Charts", "Vercel"],
    features: [
      "4-step pickup & delivery booking flow with date turnaround logic",
      "Customer order tracking by phone number without login barrier",
      "Staff POS counter for walk-in orders with printable receipts",
      "Financial reports: Money In vs. Money Out & expense categorization",
      "Audit logging, staff permissions, and automated WhatsApp reminders",
    ],
  },
  {
    id: "nmart",
    name: "Nmart Multi-Vendor Marketplace",
    tagline: "Enterprise Commerce Ecosystem with Digital Wallet & 5 Role Dashboards",
    url: "https://nmart-brown.vercel.app",
    category: "Multi-Vendor E-Commerce",
    badge: "Finished & Production Ready",
    color: "from-emerald-500 to-teal-600",
    tag: "Enterprise Marketplace",
    icon: Store,
    summary:
      "A multi-tenant e-commerce marketplace featuring integrated digital wallets, buyer OTP authentication, return lifecycle management, and dedicated operational portals.",
    architecture:
      "React 19 with Vite, Supabase BaaS (Auth, Postgres, Realtime, Storage), TanStack Query for server cache, and Zustand for synchronized global state.",
    tech: ["React 19", "Vite", "Tailwind CSS", "Supabase", "Zustand", "TanStack Query"],
    features: [
      "Built-in digital wallet with balance top-up and ledger history",
      "5 distinct role dashboards: Buyer, Seller, Rider, Hub Manager, Master Admin",
      "Secure OTP verification screen for sensitive buyer actions",
      "Full return & refund lifecycle tracking (/returns)",
      "Real-time dispatch coordination between sellers, hubs, and delivery riders",
    ],
  },
];

export default function FlagshipShowcase({ onSelectProject }: FlagshipShowcaseProps) {
  return (
    <section id="flagship" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Flagship Commercial Systems</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
              Production-Grade Platforms.
            </h2>
            <p className="text-slate-400 mt-3 text-base sm:text-lg max-w-2xl">
              These systems are fully developed, live on Vercel, and open for interactive testing. Experience their user journeys, staff counters, and management consoles.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>3 Active Commercial Deployments</span>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-12">
          {FLAGSHIP_PROJECTS.map((project, idx) => {
            const Icon = project.icon;

            return (
              <div
                key={project.id}
                className="glass-card rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10 relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300"
              >
                {/* Background ambient corner flare */}
                <div
                  className={`absolute -top-32 -right-32 w-80 h-80 bg-gradient-to-br ${project.color} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  
                  {/* Left Column: Project Overview */}
                  <div className="lg:col-span-7 space-y-5">
                    
                    {/* Category & Status */}
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-slate-300">
                        <Icon className="w-3.5 h-3.5 text-cyan-400" />
                        {project.category}
                      </span>

                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {project.badge}
                      </span>

                      <span className="text-xs text-slate-500 font-mono">
                        #{String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-sm sm:text-base font-medium text-cyan-400/90 mt-1">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Summary */}
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Key Features Bullet List */}
                    <div className="space-y-2 pt-2">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                        Core Capabilities & Modules:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300">
                        {project.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="pt-3">
                      <div className="flex flex-wrap items-center gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-white/5 text-[11px] font-mono text-slate-400"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Right Column: Interactive Actions & Visual Preview Frame */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
                    
                    {/* Simulated Interactive Mockup Window */}
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-950/80 shadow-2xl p-4 group-hover:border-cyan-500/30 transition-all">
                      
                      {/* Browser mock topbar */}
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5 text-xs text-slate-400 font-mono">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        </div>
                        <div className="text-[11px] text-slate-500 truncate max-w-[200px]">
                          {project.url.replace("https://", "")}
                        </div>
                        <span className="text-[10px] text-cyan-400">LIVE</span>
                      </div>

                      {/* Mockup Card Body */}
                      <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-white/5 p-6 flex flex-col justify-between">
                        
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono text-cyan-400 font-semibold uppercase">
                              {project.tag}
                            </span>
                            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                          </div>
                          <h4 className="text-xl font-heading font-bold text-white">
                            {project.name}
                          </h4>
                          <p className="text-xs text-slate-400 line-clamp-2">
                            {project.architecture}
                          </p>
                        </div>

                        {/* Interactive Click Simulator Trigger Inside Card */}
                        <div className="pt-4 flex flex-col gap-2">
                          <button
                            onClick={() => onSelectProject(project)}
                            className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                          >
                            <MonitorPlay className="w-4 h-4" />
                            <span>Test In Device Simulator</span>
                          </button>

                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-2 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-medium text-xs flex items-center justify-center gap-2 border border-white/10 transition-colors"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Direct Visit: {project.name}</span>
                          </a>
                        </div>
                      </div>

                    </div>

                    {/* Direct Quick Launch Bar */}
                    <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-white/5 font-mono">
                      <span>Deployment Host:</span>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:underline flex items-center gap-1"
                      >
                        <span>{project.url}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
