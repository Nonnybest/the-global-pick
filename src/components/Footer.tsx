"use client";

import React from "react";
import { Mail, Globe, ArrowUp, Sparkles } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#05070a] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 text-white font-bold text-xs shadow-md shadow-cyan-500/20">
                GP
              </div>
              <span className="font-heading font-extrabold text-lg tracking-wider text-white">
                THE GLOBAL PICK
              </span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              Engineering high-performance enterprise platforms, commercial logistics systems, and automated digital ecosystems under the direction of Chinonso Ajali.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/Nonnybest"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:ajalijohn102@gmail.com"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Flagship Deployments */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              Live Commercial Systems
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a
                  href="https://lifabfoods.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center justify-between"
                >
                  <span>Lifab Foods (Hospitality & Ordering)</span>
                  <span className="text-[10px] text-emerald-400 font-mono">Live</span>
                </a>
              </li>
              <li>
                <a
                  href="https://sparkling-clean-demo.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center justify-between"
                >
                  <span>Chrismon Laundry (Operations ERP)</span>
                  <span className="text-[10px] text-emerald-400 font-mono">Live</span>
                </a>
              </li>
              <li>
                <a
                  href="https://nmart-brown.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center justify-between"
                >
                  <span>Nmart (Multi-Vendor Marketplace)</span>
                  <span className="text-[10px] text-emerald-400 font-mono">Live</span>
                </a>
              </li>
              <li>
                <a
                  href="https://systembet-tracker.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center justify-between"
                >
                  <span>Systemic Picks (Scraper Engine)</span>
                  <span className="text-[10px] text-purple-400 font-mono">Active</span>
                </a>
              </li>
              <li>
                <a
                  href="https://chrismod-erp.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center justify-between"
                >
                  <span>Chrismod ERP (Enterprise Suite)</span>
                  <span className="text-[10px] text-cyan-400 font-mono">Active</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Director Credentials */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              Executive Directorate
            </h4>
            <div className="text-xs text-slate-400 space-y-1.5">
              <p className="text-white font-medium">Chinonso Ajali (Nonnybest)</p>
              <p>Managing Director & Systems Architect</p>
              <p className="font-mono text-[11px] text-cyan-400 pt-1">
                ajalijohn102@gmail.com
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Vercel Edge Global CDN
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © 2026 <strong className="text-slate-400">The Global Pick</strong>. All rights reserved. Directed by Chinonso Ajali.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
