'use strict';

window.addEventListener('resize', function(){
    if(window.innerWidth < 750) {
        document.querySelector('.header__button').textContent = 'Бесплатная консультация';
    } else {
        document.querySelector('.header__button').textContent = 'Получить бесплатную консультацию';
    }
})
$(document).ready(function() {
    $('.spoiler__title').click(function(event) {
        $(this).toggleClass('active').next().slideToggle(300);

        
    })
})