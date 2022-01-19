const clientSlider = () => {
  const sliderContainer = document.querySelector('.benefits-inner');
  const sliderTrack = document.querySelector('.benefits-wrap');
  const itemSlide = document.querySelectorAll('.benefits__item');
  const btnPrev = document.querySelector('.benefits__arrow--left');
  const btnNext = document.querySelector('.benefits__arrow--right');

  let position = 0;
  const slideToShow = 3;
  const slideToScroll = 1;
  const itemWidth = sliderContainer.clientWidth / slideToShow;
  const movePosition = slideToScroll * itemWidth;

  itemSlide.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
  });

  btnPrev.addEventListener('click', () => {
    position -= movePosition;

    setPosition();
  });

  btnNext.addEventListener('click', () => {
    position += movePosition;

    setPosition();
  });


  const setPosition = () => { 
    sliderTrack.style.transform = `translateX(${position}px)`;
  };
  set
  
};

export default clientSlider;

// const slider = new Swiper('.swiper', {
//   slidesPerView: 1,
//   spaceBetween: 0,

//   navigation: {
//     nextEl: '.benefits__arrow--left',
//     prevEl: '.benefits__arrow--right',
//   },

//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },

//   breakpoints: {
//     576: {
//       slidesPerView: 1,
//       spaceBetween: 20,
//     },
//   },
// });
