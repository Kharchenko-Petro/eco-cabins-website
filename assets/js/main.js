/* ============ TOGGLE MENU ============== */
const navBody = document.getElementById('nav-header-body');
const navToggle = document.getElementById('nav-header-toggle');
const navClose = document.getElementById('nav-header-close');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navBody.classList.add('show-menu');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navBody.classList.remove('show-menu');
  })
}
/* ============ SLIDER ============== */
const swiper = new Swiper('.slider-materials', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  scrollY > 20 ? header.classList.add('scroll') : header.classList.remove('scroll');
})