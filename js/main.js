const menuBtn = document.querySelector('.menu__hamburger-btn--active');
const menuHide = document.querySelector('.menu__close-btn');
menuBtn.addEventListener('click', function () {
    menuBtn.classList.remove('menu__hamburger-btn--active');
    document.querySelector('.menu__list').classList.add('menu__list--open');
    menuHide.classList.add('menu__close-btn--active');
});

menuHide.addEventListener('click', function () {
    menuHide.classList.remove('menu__close-btn--active');
    document.querySelector('.menu__list').classList.remove('menu__list--open');
    menuBtn.classList.add('menu__hamburger-btn--active');
})