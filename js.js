ScrollReveal({ 
  reset: true,
  distance: '70px',
  duration: 2500,
  delay: 400
});

ScrollReveal().reveal('.content-img, .b2-text h2, .title, .slider-title, .header-title-left h1', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.b2-text span', { delay: 600, origin: 'bottom' });
ScrollReveal().reveal('.content-text, .b2-text p, .slider-desc, .footer-desc, .r-text', { delay: 700, origin: 'right' });
ScrollReveal().reveal('.animals-content, .slider-btn span, .footer-icon i', { delay: 500, origin: 'bottom', interval: 200});
ScrollReveal().reveal('.content-main h2', { delay: 500, origin: 'top'});
ScrollReveal().reveal('', { delay: 500, origin: 'left', interval: 200});