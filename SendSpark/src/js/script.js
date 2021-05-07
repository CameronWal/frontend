window.addEventListener('DOMContentLoaded', function() {

    'use strict'; //Перевод в строгий режим
    let tab = document.querySelectorAll('.list__block-descr-text-register-tab'),
        info = document.querySelector('.list__block-descr-text-register'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) { // Функиця которая скрывает табы
        for (let i = a; i < tabContent.length; i++) { // подстраивается под кол-во элементов в html
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) { // Показывать hideTabContent
        if (tabContent[b].classList.contains('hide')) { // Проверка на действительность скрытия элемента
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) { // Назначение обработчика событий на каждый таб. Event - сравнение с тем куда мы кликаем
        let target = event.target;
        if (target && target.classList.contains('list__block-descr-text-register-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }

    });
});