/* ========================================
   NAVIGATION & VIEW MANAGER
   ======================================== */

let currentView = 'main';
let currentMenuLevel = 'main';
const hexBurger = document.getElementById('hexBurger');
const menuOverlay = document.getElementById('menuOverlay');

const menuStructure = {
  'Systems': {
    subsections: [
      { name: 'Sales & Revenue Generation', action: () => { openView('core-systems-view'); } },
      { name: 'Advanced Support Agents', action: () => { openView('core-systems-view'); } },
      { name: 'Business Management Consultant', action: () => { openView('core-systems-view'); } },
      { name: 'Agentic Workflows', action: () => { openView('core-systems-view'); } }
    ],
    link: '#features'
  },
  'Architecture': {
    subsections: [
      { name: 'Systems Audit', action: () => { openView('blueprint-view'); } },
      { name: 'Agent Deployment', action: () => { openView('blueprint-view'); } },
      { name: 'Autonomous Scaling', action: () => { openView('blueprint-view'); } }
    ],
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
    subsections: [
      { name: 'Agentic Systems', action: () => { openBlog('agentic'); } },
      { name: 'Hyperautomation', action: () => { openBlog('hyperautomation'); } }
    ],
    link: '#insights'
  }
};

// View Management
function openView(viewId) {
  triggerTransition(() => {
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('blog-view').style.display = 'none';
    document.getElementById('calendar-view').style.display = 'none';
    
    const targetView = document.getElementById(viewId);
    if (targetView) {
      targetView.style.display = 'block';
      currentView = viewId;
    }
    
    hexBurger.classList.add('hidden');
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
    document.getElementById('solutions-view').style.display = 'none';
    
    hexBurger.classList.remove('hidden');
    currentView = 'main';
    window.scrollTo(0, 0);
  });
}

function openBlog(type) {
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
  triggerTransition(() => {
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('blog-view').style.display = 'none';
    document.getElementById('calendar-view').style.display = 'block';
    hexBurger.classList.add('hidden'); 
    window.scrollTo(0,0);
  });
}

function closeBlog() {
  closeView();
}

// Enhanced Close View (returns to source section)
function closeViewToSource() {
  triggerTransition(() => {
    let targetSectionId = null;
    const coreSystemsView = document.getElementById('core-systems-view');
    const blueprintView = document.getElementById('blueprint-view');
    
    if (coreSystemsView.style.display === 'block') targetSectionId = 'features';
    if (blueprintView.style.display === 'block') targetSectionId = 'process';
    
    document.getElementById('main-content').style.display = 'block';
    document.getElementById('blog-view').style.display = 'none';
    document.getElementById('calendar-view').style.display = 'none';
    document.getElementById('core-systems-view').style.display = 'none';
    document.getElementById('blueprint-view').style.display = 'none';
    document.getElementById('solutions-view').style.display = 'none';
    
    hexBurger.classList.remove('hidden');
    currentView = 'main';
    
    if (targetSectionId) {
      const targetSection = document.getElementById(targetSectionId);
      if (targetSection) {
        setTimeout(() => window.scrollTo(0, targetSection.offsetTop), 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  });
}

// Menu Logic
function showSubsections(sectionName, subsections) {
  currentMenuLevel = 'subsection';
  const menuOverlay = document.getElementById('menuOverlay');
  const mainLinks = document.querySelectorAll('.menu-link');
  
  // Fade out main
  mainLinks.forEach((link, index) => {
    setTimeout(() => {
      link.style.opacity = '0';
      link.style.transform = 'translateX(60px)';
    }, index * 100);
  });
  
  setTimeout(() => {
    menuOverlay.innerHTML = '';
    
    // Back Button
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
    
    // Subsections
    subsections.forEach((sub, index) => {
      const subLink = document.createElement('a');
      subLink.className = 'menu-link';
      subLink.textContent = sub.name;
      subLink.style.opacity = '0';
      subLink.style.transform = 'translateX(-60px)';
      
      subLink.addEventListener('click', function(e) {
        e.preventDefault();
        hexBurger.click();
        setTimeout(() => { sub.action(); }, 300);
      });
      
      menuOverlay.appendChild(subLink);
    });
    
    // Fade in
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
  
  currentLinks.forEach((link, index) => {
    setTimeout(() => {
      link.style.opacity = '0';
      link.style.transform = 'translateX(60px)';
    }, index * 100);
  });
  
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
      
      setTimeout(() => {
        link.style.opacity = '1';
        link.style.transform = 'translateX(0)';
      }, index * 100);
    });
  }, currentLinks.length * 100 + 200);
}

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

// Burger Toggle
hexBurger.addEventListener('click', () => {
  const isOpen = hexBurger.classList.toggle('open');
  menuOverlay.classList.toggle('open', isOpen);
  
  // Prevent scrolling when menu is open
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
  
  if (!isOpen && currentMenuLevel === 'subsection') {
    setTimeout(showMainMenu, 600);
  }
  
  document.querySelectorAll('.menu-link').forEach((link, i) => {
    link.classList.toggle('show', isOpen);
    link.style.transitionDelay = isOpen ? `${0.1 + (i * 0.1)}s` : '0s';
  });
});

// Nav Logo Click
document.getElementById('navLogoBtn').addEventListener('click', (e) => {
  e.preventDefault();
  const featuresSection = document.getElementById('features');
  const featuresSectionTop = featuresSection ? featuresSection.offsetTop : 800;
  if (window.pageYOffset >= featuresSectionTop) {
    triggerTransition(() => { window.scrollTo(0, 0); });
  }
});
