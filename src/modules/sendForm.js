const sendForm = ({ someElem = []}) => {
  const form = document.querySelectorAll('.form-horizontal');

  const validate = (list) => {
    let success = true;

    list.forEach((input) => {
      if (input.classList.contains('success')) {
        success = false;
      }

      if (list[0].value.length < 3)  {
        success = false;
      } else if (list[1].value.length < 18) {
        success = false;
      }
    });

    return success;
  };

  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());
  };

  form.forEach((elem) => {
    const formElements = elem.querySelectorAll('input');

    elem.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(elem);
      const formBody = {};

      formData.forEach((val, key) => {
        formBody[key] = val;
      });

      try {
        someElem.forEach(elem => {
        const element = document.getElementById(elem.id);
        if (elem.type === 'input') {
          formBody[elem.id] = element.value;
        }
      });
      } catch (error) {
        
      };

      if (validate(formElements)) {
        sendData(formBody)
          .then((data) => {
            formElements.forEach((input) => {
              input.value = '';
            });
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        alert('Введит имя не короче 3-х символов, телефон должен содержать 11 цифр');
      }
    });
  });
};

export default sendForm;
