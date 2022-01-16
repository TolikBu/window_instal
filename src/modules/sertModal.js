const sertModal = () => {
  const modal = document.querySelectorAll('.document');
  

  modal.forEach((elem) => {
    
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      
    });
  });
};

export default sertModal;
