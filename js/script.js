'use strict';

$(document).ready(function () {
    $('.spoiler__title').click(function () {
        $(this).toggleClass('active').next().slideToggle(300);
        
    })
    const textChange = () => {
        if (window.innerWidth < 750) {
            $('.header__button').text('Бесплатная консультация');
            $('.header__button').css('padding-top', '20px')
        } else {
            $('.header__button').text('Получить бесплатную консультацию');
        }
    }
    textChange();
    window.addEventListener('resize', textChange);

    $('a.link-btn').click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
         }, {
            duration: 1000,
            easing: "swing"
         });
         return false;
    })
    
})





