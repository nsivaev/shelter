//pagination
const prevMaxBtn = document.querySelector('.prev-max-btn');
const prevBtn = document.querySelector('.prev-btn');

const nextMaxBtn = document.querySelector('.next-max-btn');
const nextBtn = document.querySelector('.next-btn');

const numBtn = document.querySelector('.num-slider-btn');

let numSliderBtn = 1;

//счетчик
nextBtn.addEventListener('click', () => {
    if (numSliderBtn < 6) {
        numSliderBtn++;
        numBtn.textContent = numSliderBtn.toString();
    }
    randomShuffle()
});

prevBtn.addEventListener('click', () => {
    if (numSliderBtn > 1) {
        numSliderBtn--;
        numBtn.textContent = numSliderBtn.toString();
    }
    randomShuffle()
})

prevMaxBtn.addEventListener('click', () => {
    numSliderBtn = 1;
    numBtn.textContent = numSliderBtn.toString();
});

nextMaxBtn.addEventListener('click', () => {
    numSliderBtn = 6;
    numBtn.textContent = numSliderBtn.toString();
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