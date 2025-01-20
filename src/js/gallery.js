import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: -24,
  centeredSlides: true,

  breakpoints: {
    1200: {
      slidesPerView: 1.589,
      spaceBetween: 116,
      centeredSlides: true,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next-slide',
    prevEl: '.swiper-button-prev-slide',
  },
  grabCursor: true,
  loop: true,
});
