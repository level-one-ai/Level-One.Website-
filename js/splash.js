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

// View transition trigger — black screen shows with LEVEL ONE text, text fades out, then screen fades out
function triggerTransition(callback) {
  // Instantly show full black screen with text
  splashText.style.animation = 'none';
  splashText.style.transition = 'none';
  splashText.style.opacity = '1';
  splashText.classList.remove('glitch-active');
  splashScreen.style.transition = 'none';
  splashScreen.style.opacity = '1';
  splashScreen.style.display = 'flex';

  // Two rAFs ensure paint is committed before transitions begin
  requestAnimationFrame(() => requestAnimationFrame(() => {
    // Swap views immediately — screen is black so the DOM change is invisible
    callback();

    // Step 1: fade text out (0.5s) after brief pause
    setTimeout(() => {
      splashText.style.transition = 'opacity 0.5s ease';
      splashText.style.opacity = '0';
    }, 200);

    // Step 2: fade screen out after text is gone (0.8s ease-in-out for seamless reveal)
    setTimeout(() => {
      splashScreen.style.transition = 'opacity 0.8s ease-in-out';
      splashScreen.style.opacity = '0';
    }, 700);

    // Step 3: hide screen completely
    setTimeout(() => {
      splashScreen.style.display = 'none';
    }, 1550);
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
