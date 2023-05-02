const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

for (const el of placeholders) {
    el.addEventListener('dragover' , (e) => {
       e.preventDefault();
    });
    el.addEventListener('dragenter' , (e) => {
        e.target.classList.add('hovered');
    });
    el.addEventListener('dragleave' , (e) => {
        e.target.classList.remove('hovered');
    });
    el.addEventListener('drop' , (e) => {
        e.target.classList.remove('hovered');
        e.target.append(item);
    });
};

item.addEventListener('dragstart', (e) => {
    e.target.classList.add('hold');
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0)
});

item.addEventListener('dragend', (e) => {
    e.target.classList.remove('hold', 'hide');
});