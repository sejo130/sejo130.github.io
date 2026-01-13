document.addEventListener('DOMContentLoaded', () => {
  console.log('Site loaded successfully');

  // Add scroll effect to header
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
      header.style.background = 'rgba(13, 17, 23, 0.95)';
    } else {
      header.style.boxShadow = 'none';
      header.style.background = 'rgba(13, 17, 23, 0.8)';
    }
  });

  // Simple animation for elements entering viewport
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = '0'; // start hidden
    observer.observe(card);
  });
});
