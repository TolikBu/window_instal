const clientSlider = () => {
  console.log('gfgfgf');
const slider = new Swiper('.swiper', {
  slidesPerView: 2,
  spaceBetween: 0,
  loop: true,

  navigation: {
    nextEl: '.benefits__arrow--left',
    prevEl: '.benefits__arrow--right',
  },

  autoplay: {
    delay: 1000,
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