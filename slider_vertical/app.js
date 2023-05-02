const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const container = document.querySelector('.container');
const countSlides = mainSlide.querySelectorAll('div').length;
let activeSlideIndex = 0;

sidebar.style.top = `-${(countSlides - 1) * 100}vh`;

const changeSlide = (diorection) => {
    if (diorection === 'up') {
        console.log('up');
        activeSlideIndex++;
        if (activeSlideIndex === countSlides) {
            activeSlideIndex = 0;
        }
    } else if (diorection === 'down') {
        console.log('down');
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = countSlides - 1;
        }
    }
    const height = container.clientHeight; // высота экрана
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
};

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
        changeSlide('up');
    } else if (e.key === 'ArrowDown') {
        changeSlide('down');  
    }
});

upBtn.addEventListener('click', () => {
    changeSlide('up');
});
downBtn.addEventListener('click', () => {
    changeSlide('down');
});

