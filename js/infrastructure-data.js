/* ========================================
   INFRASTRUCTURE CATALOG DATA
   ======================================== */

const infrastructureData = {
  sales: {
    title: 'Lead Generation',
    sections: [
      {
        id: 'pipeline',
        name: 'Pipeline Automation',
        icon: '',
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
        id: 'task-automation',
        name: 'Task Automation',
        icon: '',
        content: `
          <div class="solution-content">
            <h2>Automated Task Management</h2>
            <p>Your project management system creates, assigns, and tracks tasks automatically—eliminating manual coordination and ensuring nothing falls through gaps.</p>
            
            <h3>How This Helps Your Business</h3>
            <p>When new projects begin, the system generates complete task lists based on your standard processes. It assigns responsibilities, sets deadlines, and configures dependencies automatically.</p>
            <p>As team members complete work, the system updates status, notifies stakeholders, and triggers next steps—maintaining project momentum without manual intervention.</p>
            
            <h3>What This Means For You</h3>
            <p>Project managers eliminate hours spent creating task lists, assigning work, and chasing updates. Your team always knows exactly what needs doing and when.</p>
            <p>A Bristol agency deployed task automation and reduced project setup time from 4 hours to 8 minutes. Project managers gained 12 hours per week for strategic work.</p>
            
            <h3>Expected Results</h3>
            <p>Project setup time typically drops 90-95%. Task completion rates improve 30-40% as clarity increases and nothing gets forgotten.</p>
            <p>According to PMI research, automated task management reduces project delays by 60% while improving on-time delivery by 45%.</p>
          </div>
        `
      },
      {
        id: 'resource-allocation',
        name: 'Resource Allocation',
        icon: '',
        content: `
          <div class="solution-content">
            <h2>Automated Resource Allocation</h2>
            <p>Your system assigns team members to tasks based on availability, skills, and workload—optimizing utilization and preventing burnout.</p>
            
            <h3>How This Helps Your Business</h3>
            <p>The infrastructure tracks every team member's capacity, current assignments, and skill sets. When new work arrives, it assigns resources automatically based on optimal match criteria.</p>
            <p>Workload balancing happens continuously. If someone becomes overloaded, the system redistributes tasks or flags the issue for management attention.</p>
            
            <h3>What This Means For You</h3>
            <p>You eliminate resource planning meetings and manual capacity tracking. Team utilization improves while burnout decreases as work distributes evenly.</p>
            <p>A Cardiff consultancy deployed resource automation and increased billable utilization from 62% to 84% while reducing overtime by 40%.</p>
            
            <h3>Expected Results</h3>
            <p>Billable utilization typically increases 20-30 percentage points. Project profitability improves 25-35% as resource efficiency increases.</p>
            <p>Gartner data shows automated resource allocation improves team productivity by 35-50% while reducing burnout-related turnover by 40%.</p>
          </div>
        `
      },
      {
        id: 'status-tracking',
        name: 'Status Tracking',
        icon: '',
        content: `
          <div class="solution-content">
            <h2>Automated Status Tracking</h2>
            <p>Your infrastructure monitors project progress continuously—providing real-time visibility without requiring manual status updates.</p>
            
            <h3>How This Helps Your Business</h3>
            <p>The system tracks completion of tasks, milestones, and deliverables automatically. It identifies delays, bottlenecks, and risks as they emerge—enabling proactive intervention.</p>
            <p>Stakeholders receive automated updates at scheduled intervals or when significant events occur. Reports generate automatically with current status and projected completion.</p>
            
            <h3>What This Means For You</h3>
            <p>Your team eliminates status meetings and update emails. Everyone has real-time visibility into project health without asking for information.</p>
            <p>A Liverpool firm deployed status automation and eliminated 15 hours of weekly status meetings. Project visibility improved while coordination time decreased 70%.</p>
            
            <h3>Expected Results</h3>
            <p>Status update time typically drops 80-90%. Project delays decrease 40-50% as issues get identified and addressed earlier.</p>
            <p>McKinsey research indicates automated status tracking reduces project overruns by 35% while improving stakeholder satisfaction by 60%.</p>
          </div>
        `
      }
    ]
  },
  consulting: {
    title: 'Hiring Systems',
    sections: [
      {
        id: 'candidate-sourcing',
        name: 'Candidate Sourcing',
        icon: '',
        content: `
          <div class="solution-content">
            <h2>Automated Candidate Sourcing</h2>
            <p>Your hiring system identifies and reaches potential candidates continuously—building talent pipelines before positions even open.</p>
            
            <h3>How This Helps Your Business</h3>
            <p>The infrastructure monitors LinkedIn, job boards, GitHub, industry forums, and professional networks for candidates matching your criteria. It tracks skills, experience, career trajectory, and availability signals.</p>
            <p>High-match candidates receive automated outreach introducing your company and gauging interest. Engaged candidates enter your talent database for future opportunities.</p>
            
            <h3>What This Means For You</h3>
            <p>When positions open, you already have qualified candidates interested in your company. Time-to-hire decreases dramatically as sourcing is pre-completed.</p>
            <p>An Aberdeen technology firm deployed candidate sourcing and reduced average time-to-hire from 87 days to 23 days—filling roles 73% faster.</p>
            
            <h3>Expected Results</h3>
            <p>Time-to-hire typically drops 60-70%. Cost-per-hire decreases 40-50% as reliance on expensive recruiters diminishes.</p>
            <p>LinkedIn data shows companies with automated sourcing fill positions 3x faster while improving candidate quality by 40%.</p>
          </div>
        `
      },
      {
        id: 'interview-scheduling',
        name: 'Interview Scheduling',
        icon: '',
        content: `
          <div class="solution-content">
            <h2>Automated Interview Scheduling</h2>
            <p>Your system coordinates interview availability between candidates and hiring team members—eliminating the back-and-forth email coordination.</p>
            
            <h3>How This Helps Your Business</h3>
            <p>The infrastructure accesses team calendars, identifies available slots, and sends options to candidates. When they select a time, the system confirms with all participants, adds calendar events, and sends preparation materials.</p>
            <p>If someone needs to reschedule, the system handles rescheduling automatically without HR involvement.</p>
            
            <h3>What This Means For You</h3>
            <p>Your hiring team eliminates hours spent on scheduling coordination. Candidates experience smooth, professional coordination that strengthens your employer brand.</p>
            <p>A Newcastle consultancy deployed interview automation and reduced average scheduling time from 6 hours to 4 minutes per candidate.</p>
            
            <h3>Expected Results</h3>
            <p>Scheduling time drops 95%. Candidate dropout during interview process typically decreases 30-40% as friction disappears.</p>
            <p>Glassdoor research shows streamlined interview scheduling improves offer acceptance rates by 25% while reducing time-to-hire by 35%.</p>
          </div>
        `
      },
      {
        id: 'applicant-tracking',
        name: 'Applicant Tracking',
        icon: '',
        content: `
          <div class="solution-content">
            <h2>Automated Applicant Tracking</h2>
            <p>Your system manages candidate progress through hiring stages automatically—ensuring consistent process and preventing candidates from falling through cracks.</p>
            
            <h3>How This Helps Your Business</h3>
            <p>The infrastructure tracks every candidate's status, maintains communication history, and ensures required steps complete before advancement. It automatically requests feedback from interviewers and compiles assessments.</p>
            <p>Candidates receive automated updates about their status. Hiring managers get consolidated views of all candidates with recommendations based on interview feedback.</p>
            
            <h3>What This Means For You</h3>
            <p>Your hiring process becomes consistent and professional. No candidates get forgotten, and decision-makers always have current information.</p>
            <p>A Birmingham firm deployed applicant tracking and improved hiring decision quality by 45% while reducing time spent on candidate coordination by 85%.</p>
            
            <h3>Expected Results</h3>
            <p>Hiring process consistency improves dramatically. Bad hires typically decrease 30-40% as systematic evaluation replaces ad-hoc decisions.</p>
            <p>SHRM data indicates automated applicant tracking improves quality-of-hire by 35% while reducing hiring costs by 40%.</p>
          </div>
        `
      }
    ]
  },
  workflow: {
    title: 'Sales Administration',
    sections: [
      {
        id: 'crm-automation',
        name: 'CRM Automation',
        icon: '',
        content: `
          <div class="solution-content">
            <h2>Automated CRM Management</h2>
            <p>Your system keeps your CRM current and accurate automatically—eliminating manual data entry and ensuring information reliability.</p>
            
            <h3>How This Helps Your Business</h3>
            <p>The infrastructure captures data from emails, meetings, calls, and documents—updating CRM records automatically without sales team input. It logs activities, updates deal stages, and maintains contact information.</p>
            <p>Data quality checks run continuously, identifying duplicates, incomplete records, and outdated information for correction.</p>
            
            <h3>What This Means For You</h3>
            <p>Your sales team eliminates hours of CRM admin work weekly. Management always has accurate pipeline visibility without chasing updates from reps.</p>
            <p>A Southampton firm deployed CRM automation and reclaimed 8 hours per sales rep weekly—time redirected to revenue-generating activities.</p>
            
            <h3>Expected Results</h3>
            <p>CRM data accuracy typically improves from 60-70% to 95%+. Sales productivity increases 25-30% as administrative burden disappears.</p>
            <p>Forrester research shows automated CRM management increases sales rep productivity by 30% while improving forecast accuracy by 40%.</p>
          </div>
        `
      },
      {
        id: 'follow-up',
        name: 'Follow-up Systems',
        icon: '',
        content: `
          <div class="solution-content">
            <h2>Automated Follow-up Systems</h2>
            <p>Your infrastructure ensures no prospect gets forgotten—executing follow-up sequences automatically based on prospect behavior and timeline.</p>
            
            <h3>How This Helps Your Business</h3>
            <p>The system schedules follow-up communications based on optimal timing for your sales cycle. It sends reminders, shares resources, and maintains engagement until prospects are ready to buy.</p>
            <p>If prospects respond, the system routes them to appropriate sales team members. If they don't engage, nurture sequences continue automatically.</p>
            
            <h3>What This Means For You</h3>
            <p>Every prospect receives consistent follow-up regardless of rep workload. Deals no longer fall through cracks due to forgotten follow-up.</p>
            <p>A Leeds consultancy deployed follow-up automation and increased conversion of initial meetings to closed deals by 85%—recovering revenue from prospects who would have been forgotten.</p>
            
            <h3>Expected Results</h3>
            <p>Deal conversion rates typically increase 40-60%. Sales cycle length often decreases 20-30% as consistent follow-up maintains momentum.</p>
            <p>Sales Hacker data shows automated follow-up increases close rates by 50% while reducing deal slippage by 65%.</p>
          </div>
        `
      },
      {
        id: 'data-entry',
        name: 'Data Entry Automation',
        icon: '',
        content: `
          <div class="solution-content">
            <h2>Automated Data Entry</h2>
            <p>Your system captures and processes information automatically—eliminating manual data entry across your sales operations.</p>
            
            <h3>How This Helps Your Business</h3>
            <p>The infrastructure extracts data from emails, documents, web forms, and calls—populating your systems without human input. It creates records, updates fields, and maintains data consistency across platforms.</p>
            <p>Documents generate automatically from templates using CRM data. Contracts, proposals, and invoices produce with one click instead of manual creation.</p>
            
            <h3>What This Means For You</h3>
            <p>Your team eliminates the most tedious aspects of sales administration. Time previously spent on paperwork redirects to customer-facing activities.</p>
            <p>A Cardiff firm deployed data entry automation and eliminated 15 hours of weekly administrative work per sales rep—increasing selling time by 35%.</p>
            
            <h3>Expected Results</h3>
            <p>Administrative time typically drops 70-80%. Data accuracy improves as manual entry errors disappear completely.</p>
            <p>Accenture research indicates automated data entry increases sales productivity by 40% while reducing errors by 95%.</p>
          </div>
        `
      }
    ]
  }
};
