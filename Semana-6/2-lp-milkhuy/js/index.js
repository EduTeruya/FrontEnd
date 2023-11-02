'use strict';

const nav = document.querySelector('nav');
const iconMenu = document.getElementById('icon-menu');
// const listHeader = document.getElementById('list-header');
//se puede usar tambien queryselector como en este caso. Es lo mismo
const listHeader = document.querySelector('.list--header');
const iconClose = document.getElementById('icon-close');


document.addEventListener('scroll', () => {
    nav.classList.toggle('nav--scroll', window.scrollY > 0);
});

iconMenu.addEventListener('click', () => {
    // listHeader.style.pointerEvents = 'auto';
    // listHeader.style.opacity = '1';
    listHeader.classList.add('list--header-show');
});

iconClose.addEventListener('click', () => {
    // listHeader.style.pointerEvents = 'none';
    // listHeader.style.opacity = '0';
    listHeader.classList.remove('list--header-show');
});

