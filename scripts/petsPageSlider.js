//pagination
const prevMaxBtn = document.querySelector('.prev-max-btn');
const nextMaxBtn = document.querySelector('.next-max-btn');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

const numBtn = document.querySelector('.num-slider-btn');

let numSliderBtn = 1;

//счетчик для +1280px
nextBtn.addEventListener('click', () => {
    if (numSliderBtn < 6) {
        numSliderBtn++;
        numBtn.textContent = numSliderBtn.toString();
    }
    randomShuffle();
    disableBtn();
});

prevBtn.addEventListener('click', () => {
    if (numSliderBtn > 1) {
        numSliderBtn--;
        numBtn.textContent = numSliderBtn.toString();
    }
    randomShuffle();
    disableBtn();
})

prevMaxBtn.addEventListener('click', () => {
    numSliderBtn = 1;
    numBtn.textContent = numSliderBtn.toString();
    disableBtn();
});

nextMaxBtn.addEventListener('click', () => {
    numSliderBtn = 6;
    numBtn.textContent = numSliderBtn.toString();
    disableBtn();
});

//рандомные блоки pets-item по нажатию на кнопки
function randomShuffle() {
    const petsContainer = document.querySelector('.pets-slider');
    if (numSliderBtn !== 1 && numSliderBtn !== 6){
        for (let i = petsContainer.children.length; i >= 0; i--) {
            petsContainer.appendChild(petsContainer.children[Math.random() * i |0]);
        }
    }
}

//добавление disable к пагинации
function disableBtn() {
    if (numSliderBtn === 1) {
        prevBtn.classList.add('disable');
        prevMaxBtn.classList.add('disable');
    } else {
        prevBtn.classList.remove('disable');
        prevMaxBtn.classList.remove('disable');
    }

    if (numSliderBtn === 6) {
        nextBtn.classList.add('disable');
        nextMaxBtn.classList.add('disable');
    } else {
        nextBtn.classList.remove('disable');
        nextMaxBtn.classList.remove('disable');
    }
}
disableBtn();