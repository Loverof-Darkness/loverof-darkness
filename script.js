// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default anchor behavior
      const targetId = this.getAttribute('href'); // Get the target section ID
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth' // Smooth scroll to the section
      });
    });
  });
  
  // Dark Mode Toggle
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode'); // Toggle dark mode class
    if (body.classList.contains('dark-mode')) {
      themeToggle.textContent = 'Light Mode';
    } else {
      themeToggle.textContent = 'Dark Mode';
    }
  });
  
  // Dynamic Year in Footer
  const year = new Date().getFullYear();
  document.getElementById('year').textContent = year;
