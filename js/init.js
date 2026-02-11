/* ========================================
   INITIALIZATION AND HELPER FUNCTIONS
   ======================================== */

// Blueprint Phase Opening Function
function openBlueprintPhase(phaseIndex, section = 'process') {
  sourceSection = section;
  
  triggerTransition(() => {
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
          if (typeof selectPhase === 'function') {
            selectPhase(phaseIndex);
          }
        }
      }, 100);
    }
    
    hexBurger.classList.add('hidden');
    window.scrollTo(0, 0);
  });
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

// Newsletter Form Handler
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('emailInput').value;
    const btn = document.getElementById('subscribeBtn');
    
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
