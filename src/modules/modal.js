const modal = () => {
  const btn = document.querySelector('.button');
  const modal = document.querySelector('.header-modal');
  const modalOverlay = document.querySelector('.overlay');

  btn.addEventListener('click', () => {
    modalOverlay.style.display = 'block';
    modal.style.display = 'block';
  });

  modalOverlay.addEventListener('click', (e) => {
    if (!e.target.closest('.header-modal') || e.target.classList.contains('header-modal__close')) {
      modalOverlay.style.display = 'none';
      modal.style.display = 'none';
    }
  });
};

export default modal;


//  arr.forEach((elem) => {
//    elem.addEventListener('click', () => {
//      modalOverlay.style.display = 'block';
//      modal.style.display = 'block';
//      modalServices.style.display = 'block';
//    });
//  });

//  modalOverlay.addEventListener('click', (e) => {
//    if (!e.target.closest('.overlay') || e.target.classList.contains('header-modal__close') || e.target.classList.contains('services-modal__close')) {
//      modalOverlay.style.display = 'none';
//      modal.style.display = 'none';
//      modalServices.style.display = 'none';
//    }
//  });