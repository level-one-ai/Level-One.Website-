/* ========================================
   DATA STORE
   Content for Solutions and Blog
   ======================================== */

const blogPosts = {
  agentic: `
    <div class="article-meta">EDINBURGH • 2026 Blueprints</div>
    <h1 class="article-title">The End of Manual Data Entry in Edinburgh</h1>
    <div class="article-body">
      <p>The New Town office block is changing. We are moving away from passive software and toward <strong>Agentic AI</strong>—systems that don't just prompt, they perform.</p>
      <h2>Autonomous Operations</h2>
      <p>If you're tired of manual data entry in your office, our agentic workflows resolve the bottleneck. An agent doesn't ask you how to file a lead; it identifies the intent, updates your CRM, and drafts the follow-up autonomously.</p>
      <p>This "Advice-First" model is how we scale Level One partners in Stockbridge and Morningside.</p>
    </div>
  `,
  hyperautomation: `
    <div class="article-meta">SYSTEMS • Revenue Logic</div>
    <h1 class="article-title">Hyperautomation: Connecting Stockbridge to the Cloud</h1>
    <div class="article-body">
      <p>Siloed tools are the silent killer of growth. Hyperautomation combines AI and RPA to ensure your CRM, email, and fulfillment speak the same language.</p>
      <p>By building these bridges near the Shawfair area, we give Edinburgh firms a 10x leverage advantage over national competitors still using manual silos.</p>
    </div>
  `
};

const solutionData = {
  sales: {
    title: 'Lead Generation',
    sections: [
      {
        id: 'cold-outreach',
        name: 'Cold Outreach Systems',
        icon: '⚡',
        content: `
          <div class="dossier-section">
            <h3 class="dossier-heading">Implementation</h3>
            <p class="dossier-text">Our cold outreach system deploys autonomous agents that scrape targeted business directories, qualify prospects using AI-powered intent analysis, and generate hyper-personalized outreach sequences.</p>
            <div class="implementation-steps">
              <div class="impl-step"><div class="step-num">01</div><div class="step-details"><div class="step-title">Target Identification</div><div class="step-desc">AI agents scrape LinkedIn and company databases to identify prospects.</div></div></div>
              <div class="impl-step"><div class="step-num">02</div><div class="step-details"><div class="step-title">Intent Scoring</div><div class="step-desc">LLM-powered qualification engine scores each prospect based on engagement signals.</div></div></div>
              <div class="impl-step"><div class="step-num">03</div><div class="step-details"><div class="step-title">Personalized Outreach</div><div class="step-desc">GPT-4 generates custom messages and executes multi-channel campaigns.</div></div></div>
            </div>
          </div>
          <div class="dossier-section">
            <h3 class="dossier-heading">Value & ROI</h3>
            <div class="roi-grid">
              <div class="roi-card"><div class="roi-metric">£34,200/yr</div><div class="roi-label">Cost Savings</div><div class="roi-desc">Eliminates manual prospecting labor</div></div>
              <div class="roi-card"><div class="roi-metric">5x</div><div class="roi-label">Volume Increase</div><div class="roi-desc">Process 5x more prospects per month</div></div>
              <div class="roi-card"><div class="roi-metric">78%</div><div class="roi-label">Qualification Accuracy</div><div class="roi-desc">AI scores outperform manual qualification</div></div>
            </div>
          </div>`
      },
      {
        id: 'lead-scrapers',
        name: 'Lead Scrapers',
        icon: '🔍',
        content: `
          <div class="dossier-section">
            <h3 class="dossier-heading">Implementation</h3>
            <p class="dossier-text">Automated web scraping infrastructure that harvests prospect data, enriches contact info, and pushes leads to CRM.</p>
            <div class="implementation-steps">
              <div class="impl-step"><div class="step-num">01</div><div class="step-details"><div class="step-title">Multi-Source Scraping</div><div class="step-desc">Extract data from LinkedIn and business directories.</div></div></div>
              <div class="impl-step"><div class="step-num">02</div><div class="step-details"><div class="step-title">Data Enrichment</div><div class="step-desc">Cross-reference with APIs to enrich emails and phones.</div></div></div>
              <div class="impl-step"><div class="step-num">03</div><div class="step-details"><div class="step-title">CRM Integration</div><div class="step-desc">Push validated leads to HubSpot/Salesforce automatically.</div></div></div>
            </div>
          </div>`
      },
      {
        id: 'revenue-engines',
        name: 'Revenue Engines',
        icon: '💰',
        content: `
          <div class="dossier-section">
            <h3 class="dossier-heading">Implementation</h3>
            <p class="dossier-text">End-to-end revenue system orchestrating capture, qualification, and conversion.</p>
            <div class="implementation-steps">
              <div class="impl-step"><div class="step-num">01</div><div class="step-details"><div class="step-title">Multi-Channel Capture</div><div class="step-desc">Aggregate leads from all channels into one pipeline.</div></div></div>
              <div class="impl-step"><div class="step-num">02</div><div class="step-details"><div class="step-title">Intelligent Routing</div><div class="step-desc">AI routes leads to specific nurture sequences based on intent.</div></div></div>
              <div class="impl-step"><div class="step-num">03</div><div class="step-details"><div class="step-title">Conversion Ops</div><div class="step-desc">Automated A/B testing of messaging to maximize conversion.</div></div></div>
            </div>
          </div>`
      }
    ]
  },
  support: {
    title: 'Project Management',
    sections: [
      {
        id: 'support-agents',
        name: 'AI Automated Fulfilment',
        icon: '🤖',
        content: `
          <div class="dossier-section">
            <h3 class="dossier-heading">Implementation</h3>
            <p class="dossier-text">Deploy AI support agents trained on your knowledge base to resolve 80%+ of tickets autonomously.</p>
            <div class="implementation-steps">
              <div class="impl-step"><div class="step-num">01</div><div class="step-details"><div class="step-title">KB Training</div><div class="step-desc">Ingest FAQs and history to train the agent.</div></div></div>
              <div class="impl-step"><div class="step-num">02</div><div class="step-details"><div class="step-title">Intent Classifying</div><div class="step-desc">AI routes queries to resolution paths.</div></div></div>
              <div class="impl-step"><div class="step-num">03</div><div class="step-details"><div class="step-title">24/7 Resolution</div><div class="step-desc">Agents work around the clock.</div></div></div>
            </div>
          </div>
          <div class="dossier-section">
            <h3 class="dossier-heading">Value & ROI</h3>
            <div class="roi-grid">
              <div class="roi-card"><div class="roi-metric">£45,600/yr</div><div class="roi-label">Support Savings</div></div>
              <div class="roi-card"><div class="roi-metric">&lt;30s</div><div class="roi-label">Response Time</div></div>
              <div class="roi-card"><div class="roi-metric">80%+</div><div class="roi-label">Auto-Resolution</div></div>
            </div>
          </div>`
      },
      {
        id: 'auto-onboarding',
        name: 'AI Onboarding',
        icon: '📚',
        content: `
          <div class="dossier-section">
            <h3 class="dossier-heading">Implementation</h3>
            <p class="dossier-text">Automated onboarding sequences that guide new customers to activation.</p>
            <div class="implementation-steps">
              <div class="impl-step"><div class="step-num">01</div><div class="step-details"><div class="step-title">Segmentation</div><div class="step-desc">Classify new users by role and use case.</div></div></div>
              <div class="impl-step"><div class="step-num">02</div><div class="step-details"><div class="step-title">Dynamic Walkthroughs</div><div class="step-desc">Trigger contextual tutorials.</div></div></div>
              <div class="impl-step"><div class="step-num">03</div><div class="step-details"><div class="step-title">Tracking</div><div class="step-desc">Monitor milestones and send nudges.</div></div></div>
            </div>
          </div>`
      }
    ]
  },
  consulting: {
    title: 'Hiring Systems',
    sections: [
      {
        id: 'workflow-audits',
        name: 'Intake Systems',
        icon: '🔍',
        content: `
          <div class="dossier-section">
            <h3 class="dossier-heading">Implementation</h3>
            <p class="dossier-text">Deep-dive analysis of operations to identify automation opportunities.</p>
            <div class="implementation-steps">
              <div class="impl-step"><div class="step-num">01</div><div class="step-details"><div class="step-title">Documentation</div><div class="step-desc">Map workflows visually.</div></div></div>
              <div class="impl-step"><div class="step-num">02</div><div class="step-details"><div class="step-title">Bottlenecks</div><div class="step-desc">Pinpoint manual labor bleed.</div></div></div>
              <div class="impl-step"><div class="step-num">03</div><div class="step-details"><div class="step-title">Roadmap</div><div class="step-desc">Prioritized ROI list.</div></div></div>
            </div>
          </div>`
      },
      {
        id: 'ai-scoring',
        name: 'AI Scoring',
        icon: '📊',
        content: `
          <div class="dossier-section">
            <h3 class="dossier-heading">Implementation</h3>
            <p class="dossier-text">Assessment to determine which workflows are candidates for autonomous agents.</p>
            <div class="implementation-steps">
              <div class="impl-step"><div class="step-num">01</div><div class="step-details"><div class="step-title">Classification</div><div class="step-desc">Categorize tasks by repeatability.</div></div></div>
              <div class="impl-step"><div class="step-num">02</div><div class="step-details"><div class="step-title">Scoring</div><div class="step-desc">Assign 0-100 AI suitability score.</div></div></div>
              <div class="impl-step"><div class="step-num">03</div><div class="step-details"><div class="step-title">Matrix</div><div class="step-desc">Plot on effort vs impact grid.</div></div></div>
            </div>
          </div>`
      }
    ]
  },
  workflow: {
    title: 'Sales Administration',
    sections: [
      {
        id: 'custom-crms',
        name: 'Custom CRMs',
        icon: '📋',
        content: `
          <div class="dossier-section">
            <h3 class="dossier-heading">Implementation</h3>
            <p class="dossier-text">Build lightweight, custom CRM interfaces tailored to your workflow.</p>
            <div class="implementation-steps">
              <div class="impl-step"><div class="step-num">01</div><div class="step-details"><div class="step-title">Mapping</div><div class="step-desc">Document sales stages and triggers.</div></div></div>
              <div class="impl-step"><div class="step-num">02</div><div class="step-details"><div class="step-title">Schema</div><div class="step-desc">Build custom data models.</div></div></div>
              <div class="impl-step"><div class="step-num">03</div><div class="step-details"><div class="step-title">Development</div><div class="step-desc">Deploy clean interface.</div></div></div>
            </div>
          </div>`
      },
      {
        id: 'asset-generation',
        name: 'Asset Generation',
        icon: '🎨',
        content: `
          <div class="dossier-section">
            <h3 class="dossier-heading">Implementation</h3>
            <p class="dossier-text">Automated pipelines creating assets and documentation on-demand.</p>
            <div class="implementation-steps">
              <div class="impl-step"><div class="step-num">01</div><div class="step-details"><div class="step-title">Templates</div><div class="step-desc">Build reusable libraries.</div></div></div>
              <div class="impl-step"><div class="step-num">02</div><div class="step-details"><div class="step-title">AI Engine</div><div class="step-desc">Connect GPT-4 to populate templates.</div></div></div>
              <div class="impl-step"><div class="step-num">03</div><div class="step-details"><div class="step-title">Bulk Gen</div><div class="step-desc">Trigger via API or CSV.</div></div></div>
            </div>
          </div>`
      }
    ]
  }
};
