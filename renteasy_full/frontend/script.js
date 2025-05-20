const API_BASE = '';
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('burgerBtn').addEventListener('click', () => {
    document.getElementById('mainNav').classList.toggle('visible');
  });
});