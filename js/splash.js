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
  // Stop the CSS animation so the inline opacity transition takes full control
  splashText.style.animation = 'none';

  // Step 1: fade out "LEVEL ONE" text (0.7s)
  splashText.style.transition = 'opacity 0.7s ease';
  splashText.style.opacity = '0';

  // Step 2: after text has faded, fade the black screen to reveal the website (2.2s)
  setTimeout(() => {
    splashScreen.style.transition = 'opacity 2.2s ease-in-out';
    splashScreen.style.opacity = '0';
    document.body.style.overflow = 'auto';
    setTimeout(() => { splashScreen.style.display = 'none'; }, 2200);
  }, 750);
}

// View transition trigger (used by Navigation for blog/calendar/etc.)
// Total duration ~4 seconds: screen fades in → text glitches → text fades out → screen fades out
function triggerTransition(callback) {
  // Prepare: text invisible, glitch layers active, screen invisible
  splashText.style.animation = 'none';
  splashText.style.transition = 'none';
  splashText.style.opacity = '0';
  splashText.classList.add('glitch-active');
  splashScreen.style.transition = 'none';
  splashScreen.style.opacity = '0';
  splashScreen.style.display = 'flex';

  // Two rAFs ensure the browser has committed the above paint before transitions begin
  requestAnimationFrame(() => requestAnimationFrame(() => {
    // Step 1: fade screen to black (0.4s)
    splashScreen.style.transition = 'opacity 0.4s ease';
    splashScreen.style.opacity = '1';

    // Step 2: swap views while screen is going black (~250ms in)
    setTimeout(() => { callback(); }, 250);

    // Step 3: fade text in with glitch once screen is fully black (~420ms)
    setTimeout(() => {
      splashText.style.animation = 'text-fadein 0.6s ease forwards, text-glitch 1.1s ease 0.4s infinite';
    }, 420);

    // Step 4: fade text out at ~3s mark (0.45s fade)
    setTimeout(() => {
      splashText.style.animation = 'none';
      splashText.style.transition = 'opacity 0.45s ease';
      splashText.style.opacity = '0';
    }, 2950);

    // Step 5: fade screen out after text is gone (~3.4s, 0.55s fade)
    setTimeout(() => {
      splashScreen.style.transition = 'opacity 0.55s ease';
      splashScreen.style.opacity = '0';
    }, 3400);

    // Step 6: hide screen and clean up glitch class (~4s)
    setTimeout(() => {
      splashScreen.style.display = 'none';
      splashText.classList.remove('glitch-active');
    }, 3960);
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
