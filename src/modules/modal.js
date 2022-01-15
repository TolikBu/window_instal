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
