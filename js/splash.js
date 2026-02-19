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
  // Lock opacity at 1 inline BEFORE clearing animation — prevents snap to CSS opacity:0
  splashText.style.opacity = '1';
  splashText.style.animation = 'none';

  // Step 1: fade "LEVEL ONE" text out slowly (0.9s)
  requestAnimationFrame(() => {
    splashText.style.transition = 'opacity 0.9s ease';
    splashText.style.opacity = '0';
  });

  // Step 2: after text has faded, fade the black screen to reveal the website (2.2s)
  setTimeout(() => {
    splashScreen.style.transition = 'opacity 2.2s ease-in-out';
    splashScreen.style.opacity = '0';
    document.body.style.overflow = 'auto';
    setTimeout(() => { splashScreen.style.display = 'none'; }, 2200);
  }, 950);
}

// View transition trigger — screen fades to black, LEVEL ONE fades in with glitch, fades out, screen reveals
function triggerTransition(callback) {
  // Reset: text invisible, screen transparent, glitch ready
  splashText.style.animation = 'none';
  splashText.style.transition = 'none';
  splashText.style.opacity = '0';
  splashText.classList.add('glitch-active');
  splashScreen.style.transition = 'none';
  splashScreen.style.opacity = '0';
  splashScreen.style.display = 'flex';

  // Two rAFs ensure paint is committed before transitions begin
  requestAnimationFrame(() => requestAnimationFrame(() => {

    // Step 1: screen fades to black (0.45s)
    splashScreen.style.transition = 'opacity 0.45s ease-in';
    splashScreen.style.opacity = '1';

    // Step 2: screen is black — swap views invisibly, then fade text in (0.35s)
    setTimeout(() => {
      callback();
      splashText.style.transition = 'opacity 0.35s ease';
      splashText.style.opacity = '1';
    }, 450);

    // Step 3: text has glitched for ~0.85s — fade text out (0.4s)
    setTimeout(() => {
      splashText.style.transition = 'opacity 0.4s ease';
      splashText.style.opacity = '0';
    }, 1650);

    // Step 4: text gone — fade screen out to reveal new page (1.5s)
    setTimeout(() => {
      splashScreen.style.transition = 'opacity 1.5s ease-in-out';
      splashScreen.style.opacity = '0';
    }, 2100);

    // Step 5: hide screen + cleanup
    setTimeout(() => {
      splashScreen.style.display = 'none';
      splashText.classList.remove('glitch-active');
    }, 3700);
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
