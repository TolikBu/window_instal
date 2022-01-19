const clientSlider = () => {
const slider = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 0,
  loop: true,

  navigation: {
    nextEl: '.benefits__arrow--left',
    prevEl: '.benefits__arrow--right',
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  breakpoints: {
    576: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});
};

export default clientSlider;