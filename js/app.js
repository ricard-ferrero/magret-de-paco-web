const carrousel = document.querySelectorAll('.img-container');
let carrouselIndex = 1;
function updateCarrousel() {
    carrousel.forEach((imgContainer, index)=>{
        if (index != carrouselIndex) {
            //imgContainer.classList.add('fade-out');
            if (imgContainer.classList.contains('fade-in')) imgContainer.classList.replace('fade-in', 'fade-out');
            else imgContainer.classList.add('fade-out')
        } else {
            //imgContainer.classList.remove('fade-out');
            imgContainer.classList.replace('fade-out', 'fade-in');
        }
    });
    carrouselIndex += 1;
    if (carrouselIndex >= carrousel.length) {
        carrouselIndex = 0;
    }
}
setInterval(updateCarrousel, 3500)

function transition() {
    if (carrousel[0].classList.contains('fade-out')) {
        carrousel[0].classList.replace('fade-out', 'fade-in');
    } else {
        carrousel[0].classList.replace('fade-in', 'fade-out');
    }
}