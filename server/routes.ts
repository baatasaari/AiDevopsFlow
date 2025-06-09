import type { Express } from "express";
import { createServer, type Server } from "http";
import { WebSocketServer, WebSocket } from "ws";
import { storage } from "./storage";
import { generatePowerPointPresentation } from "./officegen-ppt-generator";

export async function registerRoutes(app: Express): Promise<Server> {
  const httpServer = createServer(app);

  // WebSocket server for real-time agent simulation
  const wss = new WebSocketServer({ server: httpServer, path: '/ws' });

  wss.on('connection', (ws: WebSocket) => {
    console.log('WebSocket client connected');

    // Send initial connection message
    if (ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({
        type: 'connection',
        message: 'Connected to GenAI DevOps platform'
      }));
    }

    // Handle incoming messages
    ws.on('message', (data: Buffer) => {
      try {
        const message = JSON.parse(data.toString());
        console.log('Received WebSocket message:', message);

        // Simulate agent communication
        if (message.type === 'start_simulation') {
          simulateAgentWorkflow(ws);
        }
      } catch (error) {
        console.error('Error parsing WebSocket message:', error);
      }
    });

    ws.on('close', () => {
      console.log('WebSocket client disconnected');
    });

    ws.on('error', (error) => {
      console.error('WebSocket error:', error);
    });
  });

  // API Routes for presentation data
  app.get('/api/agents', async (req, res) => {
    try {
      const agents = await storage.getAllAgents();
      res.json(agents);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch agents' });
    }
  });

  app.get('/api/pipeline/status', async (req, res) => {
    try {
      const stages = await storage.getPipelineStages();
      res.json(stages);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch pipeline status' });
    }
  });

  app.get('/api/agent-communications', async (req, res) => {
    try {
      const communications = await storage.getRecentCommunications();
      res.json(communications);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch communications' });
    }
  });

  app.post('/api/agents/:agentId/status', async (req, res) => {
    try {
      const { agentId } = req.params;
      const { status, metrics } = req.body;
      
      const agent = await storage.updateAgentStatus(agentId, status, metrics);
      res.json(agent);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update agent status' });
    }
  });

  // PowerPoint presentation generation endpoint
  app.get('/api/generate-ppt', async (req, res) => {
    try {
      const pptBuffer = await generatePowerPointPresentation();
      
      res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.presentationml.presentation');
      res.setHeader('Content-Disposition', 'attachment; filename="GenAI-DevOps-Platform-Architecture.pptx"');
      res.send(pptBuffer);
    } catch (error) {
      console.error('Error generating PowerPoint:', error);
      res.status(500).json({ error: 'Failed to generate PowerPoint presentation' });
    }
  });

  return httpServer;
}

// Simulate real-time agent workflow for demonstration
function simulateAgentWorkflow(ws: WebSocket) {
  const agentSteps = [
    {
      delay: 500,
      data: {
        type: 'agent_status',
        agent: 'orchestrator',
        status: 'initializing',
        message: 'Master Orchestrator starting workflow analysis...'
      }
    },
    {
      delay: 1500,
      data: {
        type: 'agent_status',
        agent: 'code-analysis',
        status: 'analyzing',
        message: 'Starting code quality analysis...'
      }
    },
    {
      delay: 3000,
      data: {
        type: 'agent_communication',
        from: 'code-analysis',
        to: 'security-guardian',
        message: 'Code analysis complete. Quality score: 94%. No critical issues found.',
        timestamp: Date.now()
      }
    },
    {
      delay: 4000,
      data: {
        type: 'agent_status',
        agent: 'security-guardian',
        status: 'scanning',
        message: 'Initiating security vulnerability scan...'
      }
    },
    {
      delay: 6000,
      data: {
        type: 'agent_communication',
        from: 'security-guardian',
        to: 'performance',
        message: 'Security scan complete. 0 critical vulnerabilities detected. Compliance: 100%',
        timestamp: Date.now()
      }
    },
    {
      delay: 7000,
      data: {
        type: 'agent_status',
        agent: 'performance',
        status: 'testing',
        message: 'Running performance tests and load analysis...'
      }
    },
    {
      delay: 9000,
      data: {
        type: 'agent_communication',
        from: 'performance',
        to: 'orchestrator',
        message: 'Performance tests passed. Response time: 127ms. Ready for deployment.',
        timestamp: Date.now()
      }
    },
    {
      delay: 10000,
      data: {
        type: 'workflow_complete',
        message: 'All agents have successfully completed their tasks. System ready for deployment.',
        timestamp: Date.now()
      }
    }
  ];

  agentSteps.forEach(step => {
    setTimeout(() => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify(step.data));
      }
    }, step.delay);
  });
}