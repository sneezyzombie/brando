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
});