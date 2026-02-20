/* ========================================
   INITIALIZATION AND HELPER FUNCTIONS
   ======================================== */

// Blueprint Phase Opening Function
function openBlueprintPhase(phaseIndex, section = 'process') {
  sourceSection = section;
  
  document.getElementById('main-content').style.display = 'none';
  document.getElementById('blog-view').style.display = 'none';
  document.getElementById('calendar-view').style.display = 'none';
  document.getElementById('core-systems-view').style.display = 'none';
  document.getElementById('solutions-view').style.display = 'none';
  
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

// Panel selector for core-systems-view — always switches to target, one always open
function selectCoreSection(panelKey, clickedBtn, forceOpen) {
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
  var contentArea = document.querySelector('.cs-content');
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

    // Show core systems view (flex layout for fixed sidebar + scrollable content)
    document.getElementById('core-systems-view').style.display = 'flex';
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
    selectCoreSection(panelKey, null);
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

// Animation on Scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.anim');
  
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    if (rect.top < windowHeight * 0.85) {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0) translateX(0)';
    }
  });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Q&A Accordion for core-systems-view
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.spec-qa-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var item = this.closest('.spec-qa-item');
      var isOpen = item.classList.contains('open');
      // Close all others in the same group
      var group = item.closest('.spec-qa');
      if (group) {
        group.querySelectorAll('.spec-qa-item').forEach(function(i) {
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
            smoothScrollTo(target.offsetTop - 68, 3000);
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
