import { 
  agents, 
  agentCommunications, 
  pipelineStages,
  type Agent, 
  type InsertAgent,
  type AgentCommunication,
  type InsertAgentCommunication,
  type PipelineStage,
  type InsertPipelineStage
} from "@shared/schema";

export interface IStorage {
  // Agent management
  getAgent(id: string): Promise<Agent | undefined>;
  getAllAgents(): Promise<Agent[]>;
  createAgent(agent: InsertAgent): Promise<Agent>;
  updateAgentStatus(agentId: string, status: string, metrics?: any): Promise<Agent>;

  // Agent communications
  getRecentCommunications(limit?: number): Promise<AgentCommunication[]>;
  addCommunication(communication: InsertAgentCommunication): Promise<AgentCommunication>;

  // Pipeline stages
  getPipelineStages(): Promise<PipelineStage[]>;
  updatePipelineStage(stageId: string, status: string, progress?: number): Promise<PipelineStage>;
}

export class MemStorage implements IStorage {
  private agents: Map<string, Agent> = new Map();
  private communications: AgentCommunication[] = [];
  private stages: Map<string, PipelineStage> = new Map();
  private currentId: number = 1;

  constructor() {
    this.initializeMockData();
  }

  private initializeMockData() {
    // Initialize agents
    const mockAgents = [
      {
        name: "Code Analysis Agent",
        type: "code-analysis",
        status: "active",
        metrics: {
          qualityScore: 94,
          filesAnalyzed: 1247,
          issuesFixed: 23,
          coverage: 89
        }
      },
      {
        name: "Security Guardian Agent", 
        type: "security",
        status: "active",
        metrics: {
          securityScore: 95,
          criticalVulns: 0,
          compliance: 100,
          scanTime: "45s"
        }
      },
      {
        name: "Performance Agent",
        type: "performance", 
        status: "active",
        metrics: {
          responseTime: "127ms",
          uptime: "99.9%",
          rpsCapacity: "2.1k",
          cpuUsage: 67
        }
      },
      {
        name: "Test Orchestrator Agent",
        type: "testing",
        status: "active",
        metrics: {
          testsRun: 1200,
          testsPassed: 1189,
          testCoverage: 89,
          duration: "3m 45s"
        }
      },
      {
        name: "Deploy Manager Agent",
        type: "deployment",
        status: "active", 
        metrics: {
          deploymentsToday: 12,
          successRate: 98.5,
          avgDeployTime: "2m 15s",
          rollbacks: 0
        }
      },
      {
        name: "Monitor & Ops Agent",
        type: "monitoring",
        status: "active",
        metrics: {
          alertsActive: 2,
          systemHealth: 98,
          uptimeToday: "23h 47m",
          incidentsResolved: 15
        }
      }
    ];

    mockAgents.forEach(agent => {
      const id = this.currentId++;
      const agentData: Agent = {
        id,
        ...agent,
        lastActive: new Date()
      };
      this.agents.set(agent.type, agentData);
    });

    // Initialize pipeline stages
    const mockStages = [
      {
        name: "Source Control",
        status: "completed",
        duration: 134, // seconds
        progress: 100,
        details: {
          repository: "main",
          commit: "a1b2c3d",
          changes: 15
        }
      },
      {
        name: "Build & Compile",
        status: "completed",
        duration: 272, // seconds
        progress: 100,
        details: {
          artifacts: 3,
          dependencies: 127,
          buildSize: "45.2MB"
        }
      },
      {
        name: "AI-Powered Testing",
        status: "running",
        duration: 83, // seconds so far
        progress: 71,
        details: {
          totalTests: 1200,
          testsRun: 847,
          testsPassed: 839,
          testsFailed: 8
        }
      },
      {
        name: "Security Scanning", 
        status: "pending",
        duration: null,
        progress: 0,
        details: {
          scanType: "full",
          estimatedDuration: "2m 30s"
        }
      },
      {
        name: "Smart Deployment",
        status: "pending",
        duration: null,
        progress: 0,
        details: {
          strategy: "blue-green",
          environment: "production"
        }
      }
    ];

    mockStages.forEach(stage => {
      const id = this.currentId++;
      const stageData: PipelineStage = {
        id,
        ...stage
      };
      this.stages.set(stage.name, stageData);
    });
  }

  async getAgent(id: string): Promise<Agent | undefined> {
    return this.agents.get(id);
  }

  async getAllAgents(): Promise<Agent[]> {
    return Array.from(this.agents.values());
  }

  async createAgent(insertAgent: InsertAgent): Promise<Agent> {
    const id = this.currentId++;
    const agent: Agent = {
      ...insertAgent,
      id,
      lastActive: new Date()
    };
    this.agents.set(insertAgent.type, agent);
    return agent;
  }

  async updateAgentStatus(agentId: string, status: string, metrics?: any): Promise<Agent> {
    const agent = this.agents.get(agentId);
    if (!agent) {
      throw new Error(`Agent ${agentId} not found`);
    }
    
    agent.status = status;
    if (metrics) {
      agent.metrics = { ...agent.metrics, ...metrics };
    }
    agent.lastActive = new Date();
    
    return agent;
  }

  async getRecentCommunications(limit: number = 50): Promise<AgentCommunication[]> {
    return this.communications
      .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
      .slice(0, limit);
  }

  async addCommunication(insertCommunication: InsertAgentCommunication): Promise<AgentCommunication> {
    const id = this.currentId++;
    const communication: AgentCommunication = {
      ...insertCommunication,
      id,
      timestamp: new Date()
    };
    this.communications.push(communication);
    return communication;
  }

  async getPipelineStages(): Promise<PipelineStage[]> {
    return Array.from(this.stages.values());
  }

  async updatePipelineStage(stageId: string, status: string, progress?: number): Promise<PipelineStage> {
    const stage = this.stages.get(stageId);
    if (!stage) {
      throw new Error(`Pipeline stage ${stageId} not found`);
    }
    
    stage.status = status;
    if (progress !== undefined) {
      stage.progress = progress;
    }
    
    return stage;
  }
}

export const storage = new MemStorage();
