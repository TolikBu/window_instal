const servicesSlider = () => {
  const sliderContainer = document.querySelector('.services-slider__container');
  const slideTrack = document.querySelector('.services-slider');
  // const slide = document.querySelectorAll('.services-slide');
  const btnNext = document.querySelector('.services__arrow--left');
  const btnPrev = document.querySelector('.services__arrow--right');
  const slideItem = document.querySelectorAll('.services-slide');
  const slideCount = slideItem.length;

  let position = 0;
  let slideToShow = 2;
  const slideToScroll = 1;
  const slideWidth = sliderContainer.clientWidth / slideToShow;
  let movePosition = slideToScroll * slideWidth;

  const mobile = (e) => {
    if (document.documentElement.clientWidth < 576) {
      console.log('работает');
    }

    return;
  };

  mobile();

  slideItem.forEach((item) => {
    item.style.minWidth = `${slideWidth}px`;
  });

  btnNext.addEventListener('click', () => {
    const itemsLeft = slideCount - (Math.abs(position) + slideToShow * slideWidth) / slideWidth;
    position -= itemsLeft >= slideToScroll ? movePosition : itemsLeft * slideWidth;

    setPositon();
    checkBtn();
  });

  btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / slideWidth;
    position += itemsLeft >= slideToScroll ? movePosition : itemsLeft * slideWidth;

    setPositon();
    checkBtn();
  });

  const setPositon = () => {
    slideTrack.style.transform = `translateX(${position}px)`;
  };

  const checkBtn = () => {
    btnPrev.disabled = position === 0;
    // btnPrev.style.opacity = '0.4';
    btnNext.disabled = position <= -(slideCount - slideToShow) * slideWidth;
  };

  checkBtn();
};
export default servicesSlider;