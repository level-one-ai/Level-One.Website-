/* ========================================
   BLUEPRINT VIEW LOGIC - 3 PHASE PROCESS
   ======================================== */

let currentPhase = 0;

function initBlueprint() {
  renderBlueprintPhases();
  loadPhaseContent(0);
  
  // Station click handlers
  document.querySelectorAll('.trainline-station').forEach((station, index) => {
    station.addEventListener('click', () => {
      selectPhase(index);
    });
  });
}

function renderBlueprintPhases() {
  const trainlineTrack = document.querySelector('.trainline-track');
  if (!trainlineTrack) return;
  
  // Clear existing stations
  const existingStations = trainlineTrack.querySelectorAll('.trainline-station');
  existingStations.forEach(station => station.remove());
  
  // Create 3 stations
  blueprintData.phases.forEach((phase, index) => {
    const station = document.createElement('div');
    station.className = 'trainline-station';
    station.dataset.station = index;
    if (index === 0) station.classList.add('active');
    
    station.innerHTML = `
      <div class="station-dot"></div>
      <div class="station-label">${phase.title}</div>
    `;
    
    trainlineTrack.appendChild(station);
  });
}

function selectPhase(phaseIndex) {
  if (phaseIndex === currentPhase) return;
  
  currentPhase = phaseIndex;
  
  // Update active station
  document.querySelectorAll('.trainline-station').forEach((station, index) => {
    station.classList.toggle('active', index === phaseIndex);
  });
  
  // Load content with fade transition
  loadPhaseContent(phaseIndex);
}

function loadPhaseContent(phaseIndex) {
  const phase = blueprintData.phases[phaseIndex];
  if (!phase) return;
  
  const contentContainer = document.querySelector('.blueprint-content');
  if (!contentContainer) return;
  
  // Find or create the sections container
  let sectionsContainer = contentContainer.querySelector('.blueprint-sections');
  if (!sectionsContainer) {
    sectionsContainer = document.createElement('div');
    sectionsContainer.className = 'blueprint-sections';
    contentContainer.appendChild(sectionsContainer);
  }
  
  // Fade out
  sectionsContainer.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  sectionsContainer.style.opacity = '0';
  sectionsContainer.style.transform = 'translateY(20px)';
  
  setTimeout(() => {
    // Update content
    sectionsContainer.innerHTML = phase.content;
    
    // Fade in
    sectionsContainer.style.opacity = '1';
    sectionsContainer.style.transform = 'translateY(0)';
  }, 300);
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
