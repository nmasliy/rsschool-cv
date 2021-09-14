document.addEventListener('DOMContentLoaded', () => {

    // vars
    const $html = document.querySelector('html');
    const $header = document.querySelector('.header');
    const $headerBtn = document.querySelector('.header__btn');
    const $navigationItems = document.querySelectorAll('.navigation__list>li>a');

    const toggleMenu = () => {
        $headerBtn.classList.remove('active');
        $header.classList.toggle('active');
        $html.classList.toggle('block-scroll');
    }

    // Work only in mobile devices which width <= 768
    if (window.innerWidth <= 768) {
        // Listeners
        $headerBtn.addEventListener('click', toggleMenu);
        $navigationItems.forEach(item => item.addEventListener('click', toggleMenu));
    }

})