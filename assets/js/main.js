document.addEventListener('DOMContentLoaded', function () {
  AOS.init({ duration: 700, once: true });
  const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
  // Set a real email link without exposing it to scrapers
  const email = ['mo7am','example.com'].join('@'); 
  const el = document.getElementById('email-link');
  if (el) { el.href = 'mailto:' + email; el.textContent = email; }
});
