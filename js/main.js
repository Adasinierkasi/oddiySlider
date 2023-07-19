const img = document.querySelectorAll('.slider-img'),
    nextBtn = document.querySelector('.btn-next'),
    prevBtn = document.querySelector('.btn-prev')
let currentImage = 0
img[0].classList.add("show")
nextBtn.addEventListener('click', () => {
    currentImage = currentImage + 1 === img.length ? 0 : currentImage + 1
    for (let i = 0; i < img.length - 1; i++) {
        img[i].classList.remove('show');
    }
    img[currentImage].classList.add("show")
})
prevBtn.addEventListener('click', () => {
    currentImage = currentImage - 1 < 0 ? img.length - 1 : currentImage - 1;
    for (let i = 0; i < img.length - 1; i++) {
        img[i].classList.remove('show');
    }
    img[currentImage].classList.add("show")
})