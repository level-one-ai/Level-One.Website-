// Initial state - body overflow hidden until splash completes
document.body.style.overflow = 'hidden'; 

// Element references
const splashScreen = document.getElementById('splash-screen');
const splashLogo = document.getElementById('splash-logo');
const splashText = document.getElementById('splash-text');
const loaderBox = document.getElementById('loaderBox');
const loaderBar = document.getElementById('loaderBar');
const navLogoBtn = document.getElementById('navLogoBtn');
const hexBurger = document.getElementById('hexBurger');
const menuOverlay = document.getElementById('menuOverlay');
const heroVideo = document.querySelector('.hero-video-bg video'); 
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

// State variables
let isBlogOpen = false;
const frameCount = 120; 
const currentFrame = index => `https://res.cloudinary.com/dw5n0wlmr/image/upload/f_auto,q_auto/v1770458357/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`;
const images = [];
let imagesLoaded = 0;
const videoState = { targetFrame: 0, smoothFrame: 0 };
let websiteFullyLoaded = false;
let loadingBarComplete = false;

// SPLASH SCREEN SEQUENCE - NEW TIMING
// Step 1: Show logo immediately and keep it visible
setTimeout(() => { 
  splashLogo.style.opacity = '1'; 
}, 100); 

// Step 2: After 2 seconds, fade in the empty loading bar
setTimeout(() => { 
  loaderBox.style.opacity = '1'; 
}, 2000); 

// Step 3: Start loading bar animation (3 seconds to reach 90-95%)
setTimeout(() => {
  loaderBar.style.transition = 'width 3s cubic-bezier(0.25, 1, 0.5, 1)';
  loaderBar.style.width = '93%'; // Stop at 93% and wait
  
  // After 3 seconds, check if website is loaded
  setTimeout(() => {
    loadingBarComplete = true;
    checkIfReadyToComplete();
  }, 3000);
}, 2100);

// Load canvas frame images
for (let i = 1; i <= frameCount; i++) {
  const img = new Image(); 
  img.src = currentFrame(i);
  img.onload = () => {
    imagesLoaded++;
    if (imagesLoaded === 1) { 
      loop(); 
      render(0); 
    }
    if (imagesLoaded === frameCount) { 
      checkVideoAndMarkLoaded(); 
    }
  };
  img.onerror = () => { 
    imagesLoaded++; 
    if (imagesLoaded === frameCount) checkVideoAndMarkLoaded(); 
  };
  images.push(img);
}

function checkVideoAndMarkLoaded() {
  if (heroVideo && heroVideo.readyState >= 3 && !heroVideo.paused) {
    websiteFullyLoaded = true;
    checkIfReadyToComplete();
  } else if (heroVideo) {
    heroVideo.play()
      .then(() => {
        websiteFullyLoaded = true;
        checkIfReadyToComplete();
      })
      .catch(() => {
        websiteFullyLoaded = true;
        checkIfReadyToComplete();
      });
  } else {
    websiteFullyLoaded = true;
    checkIfReadyToComplete();
  }
}

function checkIfReadyToComplete() {
  // Only proceed if BOTH loading bar is complete AND website is fully loaded
  if (loadingBarComplete && websiteFullyLoaded) {
    completeLoadingSequence();
  }
  // If only loading bar is complete but website isn't ready, 
  // the bar will stay at 93% and logo stays visible as an indicator
}

function completeLoadingSequence() {
  // Complete the loading bar to 100%
  loaderBar.style.transition = 'width 0.5s ease-out';
  loaderBar.style.width = '100%';
  
  // Wait for bar to complete, then fade out logo and bar together
  setTimeout(() => {
    fadeOutLogoAndBar();
  }, 500);
}

function fadeOutLogoAndBar() {
  // Fade out logo and loading bar together
  splashLogo.style.opacity = '0';
  loaderBox.style.opacity = '0';
  
  // After fade out, show the "LEVEL ONE" glitch text
  setTimeout(() => {
    splashText.style.opacity = '1';
    
    // Then fade out text and reveal site
    setTimeout(() => { 
      splashText.style.opacity = '0'; 
      revealSite(); 
    }, 2000);
  }, 800);
}

function revealSite() {
  splashScreen.style.opacity = '0';
  if(!isBlogOpen) document.body.style.overflow = 'auto'; 
  setTimeout(() => { 
    splashScreen.style.display = 'none'; 
    loaderBar.style.width = '0%';
    loaderBar.style.transition = 'none';
  }, 1500);
}

// TRANSITION FUNCTION (for page navigation)
function triggerTransition(callback) {
  splashScreen.style.display = 'flex';
  requestAnimationFrame(() => {
    splashScreen.style.opacity = '1';
    setTimeout(() => {
      splashLogo.style.opacity = '1';
      loaderBox.style.opacity = '1';
      loaderBar.style.transition = 'width 1.5s cubic-bezier(0.25, 1, 0.5, 1)';
      setTimeout(() => { loaderBar.style.width = '100%'; }, 100);
    }, 500);
  });
  setTimeout(() => {
    callback();
    finishSplashScreen('transition');
  }, 2300);
}

function finishSplashScreen(mode) {
  loaderBar.style.width = '100%';
  setTimeout(() => {
    splashLogo.style.opacity = '0';
    setTimeout(() => {
      loaderBox.style.opacity = '0';
      if (mode === 'intro') {
        setTimeout(() => {
          splashText.style.opacity = '1';
          setTimeout(() => { 
            splashText.style.opacity = '0'; 
            revealSite(); 
          }, 2000);
        }, 500);
      } else {
        revealSite();
      }
    }, 800);
  }, 500);
}

// BLOG NAVIGATION
function openBlog(type) {
  isBlogOpen = true;
  triggerTransition(() => {
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('calendar-view').style.display = 'none';
    document.getElementById('blog-view').style.display = 'block';
    document.getElementById('blog-content-injection').innerHTML = blogPosts[type];
    hexBurger.classList.add('hidden'); 
    window.scrollTo(0,0);
  });
}

function openCalendar() {
  isBlogOpen = true;
  triggerTransition(() => {
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('blog-view').style.display = 'none';
    document.getElementById('calendar-view').style.display = 'block';
    hexBurger.classList.add('hidden'); 
    window.scrollTo(0,0);
  });
}

function closeBlog() {
  isBlogOpen = false;
  triggerTransition(() => {
    document.getElementById('blog-view').style.display = 'none';
    document.getElementById('calendar-view').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    hexBurger.classList.remove('hidden'); 
    window.scrollTo(0,0);
  });
}

// CALENDAR LOGIC
let clientData = { name: '', email: '', phone: '', company: '', location: '', website: '' };

function validateForm() {
  const name = document.getElementById('formName').value.trim();
  const email = document.getElementById('formEmail').value.trim();
  const phone = document.getElementById('formPhone').value.trim();
  const company = document.getElementById('formCompany').value.trim();
  const location = document.getElementById('formLocation').value.trim();
  const isValid = name && email && phone && company && location;
  document.getElementById('nextBtn').disabled = !isValid;
}

document.querySelectorAll('.form-input').forEach(input => {
  input.addEventListener('input', validateForm);
});

document.getElementById('nextBtn').addEventListener('click', function() {
  clientData.name = document.getElementById('formName').value.trim();
  clientData.email = document.getElementById('formEmail').value.trim();
  clientData.phone = document.getElementById('formPhone').value.trim();
  clientData.company = document.getElementById('formCompany').value.trim();
  clientData.location = document.getElementById('formLocation').value.trim();
  clientData.website = document.getElementById('formWebsite').value.trim();
  
  document.getElementById('clientName').textContent = clientData.name;
  document.getElementById('clientEmail').textContent = clientData.email;
  document.getElementById('clientCompany').textContent = clientData.company;
  document.getElementById('clientLocation').textContent = clientData.location;
  
  document.getElementById('formPage').style.display = 'none';
  document.getElementById('calendarPage').style.display = 'grid'; 
  renderCalendar();
  updateTimeSelection();
});

let currentDate = new Date();
let selectedDate = null;
let selectedTime = null;

function renderCalendar() {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  document.getElementById('monthYear').textContent = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  
  const grid = document.getElementById('calendarGrid');
  grid.innerHTML = '';
  
  const firstDay = new Date(year, month, 1);
  const startDate = new Date(firstDay);
  startDate.setDate(startDate.getDate() - firstDay.getDay());
  
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  for (let i = 0; i < 42; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    
    const dayElement = document.createElement('div');
    dayElement.className = 'calendar-day';
    dayElement.textContent = date.getDate();
    
    const isCurrentMonth = date.getMonth() === month;
    const isPast = date < today;
    
    if (!isCurrentMonth || isPast) {
      dayElement.classList.add('disabled');
    } else {
      dayElement.addEventListener('click', () => {
        selectedDate = date;
        renderCalendar();
        updateTimeSelection();
      });
    }
    
    if (date.toDateString() === today.toDateString()) dayElement.classList.add('today');
    if (selectedDate && date.toDateString() === selectedDate.toDateString()) dayElement.classList.add('selected');
    
    grid.appendChild(dayElement);
  }
}

function updateTimeSelection() {
  const display = document.getElementById('selectedDateDisplay');
  display.textContent = selectedDate 
    ? selectedDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }) 
    : 'Select a date';
}

const timeSlots = document.querySelectorAll('.time-slot');
const confirmBtn = document.getElementById('confirmBtn');

timeSlots.forEach(slot => {
  slot.addEventListener('click', function() {
    if (!selectedDate) return;
    timeSlots.forEach(s => s.classList.remove('selected'));
    this.classList.add('selected');
    selectedTime = this.dataset.time;
    confirmBtn.disabled = false;
  });
});

document.getElementById('prevBtn').addEventListener('click', () => { 
  currentDate.setMonth(currentDate.getMonth() - 1); 
  renderCalendar(); 
});

document.getElementById('nextBtn2').addEventListener('click', () => { 
  currentDate.setMonth(currentDate.getMonth() + 1); 
  renderCalendar(); 
});

confirmBtn.addEventListener('click', async function() {
  if (!selectedDate || !selectedTime) return;
  
  const formattedNewDate = selectedDate.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
  const bookingData = { 
    ...clientData, 
    kickoffDate: formattedNewDate, 
    kickoffTime: selectedTime 
  };
  
  try {
    confirmBtn.disabled = true; 
    confirmBtn.textContent = 'Scheduling...';
    
    const response = await fetch('https://hook.eu2.make.com/iwwwbnzs7o12l1yx8036dd8mx6hiquyx', {
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify(bookingData)
    });
    
    if (response.ok) {
      document.getElementById('modalName').textContent = bookingData.name;
      document.getElementById('modalNewDate').textContent = formattedNewDate;
      document.getElementById('modalNewTime').textContent = selectedTime;
      document.getElementById('modalOverlay').classList.add('active');
    }
  } catch (e) { 
    confirmBtn.textContent = 'Error'; 
  }
});

document.getElementById('finishBtn').addEventListener('click', () => {
  document.getElementById('confirmationSection').style.display = 'none';
  document.getElementById('thankYouSection').classList.add('active');
  setTimeout(() => { location.reload(); }, 3000);
});

// CANVAS ANIMATION LOOP
function loop() { 
  videoState.smoothFrame += (videoState.targetFrame - videoState.smoothFrame) * 0.025; 
  render(Math.floor(videoState.smoothFrame)); 
  requestAnimationFrame(loop); 
}

function render(index) {
  if (!images[index]) return;
  canvas.width = canvas.clientWidth; 
  canvas.height = canvas.clientHeight;
  const img = images[index];
  const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
  context.drawImage(
    img, 
    (canvas.width / 2) - (img.width / 2) * scale, 
    (canvas.height / 2) - (img.height / 2) * scale, 
    img.width * scale, 
    img.height * scale
  );
}

// SCROLL PROGRESS & CANVAS FRAME CONTROL
window.addEventListener('scroll', () => {  
  const scrollFraction = window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight);
  videoState.targetFrame = Math.min(frameCount - 1, Math.ceil(scrollFraction * frameCount));
  document.getElementById('progressBar').style.width = (scrollFraction * 100) + '%';
});

// NAV LOGO CLICK - Return to top with transition
navLogoBtn.addEventListener('click', (e) => {
  e.preventDefault();
  
  // Get the features section position (01 — Core Systems)
  const featuresSection = document.getElementById('features');
  const featuresSectionTop = featuresSection ? featuresSection.offsetTop : 800;
  
  // Only trigger if scrolled past the features section
  if (window.pageYOffset >= featuresSectionTop) {
    triggerTransition(() => {
      window.scrollTo(0, 0);
    });
  }
});

// MENU OVERLAY TOGGLE
hexBurger.addEventListener('click', () => {
  const isOpen = hexBurger.classList.toggle('open');
  menuOverlay.classList.toggle('open', isOpen);
  
  document.querySelectorAll('.menu-link').forEach((link, i) => {
    link.classList.toggle('show', isOpen);
    link.style.transitionDelay = isOpen ? `${0.1 + (i * 0.1)}s` : '0s';
  });
});

// SMOOTH SCROLL FOR MENU LINKS
document.querySelectorAll('.menu-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    hexBurger.click();
    setTimeout(() => {
      smoothScrollTo(target.offsetTop, 2000); // 2000ms = half speed of default
    }, 600);
  });
});

// Custom smooth scroll function for slower scrolling
function smoothScrollTo(targetY, duration) {
  const startY = window.pageYOffset;
  const distance = targetY - startY;
  let startTime = null;
  
  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startY, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }
  
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }
  
  requestAnimationFrame(animation);
}

// BLOG POST CONTENT
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

// INTERSECTION OBSERVER FOR ANIMATIONS
const obs = new IntersectionObserver((entries) => { 
  entries.forEach(e => { 
    if (e.isIntersecting) e.target.classList.add('vis'); 
  }); 
}, { threshold: 0.05 });

document.querySelectorAll('.anim').forEach(el => obs.observe(el));

// ========================================
// TERMINAL DEMO
// ========================================

document.getElementById('runAnalysis').addEventListener('click', async function() {
  const input = document.getElementById('terminalInput');
  const output = document.getElementById('terminalOutput');
  const btn = this;
  
  if (!input.value.trim()) {
    output.innerHTML = '<span style="color: #e06c75;">Error: Please enter a URL</span>';
    return;
  }
  
  // Disable button and show loading
  btn.classList.add('loading');
  btn.textContent = 'ANALYZING...';
  btn.disabled = true;
  
  // Clear previous output
  output.innerHTML = '<span class="loading-dots">Running qualification algorithm...</span>';
  
  // Simulate processing delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Generate mock qualification data
  const mockData = {
    prospect: input.value.trim(),
    timestamp: new Date().toISOString(),
    qualification_score: Math.floor(Math.random() * 30) + 70, // 70-100
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
  
  // Format as JSON with syntax highlighting
  const formattedJSON = JSON.stringify(mockData, null, 2)
    .replace(/"([^"]+)":/g, '<span class="json-key">"$1"</span>:')
    .replace(/: "([^"]+)"/g, ': <span class="json-string">"$1"</span>')
    .replace(/: (\d+)/g, ': <span class="json-number">$1</span>')
    .replace(/: (true|false)/g, ': <span class="json-boolean">$1</span>');
  
  output.innerHTML = `<pre>${formattedJSON}</pre>`;
  
  // Re-enable button
  btn.classList.remove('loading');
  btn.textContent = 'RUN';
  btn.disabled = false;
});

// Allow Enter key to trigger analysis
document.getElementById('terminalInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    document.getElementById('runAnalysis').click();
  }
});

// ========================================
// COST CALCULATOR
// ========================================

const taskSlider = document.getElementById('taskSlider');
const taskCount = document.getElementById('taskCount');
const humanCost = document.getElementById('humanCost');
const aiCost = document.getElementById('aiCost');
const monthlySavings = document.getElementById('monthlySavings');

// Cost per task constants
const HUMAN_COST_PER_TASK = 4.20;
const AI_COST_PER_TASK = 0.18;

function updateCalculator() {
  const tasks = parseInt(taskSlider.value);
  
  // Update task count display
  taskCount.textContent = tasks.toLocaleString() + ' tasks';
  
  // Calculate costs
  const humanTotal = Math.round(tasks * HUMAN_COST_PER_TASK);
  const aiTotal = Math.round(tasks * AI_COST_PER_TASK);
  const savings = humanTotal - aiTotal;
  
  // Update displays
  humanCost.textContent = '£' + humanTotal.toLocaleString() + '/mo';
  aiCost.textContent = '£' + aiTotal.toLocaleString() + '/mo';
  monthlySavings.textContent = '£' + savings.toLocaleString();
}

// Initialize calculator
updateCalculator();

// Update on slider change
taskSlider.addEventListener('input', updateCalculator);

// ========================================
// VIEW MANAGER
// ========================================

let currentView = 'main';

function openView(viewId) {
  // Trigger transition with splash screen
  triggerTransition(() => {
    // Hide main content
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('blog-view').style.display = 'none';
    document.getElementById('calendar-view').style.display = 'none';
    
    // Show target view
    const targetView = document.getElementById(viewId);
    if (targetView) {
      targetView.style.display = 'block';
      currentView = viewId;
    }
    
    // Hide burger menu
    hexBurger.classList.add('hidden');
    
    // Scroll to top
    window.scrollTo(0, 0);
  });
}

function closeView() {
  triggerTransition(() => {
    // Hide all views
    document.getElementById('main-content').style.display = 'block';
    document.getElementById('blog-view').style.display = 'none';
    document.getElementById('calendar-view').style.display = 'none';
    document.getElementById('core-systems-view').style.display = 'none';
    document.getElementById('blueprint-view').style.display = 'none';
    document.getElementById('solutions-view').style.display = 'none'; // ADD THIS LINE
    
    // Show burger menu
    hexBurger.classList.remove('hidden');
    
    // Reset current view
    currentView = 'main';
    
    // Scroll to top
    window.scrollTo(0, 0);
  });
}

// ========================================
// SECTION 01 - CORE SYSTEMS INTERACTIVITY
// ========================================

// Add click handlers to feature cards when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  const featureCards = document.querySelectorAll('#features .feature-card');
  
  featureCards.forEach(card => {
    card.style.cursor = 'pointer';
    
    card.addEventListener('click', function() {
      openView('core-systems-view');
    });
    
    // Add visual feedback
    card.addEventListener('mouseenter', function() {
      this.style.cursor = 'pointer';
    });
  });
});

// ========================================
// ENHANCED SOLUTIONS VIEW SYSTEM
// ========================================

// Track scroll position when navigating
let scrollPositionBeforeNavigation = 0;

// Enhanced solution data with all content
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
            <h3 class="dossier-heading">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
              </svg>
              Implementation
            </h3>
            <p class="dossier-text">Our cold outreach system deploys autonomous agents that scrape targeted business directories, qualify prospects using AI-powered intent analysis, and generate hyper-personalized outreach sequences. The system operates 24/7 without human intervention.</p>
            
            <div class="implementation-steps">
              <div class="impl-step">
                <div class="step-num">01</div>
                <div class="step-details">
                  <div class="step-title">Target Identification</div>
                  <div class="step-desc">AI agents scrape LinkedIn, company databases, and web directories to identify prospects matching your ICP.</div>
                </div>
              </div>
              <div class="impl-step">
                <div class="step-num">02</div>
                <div class="step-details">
                  <div class="step-title">Intent Scoring</div>
                  <div class="step-desc">LLM-powered qualification engine scores each prospect based on engagement signals, tech stack, and growth indicators.</div>
                </div>
              </div>
              <div class="impl-step">
                <div class="step-num">03</div>
                <div class="step-details">
                  <div class="step-title">Personalized Outreach</div>
                  <div class="step-desc">GPT-4 generates custom messages for each prospect, then executes multi-channel campaigns via email and LinkedIn.</div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="dossier-section">
            <h3 class="dossier-heading">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
              Value & ROI
            </h3>
            <div class="roi-grid">
              <div class="roi-card">
                <div class="roi-metric">£34,200/yr</div>
                <div class="roi-label">Cost Savings</div>
                <div class="roi-desc">Eliminates manual prospecting labor</div>
              </div>
              <div class="roi-card">
                <div class="roi-metric">5x</div>
                <div class="roi-label">Volume Increase</div>
                <div class="roi-desc">Process 5x more prospects per month</div>
              </div>
              <div class="roi-card">
                <div class="roi-metric">78%</div>
                <div class="roi-label">Qualification Accuracy</div>
                <div class="roi-desc">AI scores outperform manual qualification</div>
              </div>
            </div>
          </div>
        `
      },
      {
        id: 'lead-scrapers',
        name: 'Lead Scrapers',
        icon: '🔍',
        content: `
          <div class="dossier-section">
            <h3 class="dossier-heading">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
              </svg>
              Implementation
            </h3>
            <p class="dossier-text">Automated web scraping infrastructure that harvests prospect data from public sources, enriches contact information, and pushes qualified leads directly into your CRM with zero manual data entry.</p>
            
            <div class="implementation-steps">
              <div class="impl-step">
                <div class="step-num">01</div>
                <div class="step-details">
                  <div class="step-title">Multi-Source Scraping</div>
                  <div class="step-desc">Deploy headless browsers to extract data from LinkedIn, company websites, and business directories.</div>
                </div>
              </div>
              <div class="impl-step">
                <div class="step-num">02</div>
                <div class="step-details">
                  <div class="step-title">Data Enrichment</div>
                  <div class="step-desc">Cross-reference scraped data with third-party APIs to enrich email addresses, phone numbers, and company details.</div>
                </div>
              </div>
              <div class="impl-step">
                <div class="step-num">03</div>
                <div class="step-details">
                  <div class="step-title">CRM Integration</div>
                  <div class="step-desc">Automatically push validated leads to HubSpot, Salesforce, or your custom CRM with proper field mapping.</div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="dossier-section">
            <h3 class="dossier-heading">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
              Value & ROI
            </h3>
            <div class="roi-grid">
              <div class="roi-card">
                <div class="roi-metric">£28,400/yr</div>
                <div class="roi-label">Labor Savings</div>
                <div class="roi-desc">No more manual lead entry or research</div>
              </div>
              <div class="roi-card">
                <div class="roi-metric">2,400+</div>
                <div class="roi-label">Leads/Month</div>
                <div class="roi-desc">Automated pipeline fills continuously</div>
              </div>
              <div class="roi-card">
                <div class="roi-metric">99.2%</div>
                <div class="roi-label">Data Accuracy</div>
                <div class="roi-desc">Validation layer ensures clean data</div>
              </div>
            </div>
          </div>
        `
      },
      {
        id: 'revenue-engines',
        name: 'Revenue Engines',
        icon: '💰',
        content: `
          <div class="dossier-section">
            <h3 class="dossier-heading">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
              </svg>
              Implementation
            </h3>
            <p class="dossier-text">End-to-end revenue generation system that orchestrates lead capture, qualification, nurturing, and conversion through interconnected AI agents working in concert to maximize your sales pipeline velocity.</p>
            
            <div class="implementation-steps">
              <div class="impl-step">
                <div class="step-num">01</div>
                <div class="step-details">
                  <div class="step-title">Multi-Channel Capture</div>
                  <div class="step-desc">Aggregate leads from web forms, scrapers, referrals, and inbound channels into unified pipeline.</div>
                </div>
              </div>
              <div class="impl-step">
                <div class="step-num">02</div>
                <div class="step-details">
                  <div class="step-title">Intelligent Routing</div>
                  <div class="step-desc">AI decisioning engine routes leads to appropriate nurture sequences based on intent signals and fit scores.</div>
                </div>
              </div>
              <div class="impl-step">
                <div class="step-num">03</div>
                <div class="step-details">
                  <div class="step-title">Conversion Optimization</div>
                  <div class="step-desc">Automated A/B testing of messaging, timing, and channels to maximize conversion rates over time.</div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="dossier-section">
            <h3 class="dossier-heading">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
              Value & ROI
            </h3>
            <div class="roi-grid">
              <div class="roi-card">
                <div class="roi-metric">£140k+/yr</div>
                <div class="roi-label">Total Recovery</div>
                <div class="roi-desc">Combined savings across full revenue stack</div>
              </div>
              <div class="roi-card">
                <div class="roi-metric">3.2x</div>
                <div class="roi-label">Pipeline Velocity</div>
                <div class="roi-desc">Faster progression from lead to close</div>
              </div>
              <div class="roi-card">
                <div class="roi-metric">24/7</div>
                <div class="roi-label">Operation Time</div>
                <div class="roi-desc">Revenue generation never sleeps</div>
              </div>
            </div>
          </div>
        `
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
            <h3 class="dossier-heading">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
              </svg>
              Implementation
            </h3>
            <p class="dossier-text">Deploy AI support agents trained on your knowledge base to resolve customer queries autonomously. Handles 80%+ of tickets with human-level accuracy.</p>
            
            <div class="implementation-steps">
              <div class="impl-step">
                <div class="step-num">01</div>
                <div class="step-details">
                  <div class="step-title">Knowledge Base Training</div>
                  <div class="step-desc">Ingest your documentation, FAQs, and historical tickets to train the agent.</div>
                </div>
              </div>
              <div class="impl-step">
                <div class="step-num">02</div>
                <div class="step-details">
                  <div class="step-title">Intent Classification</div>
                  <div class="step-desc">AI classifier routes queries to appropriate resolution paths automatically.</div>
                </div>
              </div>
              <div class="impl-step">
                <div class="step-num">03</div>
                <div class="step-details">
                  <div class="step-title">24/7 Resolution</div>
                  <div class="step-desc">Agents work around the clock, escalating only complex edge cases to humans.</div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="dossier-section">
            <h3 class="dossier-heading">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
              Value & ROI
            </h3>
            <div class="roi-grid">
              <div class="roi-card">
                <div class="roi-metric">£45,600/yr</div>
                <div class="roi-label">Support Savings</div>
                <div class="roi-desc">Reduce support team overhead significantly</div>
              </div>
              <div class="roi-card">
                <div class="roi-metric">&lt;30s</div>
                <div class="roi-label">Response Time</div>
                <div class="roi-desc">Instant answers for common queries</div>
              </div>
              <div class="roi-card">
                <div class="roi-metric">80%+</div>
                <div class="roi-label">Auto-Resolution</div>
                <div class="roi-desc">Most tickets resolved without human touch</div>
              </div>
            </div>
          </div>
        `
      },
      {
        id: 'auto-onboarding',
        name: 'Auto-Onboarding',
        icon: '📚',
        content: `
          <div class="dossier-section">
            <h3 class="dossier-heading">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
              </svg>
              Implementation
            </h3>
            <p class="dossier-text">Automated onboarding sequences that guide new customers from signup to activation without manual intervention. Personalized journeys based on user behavior.</p>
            
            <div class="implementation-steps">
              <div class="impl-step">
                <div class="step-num">01</div>
                <div class="step-details">
                  <div class="step-title">User Segmentation</div>
                  <div class="step-desc">Classify new users by role, company size, and use case automatically.</div>
                </div>
              </div>
              <div class="impl-step">
                <div class="step-num">02</div>
                <div class="step-details">
                  <div class="step-title">Dynamic Walkthroughs</div>
                  <div class="step-desc">Trigger contextual tutorials and tooltips based on user actions.</div>
                </div>
              </div>
              <div class="impl-step">
                <div class="step-num">03</div>
                <div class="step-details">
                  <div class="step-title">Progress Tracking</div>
                  <div class="step-desc">Monitor activation milestones and send nudges to increase completion rates.</div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="dossier-section">
            <h3 class="dossier-heading">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
              Value & ROI
            </h3>
            <div class="roi-grid">
              <div class="roi-card">
                <div class="roi-metric">2.5x</div>
                <div class="roi-label">Activation Rate</div>
                <div class="roi-desc">More users reach "aha" moment faster</div>
              </div>
              <div class="roi-card">
                <div class="roi-metric">-40%</div>
                <div class="roi-label">Support Volume</div>
                <div class="roi-desc">Fewer "how do I" tickets</div>
              </div>
              <div class="roi-card">
                <div class="roi-metric">85%</div>
                <div class="roi-label">Completion Rate</div>
                <div class="roi-desc">Automated sequences see high completion</div>
              </div>
            </div>
          </div>
        `
      },
      {
        id: 'faq-resolvers',
        name: 'FAQ Resolvers',
        icon: '❓',
        content: `
          <div class="dossier-section">
            <h3 class="dossier-heading">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
              </svg>
              Implementation
            </h3>
            <p class="dossier-text">Intelligent FAQ system that detects common questions and surfaces instant answers before users even need to ask. Self-updating knowledge base.</p>
            
            <div class="implementation-steps">
              <div class="impl-step">
                <div class="step-num">01</div>
                <div class="step-details">
                  <div class="step-title">Question Detection</div>
                  <div class="step-desc">AI analyzes incoming queries to match against FAQ database in real-time.</div>
                </div>
              </div>
              <div class="impl-step">
                <div class="step-num">02</div>
                <div class="step-details">
                  <div class="step-title">Instant Answers</div>
                  <div class="step-desc">Surface relevant KB articles before user submits a ticket.</div>
                </div>
              </div>
              <div class="impl-step">
                <div class="step-num">03</div>
                <div class="step-details">
                  <div class="step-title">Auto-Learning</div>
                  <div class="step-desc">System identifies gaps in FAQ coverage and suggests new articles.</div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="dossier-section">
            <h3 class="dossier-heading">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
              Value & ROI
            </h3>
            <div class="roi-grid">
              <div class="roi-card">
                <div class="roi-metric">65%</div>
                <div class="roi-label">Deflection Rate</div>
                <div class="roi-desc">Queries resolved before ticket creation</div>
              </div>
              <div class="roi-card">
                <div class="roi-metric">Instant</div>
                <div class="roi-label">Resolution Time</div>
                <div class="roi-desc">No waiting for support agent response</div>
              </div>
              <div class="roi-card">
                <div class="roi-metric">£18k/yr</div>
                <div class="roi-label">Cost Savings</div>
                <div class="roi-desc">Reduced ticket volume saves labor costs</div>
              </div>
            </div>
          </div>
        `
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
            <h3 class="dossier-heading">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
              </svg>
              Implementation
            </h3>
            <p class="dossier-text">Deep-dive analysis of your current operations to identify automation opportunities, bottlenecks, and inefficiencies. Visual workflow mapping included.</p>
            
            <div class="implementation-steps">
              <div class="impl-step">
                <div class="step-num">01</div>
                <div class="step-details">
                  <div class="step-title">Process Documentation</div>
                  <div class="step-desc">Map every workflow from lead capture to fulfillment in visual diagrams.</div>
                </div>
              </div>
              <div class="impl-step">
                <div class="step-num">02</div>
                <div class="step-details">
                  <div class="step-title">Bottleneck Identification</div>
                  <div class="step-desc">Pinpoint exact steps where manual labor is bleeding time and money.</div>
                </div>
              </div>
              <div class="impl-step">
                <div class="step-num">03</div>
                <div class="step-details">
                  <div class="step-title">Automation Roadmap</div>
                  <div class="step-desc">Prioritized list of automation opportunities ranked by ROI potential.</div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="dossier-section">
            <h3 class="dossier-heading">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
              Value & ROI
            </h3>
            <div class="roi-grid">
              <div class="roi-card">
                <div class="roi-metric">2-3 days</div>
                <div class="roi-label">Audit Timeline</div>
                <div class="roi-desc">Complete workflow map delivered quickly</div>
              </div>
              <div class="roi-card">
                <div class="roi-metric">10x</div>
                <div class="roi-label">ROI Potential</div>
                <div class="roi-desc">Average return on automation investments</div>
              </div>
              <div class="roi-card">
                <div class="roi-metric">Visual</div>
                <div class="roi-label">Deliverable Format</div>
                <div class="roi-desc">Miro/Figma diagrams for clarity</div>
              </div>
            </div>
          </div>
        `
      },
      {
        id: 'ai-scoring',
        name: 'AI Scoring',
        icon: '📊',
        content: `
          <div class="dossier-section">
            <h3 class="dossier-heading">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
              </svg>
              Implementation
            </h3>
            <p class="dossier-text">Custom AI readiness assessment to determine which workflows are prime candidates for autonomous agents vs. which need human oversight.</p>
            
            <div class="implementation-steps">
              <div class="impl-step">
                <div class="step-num">01</div>
                <div class="step-details">
                  <div class="step-title">Task Classification</div>
                  <div class="step-desc">Categorize every business task by repeatability, rule-clarity, and volume.</div>
                </div>
              </div>
              <div class="impl-step">
                <div class="step-num">02</div>
                <div class="step-details">
                  <div class="step-title">Automation Score</div>
                  <div class="step-desc">Assign 0-100 score to each task based on AI suitability factors.</div>
                </div>
              </div>
              <div class="impl-step">
                <div class="step-num">03</div>
                <div class="step-details">
                  <div class="step-title">Priority Matrix</div>
                  <div class="step-desc">Plot tasks on effort vs. impact matrix to guide implementation order.</div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="dossier-section">
            <h3 class="dossier-heading">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
              Value & ROI
            </h3>
            <div class="roi-grid">
              <div class="roi-card">
                <div class="roi-metric">0-100</div>
                <div class="roi-label">Scoring System</div>
                <div class="roi-desc">Clear metrics for automation readiness</div>
              </div>
              <div class="roi-card">
                <div class="roi-metric">Visual</div>
                <div class="roi-label">Matrix Output</div>
                <div class="roi-desc">2x2 grid shows quick wins vs. long-term plays</div>
              </div>
              <div class="roi-card">
                <div class="roi-metric">Strategic</div>
                <div class="roi-label">Decision Framework</div>
                <div class="roi-desc">Know exactly where to start</div>
              </div>
            </div>
          </div>
        `
      },
      {
        id: 'tool-consolidation',
        name: 'Tool Consolidation',
        icon: '🔧',
        content: `
          <div class="dossier-section">
            <h3 class="dossier-heading">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
              </svg>
              Implementation
            </h3>
            <p class="dossier-text">Audit your current tech stack to eliminate redundant tools, identify integration gaps, and recommend consolidation opportunities to reduce SaaS spend.</p>
            
            <div class="implementation-steps">
              <div class="impl-step">
                <div class="step-num">01</div>
                <div class="step-details">
                  <div class="step-title">Stack Audit</div>
                  <div class="step-desc">Document every SaaS tool, cost, user count, and utilization rate.</div>
                </div>
              </div>
              <div class="impl-step">
                <div class="step-num">02</div>
                <div class="step-details">
                  <div class="step-title">Overlap Analysis</div>
                  <div class="step-desc">Identify duplicate functionality across tools (e.g., 3 chat apps).</div>
                </div>
              </div>
              <div class="impl-step">
                <div class="step-num">03</div>
                <div class="step-details">
                  <div class="step-title">Migration Plan</div>
                  <div class="step-desc">Phased approach to consolidate onto fewer, more powerful platforms.</div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="dossier-section">
            <h3 class="dossier-heading">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
              Value & ROI
            </h3>
            <div class="roi-grid">
              <div class="roi-card">
                <div class="roi-metric">30-50%</div>
                <div class="roi-label">SaaS Savings</div>
                <div class="roi-desc">Typical reduction in monthly tool costs</div>
              </div>
              <div class="roi-card">
                <div class="roi-metric">Unified</div>
                <div class="roi-label">Data Layer</div>
                <div class="roi-desc">Single source of truth post-consolidation</div>
              </div>
              <div class="roi-card">
                <div class="roi-metric">Faster</div>
                <div class="roi-label">Onboarding</div>
                <div class="roi-desc">Fewer tools = simpler training</div>
              </div>
            </div>
          </div>
        `
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
            <h3 class="dossier-heading">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
              </svg>
              Implementation
            </h3>
            <p class="dossier-text">Build lightweight, custom CRM interfaces tailored to your exact workflow. No bloat, just the fields and automations you need.</p>
            
            <div class="implementation-steps">
              <div class="impl-step">
                <div class="step-num">01</div>
                <div class="step-details">
                  <div class="step-title">Workflow Mapping</div>
                  <div class="step-desc">Document your sales stages, required fields, and automation triggers.</div>
                </div>
              </div>
              <div class="impl-step">
                <div class="step-num">02</div>
                <div class="step-details">
                  <div class="step-title">Schema Design</div>
                  <div class="step-desc">Build custom data models that match your business logic exactly.</div>
                </div>
              </div>
              <div class="impl-step">
                <div class="step-num">03</div>
                <div class="step-details">
                  <div class="step-title">UI Development</div>
                  <div class="step-desc">Deploy clean, fast interface with automation rules baked in.</div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="dossier-section">
            <h3 class="dossier-heading">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
              Value & ROI
            </h3>
            <div class="roi-grid">
              <div class="roi-card">
                <div class="roi-metric">£0</div>
                <div class="roi-label">Per-Seat Cost</div>
                <div class="roi-desc">No recurring SaaS fees for custom builds</div>
              </div>
              <div class="roi-card">
                <div class="roi-metric">100%</div>
                <div class="roi-label">Workflow Match</div>
                <div class="roi-desc">Built exactly for your process</div>
              </div>
              <div class="roi-card">
                <div class="roi-metric">Full</div>
                <div class="roi-label">Control</div>
                <div class="roi-desc">Own your data and codebase</div>
              </div>
            </div>
          </div>
        `
      },
      {
        id: 'asset-generation',
        name: 'Asset Generation',
        icon: '🎨',
        content: `
          <div class="dossier-section">
            <h3 class="dossier-heading">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
              </svg>
              Implementation
            </h3>
            <p class="dossier-text">Automated content generation pipelines that create marketing assets, sales collateral, and documentation on-demand using AI.</p>
            
            <div class="implementation-steps">
              <div class="impl-step">
                <div class="step-num">01</div>
                <div class="step-details">
                  <div class="step-title">Template Library</div>
                  <div class="step-desc">Build reusable templates for decks, one-pagers, and reports.</div>
                </div>
              </div>
              <div class="impl-step">
                <div class="step-num">02</div>
                <div class="step-details">
                  <div class="step-title">AI Content Engine</div>
                  <div class="step-desc">Connect GPT-4 to auto-populate templates with custom copy.</div>
                </div>
              </div>
              <div class="impl-step">
                <div class="step-num">03</div>
                <div class="step-details">
                  <div class="step-title">Bulk Generation</div>
                  <div class="step-desc">Trigger asset creation en masse via CSV upload or API.</div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="dossier-section">
            <h3 class="dossier-heading">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
              Value & ROI
            </h3>
            <div class="roi-grid">
              <div class="roi-card">
                <div class="roi-metric">10x</div>
                <div class="roi-label">Speed Increase</div>
                <div class="roi-desc">Generate 100 assets in minutes</div>
              </div>
              <div class="roi-card">
                <div class="roi-metric">Consistent</div>
                <div class="roi-label">Brand Voice</div>
                <div class="roi-desc">Templates ensure uniformity</div>
              </div>
              <div class="roi-card">
                <div class="roi-metric">£12k/yr</div>
                <div class="roi-label">Design Savings</div>
                <div class="roi-desc">Reduce reliance on external designers</div>
              </div>
            </div>
          </div>
        `
      },
      {
        id: 'nurture-sequences',
        name: 'Nurture Sequences',
        icon: '📧',
        content: `
          <div class="dossier-section">
            <h3 class="dossier-heading">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
              </svg>
              Implementation
            </h3>
            <p class="dossier-text">Intelligent email drip campaigns that adapt based on prospect engagement. No more one-size-fits-all sequences.</p>
            
            <div class="implementation-steps">
              <div class="impl-step">
                <div class="step-num">01</div>
                <div class="step-details">
                  <div class="step-title">Segmentation Rules</div>
                  <div class="step-desc">Define audience segments by behavior, firmographics, and intent.</div>
                </div>
              </div>
              <div class="impl-step">
                <div class="step-num">02</div>
                <div class="step-details">
                  <div class="step-title">Dynamic Paths</div>
                  <div class="step-desc">Branch sequences based on open rates, clicks, and replies.</div>
                </div>
              </div>
              <div class="impl-step">
                <div class="step-num">03</div>
                <div class="step-details">
                  <div class="step-title">A/B Optimization</div>
                  <div class="step-desc">Auto-test subject lines, CTAs, and send times to maximize conversions.</div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="dossier-section">
            <h3 class="dossier-heading">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
              Value & ROI
            </h3>
            <div class="roi-grid">
              <div class="roi-card">
                <div class="roi-metric">2.8x</div>
                <div class="roi-label">Reply Rate</div>
                <div class="roi-desc">Dynamic sequences outperform static drips</div>
              </div>
              <div class="roi-card">
                <div class="roi-metric">Zero</div>
                <div class="roi-label">Manual Work</div>
                <div class="roi-desc">Fully automated from trigger to conversion</div>
              </div>
              <div class="roi-card">
                <div class="roi-metric">Continuous</div>
                <div class="roi-label">Optimization</div>
                <div class="roi-desc">A/B tests improve performance over time</div>
              </div>
            </div>
          </div>
        `
      }
    ]
  }
};

// Function to open solutions view with specific solution and section
function openSolutionView(solutionType, sectionId = null) {
  const data = solutionData[solutionType];
  if (!data) return;
  
  // Store scroll position
  scrollPositionBeforeNavigation = window.pageYOffset;
  
  triggerTransition(() => {
    // Hide other views
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('blog-view').style.display = 'none';
    document.getElementById('calendar-view').style.display = 'none';
    document.getElementById('core-systems-view').style.display = 'none';
    document.getElementById('blueprint-view').style.display = 'none';
    
    // Show solutions view
    document.getElementById('solutions-view').style.display = 'block';
    
    // Update folder title
    document.getElementById('solutionFolderTitle').textContent = data.title;
    
    // Build sidebar selectors
    const sidebar = document.getElementById('solutionsSidebar');
    sidebar.innerHTML = '';
    
    data.sections.forEach((section, index) => {
      const selector = document.createElement('div');
      selector.className = 'solution-selector';
      if (index === 0 && !sectionId) selector.classList.add('active');
      if (sectionId && section.id === sectionId) selector.classList.add('active');
      selector.textContent = `${section.icon} ${section.name}`;
      selector.dataset.sectionId = section.id;
      selector.dataset.solutionType = solutionType;
      
      selector.addEventListener('click', function() {
        switchSolutionSection(solutionType, section.id);
      });
      
      sidebar.appendChild(selector);
    });
    
    // Load initial content
    const targetSection = sectionId 
      ? data.sections.find(s => s.id === sectionId) 
      : data.sections[0];
    
    if (targetSection) {
      document.getElementById('solutionContentArea').innerHTML = targetSection.content;
    }
    
    // Hide burger menu
    hexBurger.classList.add('hidden');
    
    // Scroll to top
    window.scrollTo(0, 0);
  });
}

// Function to switch between solution sections
function switchSolutionSection(solutionType, sectionId) {
  const data = solutionData[solutionType];
  if (!data) return;
  
  const section = data.sections.find(s => s.id === sectionId);
  if (!section) return;
  
  // Update active state in sidebar
  document.querySelectorAll('.solution-selector').forEach(sel => {
    sel.classList.remove('active');
  });
  
  const activeSelector = document.querySelector(`[data-section-id="${sectionId}"]`);
  if (activeSelector) {
    activeSelector.classList.add('active');
  }
  
  // Update content
  const contentArea = document.getElementById('solutionContentArea');
  contentArea.style.opacity = '0';
  
  setTimeout(() => {
    contentArea.innerHTML = section.content;
    contentArea.style.opacity = '1';
  }, 300);
}

// Enhanced closeView function to return to source position
function closeViewToSource() {
  const isFromCalendar = currentView === 'calendar-view';
  
  triggerTransition(() => {
    // Hide all views
    document.getElementById('main-content').style.display = 'block';
    document.getElementById('blog-view').style.display = 'none';
    document.getElementById('calendar-view').style.display = 'none';
    document.getElementById('core-systems-view').style.display = 'none';
    document.getElementById('blueprint-view').style.display = 'none';
    document.getElementById('solutions-view').style.display = 'none';
    
    // Show burger menu
    hexBurger.classList.remove('hidden');
    
    // Reset current view
    currentView = 'main';
    
    // Scroll to appropriate position
    if (isFromCalendar) {
      window.scrollTo(0, 0);
    } else {
      // Return to where user was before clicking
      setTimeout(() => {
        window.scrollTo(0, scrollPositionBeforeNavigation);
      }, 100);
    }
  });
}

// Make service cards clickable with section targeting
document.addEventListener('DOMContentLoaded', function() {
  const serviceCards = document.querySelectorAll('#services .srv-card');
  
  serviceCards.forEach((card, index) => {
    card.style.cursor = 'pointer';
    
    const solutionTypes = ['sales', 'support', 'consulting', 'workflow'];
    const solutionType = solutionTypes[index];
    
    card.addEventListener('click', function() {
      openSolutionView(solutionType);
    });
  });
});

// ========================================
// PROCESS CARDS TO BLUEPRINT VIEW
// ========================================

document.addEventListener('DOMContentLoaded', function() {
  const processCards = document.querySelectorAll('#process .process-card');
  
  processCards.forEach((card, index) => {
    card.style.cursor = 'pointer';
    
    card.addEventListener('click', function() {
      openView('blueprint-view');
    });
  });
});

// ========================================
// ENHANCED MENU OVERLAY WITH SUBSECTIONS
// ========================================

const menuStructure = {
  'Systems': {
    subsections: null,
    link: '#features'
  },
  'Architecture': {
    subsections: null,
    link: '#process'
  },
  'Entity': {
    subsections: null,
    link: '#about'
  },
  'Solutions': {
    subsections: [
      { name: 'Autonomous Sales', action: () => openSolutionView('sales') },
      { name: 'Advanced Support', action: () => openSolutionView('support') },
      { name: 'Systems Consulting', action: () => openSolutionView('consulting') },
      { name: 'Workflow Admin', action: () => openSolutionView('workflow') }
    ],
    link: '#services'
  },
  'Insights': {
    subsections: null,
    link: '#insights'
  }
};

let currentMenuLevel = 'main';
let currentMenuSection = null;

// Rebuild menu overlay handlers
document.addEventListener('DOMContentLoaded', function() {
  const menuLinks = document.querySelectorAll('.menu-link');
  
  menuLinks.forEach((link, index) => {
    const sectionName = link.textContent;
    const menuData = menuStructure[sectionName];
    
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      if (menuData && menuData.subsections) {
        // Show subsections
        showSubsections(sectionName, menuData.subsections);
      } else {
        // Direct navigation
        const target = document.querySelector(menuData.link);
        hexBurger.click();
        setTimeout(() => {
          smoothScrollTo(target.offsetTop, 2000);
        }, 600);
      }
    });
  });
});

function showSubsections(sectionName, subsections) {
  currentMenuLevel = 'subsection';
  currentMenuSection = sectionName;
  
  const menuOverlay = document.getElementById('menuOverlay');
  const mainLinks = document.querySelectorAll('.menu-link');
  
  // Fade out main links (right to left)
  mainLinks.forEach((link, index) => {
    setTimeout(() => {
      link.style.opacity = '0';
      link.style.transform = 'translateX(60px)';
    }, index * 100);
  });
  
  // Wait for fade out, then show subsections
  setTimeout(() => {
    // Clear menu
    menuOverlay.innerHTML = '';
    
    // Add back button
    const backBtn = document.createElement('a');
    backBtn.className = 'menu-link subsection-back';
    backBtn.textContent = '← Back';
    backBtn.style.opacity = '0';
    backBtn.style.transform = 'translateX(-60px)';
    backBtn.addEventListener('click', function(e) {
      e.preventDefault();
      showMainMenu();
    });
    menuOverlay.appendChild(backBtn);
    
    // Add subsection links
    subsections.forEach((sub, index) => {
      const subLink = document.createElement('a');
      subLink.className = 'menu-link';
      subLink.textContent = sub.name;
      subLink.style.opacity = '0';
      subLink.style.transform = 'translateX(-60px)';
      
      subLink.addEventListener('click', function(e) {
        e.preventDefault();
        hexBurger.click();
        setTimeout(() => {
          sub.action();
        }, 300);
      });
      
      menuOverlay.appendChild(subLink);
    });
    
    // Fade in subsections (left to right)
    const newLinks = menuOverlay.querySelectorAll('.menu-link');
    newLinks.forEach((link, index) => {
      setTimeout(() => {
        link.style.opacity = '1';
        link.style.transform = 'translateX(0)';
      }, index * 100);
    });
  }, mainLinks.length * 100 + 200);
}

function showMainMenu() {
  currentMenuLevel = 'main';
  
  const menuOverlay = document.getElementById('menuOverlay');
  const currentLinks = menuOverlay.querySelectorAll('.menu-link');
  
  // Fade out subsections (right to left)
  currentLinks.forEach((link, index) => {
    setTimeout(() => {
      link.style.opacity = '0';
      link.style.transform = 'translateX(60px)';
    }, index * 100);
  });
  
  // Wait for fade out, then restore main menu
  setTimeout(() => {
    menuOverlay.innerHTML = `
      <a href="#features" class="menu-link">Systems</a>
      <a href="#process" class="menu-link">Architecture</a>
      <a href="#about" class="menu-link">Entity</a>
      <a href="#services" class="menu-link">Solutions</a>
      <a href="#insights" class="menu-link">Insights</a>
    `;
    
    // Re-attach handlers
    const menuLinks = document.querySelectorAll('.menu-link');
    menuLinks.forEach((link, index) => {
      const sectionName = link.textContent;
      const menuData = menuStructure[sectionName];
      
      link.style.opacity = '0';
      link.style.transform = 'translateX(-60px)';
      
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (menuData && menuData.subsections) {
          showSubsections(sectionName, menuData.subsections);
        } else {
          const target = document.querySelector(menuData.link);
          hexBurger.click();
          setTimeout(() => {
            smoothScrollTo(target.offsetTop, 2000);
          }, 600);
        }
      });
      
      // Fade in (left to right)
      setTimeout(() => {
        link.style.opacity = '1';
        link.style.transform = 'translateX(0)';
      }, index * 100);
    });
  }, currentLinks.length * 100 + 200);
}

// Update burger close handler to reset menu
const originalHexBurgerClick = hexBurger.onclick;
hexBurger.addEventListener('click', function() {
  if (menuOverlay.classList.contains('open') && currentMenuLevel === 'subsection') {
    // If closing and we're in subsection, reset to main
    setTimeout(() => {
      showMainMenu();
    }, 600);
  }
});

// ========================================
// ENHANCED SECTION 04 - SOLUTIONS CARDS
// ========================================

document.addEventListener('DOMContentLoaded', function() {
  // Make service cards clickable
  const serviceCards = document.querySelectorAll('#services .srv-card');
  
  serviceCards.forEach((card, index) => {
    card.style.cursor = 'pointer';
    
    // Map cards to solution types
    const solutionTypes = ['sales', 'support', 'consulting', 'workflow'];
    const solutionType = solutionTypes[index];
    
    card.addEventListener('click', function() {
      openSolutionView(solutionType);
    });
    
    // Add visual feedback
    card.addEventListener('mouseenter', function() {
      this.style.cursor = 'pointer';
    });
  });
  
  // Tab click handlers
  const folderTabs = document.querySelectorAll('.folder-content-tab');
  folderTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const tabId = this.dataset.tab;
      switchSolutionTab(tabId);
    });
  });
  
  // ========================================
  // FIX BLUEPRINT VIEW TRAINLINE INTERACTION
  // ========================================
  
  // Trainline station click handlers
  const trainlineStations = document.querySelectorAll('.trainline-station');
  trainlineStations.forEach(station => {
    station.addEventListener('click', function() {
      const stationIndex = this.dataset.station;
      const targetSection = document.querySelector(`[data-station="${stationIndex}"]`);
      
      if (targetSection) {
        // Remove active from all stations
        trainlineStations.forEach(s => s.classList.remove('active'));
        
        // Add active to clicked station
        this.classList.add('active');
        
        // Smooth scroll to section
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
  
  // Intersection Observer for trainline auto-highlighting
  const blueprintSections = document.querySelectorAll('.blueprint-section');
  
  const blueprintObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
        const sectionStation = entry.target.dataset.station;
        
        // Remove active from all stations
        trainlineStations.forEach(s => s.classList.remove('active'));
        
        // Add active to corresponding station
        const activeStation = document.querySelector(`.trainline-station[data-station="${sectionStation}"]`);
        if (activeStation) {
          activeStation.classList.add('active');
        }
      }
    });
  }, { threshold: [0.3, 0.5, 0.7] });
  
  blueprintSections.forEach(section => {
    blueprintObserver.observe(section);
  });
});

// ========================================
// PRICING CARD ENHANCEMENTS
// ========================================

document.addEventListener('DOMContentLoaded', function() {
  const pricingCards = document.querySelectorAll('.pricing-card');
  
  pricingCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      // Dim other cards slightly when hovering one
      pricingCards.forEach(otherCard => {
        if (otherCard !== card) {
          otherCard.style.opacity = '0.7';
        }
      });
    });
    
    card.addEventListener('mouseleave', function() {
      // Restore all cards to full opacity
      pricingCards.forEach(otherCard => {
        otherCard.style.opacity = '1';
      });
    });
  });
});
