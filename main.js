// document.addEventListener('DOMContentLoaded', () => {
//     const hamburger = document.querySelector('.hamburger');
//     const menu = document.querySelector('.menu-option');

//     hamburger.addEventListener('click', () => {
//       menu.classList.toggle('show');
//     });
//   });


const hamburgerMenu = document.querySelector('.hamburger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const hamburgerLines = document.querySelectorAll('.hamburger-line');

hamburgerMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('show-mobile-menu');
  hamburgerLines.forEach((line) => {
    line.classList.toggle('open');
  });
});
