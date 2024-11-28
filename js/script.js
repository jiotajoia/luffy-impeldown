const luffy = document.querySelector('.luffy');

const jump = () => {
    luffy.classList.add('jump');

    setTimeout(() => {
        luffy.classList.remove('jump');
    }, 500);
};

document.addEventListener('keydown', jump);