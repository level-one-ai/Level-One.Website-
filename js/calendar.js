/* ========================================
   CALENDAR BOOKING SYSTEM
   ======================================== */

// Global variable to track selected pricing tier
let selectedPricingTier = null;

// Calendar State
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let selectedDate = null;
let selectedTime = null;

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

// Form Elements
const formPage = document.getElementById('formPage');
const calendarPage = document.getElementById('calendarPage');
const nextBtn = document.getElementById('nextBtn');
const confirmBtn = document.getElementById('confirmBtn');
const modalOverlay = document.getElementById('modalOverlay');
const confirmationSection = document.getElementById('confirmationSection');
const thankYouSection = document.getElementById('thankYouSection');
const finishBtn = document.getElementById('finishBtn');

// Form Inputs
const formName = document.getElementById('formName');
const formEmail = document.getElementById('formEmail');
const formPhone = document.getElementById('formPhone');
const formCompany = document.getElementById('formCompany');
const formLocation = document.getElementById('formLocation');
const formWebsite = document.getElementById('formWebsite');

// Calendar Navigation
const prevBtn = document.getElementById('prevBtn');
const nextBtn2 = document.getElementById('nextBtn2');
const monthYear = document.getElementById('monthYear');
const calendarGrid = document.getElementById('calendarGrid');
const selectedDateDisplay = document.getElementById('selectedDateDisplay');

// Open Calendar Function (can be called with pricing tier)
function openCalendar(pricingTier = null) {
  // Store the pricing tier if provided
  if (pricingTier) {
    selectedPricingTier = pricingTier;
  }
  
  triggerTransition(() => {
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('blog-view').style.display = 'none';
    document.getElementById('calendar-view').style.display = 'block';
    hexBurger.classList.add('hidden');
    window.scrollTo(0, 0);
  });
}

// Form Validation
function validateForm() {
  const isValid = formName.value && formEmail.value && formPhone.value && 
                  formCompany.value && formLocation.value;
  nextBtn.disabled = !isValid;
}

[formName, formEmail, formPhone, formCompany, formLocation].forEach(input => {
  input.addEventListener('input', validateForm);
});

// Next Button - Move to Calendar with fade
nextBtn.addEventListener('click', () => {
  // Fade out form page
  formPage.style.transition = 'opacity 0.3s ease';
  formPage.style.opacity = '0';
  
  setTimeout(() => {
    formPage.style.display = 'none';
    calendarPage.style.display = 'grid';
    calendarPage.style.opacity = '0';
    
    // Populate client info
    document.getElementById('clientName').textContent = formName.value;
    document.getElementById('clientEmail').textContent = formEmail.value;
    document.getElementById('clientCompany').textContent = formCompany.value;
    document.getElementById('clientLocation').textContent = formLocation.value;
    
    // Display pricing tier if selected
    if (selectedPricingTier) {
      document.getElementById('pricingTierDisplay').style.display = 'flex';
      document.getElementById('selectedTier').textContent = selectedPricingTier;
    }
    
    renderCalendar();
    
    // Fade in calendar page
    setTimeout(() => {
      calendarPage.style.transition = 'opacity 0.3s ease';
      calendarPage.style.opacity = '1';
    }, 50);
  }, 300);
});

// Calendar Rendering
function renderCalendar() {
  monthYear.textContent = `${monthNames[currentMonth]} ${currentYear}`;
  calendarGrid.innerHTML = '';
  
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  
  // Empty cells for days before month starts
  for (let i = 0; i < firstDay; i++) {
    const emptyCell = document.createElement('div');
    emptyCell.className = 'calendar-day empty';
    calendarGrid.appendChild(emptyCell);
  }
  
  // Days of the month
  const today = new Date();
  for (let day = 1; day <= daysInMonth; day++) {
    const dayCell = document.createElement('div');
    dayCell.className = 'calendar-day';
    dayCell.textContent = day;
    
    const cellDate = new Date(currentYear, currentMonth, day);
    
    // Disable past dates and weekends
    if (cellDate < today || cellDate.getDay() === 0 || cellDate.getDay() === 6) {
      dayCell.classList.add('disabled');
    } else {
      dayCell.addEventListener('click', () => selectDate(day));
    }
    
    calendarGrid.appendChild(dayCell);
  }
}

function selectDate(day) {
  selectedDate = new Date(currentYear, currentMonth, day);
  
  // Update visual selection
  document.querySelectorAll('.calendar-day').forEach(cell => {
    cell.classList.remove('selected');
  });
  event.target.classList.add('selected');
  
  // Update display
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  selectedDateDisplay.textContent = selectedDate.toLocaleDateString('en-GB', options);
  
  // Reset time selection
  selectedTime = null;
  document.querySelectorAll('.time-slot').forEach(slot => {
    slot.classList.remove('selected');
  });
  confirmBtn.disabled = true;
}

// Time Slot Selection
document.querySelectorAll('.time-slot').forEach(slot => {
  slot.addEventListener('click', () => {
    selectedTime = slot.dataset.time;
    
    document.querySelectorAll('.time-slot').forEach(s => {
      s.classList.remove('selected');
    });
    slot.classList.add('selected');
    
    confirmBtn.disabled = false;
  });
});

// Calendar Navigation
prevBtn.addEventListener('click', () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar();
});

nextBtn2.addEventListener('click', () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar();
});

// Confirm Booking
confirmBtn.addEventListener('click', () => {
  const appointmentDate = selectedDate.toLocaleDateString('en-GB', { 
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
  });
  
  document.getElementById('modalName').textContent = formName.value;
  document.getElementById('modalNewDate').textContent = appointmentDate;
  document.getElementById('modalNewTime').textContent = selectedTime;
  
  modalOverlay.style.display = 'flex';
  confirmationSection.style.display = 'block';
  thankYouSection.style.display = 'none';
  
  // Send data to Make.com webhook
  sendToWebhook();
});

// Send to Make.com Webhook
function sendToWebhook() {
  const webhookData = {
    name: formName.value,
    email: formEmail.value,
    phone: formPhone.value,
    company: formCompany.value,
    location: formLocation.value,
    website: formWebsite.value || 'Not provided',
    appointmentDate: selectedDate.toLocaleDateString('en-GB'),
    appointmentTime: selectedTime,
    pricingTier: selectedPricingTier || 'Not specified',
    timestamp: new Date().toISOString()
  };
  
  // Make.com webhook URL - replace with your actual webhook URL
  const webhookURL = 'https://hook.eu2.make.com/YOUR_WEBHOOK_ID';
  
  fetch(webhookURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(webhookData)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Webhook sent successfully:', data);
  })
  .catch(error => {
    console.error('Webhook error:', error);
  });
}

// Finish Button
finishBtn.addEventListener('click', () => {
  confirmationSection.style.display = 'none';
  thankYouSection.style.display = 'block';
  
  setTimeout(() => {
    modalOverlay.style.display = 'none';
    
    // Reset and return to home
    triggerTransition(() => {
      document.getElementById('calendar-view').style.display = 'none';
      document.getElementById('main-content').style.display = 'block';
      hexBurger.classList.remove('hidden');
      
      // Reset form
      formPage.style.display = 'grid';
      calendarPage.style.display = 'none';
      document.getElementById('clientForm').reset();
      selectedDate = null;
      selectedTime = null;
      selectedPricingTier = null;
      validateForm();
      
      window.scrollTo(0, 0);
    });
  }, 3000);
});

// Initialize
renderCalendar();
validateForm();
