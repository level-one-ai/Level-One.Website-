/* ========================================
   BLUEPRINT VIEW LOGIC - 3 PHASE PROCESS
   ======================================== */

let currentPhase = 0;

function initBlueprint() {
  // Load all 3 phases immediately
  loadAllPhases();
  
  // Set up scroll observer for trainline animation
  setupScrollObserver();
  
  // Station click handlers (still allow manual navigation)
  document.querySelectorAll('.trainline-station').forEach((station, index) => {
    station.addEventListener('click', () => {
      scrollToPhase(index);
    });
  });
}

function loadAllPhases() {
  blueprintData.phases.forEach((phase, index) => {
    const sectionElement = document.querySelector(`.blueprint-section[data-station="${index}"] .blueprint-sections`);
    if (sectionElement) {
      sectionElement.innerHTML = phase.content;
    }
  });
}

function setupScrollObserver() {
  const sections = document.querySelectorAll('.blueprint-section');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
        const stationIndex = parseInt(entry.target.dataset.station);
        updateActiveStation(stationIndex);
      }
    });
  }, {
    threshold: [0.2, 0.4, 0.6],
    rootMargin: '-20% 0px -20% 0px'
  });
  
  sections.forEach(section => observer.observe(section));
}

function updateActiveStation(stationIndex) {
  if (currentPhase === stationIndex) return;
  
  currentPhase = stationIndex;
  
  // Update station active states
  document.querySelectorAll('.trainline-station').forEach((station, index) => {
    if (index === stationIndex) {
      station.classList.add('active');
    } else {
      station.classList.remove('active');
    }
  });
}

function scrollToPhase(phaseIndex) {
  const section = document.querySelector(`.blueprint-section[data-station="${phaseIndex}"]`);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Initialize when blueprint view opens
if (document.getElementById('blueprint-view')) {
  // Wait for view to be visible before initializing
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
        const blueprintView = document.getElementById('blueprint-view');
        if (blueprintView && blueprintView.style.display === 'block') {
          initBlueprint();
        }
      }
    });
  });
  
  observer.observe(document.getElementById('blueprint-view'), {
    attributes: true,
    attributeFilter: ['style']
  });
}
