/* ========================================
   SOLUTIONS FOLDER VIEW LOGIC
   ======================================== */
function openSolutionView(solutionType, sectionId = null) {
  const data = solutionData[solutionType];
  if (!data) return;
  
  // Store source section for back button
  if (sectionId) {
    sourceSection = sectionId;
  }
  
  // Hide other views
  document.getElementById('main-content').style.display = 'none';
  document.getElementById('blog-view').style.display = 'none';
  document.getElementById('calendar-view').style.display = 'none';
  document.getElementById('core-systems-view').style.display = 'none';
  document.getElementById('blueprint-view').style.display = 'none';
  
  // Show solutions view
  document.getElementById('solutions-view').style.display = 'block';
  
  // Update folder title
  document.getElementById('solutionFolderTitle').textContent = data.title;
  
  // Build folder tabs
  buildFolderTabs(solutionType);
  
  // Build sidebar selectors
  const sidebar = document.getElementById('solutionsSidebar');
  sidebar.innerHTML = '';
  
  data.sections.forEach((section, index) => {
    const selector = document.createElement('div');
    selector.className = 'solution-selector';
    if (index === 0 && !sectionId) selector.classList.add('active');
    if (sectionId && section.id === sectionId) selector.classList.add('active');
    selector.textContent = `${section.icon} ${section.name}`;
    selector.dataset.sectionId = section.id;
    selector.dataset.solutionType = solutionType;
    
    selector.addEventListener('click', function() {
      switchSolutionSection(solutionType, section.id);
    });
    
    sidebar.appendChild(selector);
  });
  
  // Load initial content
  const targetSection = sectionId 
    ? data.sections.find(s => s.id === sectionId) 
    : data.sections[0];
  
  if (targetSection) {
    document.getElementById('solutionContentArea').innerHTML = targetSection.content;
  }
  
  // Hide burger menu
  document.getElementById('hexBurger').classList.add('hidden');
  window.scrollTo(0, 0);
}

function buildFolderTabs(activeSolutionType) {
  const tabContainer = document.querySelector('.folder-tabs');
  if (!tabContainer) return; 
  
  const tabConfig = [
    { key: 'sales', label: 'Revenue Engines', icon: '' },
    { key: 'support', label: 'Resolution Systems', icon: '' },
    { key: 'consulting', label: 'Systems Architecture', icon: '' },
    { key: 'workflow', label: 'Operational Autonomy', icon: '' }
  ];
  
  tabContainer.innerHTML = '';
  
  tabConfig.forEach(tab => {
    const tabEl = document.createElement('div');
    tabEl.className = 'folder-content-tab';
    if (tab.key === activeSolutionType) tabEl.classList.add('active');
    tabEl.dataset.tab = tab.key;
    tabEl.innerHTML = `<span class="tab-icon">${tab.icon}</span><span class="tab-label">${tab.label}</span>`;
    
    tabEl.addEventListener('click', function() {
      if (tab.key === activeSolutionType) return;
      switchSolutionTab(tab.key);
    });
    
    tabContainer.appendChild(tabEl);
  });
}

function switchSolutionTab(newSolutionType) {
  const data = solutionData[newSolutionType];
  if (!data) return;
  
  // Update folder title with fade
  const titleEl = document.getElementById('solutionFolderTitle');
  titleEl.style.transition = 'opacity 0.2s ease';
  titleEl.style.opacity = '0';
  
  setTimeout(() => {
    titleEl.textContent = data.title;
    titleEl.style.opacity = '1';
  }, 200);
  
  // Update active tab
  document.querySelectorAll('.folder-content-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  
  const activeTab = document.querySelector(`.folder-content-tab[data-tab="${newSolutionType}"]`);
  if (activeTab) activeTab.classList.add('active');
  
  // Rebuild sidebar selectors
  const sidebar = document.getElementById('solutionsSidebar');
  sidebar.style.transition = 'opacity 0.2s ease';
  sidebar.style.opacity = '0';
  
  setTimeout(() => {
    sidebar.innerHTML = '';
    
    data.sections.forEach((section, index) => {
      const selector = document.createElement('div');
      selector.className = 'solution-selector';
      if (index === 0) selector.classList.add('active');
      selector.textContent = `${section.icon} ${section.name}`;
      selector.dataset.sectionId = section.id;
      selector.dataset.solutionType = newSolutionType;
      
      selector.addEventListener('click', function() {
        switchSolutionSection(newSolutionType, section.id);
      });
      
      sidebar.appendChild(selector);
    });
    
    sidebar.style.opacity = '1';
  }, 200);
  
  // Update content with smooth transition
  const contentArea = document.getElementById('solutionContentArea');
  contentArea.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
  contentArea.style.opacity = '0';
  contentArea.style.transform = 'translateY(10px)';
  
  setTimeout(() => {
    contentArea.innerHTML = data.sections[0].content;
    contentArea.style.opacity = '1';
    contentArea.style.transform = 'translateY(0)';
  }, 200);
}

function switchSolutionSection(solutionType, sectionId) {
  const data = solutionData[solutionType];
  if (!data) return;
  
  const section = data.sections.find(s => s.id === sectionId);
  if (!section) return;
  
  // Update active state
  document.querySelectorAll('.solution-selector').forEach(sel => {
    sel.classList.remove('active');
  });
  
  const activeSelector = document.querySelector(`[data-section-id="${sectionId}"]`);
  if (activeSelector) activeSelector.classList.add('active');
  
  // Update content with smooth fade
  const contentArea = document.getElementById('solutionContentArea');
  contentArea.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
  contentArea.style.opacity = '0';
  contentArea.style.transform = 'translateY(10px)';
  
  setTimeout(() => {
    contentArea.innerHTML = section.content;
    contentArea.style.opacity = '1';
    contentArea.style.transform = 'translateY(0)';
  }, 200);
}
