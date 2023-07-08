
const carouselImgs = document.querySelectorAll('.header img');

let index = 0;

function nextCarouselImage() {
    carouselImgs.forEach((element, i)=>{
    i == index ? element.classList.remove('d-none') : element.classList.add('d-none');
    });
    index += 1;
    if(index==carouselImgs.length) index=0;
}

setInterval(nextCarouselImage, 3000);

/*
const carousel = document.querySelector('.carousel-container');
let position = 0;
const width = carousel.clientWidth;

function nextSlide() {
    position -= width;
    if (position < -width * (carousel.children.length - 1)) {
    position = 0;
    }
    carousel.style.transform = `translateX(${position}px)`;
}

setInterval(nextSlide, 3000);
*/

/*
const imageCarousel = document.querySelector('.header img');
const imagesPaths = ['img/mdp.png', 'img/01.jpg'];
let index = 0;

function nextCarouselImage() {
    imageCarousel.setAttribute('src', imagesPaths[index]);
    index += 1;
    if (index == imagesPaths.length) {
    index = 0;
    }
}

nextCarouselImage();

setInterval(nextCarouselImage, 3000);
*/
