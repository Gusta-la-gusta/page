document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.header section nav');
  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  document.body.appendChild(overlay);

  // Abrir/fechar menu
  hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
  });

  // Fechar menu ao clicar no overlay
  overlay.addEventListener('click', function() {
    hamburger.classList.remove('active');
    nav.classList.remove('active');
    this.classList.remove('active');
    document.body.style.overflow = '';
  });

  // Fechar menu ao clicar nos links
  document.querySelectorAll('.header section nav a').forEach(link => {
    link.addEventListener('click', function() {
      hamburger.classList.remove('active');
      nav.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
});