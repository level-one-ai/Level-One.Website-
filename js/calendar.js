/* ========================================
   CALENDAR & BOOKING SYSTEM
   ======================================== */

let clientData = { name: '', email: '', phone: '', company: '', location: '', website: '' };
let currentDate = new Date();
let selectedDate = null;
let selectedTime = null;

function validateForm() {
  const name = document.getElementById('formName').value.trim();
  const email = document.getElementById('formEmail').value.trim();
  const phone = document.getElementById('formPhone').value.trim();
  const company = document.getElementById('formCompany').value.trim();
  const location = document.getElementById('formLocation').value.trim();
  const isValid = name && email && phone && company && location;
  document.getElementById('nextBtn').disabled = !isValid;
}

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

// Event Listeners
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
  
  const formPage = document.getElementById('formPage');
  const calendarPage = document.getElementById('calendarPage');
  
  formPage.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  formPage.style.opacity = '0';
  formPage.style.transform = 'translateX(-60px)';
  
  setTimeout(() => {
    formPage.style.display = 'none';
    calendarPage.style.display = 'grid';
    calendarPage.style.opacity = '0';
    calendarPage.style.transform = 'translateX(60px)';
    
    requestAnimationFrame(() => {
      calendarPage.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      calendarPage.style.opacity = '1';
      calendarPage.style.transform = 'translateX(0)';
    });
    
    renderCalendar();
    updateTimeSelection();
  }, 500);
});

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
    
    // MAKE.COM WEBHOOK
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
