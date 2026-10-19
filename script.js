// Ano no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// Efeito de digitação
const phrases = ['Desenvolvedor Web', 'Full-Stack Developer', 'Problem Solver'];
const typedEl = document.getElementById('typed');
let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  const current = phrases[phraseIndex];

  if (!deleting) {
    charIndex++;
    typedEl.textContent = current.slice(0, charIndex);
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1800);
      return;
    }
  } else {
    charIndex--;
    typedEl.textContent = current.slice(0, charIndex);
    if (charIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }
  setTimeout(typeLoop, deleting ? 40 : 80);
}
typeLoop();

// Menu mobile simples
const toggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    const isOpen = navLinks.style.display === 'flex';
    navLinks.style.display = isOpen ? 'none' : 'flex';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '64px';
    navLinks.style.right = '16px';
    navLinks.style.flexDirection = 'column';
    navLinks.style.background = 'var(--surface)';
    navLinks.style.border = '1px solid var(--border)';
    navLinks.style.borderRadius = '10px';
    navLinks.style.padding = '16px 24px';
    navLinks.style.gap = '14px';
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => { navLinks.style.display = 'none'; });
  });
}
