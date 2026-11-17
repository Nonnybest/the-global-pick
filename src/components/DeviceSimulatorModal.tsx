"use client";

import React, { useState } from "react";
import { 
  X, 
  ExternalLink, 
  RotateCw, 
  Smartphone, 
  Tablet, 
  Monitor, 
  Sparkles,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

export interface ProjectDemo {
  id: string;
  name: string;
  tagline: string;
  url: string;
  category: string;
  badge: string;
  color: string;
}

interface DeviceSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeProject: ProjectDemo | null;
  onSelectProject: (p: ProjectDemo) => void;
  allProjects: ProjectDemo[];
}

export default function DeviceSimulatorModal({
  isOpen,
  onClose,
  activeProject,
  onSelectProject,
  allProjects,
}: DeviceSimulatorModalProps) {
  const [deviceMode, setDeviceMode] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [iframeKey, setIframeKey] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  if (!isOpen || !activeProject) return null;

  const handleRefresh = () => {
    setIsLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  const getContainerWidth = () => {
    switch (deviceMode) {
      case "mobile":
        return "w-[390px] h-[780px]";
      case "tablet":
        return "w-[768px] h-[820px]";
      case "desktop":
      default:
        return "w-full max-w-6xl h-[780px]";
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative flex flex-col w-full h-[96vh] max-w-7xl glass-panel rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
        
        {/* Top Header & Project Quick Selector */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3.5 border-b border-white/10 bg-slate-900/80">
          
          {/* Brand & Project Info */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-bold text-xs shadow-lg shadow-cyan-500/20">
              GP
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-bold text-white text-sm sm:text-base tracking-wide">
                  {activeProject.name}
                </span>
                <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live System
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block truncate max-w-md">
                {activeProject.tagline}
              </p>
            </div>
          </div>

          {/* Quick Project Switcher Pills */}
          <div className="hidden lg:flex items-center gap-1.5 p-1 rounded-xl bg-slate-800/80 border border-white/5">
            {allProjects.map((p) => (
              <button
                key={p.id}
                onClick={() => {
                  setIsLoading(true);
                  onSelectProject(p);
                }}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  p.id === activeProject.id
                    ? "bg-cyan-500 text-white shadow-md shadow-cyan-500/20"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>

          {/* Device Switcher & Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Device Mode Buttons */}
            <div className="flex items-center p-1 rounded-xl bg-slate-800/80 border border-white/5">
              <button
                onClick={() => setDeviceMode("desktop")}
                title="Desktop View"
                className={`p-1.5 rounded-lg transition-colors ${
                  deviceMode === "desktop" ? "bg-white/15 text-cyan-400" : "text-slate-400 hover:text-white"
                }`}
              >
                <Monitor className="w-4 h-4" />
              </button>
              <button
                onClick={() => setDeviceMode("tablet")}
                title="Tablet View"
                className={`p-1.5 rounded-lg transition-colors ${
                  deviceMode === "tablet" ? "bg-white/15 text-cyan-400" : "text-slate-400 hover:text-white"
                }`}
              >
                <Tablet className="w-4 h-4" />
              </button>
              <button
                onClick={() => setDeviceMode("mobile")}
                title="Mobile Phone View"
                className={`p-1.5 rounded-lg transition-colors ${
                  deviceMode === "mobile" ? "bg-white/15 text-cyan-400" : "text-slate-400 hover:text-white"
                }`}
              >
                <Smartphone className="w-4 h-4" />
              </button>
            </div>

            {/* Reload Frame */}
            <button
              onClick={handleRefresh}
              title="Refresh simulator"
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-white/5 transition-colors"
            >
              <RotateCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
            </button>

            {/* Launch In New Tab */}
            <a
              href={activeProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/30 text-xs font-semibold transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Open New Tab</span>
            </a>

            {/* Close Modal */}
            <button
              onClick={onClose}
              title="Close simulator"
              className="p-2 rounded-xl bg-white/5 hover:bg-red-500/20 text-slate-400 hover:text-red-400 border border-white/5 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Address Bar Simulation */}
        <div className="flex items-center gap-3 px-6 py-2 bg-slate-950/60 border-b border-white/5 text-xs text-slate-400">
          <div className="flex items-center gap-1.5 text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span className="text-[11px] font-mono">https://</span>
          </div>
          <div className="flex-1 bg-slate-900/60 border border-white/5 px-3 py-1 rounded-md text-slate-300 font-mono text-[11px] truncate">
            {activeProject.url.replace("https://", "")}
          </div>
          <div className="text-[11px] text-slate-500 font-mono hidden md:flex items-center gap-2">
            <span>Powered by Vercel</span>
            <span>•</span>
            <span className="text-cyan-400">The Global Pick Engine</span>
          </div>
        </div>

        {/* Interactive Simulator Canvas Body */}
        <div className="flex-1 overflow-auto flex items-center justify-center p-3 sm:p-6 bg-slate-950/40">
          <div
            className={`transition-all duration-300 relative rounded-2xl overflow-hidden border border-slate-700/60 bg-slate-950 shadow-2xl flex flex-col ${getContainerWidth()} ${
              deviceMode === "mobile" ? "ring-8 ring-slate-800 rounded-[40px]" : ""
            }`}
          >
            {/* Mobile Device Status Bar */}
            {deviceMode === "mobile" && (
              <div className="h-6 bg-black flex items-center justify-between px-6 text-[10px] text-slate-400 select-none">
                <span>9:41</span>
                <div className="w-16 h-3 bg-slate-900 rounded-full mx-auto" />
                <div className="flex items-center gap-1">
                  <span>5G</span>
                  <span>100%</span>
                </div>
              </div>
            )}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-950/90 backdrop-blur-sm gap-3">
                <div className="w-10 h-10 border-4 border-cyan-500/20 border-t-cyan-400 rounded-full animate-spin" />
                <p className="text-xs text-slate-400 font-mono">
                  Connecting to live system at {activeProject.name}...
                </p>
              </div>
            )}

            {/* The Live Interactive Iframe */}
            <iframe
              key={iframeKey}
              src={activeProject.url}
              title={`${activeProject.name} Live Interactive Demo`}
              className="w-full flex-1 border-0 bg-white"
              onLoad={() => setIsLoading(false)}
              allow="accelerometer; autoplay; camera; encrypted-media; geolocation; gyroscope; microphone"
            />
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="px-6 py-2.5 bg-slate-900/90 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Interactive Simulator: You can click, order, test workflows, and browse as an active customer or admin.</span>
          </div>
          <span className="text-[11px] text-slate-500">
            Director: Chinonso Ajali (Nonnybest)
          </span>
        </div>
      </div>
    </div>
  );
}
