'use strict';

// Импорты
import Swiper, { Navigation, Manipulation } from 'swiper';
import 'swiper/css';

import '@fontsource/open-sans';

import '../scss/standard.scss';
import '../scss/style.scss';

Swiper.use([Navigation, Manipulation]);

const swiper = new Swiper('.carousel', {
  navigation: {
    nextEl: '.carousel-button-next',
    prevEl: '.carousel-button-prev',
  },
});

for (let _ = 0; _ < 3; _++) {
  swiper.appendSlide(
    `<div class="swiper-slide">
      <div class="wrapper">
        <img class="slide-img" src="./src/img/iphone_215.png" />
        <div class="slide-text">
          <h3>Lorem Ipsum is simply</h3>
          <span>dummy text of the<br />printing & typesetting</span>
          <a href="#!"><img src="./src/img/shape_2_84.png" /> Sign up now</a>
        </div>
      </div>
    </div>`,
  );
}
