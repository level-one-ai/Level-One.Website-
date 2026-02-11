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
    title: 'Autonomous Sales',
    sections: [
      {
        id: 'cold-outreach',
        name: 'Cold Outreach Systems',
        icon: '⚡',
        content: `
          <div class="dossier-section">
            <h3 class="dossier-heading"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>How It Helps Your Business</h3>
            <p class="dossier-text">Our cold outreach system eliminates the manual labor of prospecting and initial contact. Your team stops spending hours searching for leads and crafting personalized emails. Instead, the system identifies high-quality prospects, researches their business context, and reaches out with tailored messaging—all while you focus on closing deals.</p>
            <p class="dossier-text">The result is consistent, scalable outreach that maintains your brand voice while processing 5x more prospects than manual efforts. No more missed opportunities or leads falling through the cracks.</p>
          </div>
          <div class="dossier-section">
            <h3 class="dossier-heading"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>Value & ROI</h3>
            <div class="roi-grid">
              <div class="roi-card"><div class="roi-metric">£34,200/yr</div><div class="roi-label">Cost Savings</div><div class="roi-desc">Eliminate manual prospecting labor</div></div>
              <div class="roi-card"><div class="roi-metric">5x</div><div class="roi-label">Volume Increase</div><div class="roi-desc">Process more prospects per month</div></div>
              <div class="roi-card"><div class="roi-metric">24/7</div><div class="roi-label">Autonomous Operation</div><div class="roi-desc">Works around the clock</div></div>
            </div>
          </div>`
      },
      {
        id: 'lead-scrapers',
        name: 'Lead Scrapers',
        icon: '🔍',
        content: `
          <div class="dossier-section">
            <h3 class="dossier-heading"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>How It Helps Your Business</h3>
            <p class="dossier-text">Stop manually hunting for contact information across multiple platforms. Our lead scraping system automatically harvests prospect data from business directories, enriches it with verified contact details, and delivers complete, sales-ready leads directly to your CRM.</p>
            <p class="dossier-text">Your sales team receives a constant stream of qualified leads without lifting a finger. No more purchasing outdated contact lists or wasting time on data entry. Every lead comes pre-validated and enriched with the information you need to start meaningful conversations.</p>
          </div>
          <div class="dossier-section">
            <h3 class="dossier-heading"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>Value & ROI</h3>
            <div class="roi-grid">
              <div class="roi-card"><div class="roi-metric">£28,400/yr</div><div class="roi-label">Cost Savings</div><div class="roi-desc">Eliminate manual data entry</div></div>
              <div class="roi-card"><div class="roi-metric">95%</div><div class="roi-label">Data Accuracy</div><div class="roi-desc">Verified contact information</div></div>
              <div class="roi-card"><div class="roi-metric">2,400+</div><div class="roi-label">Monthly Leads</div><div class="roi-desc">Continuous pipeline growth</div></div>
            </div>
          </div>`
      },
      {
        id: 'revenue-engines',
        name: 'Revenue Engines',
        icon: '💰',
        content: `
          <div class="dossier-section">
            <h3 class="dossier-heading"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>How It Helps Your Business</h3>
            <p class="dossier-text">A complete revenue system that orchestrates your entire sales process from first contact to closed deal. Instead of managing multiple disconnected tools, you get a unified system that captures leads from all channels, qualifies them intelligently, and routes them through optimized nurture sequences.</p>
            <p class="dossier-text">The system automatically tests different messaging approaches, identifies what converts best for each prospect segment, and continuously improves your conversion rates. Your revenue becomes predictable and scalable without adding headcount.</p>
          </div>
          <div class="dossier-section">
            <h3 class="dossier-heading"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>Value & ROI</h3>
            <div class="roi-grid">
              <div class="roi-card"><div class="roi-metric">3-5x</div><div class="roi-label">Revenue Growth</div><div class="roi-desc">Optimized conversion funnels</div></div>
              <div class="roi-card"><div class="roi-metric">80%</div><div class="roi-label">Time Saved</div><div class="roi-desc">On manual sales operations</div></div>
              <div class="roi-card"><div class="roi-metric">100%</div><div class="roi-label">Coverage</div><div class="roi-desc">No leads slip through cracks</div></div>
            </div>
          </div>`
      }
    ]
  },
  support: {
    title: 'Advanced Support',
    sections: [
      {
        id: 'support-agents',
        name: 'Support Agents',
        icon: '🤖',
        content: `
          <div class="dossier-section">
            <h3 class="dossier-heading"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>How It Helps Your Business</h3>
            <p class="dossier-text">Reduce support workload by 80% while improving customer satisfaction. Our support agents handle common queries instantly, 24/7, using your existing knowledge base and past ticket history. Customers get immediate answers instead of waiting in queues.</p>
            <p class="dossier-text">Your human support team focuses on complex issues that truly need their expertise, while the system resolves routine password resets, billing questions, and troubleshooting automatically. Response times drop from hours to seconds.</p>
          </div>
          <div class="dossier-section">
            <h3 class="dossier-heading"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>Value & ROI</h3>
            <div class="roi-grid">
              <div class="roi-card"><div class="roi-metric">£45,600/yr</div><div class="roi-label">Support Savings</div><div class="roi-desc">Reduce support costs dramatically</div></div>
              <div class="roi-card"><div class="roi-metric">&lt;30s</div><div class="roi-label">Response Time</div><div class="roi-desc">Instant customer satisfaction</div></div>
              <div class="roi-card"><div class="roi-metric">80%+</div><div class="roi-label">Auto-Resolution</div><div class="roi-desc">Tickets solved without human intervention</div></div>
            </div>
          </div>`
      },
      {
        id: 'auto-onboarding',
        name: 'Auto-Onboarding',
        icon: '📚',
        content: `
          <div class="dossier-section">
            <h3 class="dossier-heading"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>How It Helps Your Business</h3>
            <p class="dossier-text">Transform new customer activation from a manual, inconsistent process into a seamless, automated experience. Every new user receives personalized guidance based on their role and use case, with contextual tutorials triggering at exactly the right moments.</p>
            <p class="dossier-text">Activation rates increase as customers discover value faster. Your team stops manually walking every new user through setup, freeing them to focus on high-value accounts while the system ensures everyone gets proper onboarding.</p>
          </div>
          <div class="dossier-section">
            <h3 class="dossier-heading"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>Value & ROI</h3>
            <div class="roi-grid">
              <div class="roi-card"><div class="roi-metric">60%</div><div class="roi-label">Faster Activation</div><div class="roi-desc">Users reach value faster</div></div>
              <div class="roi-card"><div class="roi-metric">90%</div><div class="roi-label">Completion Rate</div><div class="roi-desc">More users fully onboarded</div></div>
              <div class="roi-card"><div class="roi-metric">£19,800/yr</div><div class="roi-label">Cost Savings</div><div class="roi-desc">Eliminate manual onboarding</div></div>
            </div>
          </div>`
      },
      {
        id: 'faq-resolvers',
        name: 'FAQ Resolvers',
        icon: '❓',
        content: `
          <div class="dossier-section">
            <h3 class="dossier-heading"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>How It Helps Your Business</h3>
            <p class="dossier-text">Stop answering the same questions repeatedly. The FAQ resolver automatically identifies common queries and delivers instant, accurate answers from your knowledge base. Customers find solutions immediately instead of submitting tickets or waiting for responses.</p>
            <p class="dossier-text">As the system learns from resolved tickets, it expands its capability to handle more complex variations of common issues. Your support volume decreases while customer satisfaction increases, creating a virtuous cycle of efficiency.</p>
          </div>
          <div class="dossier-section">
            <h3 class="dossier-heading"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>Value & ROI</h3>
            <div class="roi-grid">
              <div class="roi-card"><div class="roi-metric">70%</div><div class="roi-label">Ticket Reduction</div><div class="roi-desc">Fewer support requests</div></div>
              <div class="roi-card"><div class="roi-metric">24/7</div><div class="roi-label">Availability</div><div class="roi-desc">Always-on support</div></div>
              <div class="roi-card"><div class="roi-metric">95%</div><div class="roi-label">Accuracy</div><div class="roi-desc">Correct answers every time</div></div>
            </div>
          </div>`
      }
    ]
  },
  consulting: {
    title: 'Systems Consulting',
    sections: [
      {
        id: 'workflow-audits',
        name: 'Workflow Audits',
        icon: '🔍',
        content: `
          <div class="dossier-section">
            <h3 class="dossier-heading"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>How It Helps Your Business</h3>
            <p class="dossier-text">Discover exactly where your team's time and money are leaking. Our workflow audit maps every process in your business, identifies bottlenecks, and quantifies the cost of manual tasks. You get a clear picture of which automation investments will deliver the highest ROI.</p>
            <p class="dossier-text">Rather than guessing which processes to improve, you receive a data-driven roadmap prioritized by impact and feasibility. This ensures your automation efforts focus on the changes that will transform your business fastest.</p>
          </div>
          <div class="dossier-section">
            <h3 class="dossier-heading"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>Value & ROI</h3>
            <div class="roi-grid">
              <div class="roi-card"><div class="roi-metric">£140k+</div><div class="roi-label">Identified Savings</div><div class="roi-desc">Annual recovery potential</div></div>
              <div class="roi-card"><div class="roi-metric">2-3 Days</div><div class="roi-label">Audit Duration</div><div class="roi-desc">Fast insights delivery</div></div>
              <div class="roi-card"><div class="roi-metric">15-20</div><div class="roi-label">Opportunities</div><div class="roi-desc">Automation candidates found</div></div>
            </div>
          </div>`
      },
      {
        id: 'ai-scoring',
        name: 'AI Scoring',
        icon: '📊',
        content: `
          <div class="dossier-section">
            <h3 class="dossier-heading"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>How It Helps Your Business</h3>
            <p class="dossier-text">Not every task is worth automating. Our AI scoring system evaluates each workflow for automation suitability, considering repeatability, data availability, and potential impact. You avoid wasting resources on processes that aren't ready for automation.</p>
            <p class="dossier-text">Each task receives a 0-100 score indicating how well it fits autonomous agents. This scoring, combined with effort estimates, creates a clear matrix showing you exactly which projects to tackle first for maximum ROI.</p>
          </div>
          <div class="dossier-section">
            <h3 class="dossier-heading"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>Value & ROI</h3>
            <div class="roi-grid">
              <div class="roi-card"><div class="roi-metric">100%</div><div class="roi-label">Clarity</div><div class="roi-desc">Know exactly what to automate</div></div>
              <div class="roi-card"><div class="roi-metric">50%</div><div class="roi-label">Faster Decisions</div><div class="roi-desc">Clear prioritization framework</div></div>
              <div class="roi-card"><div class="roi-metric">Zero</div><div class="roi-label">Wasted Effort</div><div class="roi-desc">Only automate what makes sense</div></div>
            </div>
          </div>`
      },
      {
        id: 'tool-consolidation',
        name: 'Tool Consolidation',
        icon: '🔧',
        content: `
          <div class="dossier-section">
            <h3 class="dossier-heading"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>How It Helps Your Business</h3>
            <p class="dossier-text">Reduce software sprawl and eliminate duplicate functionality. We analyze your entire tool stack, identify overlaps and gaps, and recommend consolidation opportunities that reduce costs while improving integration.</p>
            <p class="dossier-text">Stop paying for five tools that do the same thing or maintaining complex integrations between redundant systems. A streamlined stack means lower subscription costs, easier training, and better data flow across your business.</p>
          </div>
          <div class="dossier-section">
            <h3 class="dossier-heading"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>Value & ROI</h3>
            <div class="roi-grid">
              <div class="roi-card"><div class="roi-metric">30-40%</div><div class="roi-label">Cost Reduction</div><div class="roi-desc">Lower software spend</div></div>
              <div class="roi-card"><div class="roi-metric">60%</div><div class="roi-label">Easier Onboarding</div><div class="roi-desc">Fewer tools to learn</div></div>
              <div class="roi-card"><div class="roi-metric">Better</div><div class="roi-label">Data Flow</div><div class="roi-desc">Unified information systems</div></div>
            </div>
          </div>`
      }
    ]
  },
  workflow: {
    title: 'Workflow Admin',
    sections: [
      {
        id: 'custom-crms',
        name: 'Custom CRMs',
        icon: '📋',
        content: `
          <div class="dossier-section">
            <h3 class="dossier-heading"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>How It Helps Your Business</h3>
            <p class="dossier-text">Stop forcing your sales process into a generic CRM template. Get a custom-built system that matches exactly how your team actually works, with stages, fields, and workflows designed around your unique sales methodology.</p>
            <p class="dossier-text">Your team adopts the CRM enthusiastically because it makes their work easier, not harder. Data entry becomes automatic, reports show what actually matters, and everyone spends more time selling instead of fighting with software.</p>
          </div>
          <div class="dossier-section">
            <h3 class="dossier-heading"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>Value & ROI</h3>
            <div class="roi-grid">
              <div class="roi-card"><div class="roi-metric">95%</div><div class="roi-label">Adoption Rate</div><div class="roi-desc">Team actually uses it</div></div>
              <div class="roi-card"><div class="roi-metric">70%</div><div class="roi-label">Less Data Entry</div><div class="roi-desc">Automated information capture</div></div>
              <div class="roi-card"><div class="roi-metric">Perfect</div><div class="roi-label">Fit</div><div class="roi-desc">Matches your exact process</div></div>
            </div>
          </div>`
      },
      {
        id: 'asset-generation',
        name: 'Asset Generation',
        icon: '🎨',
        content: `
          <div class="dossier-section">
            <h3 class="dossier-heading"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>How It Helps Your Business</h3>
            <p class="dossier-text">Generate proposals, reports, presentations, and other documents automatically from templates and data. Stop recreating the same materials manually for each client or project. The system pulls information from your CRM and other sources to populate professional documents instantly.</p>
            <p class="dossier-text">What used to take hours now takes seconds. Your team maintains consistency across all client materials while focusing their time on customization and strategy rather than formatting and data entry.</p>
          </div>
          <div class="dossier-section">
            <h3 class="dossier-heading"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>Value & ROI</h3>
            <div class="roi-grid">
              <div class="roi-card"><div class="roi-metric">90%</div><div class="roi-label">Time Saved</div><div class="roi-desc">On document creation</div></div>
              <div class="roi-card"><div class="roi-metric">100%</div><div class="roi-label">Consistency</div><div class="roi-desc">Perfect brand alignment</div></div>
              <div class="roi-card"><div class="roi-metric">Unlimited</div><div class="roi-label">Scale</div><div class="roi-desc">Generate assets on demand</div></div>
            </div>
          </div>`
      },
      {
        id: 'nurture-sequences',
        name: 'Nurture Sequences',
        icon: '📧',
        content: `
          <div class="dossier-section">
            <h3 class="dossier-heading"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>How It Helps Your Business</h3>
            <p class="dossier-text">Keep prospects engaged without manual follow-up. Automated nurture sequences deliver relevant content based on prospect behavior, ensuring no lead goes cold due to lack of attention. Each sequence adapts based on engagement, sending more information to interested prospects and backing off when they're not ready.</p>
            <p class="dossier-text">Your pipeline stays warm automatically. Prospects receive timely, valuable content that builds trust while your team focuses on ready-to-buy opportunities. Conversion rates improve as leads are properly educated before sales conversations.</p>
          </div>
          <div class="dossier-section">
            <h3 class="dossier-heading"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>Value & ROI</h3>
            <div class="roi-grid">
              <div class="roi-card"><div class="roi-metric">45%</div><div class="roi-label">Higher Conversion</div><div class="roi-desc">Better educated prospects</div></div>
              <div class="roi-card"><div class="roi-metric">Zero</div><div class="roi-label">Missed Follow-ups</div><div class="roi-desc">Perfect consistency</div></div>
              <div class="roi-card"><div class="roi-metric">£34,200/yr</div><div class="roi-label">Cost Savings</div><div class="roi-desc">Automated nurturing</div></div>
            </div>
          </div>`
      }
    ]
  }
};
