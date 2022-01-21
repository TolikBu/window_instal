const clientSlider = () => {
  const slider = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,
  centeredSlides: true,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  breakpoints: {
    576: {
      slidesPerView: 3,
    },
  },
  
  navigation: {
    nextEl: '.benefits__arrow--left',
    prevEl: '.benefits__arrow--right',
  },
});
};

export default clientSlider;