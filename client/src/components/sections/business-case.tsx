import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, DollarSign, Clock, Shield, Target, Users } from "lucide-react";

export default function BusinessCase() {
  const currentChallenges = [
    {
      icon: Clock,
      title: "Long Deployment Cycles",
      current: "Average 4-6 hours per deployment",
      impact: "$180K annual cost in developer time",
      color: "text-red-400"
    },
    {
      icon: Shield,
      title: "Manual Security Reviews",
      current: "2-3 days security validation per release",
      impact: "47% of incidents from missed vulnerabilities",
      color: "text-red-400"
    },
    {
      icon: Users,
      title: "Resource Bottlenecks",
      current: "Senior engineers tied up in deployment oversight",
      impact: "30% reduction in feature development capacity",
      color: "text-red-400"
    }
  ];

  const proposedSolution = [
    {
      icon: TrendingUp,
      title: "AI-Powered Automation",
      improvement: "Reduce deployment time from 4-6 hours to 90 minutes",
      saving: "$108K annual savings in developer productivity",
      color: "text-brand-emerald"
    },
    {
      icon: Shield,
      title: "Continuous Security",
      improvement: "Real-time vulnerability detection and remediation",
      saving: "95% reduction in security-related production incidents",
      color: "text-brand-emerald"
    },
    {
      icon: Target,
      title: "Resource Optimization",
      improvement: "Free up senior engineers for strategic initiatives",
      saving: "40% increase in feature development velocity",
      color: "text-brand-emerald"
    }
  ];

  const financialProjection = [
    {
      category: "Cost Savings",
      year1: "$780K",
      year2: "$1.2M",
      year3: "$1.8M",
      description: "Reduced operational overhead and faster deployment cycles"
    },
    {
      category: "Revenue Impact",
      year1: "$1.1M",
      year2: "$2.3M", 
      year3: "$3.8M",
      description: "Faster time-to-market and improved product quality"
    },
    {
      category: "Risk Mitigation",
      year1: "$320K",
      year2: "$480K",
      year3: "$640K",
      description: "Avoided costs from production incidents and security breaches"
    }
  ];

  const implementationCosts = [
    {
      phase: "Phase 1: Foundation",
      duration: "Months 1-3",
      investment: "$180K",
      roi: "Break-even by month 6"
    },
    {
      phase: "Phase 2-4: Full Implementation", 
      duration: "Months 4-8",
      investment: "$420K",
      roi: "300% ROI by year 2"
    }
  ];

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">Business Case & ROI Analysis</h2>
          <p className="text-xl text-slate-300">
            Comprehensive financial impact and strategic value proposition
          </p>
        </motion.div>

        {/* Current State vs Future State */}
        <div className="grid grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-slate-800/40 backdrop-blur-sm border-red-500/20">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-red-400">Current State Challenges</h3>
                <div className="space-y-6">
                  {currentChallenges.map((challenge, index) => {
                    const Icon = challenge.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-red-400" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-red-400 mb-2">{challenge.title}</h4>
                          <p className="text-sm text-slate-300 mb-1">{challenge.current}</p>
                          <p className="text-sm text-red-400 font-medium">{challenge.impact}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-slate-800/40 backdrop-blur-sm border-brand-emerald/20">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-brand-emerald">Proposed Solution Benefits</h3>
                <div className="space-y-6">
                  {proposedSolution.map((solution, index) => {
                    const Icon = solution.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-brand-emerald/20 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-brand-emerald" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-brand-emerald mb-2">{solution.title}</h4>
                          <p className="text-sm text-slate-300 mb-1">{solution.improvement}</p>
                          <p className="text-sm text-brand-emerald font-medium">{solution.saving}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Financial Projections */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">3-Year Financial Impact Projection</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-4 px-4">Category</th>
                      <th className="text-center py-4 px-4">Year 1</th>
                      <th className="text-center py-4 px-4">Year 2</th>
                      <th className="text-center py-4 px-4">Year 3</th>
                      <th className="text-left py-4 px-4">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {financialProjection.map((row, index) => (
                      <tr key={index} className="border-b border-slate-700/50">
                        <td className="py-4 px-4 font-semibold">{row.category}</td>
                        <td className="py-4 px-4 text-center font-bold text-brand-emerald">{row.year1}</td>
                        <td className="py-4 px-4 text-center font-bold text-brand-emerald">{row.year2}</td>
                        <td className="py-4 px-4 text-center font-bold text-brand-emerald">{row.year3}</td>
                        <td className="py-4 px-4 text-sm text-slate-400">{row.description}</td>
                      </tr>
                    ))}
                    <tr className="border-t-2 border-brand-blue/50">
                      <td className="py-4 px-4 font-bold text-xl">Total Net Benefit</td>
                      <td className="py-4 px-4 text-center font-bold text-xl text-brand-blue">$2.2M</td>
                      <td className="py-4 px-4 text-center font-bold text-xl text-brand-blue">$4.0M</td>
                      <td className="py-4 px-4 text-center font-bold text-xl text-brand-blue">$6.2M</td>
                      <td className="py-4 px-4 text-sm text-slate-400">Cumulative benefit after implementation costs</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Implementation Investment */}
        <div className="grid grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <DollarSign className="w-6 h-6 mr-2 text-brand-amber" />
                  Implementation Investment
                </h3>
                <div className="space-y-4">
                  {implementationCosts.map((cost, index) => (
                    <div key={index} className="p-4 bg-slate-700/30 rounded-lg">
                      <h4 className="font-semibold text-brand-amber mb-2">{cost.phase}</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-slate-400">Duration: </span>
                          <span className="text-slate-300">{cost.duration}</span>
                        </div>
                        <div>
                          <span className="text-slate-400">Investment: </span>
                          <span className="font-semibold text-brand-amber">{cost.investment}</span>
                        </div>
                      </div>
                      <div className="mt-2 text-sm">
                        <span className="text-slate-400">ROI: </span>
                        <span className="font-semibold text-brand-emerald">{cost.roi}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Strategic Advantages</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-brand-blue/10 border border-brand-blue/20 rounded-lg">
                    <h4 className="font-semibold text-brand-blue mb-2">Market Leadership</h4>
                    <p className="text-sm text-slate-300">First-mover advantage in AI-powered DevOps automation within your industry vertical</p>
                  </div>
                  <div className="p-4 bg-brand-violet/10 border border-brand-violet/20 rounded-lg">
                    <h4 className="font-semibold text-brand-violet mb-2">Competitive Moat</h4>
                    <p className="text-sm text-slate-300">Establish technological differentiation that competitors will struggle to replicate</p>
                  </div>
                  <div className="p-4 bg-brand-emerald/10 border border-brand-emerald/20 rounded-lg">
                    <h4 className="font-semibold text-brand-emerald mb-2">Scalability</h4>
                    <p className="text-sm text-slate-300">Platform scales with business growth without proportional infrastructure investment</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="bg-gradient-to-r from-brand-blue/20 to-brand-violet/20 backdrop-blur-sm border-brand-blue/30">
            <CardContent className="p-8 text-center">
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your DevOps?</h3>
              <p className="text-xl text-slate-300 mb-6 max-w-3xl mx-auto">
                Join the next generation of software delivery with AI-powered automation that delivers measurable ROI from day one.
              </p>
              <div className="flex justify-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-emerald">$600K</div>
                  <div className="text-sm text-slate-400">Total Implementation Cost</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-blue">$2.2M</div>
                  <div className="text-sm text-slate-400">Year 1 Net Benefit</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-violet">367%</div>
                  <div className="text-sm text-slate-400">First Year ROI</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}