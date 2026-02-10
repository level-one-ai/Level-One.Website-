/* ========================================
   SOLUTIONS FOLDER VIEW LOGIC
   ======================================== */

function openSolutionView(solutionType, sectionId = null) {
  const data = solutionData[solutionType];
  if (!data) return;
  
  triggerTransition(() => {
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
  });
}

function buildFolderTabs(activeSolutionType) {
  const tabContainer = document.querySelector('.folder-tabs'); // Assuming this class exists or use specific ID if added to HTML
  // Note: HTML in previous step didn't have ID for tabs container, strictly using class from CSS logic
  // Inserting tab container if not present in HTML structure provided
  if (!tabContainer) return; 
  
  const tabConfig = [
    { key: 'sales', label: 'Lead Generation', icon: '⚡' },
    { key: 'support', label: 'Project Management', icon: '🤖' },
    { key: 'consulting', label: 'Hiring Systems', icon: '🔍' },
    { key: 'workflow', label: 'Sales Administration', icon: '📋' }
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
  // Use openSolutionView to handle the full switch
  openSolutionView(newSolutionType);
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
  
  // Update content with fade
  const contentArea = document.getElementById('solutionContentArea');
  contentArea.style.opacity = '0';
  
  setTimeout(() => {
    contentArea.innerHTML = section.content;
    contentArea.style.opacity = '1';
  }, 300);
}
