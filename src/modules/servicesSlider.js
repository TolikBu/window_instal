const servicesSlider = () => {
  const sliderContainer = document.querySelector('.services-slider__container');
  const slideTrack = document.querySelector('.services-slider');
  const slide = document.querySelectorAll('.services-slide');
  const btnLeft = document.querySelector('.services__arrow--left');
  const btnRight = document.querySelector('.services__arrow--right');

  const slideCount = slide.length;
  const slideToScroll = 1;
  let position = 0;
  let slideToShow = 2;
  // if (document.clientWidth < 576) {
  //   slideToShow = 1;
  // } 
  const slideWidth = sliderContainer.clientWidth / slideToShow;
  let movePosition = slideToScroll * slideWidth;
  

  slide.forEach((item, index) => {
    item.style.maxWidth = slideWidth + 'px';
  });

  btnLeft.addEventListener('click', () => {
    position -= movePosition;
    
    setPositon();
    checkBtn();
  });

  btnRight.addEventListener('click', () => {
    position += movePosition;
   
    setPositon();
    checkBtn();
  });

  const setPositon = () => {
    slideTrack.style.transform = `translateX(${position}px)`;
  };
 
  const checkBtn = () => {
    btnRight.setAttribute('disabled', position === 0);
    btnRight.style.opacity = '0.4';
    btnLeft.setAttribute('disabled', position <= -(slideCount - slideToShow) * slideWidth);
    console.log(-(slideCount - slideToShow) * slideWidth);
  };


  checkBtn();
};
export default servicesSlider;
