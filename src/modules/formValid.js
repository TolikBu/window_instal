const formValid = () => {
  const form = document.querySelectorAll('.order-form');
  const calcSquare = document.getElementById('calc-input');

  const inputName = document.querySelectorAll('[name="fio"]');

  inputName.forEach(elem => {
    elem.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^а-яА-Яa-zA-Z\s]/gi, '');
    });

    elem.addEventListener('blur', (e) => {
      e.target.value = e.target.value.trim();

      if (e.target.classList.contains('required') && e.target.value) {
        e.target.value = e.target.value
          .split(/\ +/)
          .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
          .join(' ');
      }
      e.target.value = e.target.value;
    });
  });

  calcSquare.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, '');
  });

};

export default formValid;
