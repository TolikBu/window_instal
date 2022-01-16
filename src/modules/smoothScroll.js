const smoothScroll = () => {
  const btnScroll = document.getElementById('smooth-scroll');
  const header = document.getElementById('header');
  btnScroll.style.display = 'none';

  btnScroll.addEventListener('click', (e) => {
    e.preventDefault();
    header.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    btnScroll.style.display = 'none';
  });

  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      btnScroll.style.display = 'block';
    } else {
      btnScroll.style.display = 'none';
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  
};

export default smoothScroll;
