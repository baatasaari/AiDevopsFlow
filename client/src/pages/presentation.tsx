import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Sidebar from "@/components/navigation/sidebar";
import Overview from "@/components/sections/overview";
import Architecture from "@/components/sections/architecture";
import Agents from "@/components/sections/agents";
import Workflow from "@/components/sections/workflow";
import Pipeline from "@/components/sections/pipeline";
import BusinessCase from "@/components/sections/business-case";
import Roadmap from "@/components/sections/roadmap";

type Section = "overview" | "architecture" | "agents" | "workflow" | "pipeline" | "business-case" | "roadmap";

export default function Presentation() {
  const [activeSection, setActiveSection] = useState<Section>("overview");
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const sections: Section[] = ["overview", "architecture", "agents", "workflow", "pipeline", "business-case", "roadmap"];
      const currentIndex = sections.indexOf(activeSection);

      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % sections.length;
        setActiveSection(sections[nextIndex]);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        const prevIndex = currentIndex === 0 ? sections.length - 1 : currentIndex - 1;
        setActiveSection(sections[prevIndex]);
      } else if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        toggleFullscreen();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activeSection]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const renderSection = () => {
    const sectionProps = {
      key: activeSection,
      initial: { opacity: 0, x: -100 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 100 },
      transition: { duration: 0.5, ease: "easeOut" }
    };

    switch (activeSection) {
      case "overview":
        return <Overview />;
      case "architecture":
        return <Architecture />;
      case "agents":
        return <Agents />;
      case "workflow":
        return <Workflow />;
      case "pipeline":
        return <Pipeline />;
      case "business-case":
        return <BusinessCase />;
      case "roadmap":
        return <Roadmap />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="h-screen flex bg-slate-900 text-slate-50 overflow-hidden">
      <Sidebar 
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        onToggleFullscreen={toggleFullscreen}
        isFullscreen={isFullscreen}
      />
      
      <main className="flex-1 relative overflow-auto">
        <div className="gradient-mesh absolute inset-0 opacity-50" />
        
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative z-10"
        >
          {renderSection()}
        </motion.div>
      </main>
    </div>
  );
}
