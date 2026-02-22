/* ========================================
   INITIALIZATION AND HELPER FUNCTIONS
   ======================================== */

// Open Process View with a specific phase selected
function openProcessView(phaseKey) {
  sourceSection = 'process';

  triggerTransition(function() {
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('blog-view').style.display = 'none';
    document.getElementById('calendar-view').style.display = 'none';
    document.getElementById('core-systems-view').style.display = 'none';
    document.getElementById('blueprint-view').style.display = 'none';
    document.getElementById('solutions-view').style.display = 'none';

    document.getElementById('process-view').style.display = 'block';
    currentView = 'process-view';

    hexBurger.classList.add('hidden');
    window.scrollTo(0, 0);

    // Select the requested phase
    var key = phaseKey || 'audit';
    var targetNode = document.querySelector('.pv-mindmap-node[data-phase="' + key + '"]');
    selectProcessPhase(key, targetNode);
  });
}

// Switch between phases within the process view
function selectProcessPhase(phaseKey, clickedNode) {
  // Update mind-map active states
  document.querySelectorAll('.pv-mindmap-node').forEach(function(n) {
    n.classList.remove('active');
  });
  if (clickedNode) clickedNode.classList.add('active');

  // Hide all panels
  document.querySelectorAll('.pv-panel').forEach(function(p) {
    p.style.display = 'none';
    p.style.opacity = '0';
    p.style.transition = 'none';
  });

  // Fade in target panel
  var panel = document.getElementById('pv-panel-' + phaseKey);
  if (panel) {
    panel.style.display = 'block';
    panel.style.opacity = '0';
    panel.style.transition = 'none';
    requestAnimationFrame(function() {
      requestAnimationFrame(function() {
        panel.style.transition = 'opacity 0.35s ease';
        panel.style.opacity = '1';
      });
    });
  }

  // Close any open Q&A accordions in the new panel
  if (panel) {
    panel.querySelectorAll('.cs-qa-item.open').forEach(function(item) {
      item.classList.remove('open');
    });
  }

  // Scroll content area to top
  var container = document.querySelector('.pv-container');
  if (container) container.scrollTop = 0;
  window.scrollTo(0, 0);
}

// Blueprint Phase Opening Function
function openBlueprintPhase(phaseIndex, section = 'process') {
  sourceSection = section;
  
  document.getElementById('main-content').style.display = 'none';
  document.getElementById('blog-view').style.display = 'none';
  document.getElementById('calendar-view').style.display = 'none';
  document.getElementById('core-systems-view').style.display = 'none';
  document.getElementById('solutions-view').style.display = 'none';
  document.getElementById('process-view').style.display = 'none';

  const blueprintView = document.getElementById('blueprint-view');
  if (blueprintView) {
    blueprintView.style.display = 'block';
    currentView = 'blueprint-view';
    
    // Initialize blueprint and select phase
    setTimeout(() => {
      if (typeof initBlueprint === 'function') {
        initBlueprint();
        if (typeof scrollToPhase === 'function') {
          scrollToPhase(phaseIndex);
        }
      }
    }, 100);
  }
  
  hexBurger.classList.add('hidden');
  window.scrollTo(0, 0);
}

// Panel selector for core-systems-view — shows the target panel, hides the rest
function selectCoreSection(panelKey, clickedBtn) {
  // Update nav button active states
  document.querySelectorAll('.cs-nav-btn').forEach(function(btn) {
    btn.classList.remove('active');
  });
  var targetBtn = clickedBtn || document.querySelector('.cs-nav-btn[data-panel="' + panelKey + '"]');
  if (targetBtn) targetBtn.classList.add('active');

  // Hide all panels instantly
  document.querySelectorAll('.cs-panel').forEach(function(p) {
    p.style.display = 'none';
    p.style.opacity = '0';
    p.style.transition = 'none';
  });

  // Fade in the target panel
  var panel = document.getElementById('cs-panel-' + panelKey);
  if (panel) {
    panel.style.display = 'block';
    panel.style.opacity = '0';
    panel.style.transition = 'none';
    requestAnimationFrame(function() {
      requestAnimationFrame(function() {
        panel.style.transition = 'opacity 0.3s ease';
        panel.style.opacity = '1';
      });
    });
  }

  // Scroll the right content area back to the top
  var contentArea = document.querySelector('.cs-main');
  if (contentArea) contentArea.scrollTop = 0;
}

// Core Systems View Opening Function (01 — Revenue Infrastructure)
function openCoreSystemsView(systemType) {
  triggerTransition(() => {
    // Hide other views
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('blog-view').style.display = 'none';
    document.getElementById('calendar-view').style.display = 'none';
    document.getElementById('solutions-view').style.display = 'none';
    document.getElementById('blueprint-view').style.display = 'none';
    document.getElementById('process-view').style.display = 'none';

    // Show core systems view
    document.getElementById('core-systems-view').style.display = 'block';
    currentView = 'core-systems-view';

    hexBurger.classList.add('hidden');
    window.scrollTo(0, 0);

    // Select the appropriate panel (defaults to Revenue Engines if none specified)
    var sectionMap = {
      'sales': 'spec-sales',
      'support': 'spec-support',
      'consulting': 'spec-integration',
      'workflow': 'spec-deployment'
    };
    var panelKey = (systemType && sectionMap[systemType]) || 'spec-sales';
    selectCoreSection(panelKey);
  });
}

// Infrastructure View Opening Function
function openInfrastructureView(type, section = 'services') {
  sourceSection = section;
  
  const data = infrastructureData[type];
  if (!data) return;
  
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
  
  // Build folder tabs (reuse existing function but with infrastructure data)
  buildInfrastructureTabs(type);
  
  // Build sidebar selectors
  const sidebar = document.getElementById('solutionsSidebar');
  sidebar.innerHTML = '';
  
  data.sections.forEach((sectionItem, index) => {
    const selector = document.createElement('div');
    selector.className = 'solution-selector';
    if (index === 0) selector.classList.add('active');
    selector.textContent = `${sectionItem.icon} ${sectionItem.name}`;
    selector.dataset.sectionId = sectionItem.id;
    selector.dataset.solutionType = type;
    
    selector.addEventListener('click', function() {
      switchInfrastructureSection(type, sectionItem.id);
    });
    
    sidebar.appendChild(selector);
  });
  
  // Load initial content
  const targetSection = data.sections[0];
  if (targetSection) {
    document.getElementById('solutionContentArea').innerHTML = targetSection.content;
  }
  
  // Hide burger menu
  document.getElementById('hexBurger').classList.add('hidden');
  window.scrollTo(0, 0);
}

// Build Infrastructure Tabs
function buildInfrastructureTabs(activeType) {
  const tabContainer = document.querySelector('.folder-tabs');
  if (!tabContainer) return;
  
  const tabConfig = [
    { key: 'sales', label: 'Lead Generation', icon: '' },
    { key: 'support', label: 'Project Management', icon: '' },
    { key: 'consulting', label: 'Hiring Systems', icon: '' },
    { key: 'workflow', label: 'Sales Administration', icon: '' }
  ];
  
  tabContainer.innerHTML = '';
  
  tabConfig.forEach(tab => {
    const tabEl = document.createElement('div');
    tabEl.className = 'folder-content-tab';
    if (tab.key === activeType) tabEl.classList.add('active');
    tabEl.dataset.tab = tab.key;
    tabEl.innerHTML = `<span class="tab-icon">${tab.icon}</span><span class="tab-label">${tab.label}</span>`;
    
    tabEl.addEventListener('click', function() {
      // Allow clicking the same tab to refresh
      switchInfrastructureTab(tab.key);
    });
    
    tabContainer.appendChild(tabEl);
  });
}

// Switch Infrastructure Tab
function switchInfrastructureTab(newType) {
  const data = infrastructureData[newType];
  if (!data) return;
  
  // Update folder title with fade
  const titleEl = document.getElementById('solutionFolderTitle');
  titleEl.style.transition = 'opacity 0.2s ease';
  titleEl.style.opacity = '0';
  
  setTimeout(() => {
    titleEl.textContent = data.title;
    titleEl.style.opacity = '1';
  }, 200);
  
  // Update active tab
  document.querySelectorAll('.folder-content-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  
  const activeTab = document.querySelector(`.folder-content-tab[data-tab="${newType}"]`);
  if (activeTab) activeTab.classList.add('active');
  
  // Rebuild sidebar selectors
  const sidebar = document.getElementById('solutionsSidebar');
  sidebar.style.transition = 'opacity 0.2s ease';
  sidebar.style.opacity = '0';
  
  setTimeout(() => {
    sidebar.innerHTML = '';
    
    data.sections.forEach((sectionItem, index) => {
      const selector = document.createElement('div');
      selector.className = 'solution-selector';
      if (index === 0) selector.classList.add('active');
      selector.textContent = `${sectionItem.icon} ${sectionItem.name}`;
      selector.dataset.sectionId = sectionItem.id;
      selector.dataset.solutionType = newType;
      
      selector.addEventListener('click', function() {
        switchInfrastructureSection(newType, sectionItem.id);
      });
      
      sidebar.appendChild(selector);
    });
    
    sidebar.style.opacity = '1';
  }, 200);
  
  // Update content with smooth transition
  const contentArea = document.getElementById('solutionContentArea');
  contentArea.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
  contentArea.style.opacity = '0';
  contentArea.style.transform = 'translateY(10px)';
  
  setTimeout(() => {
    contentArea.innerHTML = data.sections[0].content;
    contentArea.style.opacity = '1';
    contentArea.style.transform = 'translateY(0)';
  }, 200);
}

// Switch Infrastructure Section
function switchInfrastructureSection(type, sectionId) {
  const data = infrastructureData[type];
  if (!data) return;
  
  const sectionItem = data.sections.find(s => s.id === sectionId);
  if (!sectionItem) return;
  
  // Update active state
  document.querySelectorAll('.solution-selector').forEach(sel => {
    sel.classList.remove('active');
  });
  
  const activeSelector = document.querySelector(`[data-section-id="${sectionId}"]`);
  if (activeSelector) activeSelector.classList.add('active');
  
  // Update content with smooth fade
  const contentArea = document.getElementById('solutionContentArea');
  contentArea.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  contentArea.style.opacity = '0';
  contentArea.style.transform = 'translateY(10px)';
  
  setTimeout(() => {
    contentArea.innerHTML = sectionItem.content;
    contentArea.style.opacity = '1';
    contentArea.style.transform = 'translateY(0)';
  }, 300);
}


// ============================================
// HEXAGON PAIRS — Expand / Collapse / Switch
// ============================================

// Original feature card data for the hex expanded view
var hexCardData = {
  sales: {
    image: 'https://res.cloudinary.com/dw5n0wlmr/image/upload/v1770459449/Whisk_9083c2dff85528ca4114eca372fa5906dr.jpg',
    labels: ['Revenue Growth', 'Conversion', 'Acquisition'],
    title: 'Revenue Engines',
    desc: 'Infrastructure that generates qualified pipeline and drives conversion. Every prospect is identified, qualified, and engaged—increasing revenue without expanding headcount.'
  },
  support: {
    image: 'https://res.cloudinary.com/dw5n0wlmr/image/upload/v1770459448/Whisk_d397bbc3aa1701280a94eea24f609ac5dr.jpg',
    labels: ['Cost Reduction', 'Efficiency'],
    title: 'Resolution Systems',
    desc: 'Infrastructure that reduces support overhead while protecting brand quality. Routine inquiries are resolved instantly—cutting operational costs and freeing your team for revenue-generating work.'
  },
  consulting: {
    image: 'https://res.cloudinary.com/dw5n0wlmr/image/upload/v1770459442/Whisk_26e82c97b8738ed83da4cdbe4acb856ddr.jpg',
    labels: ['Profit Identification', 'ROI Mapping'],
    title: 'Systems Architecture',
    desc: 'We audit your operations and identify where automation delivers maximum ROI. Every recommendation is backed by measurable impact on revenue, costs, or efficiency.'
  },
  workflow: {
    image: 'https://res.cloudinary.com/dw5n0wlmr/image/upload/v1770459438/Whisk_054b050aea37afcbb5c4beaa69bd3260dr.jpg',
    labels: ['Cost Elimination', 'Scale'],
    title: 'Operational Autonomy',
    desc: 'Infrastructure that removes manual overhead from your workflow. Data flows automatically from capture to completion—reducing costs while increasing operational capacity.'
  }
};

var currentHexSystem = null;

function buildHexCardHTML(system) {
  var data = hexCardData[system];
  if (!data) return '';

  var labelsHTML = '';
  data.labels.forEach(function(label) {
    labelsHTML += '<span class="feature-label">' + label + '</span>';
  });

  return '<div class="feature-card-icon"><img src="' + data.image + '" class="card-img-fill" alt="' + data.title + '"></div>' +
    '<div class="feature-labels">' + labelsHTML + '</div>' +
    '<h3>' + data.title + '</h3>' +
    '<p>' + data.desc + '</p>' +
    '<div class="hex-card-divider"></div>' +
    '<button class="hex-card-viewmore" onclick="openCoreSystemsView(\'' + system + '\')">View Full Specification <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 1l5 5-5 5"/></svg></button>';
}

function expandHexSystem(system) {
  var grid = document.getElementById('hexPairsGrid');
  var expanded = document.getElementById('hexExpanded');
  var content = document.getElementById('hexCardContent');

  currentHexSystem = system;

  // Fade out grid
  grid.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
  grid.style.opacity = '0';
  grid.style.transform = 'scale(0.95)';

  setTimeout(function() {
    grid.style.display = 'none';

    // Build card content
    content.innerHTML = buildHexCardHTML(system);

    // Activate the correct mini pair
    document.querySelectorAll('.hex-mini-pair').forEach(function(p) {
      p.classList.remove('active');
    });
    var activeMini = document.querySelector('.hex-mini-pair[data-system="' + system + '"]');
    if (activeMini) activeMini.classList.add('active');

    // Show expanded view
    expanded.style.display = 'grid';
    expanded.style.opacity = '0';

    requestAnimationFrame(function() {
      requestAnimationFrame(function() {
        expanded.classList.add('active');
        expanded.style.opacity = '1';
      });
    });
  }, 400);
}

function switchHexCard(system) {
  if (system === currentHexSystem) return;
  currentHexSystem = system;

  var content = document.getElementById('hexCardContent');

  // Update active state on sidebar
  document.querySelectorAll('.hex-mini-pair').forEach(function(p) {
    p.classList.remove('active');
  });
  var activeMini = document.querySelector('.hex-mini-pair[data-system="' + system + '"]');
  if (activeMini) activeMini.classList.add('active');

  // Fade out current card
  content.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  content.style.opacity = '0';
  content.style.transform = 'translateY(10px)';

  setTimeout(function() {
    content.innerHTML = buildHexCardHTML(system);
    content.style.transform = 'translateY(0)';
    content.style.opacity = '1';
  }, 300);
}

function collapseHexView() {
  var grid = document.getElementById('hexPairsGrid');
  var expanded = document.getElementById('hexExpanded');

  currentHexSystem = null;

  // Fade out expanded view
  expanded.style.transition = 'opacity 0.4s ease';
  expanded.style.opacity = '0';

  setTimeout(function() {
    expanded.classList.remove('active');
    expanded.style.display = 'none';

    // Show grid again
    grid.style.display = '';
    grid.style.opacity = '0';
    grid.style.transform = 'scale(0.95)';

    requestAnimationFrame(function() {
      requestAnimationFrame(function() {
        grid.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        grid.style.opacity = '1';
        grid.style.transform = 'scale(1)';
      });
    });
  }, 400);
}

// Scroll Progress Bar
window.addEventListener('scroll', () => {
  const progressBar = document.getElementById('progressBar');
  if (!progressBar) return;
  
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight - windowHeight;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollPercentage = (scrollTop / documentHeight) * 100;
  
  progressBar.style.width = scrollPercentage + '%';
});

// Enhanced Animation on Scroll — IntersectionObserver with .vis class
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.anim');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('vis');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(el => observer.observe(el));
  } else {
    // Fallback for old browsers
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        el.classList.add('vis');
      }
    });
    window.addEventListener('scroll', function fallbackScroll() {
      document.querySelectorAll('.anim:not(.vis)').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.85) {
          el.classList.add('vis');
        }
      });
    });
  }
};

window.addEventListener('load', animateOnScroll);

// ============================================
// PREMIUM ANIMATIONS — Magnetic Hover, Glow Pulse
// ============================================

// Magnetic Hover Effect for hex burger and CTAs
function initMagneticHover() {
  const magneticElements = document.querySelectorAll('.hex-burger, .hero-cta .btn-primary, .cta-section .btn-primary');

  magneticElements.forEach(el => {
    el.addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const strength = 0.3;

      this.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    });

    el.addEventListener('mouseleave', function() {
      this.style.transform = '';
      this.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
      setTimeout(() => {
        this.style.transition = '';
      }, 500);
    });
  });
}

// Glow Trace Effect — Adds a subtle animated orange border trace to glass cards
function initGlowTrace() {
  const glassCards = document.querySelectorAll('.feature-card, .process-card, .pricing-card.featured');

  glassCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transition = 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
    });
  });
}

// Parallax Depth — subtle depth movement on sections when scrolling
function initParallaxDepth() {
  const sections = document.querySelectorAll('.section-inner');
  let ticking = false;

  window.addEventListener('scroll', function() {
    if (!ticking) {
      requestAnimationFrame(function() {
        const scrollY = window.pageYOffset;
        sections.forEach(section => {
          const rect = section.getBoundingClientRect();
          const viewportCenter = window.innerHeight / 2;
          const sectionCenter = rect.top + rect.height / 2;
          const distance = (sectionCenter - viewportCenter) / viewportCenter;
          const moveY = distance * -8;

          if (rect.top < window.innerHeight && rect.bottom > 0) {
            section.style.transform = `translateY(${moveY}px)`;
          }
        });
        ticking = false;
      });
      ticking = true;
    }
  });
}

// Enhanced Cursor Glow — adds a subtle glow following the cursor on dark backgrounds
function initCursorGlow() {
  const mainContent = document.getElementById('main-content');
  if (!mainContent) return;

  const glow = document.createElement('div');
  glow.style.cssText = 'position:fixed;width:400px;height:400px;border-radius:50%;background:radial-gradient(circle,rgba(255,107,53,0.04) 0%,transparent 70%);pointer-events:none;z-index:0;transition:opacity 0.3s;opacity:0;transform:translate(-50%,-50%)';
  document.body.appendChild(glow);

  let mouseX = 0, mouseY = 0;
  let glowX = 0, glowY = 0;

  document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    glow.style.opacity = '1';
  });

  document.addEventListener('mouseleave', function() {
    glow.style.opacity = '0';
  });

  function animateGlow() {
    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;
    glow.style.left = glowX + 'px';
    glow.style.top = glowY + 'px';
    requestAnimationFrame(animateGlow);
  }
  animateGlow();
}

// Initialize all premium effects
document.addEventListener('DOMContentLoaded', function() {
  initMagneticHover();
  initGlowTrace();
  initCursorGlow();
  // initParallaxDepth disabled by default — uncomment if desired:
  // initParallaxDepth();
});

// Q&A Accordion for core-systems-view
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.cs-qa-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var item = this.closest('.cs-qa-item');
      var isOpen = item.classList.contains('open');
      // Close all others in the same group
      var group = item.closest('.cs-qa');
      if (group) {
        group.querySelectorAll('.cs-qa-item').forEach(function(i) {
          i.classList.remove('open');
        });
      }
      // Toggle the clicked one
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
});

// Initialize menu links on page load
document.addEventListener('DOMContentLoaded', function() {
  const menuLinks = document.querySelectorAll('.menu-link');
  menuLinks.forEach(link => {
    const sectionName = link.textContent.trim();
    const menuData = menuStructure[sectionName];
    
    link.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      if (menuData && menuData.subsections) {
        showSubsections(sectionName, menuData.subsections);
      } else if (menuData && menuData.link) {
        const target = document.querySelector(menuData.link);
        if (target) {
          hexBurger.click();
          setTimeout(() => {
            smoothScrollTo(target.offsetTop - 70, 3000);
          }, 600);
        }
      }
    });
  });
});


// Newsletter Webhook Submission
function sendNewsletterToWebhook(email) {
  const webhookURL = 'https://hook.eu2.make.com/YOUR_NEWSLETTER_WEBHOOK_ID';

  fetch(webhookURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: email,
      timestamp: new Date().toISOString(),
      source: 'website-newsletter'
    })
  })
  .then(response => response.json())
  .then(data => { console.log('Newsletter webhook sent:', data); })
  .catch(error => { console.error('Newsletter webhook error:', error); });
}

// Newsletter Form Handler
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('emailInput').value;
    const btn = document.getElementById('subscribeBtn');

    sendNewsletterToWebhook(email);

    btn.textContent = 'Subscribed ✓';
    btn.style.background = 'var(--white)';
    btn.disabled = true;

    setTimeout(() => {
      newsletterForm.reset();
      btn.textContent = 'Subscribe';
      btn.style.background = '';
      btn.disabled = false;
    }, 3000);
  });
}
