// ========THIS METHOD IS USED WHEN THE HAMBURGER LINES ARE CREATED RATHER THAN USING ICONS FOR THE OPEN AND CLOSE TOGGLE.=======

const hamburgerMenu = document.querySelector('.hamburger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const hamburgerLines = document.querySelectorAll('.hamburger-line');

hamburgerMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('show-mobile-menu');
  hamburgerLines.forEach((line) => {
    line.classList.toggle('open');
  });
});



// =========THIS METHOD IS USED WHEN THE HAMBURGER LINES ARE NOT CREATED RATHER ICONS WAS USED FOR THE OPEN AND CLOSE TOGGLE.=======


// const  mobile_menu = document.querySelector('.nav_mobile');
// const  fa_open = document.getElementById('fa-open');
// const  fa_close = document.getElementById('fa-close');

// fa_open.addEventListener('click',
//     function(){
//         if(mobile_menu.style.display === 'none'){
//             mobile_menu.style.display = 'block';
//             fa_open.style.display = 'none';
//             fa_close.style.display = 'block';
//         } else {
//             mobile_menu.style.display = 'none';
//             fa_open.style.display = 'block';
//             fa_close.style.display = 'none';
//         }
// });

// fa_close.addEventListener('click',
//     function(){
//         if(mobile_menu.style.display === 'block'){
//             mobile_menu.style.display = 'none';
//             fa_open.style.display = 'block';
//             fa_close.style.display = 'none';
//         }
// });



