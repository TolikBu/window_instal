const sertModal = () => {
  const sertBloc = document.querySelectorAll('.document-inner');
  const modalSert = document.createElement('div');
  const btnClose = document.createElement('span');
  const body = document.querySelector('body');
  const modalOverlay = document.querySelector('.overlay3');

  modalSert.className = 'certificate';
  btnClose.className = 'certificate-close';
  btnClose.textContent = 'x';

  const style = () => {
    let height = window.innerHeight;

    body.append(modalSert);
    modalSert.append(btnClose);

    modalSert.style.display = 'block';
    modalSert.style.height = height + 'px';
    modalSert.style.width = height / 1.4 + 'px';
    

    modalOverlay.style.display = 'block';
  };

  sertBloc.forEach((elem) => {
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      style();
    });
  });

  modalOverlay.addEventListener('click', (e) => {
    e.preventDefault();
    modalOverlay.style.display = 'none';
    modalSert.style.display = 'none';
  });

  btnClose.addEventListener('click', (e) => {
    e.preventDefault();
    modalOverlay.style.display = 'none';
    modalSert.style.display = 'none';
  });
};
export default sertModal;
