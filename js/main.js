// Smooth scroll for sidebar links
document.querySelectorAll('.sidebar-nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      document.querySelectorAll('.sidebar-nav a').forEach(a => a.classList.remove('active'));
      this.classList.add('active');
    }
  });
});

// Highlight sidebar nav link on scroll
const sections = document.querySelectorAll('.content-section[id]');
const navLinks = document.querySelectorAll('.sidebar-nav a[href^="#"]');

if (sections.length && navLinks.length) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));
}
