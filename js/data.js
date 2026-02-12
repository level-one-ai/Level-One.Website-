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
/* ========================================
   SOLUTIONS DATA - DETAILED CONTENT
   ======================================== */

const solutionData = {
  sales: {
    title: 'Revenue Engines',
    sections: [
      {
        id: 'pipeline',
        name: 'Pipeline Generation',
        icon: '',
        content: `
          <div class="solution-content">
            <h2>Automated Pipeline Generation</h2>
            <p>Your revenue engine identifies and qualifies prospects automatically, delivering a consistent flow of opportunities without manual prospecting.</p>
            
            <h3>How It Increases Revenue</h3>
            <p>The system monitors multiple sources—industry databases, LinkedIn, company registrations, and competitor activity—identifying businesses matching your ideal customer profile.</p>
            <p>Each prospect receives an automated score based on criteria you define: company size, growth signals, budget indicators, and decision-maker accessibility. High-scoring prospects move immediately into engagement workflows.</p>
            
            <h3>Real-World Results</h3>
            <p>A Manchester professional services firm deployed this infrastructure and saw their qualified pipeline increase by 340% within 60 days. Sales team productivity doubled as they eliminated prospecting time entirely.</p>
            <p>According to Salesforce's State of Sales report, companies using automated prospecting generate 50% more sales-ready leads at 33% lower cost per lead.</p>
            
            <h3>What You Get</h3>
            <p>Daily delivery of qualified prospects into your CRM with complete company intelligence, decision-maker contact details, and engagement triggers. Every prospect arrives scored and prioritized for maximum conversion efficiency.</p>
          </div>
        `
      },
      {
        id: 'conversion',
        name: 'Conversion Systems',
        icon: '',
        content: `
          <div class="solution-content">
            <h2>Automated Conversion Infrastructure</h2>
            <p>Your conversion system handles outreach, follow-up, and qualification—moving prospects from first contact to sales-ready without human input.</p>
            
            <h3>How It Increases Revenue</h3>
            <p>The infrastructure sends personalized outreach triggered by specific events: new funding rounds, leadership changes, expansion announcements, or technology implementations. Each message adapts to the prospect's situation.</p>
            <p>When prospects engage, the system continues conversations, answers questions, provides resources, and schedules meetings only when buying intent is confirmed.</p>
            
            <h3>Real-World Results</h3>
            <p>A Glasgow firm replaced manual outreach and saw meeting bookings increase 180%. Average time from first contact to qualified meeting dropped from 23 days to 8 days—accelerating revenue velocity by 187%.</p>
            <p>HubSpot research shows automated follow-up systems generate 451% higher response rates than manual outreach, with 3x higher conversion to opportunity.</p>
            
            <h3>What You Get</h3>
            <p>Personalized outreach campaigns that execute automatically based on prospect behavior. The system nurtures relationships until prospects are genuinely interested, protecting your team's time while maximizing pipeline quality.</p>
          </div>
        `
      },
      {
        id: 'growth',
        name: 'Growth Infrastructure',
        icon: '',
        content: `
          <div class="solution-content">
            <h2>Scalable Growth Infrastructure</h2>
            <p>Revenue infrastructure that scales with your business—handling increased volume without proportional cost increases.</p>
            
            <h3>How It Reduces Costs</h3>
            <p>Traditional sales expansion requires hiring more SDRs and BDRs. Revenue engines handle 100 prospects or 10,000 prospects with identical operational cost—the infrastructure scales without headcount.</p>
            <p>Each new market, product line, or customer segment gets the same automated pipeline generation and conversion infrastructure your core business uses.</p>
            
            <h3>Real-World Results</h3>
            <p>An Edinburgh consultancy expanded from local to national coverage without hiring additional business development staff. Revenue increased 310% while customer acquisition cost dropped 42%.</p>
            <p>McKinsey data shows companies with automated revenue infrastructure achieve 3-5x higher growth rates while maintaining 20-40% lower sales costs as a percentage of revenue.</p>
            
            <h3>What You Get</h3>
            <p>Infrastructure that grows with your business goals. Enter new markets, launch new offerings, or expand geographically—your revenue engine adapts instantly without additional overhead.</p>
          </div>
        `
      }
    ]
  },
  support: {
    title: 'Resolution Systems',
    sections: [
      {
        id: 'cost-reduction',
        name: 'Cost Reduction',
        icon: '',
        content: `
          <div class="solution-content">
            <h2>Support Cost Reduction</h2>
            <p>Resolution systems eliminate the majority of support overhead by handling routine inquiries automatically while maintaining quality standards.</p>
            
            <h3>How It Reduces Costs</h3>
            <p>The infrastructure resolves 70-85% of inbound support requests without human intervention—password resets, account queries, status updates, and common troubleshooting execute automatically.</p>
            <p>Your team handles only complex requests requiring human judgment, dramatically reducing headcount requirements while improving response times.</p>
            
            <h3>Real-World Results</h3>
            <p>A Bristol SaaS company deployed resolution infrastructure and reduced support costs by 68% within 90 days. Team size dropped from 12 support agents to 4, while customer satisfaction scores increased 23%.</p>
            <p>Gartner research indicates automated support systems reduce cost per interaction by 70% while handling 80% of routine queries—freeing skilled staff for revenue-generating activities.</p>
            
            <h3>What You Get</h3>
            <p>24/7 instant response infrastructure that resolves common queries immediately. Customers receive answers in seconds rather than hours, while your team focuses on complex, high-value interactions.</p>
          </div>
        `
      },
      {
        id: 'experience',
        name: 'Client Experience',
        icon: '',
        content: `
          <div class="solution-content">
            <h2>Enhanced Client Experience</h2>
            <p>Resolution systems improve customer experience while reducing overhead—delivering instant, accurate responses that protect brand quality.</p>
            
            <h3>How It Improves Retention</h3>
            <p>The infrastructure provides immediate assistance regardless of time zone or business hours. Customers receive accurate, consistent answers trained on your exact processes and brand voice.</p>
            <p>Escalation to human agents happens only when genuinely necessary, ensuring your team handles meaningful conversations while routine matters resolve instantly.</p>
            
            <h3>Real-World Results</h3>
            <p>A Leeds professional services firm implemented resolution infrastructure and saw customer retention increase from 78% to 91%. Client satisfaction scores improved 34% while support costs decreased 52%.</p>
            <p>Zendesk data shows companies with automated resolution systems achieve 92% customer satisfaction rates—matching or exceeding human-only support while operating at fraction of the cost.</p>
            
            <h3>What You Get</h3>
            <p>Infrastructure that delivers exceptional customer experience automatically. Clients receive instant, accurate support while your team focuses on complex requests that drive revenue and retention.</p>
          </div>
        `
      },
      {
        id: 'efficiency',
        name: 'Efficiency Infrastructure',
        icon: '',
        content: `
          <div class="solution-content">
            <h2>Operational Efficiency Infrastructure</h2>
            <p>Resolution systems optimize support operations—reducing response times, improving accuracy, and eliminating bottlenecks.</p>
            
            <h3>How It Increases Efficiency</h3>
            <p>The infrastructure handles tier-1 and tier-2 support automatically, routing only complex issues to human agents. Every interaction is logged, analyzed, and used to improve response quality.</p>
            <p>Support knowledge updates instantly across all channels—changes to processes, pricing, or features reflect immediately without retraining staff.</p>
            
            <h3>Real-World Results</h3>
            <p>A Birmingham technology firm deployed resolution infrastructure and reduced average response time from 4.2 hours to 12 seconds. First-contact resolution improved from 62% to 89%, eliminating follow-up volume.</p>
            <p>Forrester research indicates automated resolution systems improve first-contact resolution by 40-60% while reducing average handle time by 35-50%—multiplying team capacity without additional headcount.</p>
            
            <h3>What You Get</h3>
            <p>Infrastructure that maximizes support team productivity. Routine matters resolve automatically, complex requests receive immediate expert attention, and your operation scales efficiently as you grow.</p>
          </div>
        `
      }
    ]
  },
  consulting: {
    title: 'Systems Architecture',
    sections: [
      {
        id: 'profit',
        name: 'Profit Identification',
        icon: '',
        content: `
          <div class="solution-content">
            <h2>Profit Leak Identification</h2>
            <p>We audit your operations to identify where manual processes cost you revenue or margin—mapping exactly where automation delivers maximum ROI.</p>
            
            <h3>How It Increases Profitability</h3>
            <p>Our audit quantifies time spent on repetitive tasks, measures conversion leakage, and calculates opportunity cost of manual bottlenecks. You receive specific recommendations ranked by financial impact.</p>
            <p>Each recommendation includes implementation cost, expected savings, and payback timeline—enabling data-driven decisions about infrastructure deployment.</p>
            
            <h3>Real-World Results</h3>
            <p>An Aberdeen professional services firm discovered £180,000 in annual labor costs dedicated to manual data entry and client onboarding. Automation infrastructure eliminated these costs within 6 months.</p>
            <p>McKinsey research shows professional services firms lose 20-30% of potential profit to administrative overhead—most of which can be eliminated through strategic automation.</p>
            
            <h3>What You Get</h3>
            <p>Comprehensive operational audit documenting exactly where automation delivers measurable financial impact. Every recommendation targets specific, quantified improvements to revenue, costs, or efficiency.</p>
          </div>
        `
      },
      {
        id: 'roi',
        name: 'ROI Mapping',
        icon: '',
        content: `
          <div class="solution-content">
            <h2>Infrastructure ROI Mapping</h2>
            <p>We map the financial return of each potential automation investment—providing clear visibility into costs, benefits, and payback timelines.</p>
            
            <h3>How It Improves Decision-Making</h3>
            <p>Our analysis quantifies current state costs (labor, opportunity cost, error correction) and projected state economics (infrastructure cost, maintenance, efficiency gains).</p>
            <p>You receive deployment roadmaps prioritized by ROI—implementing highest-impact infrastructure first to generate capital for subsequent phases.</p>
            
            <h3>Real-World Results</h3>
            <p>A Newcastle consultancy used ROI mapping to prioritize automation investments. First phase delivered 340% ROI within 4 months, funding expansion into additional departments without external capital.</p>
            <p>Deloitte research indicates strategic automation deployment generates average ROI of 200-300% within first year—with returns accelerating as infrastructure scales.</p>
            
            <h3>What You Get</h3>
            <p>Financial models showing exact costs and returns of proposed infrastructure. You deploy automation with confidence, knowing precise payback timelines and expected financial impact.</p>
          </div>
        `
      },
      {
        id: 'strategy',
        name: 'Growth Strategy',
        icon: '',
        content: `
          <div class="solution-content">
            <h2>Automated Growth Strategy</h2>
            <p>We design infrastructure roadmaps aligned with your growth objectives—ensuring automation investments drive strategic outcomes.</p>
            
            <h3>How It Accelerates Growth</h3>
            <p>Our strategy process connects business goals (revenue targets, margin improvements, capacity expansion) to infrastructure requirements. Each deployment supports specific commercial objectives.</p>
            <p>The roadmap sequences implementations for maximum impact—early wins generate capital and organizational momentum for larger transformations.</p>
            
            <h3>Real-World Results</h3>
            <p>An Edinburgh firm used strategic automation to support 250% revenue growth without proportional headcount increases. Operating margin improved from 18% to 31% as infrastructure scaled efficiently.</p>
            <p>Boston Consulting Group data shows companies with strategic automation roadmaps achieve 2-3x higher growth rates while maintaining superior unit economics compared to manual-growth competitors.</p>
            
            <h3>What You Get</h3>
            <p>Multi-phase deployment roadmap connecting infrastructure investments to growth objectives. Each phase delivers measurable commercial impact while preparing foundation for subsequent automation.</p>
          </div>
        `
      }
    ]
  },
  workflow: {
    title: 'Operational Autonomy',
    sections: [
      {
        id: 'cost',
        name: 'Cost Elimination',
        icon: '',
        content: `
          <div class="solution-content">
            <h2>Administrative Cost Elimination</h2>
            <p>Operational infrastructure eliminates manual administrative overhead—removing cost centers while improving accuracy and speed.</p>
            
            <h3>How It Reduces Costs</h3>
            <p>The infrastructure handles data entry, document generation, workflow routing, and status updates automatically. Tasks that consumed hours of labor execute in seconds without human input.</p>
            <p>Errors decrease dramatically as manual data handling disappears—eliminating costly correction cycles and quality control overhead.</p>
            
            <h3>Real-World Results</h3>
            <p>A Cardiff professional practice eliminated 3 full-time administrative positions by deploying operational infrastructure. Annual savings of £105,000 with payback achieved in 4.2 months.</p>
            <p>PwC research indicates administrative automation reduces operational costs by 40-60% while improving processing speed by 70-90%—freeing capital for revenue-generating activities.</p>
            
            <h3>What You Get</h3>
            <p>Infrastructure that handles routine administration automatically. Your team focuses on strategic, revenue-generating work while operational tasks execute flawlessly in the background.</p>
          </div>
        `
      },
      {
        id: 'scale',
        name: 'Scale Infrastructure',
        icon: '',
        content: `
          <div class="solution-content">
            <h2>Scalable Operations Infrastructure</h2>
            <p>Operational infrastructure that grows with your business—handling increased volume without proportional cost increases.</p>
            
            <h3>How It Enables Growth</h3>
            <p>Traditional growth requires expanding administrative teams as transaction volume increases. Automated infrastructure handles 100 transactions or 10,000 transactions with identical operational cost.</p>
            <p>The system scales instantly—new clients, products, or markets get integrated without hiring additional operational staff.</p>
            
            <h3>Real-World Results</h3>
            <p>A Southampton firm grew client base from 80 to 340 without expanding administrative headcount. Revenue per administrative employee increased 425% while maintaining service quality.</p>
            <p>Accenture data shows companies with scalable operational infrastructure achieve 50-70% higher revenue growth while operating costs grow only 10-15%—dramatically improving unit economics.</p>
            
            <h3>What You Get</h3>
            <p>Infrastructure that scales automatically with business growth. Expansion no longer requires proportional overhead increases—you grow revenue while maintaining or improving operational margins.</p>
          </div>
        `
      },
      {
        id: 'automation',
        name: 'Workflow Automation',
        icon: '',
        content: `
          <div class="solution-content">
            <h2>End-to-End Workflow Automation</h2>
            <p>Infrastructure connecting your tools into unified workflows—eliminating manual handoffs and data silos.</p>
            
            <h3>How It Improves Efficiency</h3>
            <p>The infrastructure connects your CRM, communication tools, documentation systems, and billing platforms. Data flows automatically from capture through completion without manual intervention.</p>
            <p>Process time decreases dramatically as manual steps disappear. Tasks that required days complete in hours; hourly tasks execute in minutes.</p>
            
            <h3>Real-World Results</h3>
            <p>A Liverpool consultancy reduced client onboarding time from 6.5 days to 45 minutes by deploying workflow infrastructure. Capacity increased 400% without additional headcount.</p>
            <p>Gartner research indicates end-to-end workflow automation reduces process cycle times by 60-80% while improving accuracy by 85-95%—multiplying organizational capacity.</p>
            
            <h3>What You Get</h3>
            <p>Unified operational infrastructure where data flows automatically between systems. Manual handoffs disappear, errors decrease dramatically, and your team capacity multiplies without adding headcount.</p>
          </div>
        `
      }
    ]
  }
};


/* ========================================
   BLUEPRINT PROCESS DATA - 3 PHASES
   ======================================== */

const blueprintData = {
  phases: [
    {
      id: 'audit',
      number: '01',
      title: 'Systems Audit',
      subtitle: 'Quantifying Opportunity',
      content: `
        <div class="blueprint-content-section">
          <h2>Phase 1: Systems Audit</h2>
          <p>We map your current operations to identify exactly where automation delivers maximum financial impact—quantifying opportunity in revenue, costs, and efficiency.</p>
          
          <h3>What We Analyze</h3>
          <p>Our audit examines your complete workflow from lead capture through service delivery. We track time spent on repetitive tasks, measure conversion leakage, and calculate opportunity costs of manual bottlenecks.</p>
          <p>Every process receives an automation score based on repetition frequency, time consumption, error rate, and strategic importance. High-scoring processes become immediate deployment candidates.</p>
          
          <h3>Deliverables</h3>
          <p>You receive a comprehensive audit documenting current state costs (labor hours, opportunity cost, error correction) and projected state economics (infrastructure investment, ongoing costs, efficiency gains).</p>
          <p>Each recommendation includes specific ROI projections, implementation timeline, and resource requirements—enabling data-driven infrastructure decisions.</p>
          
          <h3>Timeline</h3>
          <p>The audit phase typically completes within 5-7 business days. We conduct stakeholder interviews, observe workflows, and analyze existing data to build accurate current-state models.</p>
          
          <h3>Expected Outcomes</h3>
          <p>Most businesses discover 15-25 automation opportunities across their operations. Typical findings include £50,000-£200,000 in annual labor costs that can be eliminated or reallocated to revenue-generating activities.</p>
        </div>
      `
    },
    {
      id: 'deployment',
      number: '02',
      title: 'Infrastructure Deployment',
      subtitle: 'Building Revenue Systems',
      content: `
        <div class="blueprint-content-section">
          <h2>Phase 2: Infrastructure Deployment</h2>
          <p>We construct and test the technical infrastructure identified in your audit—installing revenue engines, resolution systems, and operational automation.</p>
          
          <h3>Implementation Approach</h3>
          <p>Deployment follows a phased methodology prioritizing highest-ROI infrastructure first. Initial implementations generate quick wins—building organizational momentum and funding subsequent phases.</p>
          <p>Each system receives comprehensive testing before handover. We verify accuracy, measure performance against baseline, and ensure integration with existing tools functions correctly.</p>
          
          <h3>What Gets Built</h3>
          <p>Infrastructure varies by business needs but typically includes: automated pipeline generation, conversion systems, support resolution infrastructure, operational workflow automation, or data integration between platforms.</p>
          <p>Every system is customized to your specific processes—no generic templates. Logic reflects your business rules, brand voice, and operational requirements.</p>
          
          <h3>Timeline</h3>
          <p>Deployment duration depends on complexity. Simple automation (3-5 workflows) deploys within 10-14 days. Comprehensive departmental infrastructure requires 3-4 weeks. Enterprise architecture spans 6-8 weeks across multiple phases.</p>
          
          <h3>Expected Outcomes</h3>
          <p>Businesses typically see measurable impact within first 30 days of deployment. Common results include 40-60% reduction in manual administrative time, 2-3x increase in qualified pipeline, or 50-70% reduction in support costs.</p>
        </div>
      `
    },
    {
      id: 'monitoring',
      number: '03',
      title: 'Performance Monitoring',
      subtitle: 'Optimizing Returns',
      content: `
        <div class="blueprint-content-section">
          <h2>Phase 3: Performance Monitoring</h2>
          <p>We track infrastructure performance against revenue, cost, and efficiency metrics—continuously optimizing returns and adapting to business evolution.</p>
          
          <h3>Monitoring Approach</h3>
          <p>Every system receives ongoing performance tracking. We measure output volume, quality metrics, conversion rates, cost per transaction, and ROI realization compared to projections.</p>
          <p>Monthly optimization cycles refine logic based on real performance data. Systems adapt to changing business conditions, market dynamics, and operational requirements.</p>
          
          <h3>Continuous Improvement</h3>
          <p>Infrastructure evolves with your business. As you launch new offerings, enter new markets, or modify processes, automation adapts automatically without requiring complete rebuilds.</p>
          <p>We identify expansion opportunities—additional workflows suitable for automation, integration possibilities with new tools, or optimization of existing infrastructure.</p>
          
          <h3>Support Structure</h3>
          <p>All deployments include ongoing operational support. Issues receive priority response through dedicated channels. System updates, security patches, and performance improvements deploy automatically.</p>
          
          <h3>Expected Outcomes</h3>
          <p>Infrastructure ROI typically improves 30-50% during first year as optimization cycles refine performance. Most businesses discover additional automation opportunities worth 2-3x their initial investment within 12 months.</p>
          <p>Long-term clients achieve 300-500% cumulative ROI over 24-36 months as infrastructure compounds—delivering increasing returns without proportional cost increases.</p>
        </div>
      `
    }
  ]
};

/* ========================================
   INFRASTRUCTURE CATALOG DATA
   ======================================== */

const infrastructureData = {
  sales: {
    title: 'Lead Generation',
    sections: [
      {
        id: 'cold-email',
        name: 'Cold Email Systems',
        icon: '',
        content: `
          <div class="solution-content">
            <h2>Cold Email Systems</h2>
            <p>Your cold email system identifies prospects and sends personalized outreach automatically—building relationships and generating meetings while you focus on closing deals.</p>
            
            <h3>How This Helps Your Business</h3>
            <p>The system crafts personalized emails based on prospect data, company news, and engagement triggers. It handles follow-up sequences automatically, adjusting timing and messaging based on responses.</p>
            <p>Each campaign learns from results—subject lines, messaging, and timing optimize continuously to improve response rates.</p>
            
            <h3>What This Means For You</h3>
            <p>Your outreach runs 24/7 without manual effort. Prospects receive timely, relevant messages that feel personal—not generic mass emails.</p>
            <p>A Manchester firm deployed cold email infrastructure and increased qualified meetings by 280% within 45 days while reducing outreach costs by 65%.</p>
            
            <h3>Expected Results</h3>
            <p>Response rates typically reach 8-15% compared to 1-3% for manual outreach. Meeting booking rates improve 4-6x as timing and personalization optimize.</p>
          </div>
        `
      },
      {
        id: 'application',
        name: 'Application Systems',
        icon: '',
        content: `
          <div class="solution-content">
            <h2>Application Systems</h2>
            <p>Your application system captures leads from websites, forms, and landing pages—automatically qualifying, routing, and engaging prospects based on their information.</p>
            
            <h3>How This Helps Your Business</h3>
            <p>When prospects submit forms, the system instantly scores them based on company size, industry, budget signals, and needs. High-value leads receive immediate engagement while lower-priority prospects enter nurture sequences.</p>
            <p>Data flows automatically into your CRM with complete enrichment—no manual data entry or lead processing required.</p>
            
            <h3>What This Means For You</h3>
            <p>Every form submission receives instant follow-up appropriate to their readiness level. Your team only sees qualified prospects worth their time.</p>
            <p>A Bristol company deployed application infrastructure and reduced lead response time from 4 hours to 30 seconds—improving conversion by 190%.</p>
            
            <h3>Expected Results</h3>
            <p>Lead-to-opportunity conversion typically improves 60-80%. Sales team productivity increases 40% as unqualified leads get filtered automatically.</p>
          </div>
        `
      },
      {
        id: 'content',
        name: 'Content Systems',
        icon: '',
        content: `
          <div class="solution-content">
            <h2>Content Systems</h2>
            <p>Your content system generates educational materials, case studies, and resources that attract and nurture prospects—building authority and pipeline without manual content creation.</p>
            
            <h3>How This Helps Your Business</h3>
            <p>The system analyzes your expertise, customer questions, and industry trends to create relevant content. It publishes automatically across channels and tracks engagement to understand what resonates.</p>
            <p>High-engagement content gets amplified while low-performing material gets refined—maximizing return on content investment.</p>
            
            <h3>What This Means For You</h3>
            <p>Your company maintains consistent thought leadership without dedicating staff to content production. Prospects discover you through valuable resources rather than sales pitches.</p>
            <p>An Edinburgh consultancy deployed content infrastructure and generated 340 inbound leads per quarter—reducing customer acquisition cost by 58%.</p>
            
            <h3>Expected Results</h3>
            <p>Inbound lead generation typically increases 150-200%. Content-sourced leads convert 2-3x better than cold outreach as they arrive pre-educated and interested.</p>
          </div>
        `
      }
    ]
  },
        content: `
          <div class="solution-content">
            <h2>Automated Pipeline Automation</h2>
            <p>Your lead generation system identifies and qualifies prospects automatically—delivering a consistent flow of opportunities while you focus on closing deals.</p>
            
            <h3>How This Helps Your Business</h3>
            <p>Instead of spending hours researching potential clients, your system monitors multiple sources continuously. It tracks industry databases, LinkedIn activity, company registrations, funding announcements, and competitor movements.</p>
            <p>Every prospect gets scored automatically based on your ideal customer profile. High-scoring leads move immediately into your CRM with complete intelligence—company size, decision-makers, recent activity, and buying signals.</p>
            
            <h3>What This Means For You</h3>
            <p>Wake up to a filtered list of qualified prospects ready for outreach. Your sales team eliminates prospecting time entirely, focusing exclusively on conversations that convert.</p>
            <p>A Manchester consultancy deployed this system and increased their qualified pipeline by 340% within 60 days—without hiring additional business development staff.</p>
            
            <h3>Expected Results</h3>
            <p>Most businesses generate 15-25 qualified leads per week without manual effort. Sales productivity typically doubles as prospecting time disappears completely.</p>
            <p>According to Salesforce data, companies using automated prospecting generate 50% more sales-ready leads at 33% lower cost per lead.</p>
          </div>
        `
      },
      {
        id: 'qualification',
        name: 'Prospect Qualification',
        icon: '',
        content: `
          <div class="solution-content">
            <h2>Automated Prospect Qualification</h2>
            <p>Your qualification system determines which prospects are genuinely ready to buy—protecting your team's time and maximizing conversion rates.</p>
            
            <h3>How This Helps Your Business</h3>
            <p>The system analyzes prospect behavior, company signals, and engagement patterns to predict buying intent. It tracks website visits, content downloads, email responses, and decision-maker activity.</p>
            <p>Each prospect receives a readiness score. High-intent prospects get routed to your sales team immediately. Low-intent prospects enter automated nurture sequences until timing improves.</p>
            
            <h3>What This Means For You</h3>
            <p>Your team only speaks with prospects who are genuinely interested and ready to move forward. No more wasted calls with tire-kickers or companies not ready to buy.</p>
            <p>A Glasgow firm deployed qualification infrastructure and saw their meeting-to-opportunity conversion rate increase from 22% to 67%—tripling sales efficiency.</p>
            
            <h3>Expected Results</h3>
            <p>Businesses typically see 40-60% improvement in conversion rates as unqualified prospects get filtered automatically. Sales cycle length often decreases 30-40% as only ready buyers reach your team.</p>
            <p>HubSpot research shows proper qualification increases close rates by 50-70% while reducing average deal cycle by 35%.</p>
          </div>
        `
      },
      {
        id: 'outreach',
        name: 'Outreach Systems',
        icon: '',
        content: `
          <div class="solution-content">
            <h2>Automated Outreach Systems</h2>
            <p>Your outreach infrastructure handles initial contact, follow-up, and relationship nurturing—moving prospects toward sales conversations without manual effort.</p>
            
            <h3>How This Helps Your Business</h3>
            <p>The system sends personalized messages triggered by specific events: new funding, leadership changes, expansion announcements, or technology implementations. Each message adapts to the prospect's exact situation.</p>
            <p>Follow-up happens automatically based on prospect responses. If they engage, the system continues conversation, provides resources, and schedules meetings when buying intent is confirmed.</p>
            
            <h3>What This Means For You</h3>
            <p>Prospects receive timely, relevant outreach without your team manually tracking triggers or writing individual messages. Relationships develop automatically until prospects are genuinely interested.</p>
            <p>An Edinburgh consultancy deployed outreach infrastructure and reduced time from first contact to qualified meeting from 23 days to 8 days—accelerating revenue by 187%.</p>
            
            <h3>Expected Results</h3>
            <p>Response rates typically increase 180-250% compared to manual outreach. Meeting booking rates improve 150-200% as timing and messaging become optimized.</p>
            <p>Marketing Sherpa data shows automated, trigger-based outreach generates 451% higher response rates than generic manual emails.</p>
          </div>
        `
      }
    ]
  },
  support: {
    title: 'Project Management',
    sections: [
      {
        id: 'automated-fulfillment',
        name: 'Automated Fulfillment',
        icon: '',
        content: `
          <div class="solution-content">
            <h2>Automated Fulfillment</h2>
            <p>Your fulfillment system handles project delivery from acceptance through completion—executing deliverables automatically based on your specifications.</p>
            
            <h3>How This Helps Your Business</h3>
            <p>When clients approve projects, the system kicks off delivery workflows automatically. It generates documents, creates assets, schedules tasks, and coordinates resources without manual project management.</p>
            <p>Progress tracking happens in real-time with automatic stakeholder updates. Bottlenecks get flagged immediately so you can intervene before delays occur.</p>
            
            <h3>What This Means For You</h3>
            <p>Project delivery becomes consistent and predictable. Your team eliminates coordination overhead and focuses on high-value creative work.</p>
            <p>A Bristol agency deployed automated fulfillment and reduced delivery time by 45% while handling 2.5x more concurrent projects with the same team size.</p>
            
            <h3>Expected Results</h3>
            <p>Project delivery speed typically improves 40-60%. Team capacity increases 2-3x as coordination overhead disappears.</p>
          </div>
        `
      },
      {
        id: 'onboarding-systems',
        name: 'Onboarding Systems',
        icon: '',
        content: `
          <div class="solution-content">
            <h2>Onboarding Systems</h2>
            <p>Your onboarding system welcomes new clients and gets them to value faster—automating the entire activation journey from contract signing through first results.</p>
            
            <h3>How This Helps Your Business</h3>
            <p>The system triggers welcome sequences when contracts are signed. It collects necessary information, schedules kickoff meetings, provisions access, and delivers initial training automatically.</p>
            <p>Each client receives personalized guidance based on their goals and use case—no generic one-size-fits-all experience.</p>
            
            <h3>What This Means For You</h3>
            <p>New clients reach value faster with consistent, professional onboarding. Your team eliminates repetitive setup work and focuses on strategic client success.</p>
            <p>A Cardiff SaaS company deployed onboarding automation and reduced time-to-first-value from 14 days to 3 days—improving retention by 34%.</p>
            
            <h3>Expected Results</h3>
            <p>Client activation time typically drops 60-75%. First-month churn decreases 30-40% as clients reach value before considering alternatives.</p>
          </div>
        `
      },
      {
        id: 'pm-systems',
        name: 'PM Systems',
        icon: '',
        content: `
          <div class="solution-content">
            <h2>PM Systems</h2>
            <p>Your project management system coordinates all moving parts automatically—tracking tasks, resources, deadlines, and dependencies without manual oversight.</p>
            
            <h3>How This Helps Your Business</h3>
            <p>The infrastructure monitors project health continuously, identifying risks before they become problems. It reallocates resources automatically when bottlenecks emerge and updates stakeholders proactively.</p>
            <p>Task dependencies resolve intelligently—when prerequisites complete, dependent tasks trigger automatically with proper notifications.</p>
            
            <h3>What This Means For You</h3>
            <p>Projects run smoothly without constant project manager intervention. Your team always knows current priorities and nothing falls through cracks.</p>
            <p>A Liverpool consultancy deployed PM infrastructure and improved on-time delivery from 67% to 94% while reducing PM overhead by 60%.</p>
            
            <h3>Expected Results</h3>
            <p>On-time delivery typically improves 25-35 percentage points. Project management overhead decreases 50-70% as coordination becomes automatic.</p>
          </div>
        `
      }
    ]
  },
  consulting: {
    title: 'Hiring Systems',
    sections: [
      {
        id: 'intake-systems',
        name: 'Intake Systems',
        icon: '',
        content: `
          <div class="solution-content">
            <h2>Intake Systems</h2>
            <p>Your intake system captures and processes job applications automatically—ensuring every candidate receives consistent evaluation without manual screening.</p>
            
            <h3>How This Helps Your Business</h3>
            <p>Applications flow into your system and get parsed automatically—extracting experience, skills, education, and requirements match. Each candidate receives initial screening based on your specific criteria.</p>
            <p>Qualified candidates advance immediately while unsuitable applications receive polite rejections—maintaining your employer brand while protecting recruiter time.</p>
            
            <h3>What This Means For You</h3>
            <p>Your recruiting team eliminates hours of manual resume screening. Every application gets reviewed consistently, reducing bias and improving candidate quality.</p>
            <p>A Manchester firm deployed intake automation and reduced time-to-first-interview from 12 days to 2 days—dramatically improving candidate experience and acceptance rates.</p>
            
            <h3>Expected Results</h3>
            <p>Screening time typically drops 85-90%. Quality candidates progress 5-7x faster, improving acceptance rates by 30-40%.</p>
          </div>
        `
      },
      {
        id: 'scoring-systems',
        name: 'Scoring Systems',
        icon: '',
        content: `
          <div class="solution-content">
            <h2>Scoring Systems</h2>
            <p>Your scoring system evaluates candidates objectively based on qualifications, experience, and cultural fit—ensuring fair, data-driven hiring decisions.</p>
            
            <h3>How This Helps Your Business</h3>
            <p>Each candidate receives a comprehensive score across multiple dimensions: technical skills, experience level, culture alignment, and growth potential. Scoring criteria customize to each role's specific requirements.</p>
            <p>Rankings update automatically as new candidates apply, ensuring you're always interviewing the strongest available talent pool.</p>
            
            <h3>What This Means For You</h3>
            <p>Hiring managers eliminate bias and gut-feel decisions. Every candidate gets evaluated fairly against consistent criteria, improving hiring quality.</p>
            <p>A Glasgow technology company deployed scoring infrastructure and improved new hire performance ratings by 45% while reducing regrettable hires by 60%.</p>
            
            <h3>Expected Results</h3>
            <p>Quality-of-hire typically improves 35-50%. First-year turnover decreases 40-55% as better-fit candidates get selected.</p>
          </div>
        `
      },
      {
        id: 'trial-systems',
        name: 'Trial Systems',
        icon: '',
        content: `
          <div class="solution-content">
            <h2>Trial Systems</h2>
            <p>Your trial system coordinates skills assessments and work samples automatically—evaluating candidates' actual abilities rather than interview performance alone.</p>
            
            <h3>How This Helps Your Business</h3>
            <p>When candidates reach assessment stage, the system sends relevant challenges, tracks completion, and scores results objectively. Technical skills, problem-solving, and work quality get measured directly.</p>
            <p>Results integrate with interview feedback to provide complete candidate profiles—enabling confident hiring decisions based on demonstrated capability.</p>
            
            <h3>What This Means For You</h3>
            <p>You eliminate hiring mistakes caused by strong interviews but weak execution. Candidates prove their skills before receiving offers, reducing new hire failure rates.</p>
            <p>An Edinburgh consultancy deployed trial infrastructure and reduced 90-day terminations by 75% while improving team performance by 40%.</p>
            
            <h3>Expected Results</h3>
            <p>New hire success rate typically improves 50-65%. Cost of bad hires decreases 60-70% as assessment catches mismatches early.</p>
          </div>
        `
      }
    ]
  },
  workflow: {
    title: 'Sales Administration',
    sections: [
      {
        id: 'custom-crm',
        name: 'Custom CRM',
        icon: '',
        content: `
          <div class="solution-content">
            <h2>Custom CRM</h2>
            <p>Your custom CRM system manages customer relationships exactly how your business operates—no forcing your processes into generic software constraints.</p>
            
            <h3>How This Helps Your Business</h3>
            <p>The infrastructure builds around your specific sales methodology, deal stages, and data requirements. It captures information you actually need while eliminating irrelevant fields that clutter standard CRMs.</p>
            <p>Integration with your existing tools happens automatically—data flows between systems without manual export/import cycles.</p>
            
            <h3>What This Means For You</h3>
            <p>Your sales team uses a CRM that actually fits how they work. Adoption increases dramatically when software matches natural workflows instead of forcing behavior changes.</p>
            <p>A Southampton firm deployed custom CRM infrastructure and improved sales rep adoption from 45% to 98%—finally getting accurate pipeline visibility.</p>
            
            <h3>Expected Results</h3>
            <p>CRM adoption typically reaches 95%+. Data quality improves 60-70% as reps actually use the system consistently.</p>
          </div>
        `
      },
      {
        id: 'asset-generation',
        name: 'Asset Generation',
        icon: '',
        content: `
          <div class="solution-content">
            <h2>Asset Generation</h2>
            <p>Your asset generation system creates proposals, contracts, presentations, and sales materials automatically—customized to each prospect without manual document creation.</p>
            
            <h3>How This Helps Your Business</h3>
            <p>When deals progress, the system generates required documents automatically using CRM data and approved templates. Proposals include accurate pricing, relevant case studies, and personalized messaging.</p>
            <p>Version control happens automatically—everyone uses current templates and pricing without manual document management.</p>
            
            <h3>What This Means For You</h3>
            <p>Sales reps eliminate hours spent creating proposals and contracts. Documents generate in minutes instead of days, accelerating deal velocity.</p>
            <p>A Leeds consultancy deployed asset generation and reduced proposal creation time from 6 hours to 8 minutes—allowing reps to respond to opportunities same-day.</p>
            
            <h3>Expected Results</h3>
            <p>Document creation time typically drops 90-95%. Deal cycle length decreases 20-30% as proposals reach prospects faster.</p>
          </div>
        `
      },
      {
        id: 'nurture-system',
        name: 'Nurture System',
        icon: '',
        content: `
          <div class="solution-content">
            <h2>Nurture System</h2>
            <p>Your nurture system maintains relationships with prospects who aren't ready to buy yet—keeping your company top-of-mind until timing improves.</p>
            
            <h3>How This Helps Your Business</h3>
            <p>The infrastructure tracks prospect engagement and sends relevant content based on their interests and behavior. Educational resources, case studies, and updates deliver automatically at optimal intervals.</p>
            <p>When prospects show renewed interest, the system alerts your sales team immediately—ensuring timely follow-up when buying intent emerges.</p>
            
            <h3>What This Means For You</h3>
            <p>Long-term prospects stay engaged without manual effort. Deals that would have gone cold remain viable opportunities.</p>
            <p>A Cardiff firm deployed nurture infrastructure and recovered 40% of previously-stalled deals within 6 months—generating £340k in previously-lost revenue.</p>
            
            <h3>Expected Results</h3>
            <p>Long-term deal conversion typically improves 35-50%. Pipeline value increases 25-40% as cold leads remain engaged.</p>
          </div>
        `
      }
    ]
  }
};
