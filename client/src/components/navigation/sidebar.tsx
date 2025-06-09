import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  Network, 
  Users, 
  Zap, 
  CheckCircle, 
  Map,
  Maximize2,
  Minimize2
} from "lucide-react";

type Section = "overview" | "architecture" | "agents" | "workflow" | "pipeline" | "roadmap";

interface SidebarProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
  onToggleFullscreen: () => void;
  isFullscreen: boolean;
}

const navigationItems = [
  { id: "overview" as Section, label: "Overview", icon: LayoutDashboard },
  { id: "architecture" as Section, label: "Architecture", icon: Network },
  { id: "agents" as Section, label: "AI Agents", icon: Users },
  { id: "workflow" as Section, label: "Workflow", icon: Zap },
  { id: "pipeline" as Section, label: "Pipeline", icon: CheckCircle },
  { id: "roadmap" as Section, label: "Roadmap", icon: Map },
];

export default function Sidebar({ activeSection, onSectionChange, onToggleFullscreen, isFullscreen }: SidebarProps) {
  return (
    <nav className="w-64 bg-slate-800/50 backdrop-blur-xl border-r border-slate-700/50 flex flex-col">
      <div className="p-6 border-b border-slate-700/50">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-brand-blue to-brand-violet rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
            </svg>
          </div>
          <div>
            <h1 className="text-lg font-bold">GenAI DevOps</h1>
            <p className="text-xs text-slate-400">Lifecycle Platform</p>
          </div>
        </div>
      </div>
      
      <div className="flex-1 px-4 py-6 space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant="ghost"
                className={`w-full justify-start px-4 py-3 rounded-lg transition-all ${
                  isActive 
                    ? "bg-slate-700/50 text-brand-blue" 
                    : "text-slate-300 hover:bg-slate-700/50"
                }`}
                onClick={() => onSectionChange(item.id)}
              >
                <Icon className="w-5 h-5 mr-3" />
                <span className="font-medium">{item.label}</span>
              </Button>
            </motion.div>
          );
        })}
      </div>
      
      <div className="p-4 border-t border-slate-700/50">
        <Button
          onClick={onToggleFullscreen}
          className="w-full bg-gradient-to-r from-brand-blue to-brand-violet hover:from-brand-blue/80 hover:to-brand-violet/80 text-white"
        >
          {isFullscreen ? (
            <Minimize2 className="w-4 h-4 mr-2" />
          ) : (
            <Maximize2 className="w-4 h-4 mr-2" />
          )}
          <span className="text-sm font-medium">
            {isFullscreen ? "Exit" : "Present"}
          </span>
        </Button>
      </div>
    </nav>
  );
}
