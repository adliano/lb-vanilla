// Navigation
// Responsive Toggle Navigation
var _menuIcon = document.querySelector('.menuIcon');
let nav = document.querySelector('.overlay-menu');

_menuIcon.addEventListener('click', () => {
    if (nav.style.transform != 'translateX(0%)') {
        nav.style.transform = 'translateX(0%)';
        nav.style.transition = 'transform 0.2s ease-out';
    } else {
        nav.style.transform = 'translateX(-100%)';
        nav.style.transition = 'transform 0.2s ease-out';
    }
    if (_menuIcon.className != 'menuIcon toggle') {
        _menuIcon.className += ' toggle';
    } else {
       _menuIcon.className = 'menuIcon';
    }
});


// menuIcon.addEventListener('click', () => {
//     if (menuIcon.className != 'menuIcon toggle') {
//         menuIcon.className += ' toggle';
//     } else {
//         menuIcon.className = 'menuIcon';
//     }
// });

// Toggle Menu Icon 
// let toggleIcon = document.querySelector('.menuIcon');

// toggleIcon.addEventListener('click', () => {
//     if (toggleIcon.className != 'menuIcon toggle') {
//         toggleIcon.className += ' toggle';
//     } else {
//         toggleIcon.className = 'menuIcon';
//     }
// });