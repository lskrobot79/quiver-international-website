// sticky nav
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('stuck', window.scrollY > 24);
onScroll(); addEventListener('scroll', onScroll, {passive:true});

// mobile menu
const burger = document.getElementById('burger'), menu = document.getElementById('menu');
burger.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  burger.classList.toggle('on', open);
  burger.setAttribute('aria-expanded', open);
});
menu.addEventListener('click', e => {
  if (e.target.tagName === 'A') { menu.classList.remove('open'); burger.classList.remove('on'); burger.setAttribute('aria-expanded','false'); }
});

// contact form: show thank-you after FormSubmit redirects back with ?sent=1
const contactForm = document.getElementById('contact-form');
if (contactForm && new URLSearchParams(location.search).has('sent')) {
  const note = document.createElement('p');
  note.textContent = 'Thank you — your message has been sent. We’ll be in touch.';
  note.style.cssText = 'font-family:var(--display);font-size:1.2rem;color:var(--ink)';
  contactForm.replaceWith(note);
}

// scroll reveals
const io = new IntersectionObserver((entries) => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
}, {threshold:.12, rootMargin:'0px 0px -8% 0px'});
document.querySelectorAll('.rv').forEach((el,i) => { el.style.transitionDelay = (i % 3) * 90 + 'ms'; io.observe(el); });
