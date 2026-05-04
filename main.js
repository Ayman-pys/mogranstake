/* ── MOGRANSTAKE — main.js ────────────────────────────────── */

// Navbar scroll
(function () {
  const nav = document.querySelector('nav');
  if (!nav) return;
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// Mobile menu
(function () {
  const burger = document.querySelector('.hamburger');
  const menu   = document.querySelector('.mobile-menu');
  if (!burger || !menu) return;
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    menu.classList.toggle('open');
  });
})();

// Intersection observer — fade-up
(function () {
  const els = document.querySelectorAll('.fade-up');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
})();

// Ticker duplicate for seamless loop
(function () {
  const inner = document.querySelector('.ticker-inner');
  if (!inner) return;
  inner.innerHTML += inner.innerHTML;
})();

// News duplicate
(function () {
  const inner = document.querySelector('.news-inner');
  if (!inner) return;
  inner.innerHTML += inner.innerHTML;
})();

// Modal — invest buttons
(function () {
  const overlay = document.getElementById('investModal');
  if (!overlay) return;
  const btns   = document.querySelectorAll('.invest-btn');
  const closeB = document.getElementById('modalClose');

  btns.forEach(btn => {
    btn.addEventListener('click', () => { overlay.classList.add('open'); });
  });
  closeB && closeB.addEventListener('click', () => { overlay.classList.remove('open'); });
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.classList.remove('open');
  });
})();

// Active nav link
(function () {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    if (href === path) a.classList.add('active');
  });
})();
