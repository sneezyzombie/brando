$(function () {
    $('.header__btn').on('click', function () {
        $('.menu').addClass('menu--active');
    });
    $('.menu__btn').on('click', function () {
        $('.menu').removeClass('menu--active');
    });
    $('.menu__spnsors-slider').slick({
        slidesToShow: 6,
    });
    $('.new-collection__slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade:true,
    });
    $('.blockquotes__slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
    });
});