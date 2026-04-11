// Nav scroll effect
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  if (window.scrollY > 30) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
});

// Project filter
function filterProj(cat, btn) {
  document.querySelectorAll('.proj-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');

  document.querySelectorAll('.proj-card').forEach(card => {
    if (cat === 'todos' || card.dataset.cat === cat) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

// Form submit (sem backend — abre mailto)
function sendForm(e) {
  e.preventDefault();
  const inputs = e.target.querySelectorAll('input, textarea');
  const nome = inputs[0].value;
  const email = inputs[1].value;
  const msg = inputs[2].value;

  const texto = `Olá Kelly! 👋\n\nMeu nome é ${nome}\nE-mail: ${email}\n\n${msg}`;
  const url = `https://wa.me/5562991008898?text=${encodeURIComponent(texto)}`;
  window.open(url, '_blank');
}

// Animate skill bars on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.style.animationPlayState = 'running';
  });
}, { threshold: 0.2 });

document.querySelectorAll('.skill-bar::after').forEach(el => observer.observe(el));
