'use strict';

const documentReady = () => {

    const heroTitle = document.getElementById('heroTitle');
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');

    const getPartner = () => {
        alert('💞 Now Zomos Partner 💞');
        alert('💗 U mMe Daz Luz & EsperranZa A My Laif 💗');
        alert('😱 OuR VoDa Is MañaNa 😱');
        location.href = 'https://www.youtube.com/watch?v=KjU1Fd8OLrE';
    };

    const brokenHeart = () => {
        noButton.style.top = Math.random() * innerHeight + 'px';
        noButton.style.left = Math.random() * innerWidth + 'px';


    };

    const partner = prompt('💘DyMe Yur NoMbrE💘');
    heroTitle.innerText += ` ${partner || 'Anonimo'}? 💗`;

    yesButton.addEventListener('mouseover', getPartner);
    noButton.addEventListener('mouseover', brokenHeart);
};

document.addEventListener('DOMContentLoaded', documentReady);
