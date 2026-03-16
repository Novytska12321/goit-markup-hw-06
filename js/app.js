// ======= Modal / Backdrop =======
const backdrop = document.querySelector('.backdrop');
const orderBtn = document.querySelector('.button-top');
const closeBtn = document.querySelector('.modal-close-btn');

orderBtn.addEventListener('click', () => {
  backdrop.classList.add('is-open');
});

closeBtn.addEventListener('click', () => {
  backdrop.classList.remove('is-open');
});

backdrop.addEventListener('click', (e) => {
  if (e.target === backdrop) {
    backdrop.classList.remove('is-open');
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    backdrop.classList.remove('is-open');
    mobileMenu.classList.remove('is-open');
  }
});

// ======= Mobile Menu =======
const mobileMenu = document.querySelector('.mobile-menu');
const openMenuBtn = document.querySelector('.mobil-open-button');
const closeMenuBtn = document.querySelector('.mobile-menu-close-button');

openMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('is-open');
});

closeMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
});
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-list-link');

mobileMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
  });
});