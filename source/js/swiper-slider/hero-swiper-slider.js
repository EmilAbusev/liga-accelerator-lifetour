const sliderHero = document.querySelector('[data-hero-slider="hero-slider"]');
const swiperHeroPagination = document.querySelector('[data-hero-pagination="hero-swiper-pagination"]');

const setSwiperHero = () => {
  return new window.Swiper(sliderHero, {
    pagination: {
      el: swiperHeroPagination,
      clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
  });
};

const initSwiperHero = () => {
  if (document.body.contains(sliderHero)) {
    setSwiperHero();
  }
};

export {initSwiperHero};
