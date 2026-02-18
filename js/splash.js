/* ========================================
   SPLASH SCREEN & CANVAS ANIMATION
   ======================================== */

// Lock scroll during splash
document.body.style.overflow = 'hidden';

// Element references
const splashScreen = document.getElementById('splash-screen');
const splashText = document.getElementById('splash-text');
const heroVideo = document.querySelector('.hero-video-bg video');
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

// Canvas state
const frameCount = 120;
const currentFrame = index =>
  `https://res.cloudinary.com/dw5n0wlmr/image/upload/f_auto,q_auto/v1770458357/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`;
const images = [];
let imagesLoaded = 0;
const videoState = { targetFrame: 0, smoothFrame: 0 };

// After 3 seconds: text fades out, then black screen fades revealing website
setTimeout(revealSite, 3000);

function revealSite() {
  // Step 1: fade out "LEVEL ONE" text
  splashText.style.transition = 'opacity 0.5s ease';
  splashText.style.opacity = '0';

  // Step 2: after text is gone, fade the black screen to reveal the website
  setTimeout(() => {
    splashScreen.style.transition = 'opacity 1.5s ease-in-out';
    splashScreen.style.opacity = '0';
    document.body.style.overflow = 'auto';
    setTimeout(() => { splashScreen.style.display = 'none'; }, 1500);
  }, 500);
}

// View transition trigger (used by Navigation for blog/calendar/etc.)
function triggerTransition(callback) {
  // Immediately show splash with text (no transition — instant black screen)
  splashText.style.transition = 'none';
  splashText.style.opacity = '1';
  splashScreen.style.transition = 'none';
  splashScreen.style.display = 'flex';
  splashScreen.style.opacity = '1';

  // Two rAFs ensure the browser has committed the above paint before we proceed
  requestAnimationFrame(() => requestAnimationFrame(() => {
    setTimeout(() => {
      callback();
      setTimeout(() => {
        splashScreen.style.transition = 'opacity 0.8s ease';
        splashScreen.style.opacity = '0';
        setTimeout(() => { splashScreen.style.display = 'none'; }, 800);
      }, 300);
    }, 200);
  }));
}

// Load canvas frames in the background
for (let i = 1; i <= frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  img.onload = () => {
    imagesLoaded++;
    if (imagesLoaded === 1) { loop(); render(0); }
  };
  img.onerror = () => { imagesLoaded++; };
  images.push(img);
}

// Start video immediately
if (heroVideo) { heroVideo.play().catch(() => {}); }

// Canvas render loop
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
  if (progBar) progBar.style.width = (scrollFraction * 100) + '%';
});
