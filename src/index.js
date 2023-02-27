import './index.html';
import './index.scss';

import Swiper, { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

const menu = document.querySelector('.header__list')
const burger  = document.querySelector('.header__burger')

burger.addEventListener('click', () => {
    menu.classList.toggle('active')
    burger.classList.toggle('active')
})

const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".btn-next",
        prevEl: ".btn-prev",
      },
});


