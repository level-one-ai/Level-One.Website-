/* ========================================
   SPLASH SCREEN & CANVAS ANIMATION
   ======================================== */

// Initial state
document.body.style.overflow = 'hidden';

// Element references
const splashScreen = document.getElementById('splash-screen');
const heroVideo = document.querySelector('.hero-video-bg video');
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

// State
const frameCount = 120;
const currentFrame = index => `https://res.cloudinary.com/dw5n0wlmr/image/upload/f_auto,q_auto/v1770458357/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`;
const images = [];
let imagesLoaded = 0;
const videoState = { targetFrame: 0, smoothFrame: 0 };

// Show splash immediately
splashScreen.style.display = 'flex';
splashScreen.style.opacity = '1';

// Reveal site after 2 seconds
setTimeout(revealSite, 2000);

function revealSite() {
  splashScreen.style.opacity = '0';
  const isViewOpen = document.getElementById('blog-view').style.display === 'block' ||
                     document.getElementById('calendar-view').style.display === 'block';
  if (!isViewOpen) document.body.style.overflow = 'auto';
  setTimeout(() => { splashScreen.style.display = 'none'; }, 1000);
}

// Global transition trigger (used by Navigation)
function triggerTransition(callback) {
  splashScreen.style.display = 'flex';
  requestAnimationFrame(() => {
    splashScreen.style.opacity = '1';
    setTimeout(() => {
      callback();
      setTimeout(() => {
        splashScreen.style.opacity = '0';
        setTimeout(() => { splashScreen.style.display = 'none'; }, 800);
      }, 400);
    }, 300);
  });
}

// Load Canvas Images in background
for (let i = 1; i <= frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  img.onload = () => {
    imagesLoaded++;
    if (imagesLoaded === 1) {
      loop();
      render(0);
    }
  };
  img.onerror = () => { imagesLoaded++; };
  images.push(img);
}

// Start video immediately
if (heroVideo) { heroVideo.play().catch(() => {}); }

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
  if (progBar) progBar.style.width = (scrollFraction * 100) + '%';
});
