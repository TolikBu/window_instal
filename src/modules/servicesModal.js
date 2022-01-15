const servicesModal = () => {
  const btn = document.querySelectorAll('.btn-sm');
  const btnClose = document.querySelector('.services-modal__close');
  const modal = document.querySelector('.services-modal');
  const modalOverlay = document.querySelector('.overlay');

  btn.forEach((elem) => {
    elem.addEventListener('click', () => {
      modal.style.display = 'block';
      modalOverlay.style.display = 'block';
    });
  });

  modalOverlay.addEventListener('click', (e) => {
    if (!e.target.closest('.services-modal') || e.target.classList.contains('services-modal__close')) {
      modalOverlay.style.display = 'none';
      modal.style.display = 'none';
    }
  });
};

export default servicesModal;
