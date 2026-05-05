// Highlight ToC link based on scroll position
(function () {
  const tocLinks = document.querySelectorAll('.post-toc a[href^="#"]');
  if (!tocLinks.length) return;

  const headings = [];
  tocLinks.forEach(link => {
    const id = link.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) headings.push({ el, link });
  });

  if (!headings.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        tocLinks.forEach(l => l.classList.remove('active'));
        const match = headings.find(h => h.el === entry.target);
        if (match) match.link.classList.add('active');
      }
    });
  }, { rootMargin: '-20% 0px -70% 0px' });

  headings.forEach(h => observer.observe(h.el));
})();
