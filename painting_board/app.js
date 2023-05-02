const board = document.querySelector('#board');
const colors = ['#f31f07', '#ab07f1', '#0a96f3', '#e2f10e', '#34d717',  '#f30799'];

const SQUARES_NUMBER = 500;

const setColor = (elem) => {
    const color = getRandomColor();
    elem.style.backgroundColor = color;
    elem.style.boxShadow = `0 0 7px ${color}, 0 0 10px ${color}`;
};

const removeColor = (elem) => {
    elem.style.backgroundColor = '#1d1d1d';
    elem.style.boxShadow = `0 0 7px #000`
};

const getRandomColor = () => {
    const index = Math.floor(Math.random() * colors.length);

    return colors[index];
};

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));

    square.addEventListener('mouseleave', () => removeColor(square));

    board.append(square);
};