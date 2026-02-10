/* ========================================
   INITIALIZATION & EVENT LISTENERS
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
  
  // Initialize Menu Overlay (Main Links)
  const menuLinks = document.querySelectorAll('.menu-link');
  menuLinks.forEach(link => {
    const sectionName = link.textContent;
    const menuData = menuStructure[sectionName];
    
    link.addEventListener('click', function(e) {
      e.preventDefault();
      if (menuData && menuData.subsections) {
        showSubsections(sectionName, menuData.subsections);
      } else {
        const target = document.querySelector(menuData.link);
        document.getElementById('hexBurger').click();
        setTimeout(() => {
          smoothScrollTo(target.offsetTop, 2000);
        }, 600);
      }
    });
  });

  // Feature Cards -> Core Systems View
  const featureCards = document.querySelectorAll('#features .feature-card');
  featureCards.forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => openView('core-systems-view'));
  });

  // Process Cards -> Blueprint View
  const processCards = document.querySelectorAll('#process .process-card');
  processCards.forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => openView('blueprint-view'));
  });

  // Service Cards -> Solutions View
  const serviceCards = document.querySelectorAll('#services .srv-card');
  const solutionTypes = ['sales', 'support', 'consulting', 'workflow'];
  serviceCards.forEach((card, index) => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => openSolutionView(solutionTypes[index]));
  });

  // Pricing Cards Hover Effect
  const pricingCards = document.querySelectorAll('.pricing-card');
  pricingCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      pricingCards.forEach(other => {
        if (other !== card) other.style.opacity = '0.7';
      });
    });
    card.addEventListener('mouseleave', () => {
      pricingCards.forEach(other => other.style.opacity = '1');
    });
  });

  // Blueprint Trainline Logic
  const trainlineStations = document.querySelectorAll('.trainline-station');
  trainlineStations.forEach(station => {
    station.addEventListener('click', function() {
      const stationIndex = this.dataset.station;
      const targetSection = document.querySelector(`[data-station="${stationIndex}"]`);
      if (targetSection) {
        trainlineStations.forEach(s => s.classList.remove('active'));
        this.classList.add('active');
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Blueprint Intersection Observer
  const blueprintSections = document.querySelectorAll('.blueprint-section');
  const blueprintObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
        const sectionStation = entry.target.dataset.station;
        trainlineStations.forEach(s => s.classList.remove('active'));
        const activeStation = document.querySelector(`.trainline-station[data-station="${sectionStation}"]`);
        if (activeStation) activeStation.classList.add('active');
      }
    });
  }, { threshold: [0.3, 0.5, 0.7] });
  blueprintSections.forEach(s => blueprintObserver.observe(s));

  // Global Animation Observer
  const obs = new IntersectionObserver((entries) => { 
    entries.forEach(e => { 
      if (e.isIntersecting) e.target.classList.add('vis'); 
    }); 
  }, { threshold: 0.05 });
  document.querySelectorAll('.anim').forEach(el => obs.observe(el));
});
