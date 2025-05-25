// Furakan Landing Page JavaScript

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('.nav-links a, .btn');
  
  for (const link of links) {
    link.addEventListener('click', smoothScroll);
  }
  
  function smoothScroll(e) {
    if (this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }
  }
  
  // Fixed header on scroll
  const header = document.querySelector('.header');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});