'use strict';

const iconMenu = document.getElementById('icon-menu');
// const listHeader = document.getElementById('list-header');
//se puede usar tambien queryselector como en este caso. Es lo mismo
const listHeader = document.querySelector('.list--header');
const iconClose = document.getElementById('icon-close');

iconMenu.addEventListener('click', () => {
    listHeader.style.pointerEvents = 'auto';
    listHeader.style.opacity = '1';
});

iconClose.addEventListener('click', () => {
    listHeader.style.pointerEvents = 'none';
    listHeader.style.opacity = '0';
});


