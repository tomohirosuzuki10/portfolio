// スクロール進捗バー
window.addEventListener('scroll', () => {
  const d = document.documentElement;
  const pct = (d.scrollTop / (d.scrollHeight - d.clientHeight)) * 100;
  document.getElementById('progress-bar').style.width = Math.min(pct, 100) + '%';
});

// スクロール入場アニメ
const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
reveals.forEach(r => obs.observe(r));
