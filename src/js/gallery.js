import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 24,

  breakpoints: {
    1200: {
      slidesPerView: 1,
      spaceBetween: 116,
      centeredSlides: true,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  grabCursor: true,
  loop: true,
});

const swiperBullets = document.querySelectorAll('.swiper-pagination-bullet');
swiperBullets.forEach(bullet => {
  bullet.setAttribute('style', 'background:#ffffff;');
});
