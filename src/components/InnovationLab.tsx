"use client";

import React from "react";
import { 
  Cpu, 
  ExternalLink, 
  MonitorPlay, 
  Database, 
  Bot, 
  TrendingUp, 
  Building2,
  GitBranch
} from "lucide-react";
import { ProjectDemo } from "./DeviceSimulatorModal";

interface InnovationLabProps {
  onSelectProject: (p: ProjectDemo) => void;
}

const INNOVATION_PROJECTS = [
  {
    id: "systemic-picks",
    name: "Systemic Picks & Tracker",
    tagline: "Automated Daily Value-Pick Scraper & Statistical Engine",
    url: "https://systembet-tracker.vercel.app",
    category: "Scraping & Data Analytics",
    badge: "Active Module",
    icon: TrendingUp,
    color: "from-purple-500 to-indigo-600",
    description:
      "A specialized quantitative analytics engine and scheduled scraper tracking statistical value indicators and real-time algorithmic picks with historical success rate auditing.",
    tech: ["JavaScript", "Node.js", "Vercel Serverless", "REST APIs", "Analytics"],
  },
  {
    id: "chrismod-erp",
    name: "Chrismod ERP Suite",
    tagline: "Integrated Enterprise Cloud Resource Planning",
    url: "https://chrismod-erp.vercel.app",
    category: "Enterprise Systems & ERP",
    badge: "Core Architecture",
    icon: Building2,
    color: "from-blue-500 to-cyan-600",
    description:
      "A modular business operations platform unifying ledger management, staff access tiers, multi-department inventory control, and enterprise-wide reporting.",
    tech: ["HTML5", "CSS3", "JavaScript", "Cloud Ledger", "Vercel"],
  },
  {
    id: "nonny-bot-dashboard",
    name: "Nonny-Bot & AI Systems",
    tagline: "Autonomous Agent Orchestrator & Task Automation Suite",
    url: "https://nonny-bot-dashboard.vercel.app",
    category: "AI & Automation",
    badge: "Automation Engine",
    icon: Bot,
    color: "from-emerald-500 to-green-600",
    description:
      "Centralized command dashboard managing automated background bots, asynchronous scheduled runners, task workers, and real-time process notifications.",
    tech: ["Python", "FastAPI", "WebSockets", "Automation", "Dashboard"],
  },
  {
    id: "universal-erps",
    name: "Universal ERP & SMB",
    tagline: "Comprehensive SMB Framework for Universal Commerce",
    url: "https://github.com/Nonnybest/universal-erps",
    category: "Commerce Framework",
    badge: "Research & Design",
    icon: Database,
    color: "from-amber-500 to-rose-600",
    description:
      "Standardized multi-tier commerce architecture designed to give growing businesses unified point-of-sale, supplier ledgers, and financial reconciliation.",
    tech: ["HTML5", "Modular JS", "Database Architecture", "Git"],
  },
];

export default function InnovationLab({ onSelectProject }: InnovationLabProps) {
  return (
    <section id="innovations" className="py-20 relative z-10 border-t border-white/5 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>R&D and Operational Systems</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            The Global Pick Innovation Lab.
          </h2>
          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            In addition to our flagship deployments, explore our ongoing research, algorithmic scrapers, bot engines, and enterprise resource modules.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {INNOVATION_PROJECTS.map((item) => {
            const Icon = item.icon;
            const hasLiveDemo = item.url.startsWith("https://") && !item.url.includes("github.com");

            return (
              <div
                key={item.id}
                className="glass-card rounded-2xl p-6 border border-white/10 hover:border-purple-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-cyan-400 group-hover:text-purple-400 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs text-slate-400 font-mono block">
                          {item.category}
                        </span>
                        <h3 className="text-lg font-heading font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {item.name}
                        </h3>
                      </div>
                    </div>

                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                      {item.badge}
                    </span>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-slate-900 border border-white/5 text-[10px] font-mono text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5 gap-3">
                  {hasLiveDemo ? (
                    <>
                      <button
                        onClick={() =>
                          onSelectProject({
                            id: item.id,
                            name: item.name,
                            tagline: item.tagline,
                            url: item.url,
                            category: item.category,
                            badge: item.badge,
                            color: item.color,
                          })
                        }
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/30 text-xs font-semibold transition-colors"
                      >
                        <MonitorPlay className="w-3.5 h-3.5" />
                        <span>Simulator</span>
                      </button>

                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors"
                      >
                        <span>Direct Live View</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </>
                  ) : (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-cyan-400 transition-colors"
                    >
                      <GitBranch className="w-3.5 h-3.5" />
                      <span>View GitHub Architecture</span>
                    </a>
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
