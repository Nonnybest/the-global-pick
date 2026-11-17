"use client";

import React, { useState } from "react";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FlagshipShowcase, { FLAGSHIP_PROJECTS } from "@/components/FlagshipShowcase";
import InnovationLab from "@/components/InnovationLab";
import DirectorProfile from "@/components/DirectorProfile";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import DeviceSimulatorModal, { ProjectDemo } from "@/components/DeviceSimulatorModal";

export default function Home() {
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);
  const [activeSimulatorProject, setActiveSimulatorProject] = useState<ProjectDemo>(
    FLAGSHIP_PROJECTS[0]
  );

  const handleOpenSimulator = (project?: ProjectDemo) => {
    if (project) {
      setActiveSimulatorProject(project);
    } else if (!activeSimulatorProject) {
      setActiveSimulatorProject(FLAGSHIP_PROJECTS[0]);
    }
    setIsSimulatorOpen(true);
  };

  const handleCloseSimulator = () => {
    setIsSimulatorOpen(false);
  };

  return (
    <main className="relative min-h-screen bg-[#07090e] text-[#f1f5f9] selection:bg-cyan-500/30 selection:text-cyan-200 overflow-hidden">
      {/* Dynamic Background with Particles & The Global Pick Watermark */}
      <BackgroundCanvas />

      {/* Main Content Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar onOpenSimulator={() => handleOpenSimulator(FLAGSHIP_PROJECTS[0])} />
        
        <Hero onOpenSimulator={() => handleOpenSimulator(FLAGSHIP_PROJECTS[0])} />
        
        <FlagshipShowcase onSelectProject={(p) => handleOpenSimulator(p)} />
        
        <InnovationLab onSelectProject={(p) => handleOpenSimulator(p)} />
        
        <DirectorProfile />
        
        <ContactSection />
        
        <Footer />
      </div>

      {/* Live Interactive Simulator Modal */}
      <DeviceSimulatorModal
        isOpen={isSimulatorOpen}
        onClose={handleCloseSimulator}
        activeProject={activeSimulatorProject}
        onSelectProject={(p) => setActiveSimulatorProject(p)}
        allProjects={FLAGSHIP_PROJECTS}
      />
    </main>
  );
}
