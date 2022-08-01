'use strict';

// Импорты
import Swiper, { Navigation } from 'swiper';
import 'swiper/css';

// import '@fontsource/open-sans'; не работает

const fonts = [
  'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap',
];

fonts.forEach(font => {
  document.head.innerHTML += `<style>@import url('${font}');</style>`;
})

import '../scss/standard.scss';
import '../scss/style.scss';

Swiper.use([Navigation]);

const swiper = new Swiper('.carousel', {
  navigation: {
    nextEl: '.carousel-button-next',
    prevEl: '.carousel-button-prev',
  },
});
