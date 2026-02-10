/* ========================================
   LIVE LABS INTERACTIVITY
   ======================================== */

// TERMINAL DEMO
const termInput = document.getElementById('terminalInput');
const termRunBtn = document.getElementById('runAnalysis');

if(termRunBtn) {
  termRunBtn.addEventListener('click', async function() {
    const input = document.getElementById('terminalInput');
    const output = document.getElementById('terminalOutput');
    const btn = this;
    
    if (!input.value.trim()) {
      output.innerHTML = '<span style="color: #e06c75;">Error: Please enter a URL</span>';
      return;
    }
    
    btn.classList.add('loading');
    btn.textContent = 'ANALYZING...';
    btn.disabled = true;
    output.innerHTML = '<span class="loading-dots">Running qualification algorithm...</span>';
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const mockData = {
      prospect: input.value.trim(),
      timestamp: new Date().toISOString(),
      qualification_score: Math.floor(Math.random() * 30) + 70,
      status: 'qualified',
      intent_signals: {
        website_traffic: Math.floor(Math.random() * 50000) + 10000,
        employee_count: Math.floor(Math.random() * 500) + 50,
        tech_stack_match: Math.random() > 0.3
      },
      recommended_action: 'initiate_outreach',
      priority: ['high', 'medium'][Math.floor(Math.random() * 2)],
      estimated_value: '£' + (Math.floor(Math.random() * 80000) + 20000).toLocaleString()
    };
    
    const formattedJSON = JSON.stringify(mockData, null, 2)
      .replace(/"([^"]+)":/g, '<span class="json-key">"$1"</span>:')
      .replace(/: "([^"]+)"/g, ': <span class="json-string">"$1"</span>')
      .replace(/: (\d+)/g, ': <span class="json-number">$1</span>')
      .replace(/: (true|false)/g, ': <span class="json-boolean">$1</span>');
    
    output.innerHTML = `<pre>${formattedJSON}</pre>`;
    btn.classList.remove('loading');
    btn.textContent = 'RUN';
    btn.disabled = false;
  });
}

if(termInput) {
  termInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') document.getElementById('runAnalysis').click();
  });
}

// COST CALCULATOR
const taskSlider = document.getElementById('taskSlider');
const taskCount = document.getElementById('taskCount');
const humanCost = document.getElementById('humanCost');
const aiCost = document.getElementById('aiCost');
const monthlySavings = document.getElementById('monthlySavings');

const HUMAN_COST_PER_TASK = 4.20;
const AI_COST_PER_TASK = 0.18;

function updateCalculator() {
  if(!taskSlider) return;
  const tasks = parseInt(taskSlider.value);
  taskCount.textContent = tasks.toLocaleString() + ' tasks';
  
  const humanTotal = Math.round(tasks * HUMAN_COST_PER_TASK);
  const aiTotal = Math.round(tasks * AI_COST_PER_TASK);
  const savings = humanTotal - aiTotal;
  
  humanCost.textContent = '£' + humanTotal.toLocaleString() + '/mo';
  aiCost.textContent = '£' + aiTotal.toLocaleString() + '/mo';
  monthlySavings.textContent = '£' + savings.toLocaleString();
}

if(taskSlider) {
  taskSlider.addEventListener('input', updateCalculator);
  updateCalculator(); // Init
}
