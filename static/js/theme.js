// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  
  // Check for saved theme preference or respect OS preference
  const currentTheme = localStorage.getItem('theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  
  // Apply theme
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateToggleIcon(currentTheme);
  
  // Handle toggle click
  themeToggle.addEventListener('click', function() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateToggleIcon(newTheme);
  });

  // Update toggle icon based on current theme
  function updateToggleIcon(theme) {
    if (theme === 'dark') {
      themeToggle.setAttribute('aria-label', 'Switch to light mode');
      themeToggle.setAttribute('title', 'Switch to light mode');
      document.getElementById('moon-icon').style.display = 'none';
      document.getElementById('sun-icon').style.display = 'inline';
    } else {
      themeToggle.setAttribute('aria-label', 'Switch to dark mode');
      themeToggle.setAttribute('title', 'Switch to dark mode');
      document.getElementById('sun-icon').style.display = 'none';
      document.getElementById('moon-icon').style.display = 'inline';
    }
  }
});