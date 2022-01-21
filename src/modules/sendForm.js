const sendForm = ({ someElem = [] }) => {
  const form = document.querySelectorAll('.form-horizontal');
  const statusBlock = document.createElement('div');
  const loadText = 'Загрузка...';
  const errorText = 'Ошибка...';
  const successText = 'Наш менеджер с вами свяжется!';

  form.forEach(elem => {
    console.log(elem);
  })

  statusBlock.style.color = 'green';

  const validate = (list) => {
    let success = true;

    list.forEach((input) => {
      if (input.classList.contains('success')) {
        success = false;
      }

      if (list[0].value.length < 3) {
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

  const submitForm = (elem) => {
    const formElements = elem.querySelectorAll('input');
    console.log(formElements);

    const formData = new FormData(elem);
    const formBody = {};

    statusBlock.textContent = loadText;
    elem.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    try {
      someElem.forEach((elem) => {
        const element = document.getElementById(elem.id);
        if (elem.type === 'input') {
          formBody[elem.id] = element.value;
        }
      });
    } catch (error) {}

    if (validate(formElements)) {
      sendData(formBody)
        .then((data) => {
          statusBlock.textContent = successText;
          setInterval(() => {
            statusBlock.remove(form);
          }, 2000);

          formElements.forEach((input) => {
            input.value = '';
          });
          return;
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
          setInterval(() => {
            statusBlock.remove(form);
          }, 1000);
        });
    } else {
      alert('Введит имя не короче 3-х символов, телефон должен содержать 11 цифр');
      statusBlock.textContent = errorText;
      return;
    }
  };

  try {
    if (!form) {
      throw new Error('Верните форму на место');
    }
    form.forEach(elem => {
      elem.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(elem);
        submitForm(elem);
      });
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;
