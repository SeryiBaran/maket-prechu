'use strict';

// Импорты
import Swiper, { Navigation } from 'swiper';
import 'swiper/css';

import '@fontsource/open-sans';

import '../scss/standard.scss';
import '../scss/style.scss';

Swiper.use([Navigation]);

const swiper = new Swiper('.carousel', {
  navigation: {
    nextEl: '.carousel-button-next',
    prevEl: '.carousel-button-prev',
  },
});
