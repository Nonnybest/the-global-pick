"use client";

import React from "react";
import { 
  ArrowRight, 
  MonitorPlay, 
  ShieldCheck, 
  Zap, 
  Layers, 
  CheckCircle,
  ExternalLink,
  Terminal,
  Activity
} from "lucide-react";

interface HeroProps {
  onOpenSimulator: () => void;
}

export default function Hero({ onOpenSimulator }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Director Status Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-card border border-cyan-500/30 text-xs text-slate-300 mb-8 animate-in fade-in slide-in-from-bottom-3 duration-500">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="font-mono text-cyan-300 font-semibold uppercase tracking-wider text-[11px]">
            The Global Pick Enterprise
          </span>
          <span className="text-slate-500">•</span>
          <span className="text-slate-300 font-medium">
            Director: <strong className="text-white">Chinonso Ajali</strong>
          </span>
        </div>

        {/* Main Grand Headline */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tight text-white leading-[1.08] mb-6">
            Architecting <span className="gradient-text-cyan">Scalable Systems</span> & Autonomous Platforms.
          </h1>

          <p className="text-lg sm:text-xl text-slate-300/90 leading-relaxed font-normal mb-10 max-w-2xl">
            Under the direction of <span className="text-white font-semibold">Chinonso Ajali</span>, The Global Pick builds high-performance, real-world software—spanning multi-vendor marketplaces, food ordering infrastructure, digital laundry operations, and predictive scraping engines.
          </p>

          {/* Action Callouts */}
          <div className="flex flex-wrap items-center gap-4 mb-14">
            <button
              onClick={onOpenSimulator}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <MonitorPlay className="w-4 h-4" />
              <span>Launch Live Simulator</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            <a
              href="#flagship"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 transition-all"
            >
              <span>Explore Flagship Systems</span>
            </a>

            <a
              href="#director"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              <span>Director's Dossier</span>
            </a>
          </div>
        </div>

        {/* Live Systems Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/10">
          
          <div className="glass-card p-5 rounded-2xl">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-mono">
              <span>FINISHED PLATFORMS</span>
              <CheckCircle className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              3 <span className="text-emerald-400 text-sm font-sans font-normal">Active</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Lifab, Chrismon & Nmart
            </p>
          </div>

          <div className="glass-card p-5 rounded-2xl">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-mono">
              <span>ARCHITECTURE</span>
              <Layers className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              Full-Stack
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Next.js 16, React 19 & Supabase
            </p>
          </div>

          <div className="glass-card p-5 rounded-2xl">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-mono">
              <span>DEPLOYMENT</span>
              <Zap className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              Vercel Edge
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Global CDN & Serverless API
            </p>
          </div>

          <div className="glass-card p-5 rounded-2xl">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-mono">
              <span>SYSTEM STATUS</span>
              <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
            </div>
            <div className="text-2xl sm:text-3xl font-heading font-extrabold text-emerald-400">
              100%
            </div>
            <p className="text-xs text-slate-400 mt-1">
              All Endpoints Operational
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
