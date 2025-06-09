import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Download, 
  Share2, 
  Link, 
  FileText,
  Presentation,
  Mail,
  Copy,
  ExternalLink
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function PresentationExport() {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const presentationUrl = window.location.origin;
  const documentUrl = `${window.location.origin}/DEVOPS_ARCHITECTURE_DOCUMENT.md`;

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(presentationUrl);
      setCopied(true);
      toast({
        title: "Link Copied",
        description: "Presentation URL copied to clipboard"
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Copy Failed",
        description: "Please manually copy the URL from the address bar",
        variant: "destructive"
      });
    }
  };

  const handleComposeMail = () => {
    const subject = "GenAI DevOps Platform Architecture Presentation";
    const body = `Hi,

I'd like to share the comprehensive GenAI DevOps Platform Architecture presentation with you.

🚀 Interactive Presentation: ${presentationUrl}
📋 Technical Document: ${documentUrl}

This presentation covers:
✓ Complete end-to-end DevOps workflow (8 stages)
✓ AI agent orchestration with 6 specialized agents
✓ Environment progression strategy (Dev/Int/Preprod/Prod)
✓ Stage gate framework with automated decisions
✓ Security and compliance automation
✓ Integration with Harness CD, GKE, and Istio
✓ Data governance and monitoring strategies

Key Features:
- Zero-touch production deployments
- AI-powered quality gates
- Continuous security validation
- Real-time monitoring and auto-remediation
- Complete compliance automation

Best regards,
Vijay Rentala`;

    const mailtoUrl = `mailto:vijay.rentala@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl);
  };

  const handleEmailShare = handleComposeMail;

  const handleDownloadPPT = async () => {
    try {
      const response = await fetch('/api/generate-ppt');
      if (!response.ok) throw new Error('Failed to generate PowerPoint');
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'GenAI-DevOps-Platform-Architecture.pptx';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      
      toast({
        title: "PowerPoint Downloaded",
        description: "GenAI DevOps presentation ready for email sharing"
      });
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "Unable to generate PowerPoint presentation",
        variant: "destructive"
      });
    }
  };

  const handleSendEmail = async () => {
    try {
      const response = await fetch('/api/send-presentation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      if (!response.ok) throw new Error('Failed to send email');
      
      const result = await response.json();
      
      toast({
        title: "Email Sent Successfully",
        description: `Presentation delivered to ${result.recipient}`
      });
    } catch (error) {
      toast({
        title: "Email Failed", 
        description: "Unable to send presentation email",
        variant: "destructive"
      });
    }
  };

  const exportOptions = [
    {
      title: "Download PowerPoint (PPT)",
      description: "Complete presentation in PowerPoint format for email sharing",
      icon: Download,
      color: "bg-red-500",
      textColor: "text-red-500",
      action: handleDownloadPPT,
      buttonText: "Download PPT"
    },
    {
      title: "Interactive Web Presentation",
      description: "Full interactive presentation with animations and simulations",
      icon: Presentation,
      color: "bg-blue-500",
      textColor: "text-blue-500",
      action: () => window.open(presentationUrl, '_blank'),
      buttonText: "Open Presentation"
    },
    {
      title: "Technical Architecture Document",
      description: "Comprehensive markdown document with implementation details",
      icon: FileText,
      color: "bg-emerald-500",
      textColor: "text-emerald-500",
      action: () => window.open(documentUrl, '_blank'),
      buttonText: "View Document"
    },
    {
      title: "Send to vijay.rentala@gmail.com",
      description: "Direct email delivery with PowerPoint attachment",
      icon: Mail,
      color: "bg-purple-500",
      textColor: "text-purple-500",
      action: handleSendEmail,
      buttonText: "Send Email"
    },
    {
      title: "Share via Email",
      description: "Compose email with presentation links and summary",
      icon: Mail,
      color: "bg-orange-500",
      textColor: "text-orange-500",
      action: handleEmailShare,
      buttonText: "Compose Email"
    }
  ];

  const presentationSections = [
    { name: "Overview", description: "Executive summary and platform introduction" },
    { name: "Architecture", description: "System architecture and component overview" },
    { name: "AI Agents", description: "Six specialized agents and their capabilities" },
    { name: "Workflow", description: "Agent interactions and decision workflows" },
    { name: "Pipeline", description: "Stage gates and automated validations" },
    { name: "Business Case", description: "ROI metrics and implementation benefits" },
    { name: "E2E Architecture", description: "Complete end-to-end technical workflow" },
    { name: "Roadmap", description: "Implementation timeline and milestones" }
  ];

  const keyMetrics = [
    { metric: "Deployment Lead Time", target: "< 2 hours", improvement: "75% reduction" },
    { metric: "Defect Escape Rate", target: "< 2%", improvement: "60% improvement" },
    { metric: "MTTR", target: "< 30 minutes", improvement: "80% faster" },
    { metric: "Security Vulnerability Resolution", target: "< 24 hours", improvement: "90% faster" },
    { metric: "System Uptime", target: "> 99.9%", improvement: "99.94% achieved" }
  ];

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">Share Presentation</h2>
          <p className="text-xl text-slate-300">
            Access and share the complete GenAI DevOps architecture presentation
          </p>
        </motion.div>

        {/* Quick Access */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/30 mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Access Options</h3>
              
              <div className="grid grid-cols-2 gap-6">
                {exportOptions.map((option, index) => {
                  const Icon = option.icon;
                  return (
                    <motion.div
                      key={option.title}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="p-6 bg-slate-700/30 rounded-xl"
                    >
                      <div className="flex items-start space-x-4 mb-4">
                        <div className={`w-12 h-12 ${option.color} rounded-lg flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className={`text-lg font-semibold ${option.textColor} mb-2`}>
                            {option.title}
                          </h4>
                          <p className="text-slate-300 text-sm mb-4">{option.description}</p>
                          <Button 
                            onClick={option.action}
                            className="w-full"
                            variant={option.title === "Copy Presentation Link" && copied ? "default" : "outline"}
                          >
                            {option.buttonText}
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Presentation Contents */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/30 mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Presentation Contents</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {presentationSections.map((section, index) => (
                  <motion.div
                    key={section.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                    className="flex items-center space-x-3 p-3 bg-slate-700/20 rounded-lg"
                  >
                    <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">{index + 1}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-200">{section.name}</div>
                      <div className="text-xs text-slate-400">{section.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Key Metrics Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/30 mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Key Performance Improvements</h3>
              
              <div className="grid grid-cols-1 gap-4">
                {keyMetrics.map((item, index) => (
                  <motion.div
                    key={item.metric}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-slate-700/20 rounded-lg"
                  >
                    <div className="flex-1">
                      <div className="font-semibold text-slate-200">{item.metric}</div>
                      <div className="text-sm text-slate-400">Target: {item.target}</div>
                    </div>
                    <Badge variant="secondary" className="bg-green-900/30 text-green-400">
                      {item.improvement}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Direct Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Direct Access Links</h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-slate-700/20 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-slate-200">Interactive Presentation</div>
                      <div className="text-sm text-slate-400 font-mono">{presentationUrl}</div>
                    </div>
                    <Button onClick={() => window.open(presentationUrl, '_blank')} size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Open
                    </Button>
                  </div>
                </div>
                
                <div className="p-4 bg-slate-700/20 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-slate-200">Technical Document</div>
                      <div className="text-sm text-slate-400 font-mono">{documentUrl}</div>
                    </div>
                    <Button onClick={() => window.open(documentUrl, '_blank')} size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Open
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}