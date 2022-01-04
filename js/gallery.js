const gallery = document.getElementById('cardFeedbackGallery');
const previus = document.getElementById('previus');
const next = document.getElementById('next');
const cardFeedback = document.getElementById('cardFeedback');
const cards = document.querySelectorAll('.card-feedback .card');
const dotsContainer = document.getElementById('cardFeedbackDots');

let translate = 0;
const galleryWidth = parseFloat(window.getComputedStyle(gallery).width);
const cardWidth = parseFloat(window.getComputedStyle(cards[0]).width);
const gap = parseFloat(window.getComputedStyle(cardFeedback).gap);
const visibleCards = Math.floor(galleryWidth / cardWidth);
const maxTranslate = 0 - ((cards.length - visibleCards) * (cardWidth + gap));

next.onclick = function () {
    if (translate > maxTranslate) {
        translate = translate - cardWidth - gap;
        setTransform();
        activateButton()
    }
}

previus.onclick = function () {
    if (translate < 0) {
        translate = translate + cardWidth + gap;
        setTransform();
        activateButton()
    }
}

function setTransform() {
    cardFeedback.style.transform = `translateX(${translate}px)`;
}

for (let i = 0; i <= (cards.length - visibleCards); i++) {
    const dot = document.createElement('button');
    if (i === 0) {
        dot.classList.add('active');
    }
    dot.onclick = function () {
        translate = 0 - (cardWidth + gap) * i;
        setTransform();
        clearButtonStatus();

        dot.classList.add('active');
    }
    dotsContainer.append(dot);
}

function clearButtonStatus() {
    Array.from(dotsContainer.children).forEach((button) => {
        button.classList.remove('active');
    });
}

function activateButton() {
    clearButtonStatus();
    const dot = dotsContainer.children[translate ? Math.abs(translate / (cardWidth + gap)) : 0];
    dot.classList.add('active');
}
