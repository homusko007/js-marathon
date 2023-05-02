const slidesPlagin = (activeSlide = 0) => {
const slides = document.querySelectorAll('.slide');
slides[activeSlide].classList.add('active');

const clearActiveClass = () => {
   slides.forEach(slide => {
    slide.classList.remove('active');
   }) 
};

slides.forEach(slide => {
    slide.addEventListener('click', () => {
        clearActiveClass();

        slide.classList.add('active');
    })
});
};

slidesPlagin(4);
