const toggleBtn = document.getElementById('burger');
const block = document.querySelector('.burger-menu-absolute');
const links = block.querySelectorAll('a');


toggleBtn.addEventListener('click', (event) => {
    event.stopPropagation(); // Остановить всплытие события, чтобы не сработало обработчик события на document
    block.classList.toggle('show'); // Переключаем класс для показа/скрытия блока

    if (block.classList.contains('show')) {
        document.body.style.overflow = 'hidden'; // Запретить прокручивание страницы
    } else {
        document.body.style.overflow = ''; // Разрешить прокручивание страницы
    }
});

document.addEventListener('click', (event) => {
    if (!block.contains(event.target)) {
        block.classList.remove('show'); // Скрываем блок, если было нажато вне его
    }
});

links.forEach((link) => {
    link.addEventListener('click', () => {
        block.classList.remove('show'); // Скрываем блок при клике на ссылку внутри блока
        document.body.style.overflow = ''; // Разрешаем прокручивание страницы после закрытия блока
    });
});