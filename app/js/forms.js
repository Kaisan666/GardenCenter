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
    const phone = form.querySelector('.popup-form__phone.field');
    const name = form.querySelector('.popup-form__name');
    const checkbox = form.querySelector('.checkbox-field');
    console.log(phone.querySelector('.field__placeholder-content').textContent);
    const inputs = { phone, name, checkbox };
    const Getmessages = () => {
      const messages = [];
      Object.values(inputs).forEach((input) => {
        messages.push(input.querySelector('.field__placeholder-content').textContent);
      });
      return messages;
    };
    const messages = Getmessages()
    

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log(phone, checkbox);
      const formData = validate.collectFormValues(form, { trim: true, nullify: false });
      const errors = validate(formData, constraints);
        Object.values(inputs).forEach((input, index) =>{
          console.log(messages[index])
          input.classList.remove("field--error")
          input.querySelector(".field__placeholder-content").textContent = messages[index]
        })
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
        console.log(errors);
        for (let error in errors) {
          console.log();
          console.log(error);
          inputs[error].classList.add('field--error');
          const placeholder = inputs[error].querySelector('.field__placeholder-content');
          placeholder.textContent = errors[error][0].split(' ').slice(1, errors[error][0].length).join(' ');
          console.log(placeholder);
        }
      }
    });
  });
});
