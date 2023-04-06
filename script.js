const toggleBtn = document.getElementById('burger');
const block = document.querySelector('.burger-menu-absolute');
const links = block.querySelectorAll('a');


toggleBtn.addEventListener('click', (event) => {
    event.stopPropagation(); // Остановить всплытие события, чтобы не сработало обработчик события на document
    toggleBtn.classList.toggle('rotate'); // Поворачиваем кнопку на 90 градусов
    block.classList.toggle('show'); // Переключаем класс для показа/скрытия блока

    if (block.classList.contains('show')) {
        document.body.style.overflow = 'hidden'; // Запретить прокручивание страницы
    } else {
        document.body.style.overflow = ''; // Разрешить прокручивание страницы
    }
});

document.addEventListener('click', (event) => {
    // Если клик был вне блока или кнопки
    if (!event.target.closest('.block') && !event.target.closest('.toggle-btn')) {
        block.classList.remove('show'); // Скрываем блок
        toggleBtn.classList.remove('rotate'); // Возвращаем кнопку в исходное состояние
        document.body.style.overflow = ''; // Разрешаем прокручивание страницы
    }
});

links.forEach((link) => {
    link.addEventListener('click', () => {
        block.classList.remove('show'); // Скрываем блок при клике на ссылку внутри блока
        document.body.style.overflow = ''; // Разрешаем прокручивание страницы после закрытия блока
    });
});


//popup
// Получаем все элементы с классом pets-item
const petCards = document.querySelectorAll('.pets-item');
console.log(petCards);

// Проходим по каждой карточке и навешиваем на кнопку обработчик клика
petCards.forEach(card => {
    const learnMoreBtn = card.querySelector('.learn-more');
    learnMoreBtn.addEventListener('click', () => {
        // Получаем данные о животном из JSON-файла
        fetch('./pets.json')
            .then(response => response.json())
            .then(data => {
                const petData = data.find(pet => pet.name === card.querySelector('h5').textContent);
                // Создаем попап и заполняем его данными
                const overlay = document.createElement('div');
                overlay.classList.add('overlay');
                document.body.appendChild(overlay);

                const popup = document.createElement('div');
                popup.classList.add('pets-popup');
                popup.innerHTML = `
                  <div class="close-popup">
                      <button class="round-close">+</button>
                  </div>
                  <div class="popup-img"><img src="${petData.img}" alt=""></div>
                  <div class="popup-content">
                      <h3 class="popup-tittle">${petData.name}</h3>
                      <div class="popup-subtitle">${petData.type} - ${petData.breed}</div>
                      <div class="popup-description">${petData.description}</div>
                      <ul>
                          <li class="age"><b>Age:</b> ${petData.age}</li>
                          <li class="inoculations"><b>Inoculations:</b> ${petData.inoculations}</li>
                          <li class="diseases"><b>Diseases:</b> ${petData.diseases}</li>
                          <li class="parasites"><b>Parasites:</b> ${petData.parasites}</li>
                      </ul>
                  </div>
                `;

                document.body.appendChild(popup);

                // обработчик на кнопку закрытия попапа
                const closePopupBtn = popup.querySelector('.round-close');
                closePopupBtn.addEventListener('click', () => {
                    popup.remove();
                    document.body.style.overflow = 'auto';
                });
                overlay.addEventListener('click', event => {
                    if (!popup.contains(event.target)) {
                        popup.remove();
                        overlay.remove();
                        document.body.style.overflow = 'visible';
                    }
                });
                document.body.style.overflow = 'hidden';
                overlay.querySelector('.round-close');
                closePopupBtn.addEventListener('click', () => {
                    overlay.remove();
                });
            })
            .catch(error => console.log(error));
    });
});
