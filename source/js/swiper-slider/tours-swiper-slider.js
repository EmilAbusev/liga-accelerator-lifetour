const swiperButtonNext = document.querySelector('[data-tours-swiper="tours-swiper-next"]');
const swiperButtonPrev = document.querySelector('[data-tours-swiper="tours-swiper-prev"]');
const sliderTours = document.querySelector('[data-tours-slider="tours-slider"]');

const swiperTours = () => new window.Swiper(sliderTours, {
  navigation: {
    nextEl: swiperButtonNext,
    prevEl: swiperButtonPrev,
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      initialSlide: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      initialSlide: 1,
      spaceBetween: 18,
    },
    350: {
      slidesPerView: 1,
      initialSlide: 1,
      spaceBetween: 18,
    },
  },
});

const initSwiperTours = () => {
  if (document.body.contains(sliderTours)) {
    swiperTours();
  }
};

export {initSwiperTours};
