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

const closeMenu = (target) => {
    // window.scrollTo(0, document.getElementById(target).offsetTop-55)
    _menuIcon.className = 'menuIcon';
    nav.style.transform='translateX(-100%)';
}