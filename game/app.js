const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');
const colors = ['#f31f07', '#ab07f1', '#0a96f3', '#e2f10e', '#34d717',  '#f30799'];
let score = 0;

startBtn.addEventListener('click', (e) => {
    e.preventDefault();
    screens[0].classList.add('up');
});

const showTime = (time) => {
timeEl.innerHTML = `00:${time}`; 
};

const finishGame = () => {
board.innerHTML = `<h1>Счет: <span class="primary">${score}<span></h1>`;
timeEl.parentNode.classList.add('hide');
};

const decreaseTime = () => {
    if (time === 0) {
        finishGame();
    } else {
        let current = --time;  
        if (current < 10) {
            current = '0' + current;
        }
        showTime(current); 
    }
};

const getRandomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
};

const getRandomColor = () => {
    const index = Math.floor(Math.random() * colors.length);

    return colors[index];
};

const createRandomCircle = () => {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    const size = getRandomNumber(10, 60);
    const color = getRandomColor();
    const {width, height} = board.getBoundingClientRect();
    console.log();
    const y = getRandomNumber(0, width - size);
    const x = getRandomNumber(0, height - size);

    circle.style.top = `${y}px`
    circle.style.left = `${x}px`;
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.backgroundColor = color;
    board.append(circle);
};

const startGame = (time) => {
    screens[1].classList.add('up');
    setInterval(decreaseTime, 1000);
    showTime(time);
    createRandomCircle();
};

timeList.addEventListener('click', e => {
    if (e.target.classList.contains('time-btn')) {
        time = parseInt(e.target.getAttribute('data-time'));
        console.log(time);
        screens[1].classList.add('.up');
        startGame(time);
    }
});

board.addEventListener('click', (e) => {
    if (e.target.classList.contains('circle')) {
        score++;
        e.target.remove();
        createRandomCircle();
    }
});
