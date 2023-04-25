// slider main page //
const pets = document.querySelectorAll('.pets-item');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let currentSlide = 0;
let slideWidth;

function setSlideWidth() {
    if (window.innerWidth >= 1281) {
        slideWidth = 3;
    } else if (window.innerWidth >= 769) {
        slideWidth = 2;
    } else {
        slideWidth = 1;
    }
}

function showSlides() {
    for (let i = 0; i < pets.length; i++) {
        pets[i].style.display = 'none';
    }
    for (let i = currentSlide; i < currentSlide + slideWidth; i++) {
        if (pets[i]) {
            pets[i].style.display = 'flex';
        }
    }
}

function slideLeft() {
    if (currentSlide > 0) {
        currentSlide -= slideWidth;
        showSlides();
    }
}

function slideRight() {
    if (currentSlide < pets.length - slideWidth) {
        currentSlide += slideWidth;
        showSlides();
    }
}

leftArrow.addEventListener('click', slideLeft);
rightArrow.addEventListener('click', slideRight);

window.addEventListener('resize', () => {
    setSlideWidth();
    showSlides();
});

setSlideWidth();
showSlides();
