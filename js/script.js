'use strict';

$(document).ready(function () {
    $('.spoiler__title').click(function () {
        $(this).toggleClass('active').next().slideToggle(300);
        
    })
    const textChange = () => {
        if (window.innerWidth < 750) {
            $('.header__button').text('Бесплатная консультация');
        } else {
            $('.header__button').text('Получить бесплатную консультацию');
        }
    }
    textChange();
    window.addEventListener('resize', textChange);

    
    
})





