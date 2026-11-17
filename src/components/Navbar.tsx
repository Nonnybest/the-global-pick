"use client";

import React, { useState, useEffect } from "react";
import { 
  Menu, 
  X, 
  Layers, 
  UserCheck, 
  Sparkles, 
  MonitorPlay, 
  Mail,
  ExternalLink
} from "lucide-react";
import { GithubIcon } from "./Icons";

interface NavbarProps {
  onOpenSimulator: () => void;
}

export default function Navbar({ onOpenSimulator }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#07090e]/85 backdrop-blur-xl border-b border-white/10 py-3 shadow-xl shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Title */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
              <div className="w-full h-full bg-[#0b0f19] rounded-[11px] flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="9" />
                  <ellipse cx="12" cy="12" rx="4" ry="9" />
                  <path d="M3 12h18" />
                  <polygon points="12 4 14 10 12 8 10 10" fill="currentColor" />
                </svg>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-extrabold text-base sm:text-lg tracking-wider text-white group-hover:text-cyan-300 transition-colors">
                  THE GLOBAL PICK
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              </div>
              <p className="text-[10px] tracking-widest text-slate-400 uppercase font-mono">
                Directed by Chinonso Ajali
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#flagship"
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Flagship Systems
            </a>
            <a
              href="#innovations"
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Innovation Lab
            </a>
            <a
              href="#director"
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Director
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://github.com/Nonnybest"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 border border-white/5 transition-colors"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenSimulator}
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold tracking-wide text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <MonitorPlay className="w-4 h-4" />
              <span>Launch Live Simulator</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenSimulator}
              className="p-2 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-semibold"
            >
              <MonitorPlay className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-white/5 border border-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 rounded-2xl glass-panel border border-white/10 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <a
              href="#flagship"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/5"
            >
              Flagship Systems
            </a>
            <a
              href="#innovations"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/5"
            >
              Innovation Lab
            </a>
            <a
              href="#director"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/5"
            >
              Director Profile
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/5"
            >
              Contact
            </a>

            <div className="pt-2 border-t border-white/10 flex items-center gap-3">
              <a
                href="https://github.com/Nonnybest"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 text-slate-300 text-xs font-medium w-full justify-center"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub / Nonnybest</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
