var w;
function widthfun() {
    w = window.innerWidth;
    const nav = document.querySelector('.hamburger-menu');
    if (w >= 700) {
        nav.classList.remove('hamburger-menu-active');
    }
    else {

    }
}
const hamburger = () => {
    const burger = document.querySelector('.hamburger-link');
    const nav = document.querySelector('.hamburger-menu');
    burger.addEventListener('click', () => {
        nav.classList.toggle('hamburger-menu-active');
    })
}
hamburger();
