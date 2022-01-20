const servicesModal = () => {
  const btn = document.querySelectorAll('.btn-sm');
  const modal = document.querySelector('.services-modal');
  const modalOverlays = document.querySelector('.overlays');

  btn.forEach((elem) => {
    elem.addEventListener('click', () => {
      modal.style.display = 'block';
      modalOverlays.style.display = 'block';
    });
  });

  modalOverlays.addEventListener('click', (e) => {
    if (!e.target.closest('.services-modal') || e.target.classList.contains('services-modal__close')) {
      modalOverlays.style.display = 'none';
      modal.style.display = 'none';
    }
  });
};

export default servicesModal;
