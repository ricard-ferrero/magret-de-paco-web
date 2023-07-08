const carrousel = document.querySelectorAll('.img-container');
let carrouselIndex = 1;
function updateCarrousel() {
    carrousel.forEach((imgContainer, index)=>{
        if (index != carrouselIndex) {
            imgContainer.classList.add('d-none');
        } else {
            imgContainer.classList.remove('d-none');
        }
    });
    carrouselIndex += 1;
    if (carrouselIndex >= carrousel.length) {
        carrouselIndex = 0;
    }
}
setInterval(updateCarrousel, 2000)