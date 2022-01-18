const servicesSlider = () => {
  const sliderContainer = document.querySelector('.services-slider__container');
  const slideTrack = document.querySelector('.services-slider');
  const slide = document.querySelectorAll('.services-slide');
  const btnLeft = document.querySelector('.services__arrow--left');
  const btnRight = document.querySelector('.services__arrow--right');

  let position = 0;
  const slideToShow = 2;
  const slideToScroll = 1;
  const slideWidth = sliderContainer.clientWidth / slideToShow;
  const movePosition = slideToScroll * slideWidth;
  

  slide.forEach((item, index) => {
    item.style.minWidth = slideWidth + 'px';
  });

  btnLeft.addEventListener('click', () => {
    
    position -= movePosition;
    console.log(position);
    slideTrack.style.transform = 'translateX("position")' + 'px';
  });

  btnRight.addEventListener('click', () => {
  
    position += movePosition;

    console.log(position);
    slideTrack.style.transform = `translateX(${position})` + 'px';
  });
 
};
export default servicesSlider;
