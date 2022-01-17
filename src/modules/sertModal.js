const sertModal = () => {
  const sertBloc = document.querySelectorAll('.document-inner');
  const modalSert = document.createElement('div');
  const body = document.querySelector('body');
  modalSert.className = 'certificate';
  
  const style = () => {
    body.append(modalSert);
    modalSert.style.display = 'block';
    
  };

  sertBloc.forEach((elem) => {
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      style();
      console.log(modalSert);
    });
  });
};

export default sertModal;
