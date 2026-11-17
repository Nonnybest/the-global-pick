"use client";

import React, { useEffect, useRef } from "react";

export default function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Particle definition
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      color: string;
    }

    const colors = ["#38bdf8", "#818cf8", "#34d399", "#f59e0b"];
    const particles: Particle[] = [];
    const particleCount = Math.min(Math.floor((width * height) / 18000), 70);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.strokeStyle = `rgba(148, 163, 184, ${(1 - dist / 120) * 0.12})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw and move particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Slight push from mouse
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          const angle = Math.atan2(dy, dx);
          p.x += Math.cos(angle) * 1;
          p.y += Math.sin(angle) * 1;
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic Canvas Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />

      {/* Luminous Ambient Glow Orbs */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-cyan-600/15 rounded-full blur-[140px] animate-pulse-slow" />
      <div className="absolute top-1/3 -right-40 w-[550px] h-[550px] bg-violet-600/15 rounded-full blur-[160px] animate-pulse-slow" style={{ animationDelay: "3s" }} />
      <div className="absolute -bottom-40 left-1/3 w-[650px] h-[650px] bg-amber-500/10 rounded-full blur-[180px] animate-pulse-slow" style={{ animationDelay: "5s" }} />

      {/* Grand Brand Logo Watermark in Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.035] select-none pointer-events-none">
        <svg
          viewBox="0 0 800 800"
          className="w-[950px] h-[950px] max-w-none animate-spin-slow"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Concentric Celestial Orbit Rings */}
          <circle cx="400" cy="400" r="380" stroke="currentColor" strokeWidth="1.5" strokeDasharray="8 8" className="text-cyan-400" />
          <circle cx="400" cy="400" r="320" stroke="currentColor" strokeWidth="1" className="text-white" />
          <circle cx="400" cy="400" r="260" stroke="currentColor" strokeWidth="2" strokeDasharray="16 12" className="text-amber-400" />
          <circle cx="400" cy="400" r="180" stroke="currentColor" strokeWidth="1.5" className="text-cyan-400" />

          {/* Latitude & Longitude Coordinate Arcs */}
          <ellipse cx="400" cy="400" rx="320" ry="110" stroke="currentColor" strokeWidth="1" className="text-indigo-400" />
          <ellipse cx="400" cy="400" rx="110" ry="320" stroke="currentColor" strokeWidth="1" className="text-indigo-400" />
          <line x1="400" y1="20" x2="400" y2="780" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-white" />
          <line x1="20" y1="400" x2="780" y2="400" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-white" />

          {/* Central Logo Emblem - The Global Pick Emblem */}
          <polygon
            points="400,120 480,260 620,260 510,360 550,500 400,420 250,500 290,360 180,260 320,260"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            className="text-cyan-300"
          />
          <circle cx="400" cy="400" r="90" fill="currentColor" className="text-cyan-500/20" stroke="currentColor" strokeWidth="4" />
        </svg>
      </div>

      {/* Subtle Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />
    </div>
  );
}
