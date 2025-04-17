import { Fancybox } from '@fancyapps/ui';

import IMask from 'imask';
import validate from 'validate.js';
const maskOptions = {
  mask: '+{7}(000)000-00-00',
};

const formTriggers = document.querySelectorAll('.form-trigger');

formTriggers.forEach((formTrigger) => {
  formTrigger.addEventListener('click', () => {
    const card = formTrigger.closest('.offer-card');
    const form = card.querySelector('.popup-form');
    Fancybox.show([
      {
        src: form,
        type: 'inline',
        dragToClose: false,
      },
    ]);
    const constraints = {
      name: {
        length: {
          minimum: 2,
          tooShort: 'Слишком короткое имя',
        },
      },
      phone: {
        length: {
          is: 16,
          wrongLength: 'неверный номер телефона',
        },
      },
      checkbox: {
        inclusion: {
          within: [true],
          message: 'Необходимо согласиться с условиями',
        },
      },
    };

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('.popup-form__name');
      const phone = form.querySelector('.popup-form__phone.field');
      const checkbox = form.querySelector('.checkbox-field');
      console.log(phone, checkbox)
      const inputs = { name, phone, checkbox };
      const formData = validate.collectFormValues(form, { trim: true, nullify: false });
      const errors = validate(formData, constraints);
      for (let error in errors){
        inputs[error].classList.remove("field--error")
    }
      const submit = async (data) => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: data,
          });
          if (response.ok) {
            alert('Все шик');
            setTimeout(() => {
              e.target.reset();
              Fancybox.close();
            }, 2500);
          } else {
            throw new Error('Ошибка при отправке формы');
          }
        } catch (error) {
          alert(error);
        }
      };
      if (!errors) {
        submit(formData);
      } else {
        console.log(errors)
        for (let error in errors){
            console.log()
            console.log(error)
            inputs[error].classList.add("field--error")
            const placeholder = inputs[error].querySelector('.field__placeholder-content')
            placeholder.textContent = errors[error][0].split(' ').slice(1, errors[error][0].length).join(" ")
            
            console.log(placeholder)
        }
      }
    });
  });
});
