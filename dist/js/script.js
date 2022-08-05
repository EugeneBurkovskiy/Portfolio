const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});
closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.scale__item-percent'),
    lines = document.querySelectorAll('.scale__item-inline');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});