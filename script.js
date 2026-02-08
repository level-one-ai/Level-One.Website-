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
