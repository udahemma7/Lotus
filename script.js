const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const sidebarLinks = sidebar.querySelectorAll('a');

// Toggle sidebar + hamburger animation
hamburger.addEventListener('click', () => {
  const isActive = hamburger.classList.toggle('active');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('show');
  hamburger.setAttribute('aria-expanded', isActive);
});

// Close sidebar when clicking overlay
overlay.addEventListener('click', closeSidebar);

// Close sidebar when clicking any sidebar link
sidebarLinks.forEach(link => {
  link.addEventListener('click', closeSidebar);
});

function closeSidebar() {
  hamburger.classList.remove('active');
  sidebar.classList.remove('open');
  overlay.classList.remove('show');
  hamburger.setAttribute('aria-expanded', false);
}
