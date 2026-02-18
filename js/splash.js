/* ========================================
   SPLASH SCREEN & CANVAS ANIMATION
   ======================================== */

// Initial state
document.body.style.overflow = 'hidden'; 

// Element references
const splashScreen = document.getElementById('splash-screen');
const splashLogo = document.getElementById('splash-logo');
const splashText = document.getElementById('splash-text');
const loaderBox = document.getElementById('loaderBox');
const loaderBar = document.getElementById('loaderBar');
const heroVideo = document.querySelector('.hero-video-bg video'); 
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

// State
let websiteFullyLoaded = false;
let loadingBarComplete = false;
const frameCount = 120; 
const currentFrame = index => `https://res.cloudinary.com/dw5n0wlmr/image/upload/f_auto,q_auto/v1770458357/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`;
const images = [];
let imagesLoaded = 0;
const videoState = { targetFrame: 0, smoothFrame: 0 };

// INITIAL SPLASH SEQUENCE - Show logo and loading bar
splashScreen.style.display = 'flex';
splashScreen.style.opacity = '1';

if(splashLogo) splashLogo.style.display = 'block';
if(loaderBox) loaderBox.style.display = 'block';

// Fade in logo and loader, then animate the loading bar
setTimeout(() => {
  if(splashLogo) splashLogo.style.opacity = '1';
  if(loaderBox) loaderBox.style.opacity = '1';
  loaderBar.style.transition = 'width 2s cubic-bezier(0.25, 1, 0.5, 1)';
  setTimeout(() => { loaderBar.style.width = '80%'; }, 100);
}, 300);

// Mark loading as complete after minimum display time
setTimeout(() => {
  loadingBarComplete = true;
  checkIfReadyToComplete();
}, 2500);

// Load Canvas Images
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
  if (loadingBarComplete && websiteFullyLoaded) {
    completeLoadingSequence();
  }
}

function completeLoadingSequence() {
  // Complete the loading bar, then fade out logo and loader
  loaderBar.style.transition = 'width 0.4s cubic-bezier(0.25, 1, 0.5, 1)';
  loaderBar.style.width = '100%';
  setTimeout(() => {
    if(splashLogo) splashLogo.style.opacity = '0';
    setTimeout(() => {
      if(loaderBox) loaderBox.style.opacity = '0';
      revealSite();
      loaderBar.style.width = '0%';
      loaderBar.style.transition = 'none';
    }, 600);
  }, 400);
}

function revealSite() {
  splashScreen.style.opacity = '0';
  // Check if blog/calendar is open before unlocking scroll
  const isViewOpen = document.getElementById('blog-view').style.display === 'block' || 
                     document.getElementById('calendar-view').style.display === 'block';
  
  if(!isViewOpen) document.body.style.overflow = 'auto'; 
  
  setTimeout(() => { 
    splashScreen.style.display = 'none';
  }, 1500);
}

// Global transition trigger (used by Navigation) - Logo and loader ARE shown here
function triggerTransition(callback) {
  // Show logo and loader for transitions
  if(splashLogo) splashLogo.style.display = 'block';
  if(loaderBox) loaderBox.style.display = 'block';
  
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
      revealSite();
      // Reset for next transition
      loaderBar.style.width = '0%';
      loaderBar.style.transition = 'none';
    }, 800);
  }, 500);
}

// Canvas Loop & Scroll
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

window.addEventListener('scroll', () => {  
  const scrollFraction = window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight);
  videoState.targetFrame = Math.min(frameCount - 1, Math.ceil(scrollFraction * frameCount));
  const progBar = document.getElementById('progressBar');
  if(progBar) progBar.style.width = (scrollFraction * 100) + '%';
});
