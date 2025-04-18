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
        presence: {
          allowEmpty: false,
          message: 'Поле обязательно для заполнения',
        },
        length: {
          minimum: 2,
          tooShort: 'Слишком короткое имя',
        },
      },
      phone: {
        presence: {
          allowEmpty: false,
          message: 'Поле обязательно для заполнения',
        },
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
    const formMessage = document.querySelector('.form-message');
    // console.log(phone.querySelector('.field__placeholder-content').textContent);
    const inputs = { phone, name, checkbox };
    // const Getmessages = () => {
    //   const messages = [];
    //   Object.values(inputs).forEach((input) => {
    //     messages.push(input.querySelector('.field__placeholder-content').textContent);
    //   });
    //   return messages;
    // };
    // const messages = Getmessages()

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // console.log(phone, checkbox);

      const formData = validate.collectFormValues(form, { trim: true, nullify: false });
      const errors = validate(formData, constraints);
      // console.log(validate(formData, constraints));
      Object.values(inputs).forEach((input, index) => {
        // console.log(messages[index])
        input.classList.remove('field--error');
        // input.querySelector(".field__placeholder-content").textContent = messages[index]
      });
      const submit = async (data) => {
        const message = document.createElement('div');
        message.classList.add('popup-form__form-message');
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: data,
          });
          if (response.ok) {
            // alert('Все шик');
            // formMessage.classList.add("form-message--success")
            // formMessage.querySelector(".form-message__text").textContent = "Форма успешно отправлена, Спасибо!"
            message.textContent = ' Форма успешно отправлена, Спасибо! ';
          } else {
            throw new Error('Ошибка при отправке формы');
          }
        } catch (error) {
          // formMessage.classList.add('form-message--error');
          // formMessage.querySelector('.form-message__text').textContent = `${error.message}`;
          message.textContent = 'Ошибка при отправке формы';
        } finally {
          form.querySelector('form').remove();
          form.querySelector('.popup-form__wrapper-form').appendChild(message);
          // setTimeout(() => {
          //   window.location.reload();
          //   // formMessage.classList.remove("form-message--success")
          // }, 2500);
        }
      };
      if (!errors) {
        submit(formData);
      } else {
        console.log(errors);
        for (let error in errors) {
          // console.log();
          // console.log(error);
          inputs[error].classList.add('field--error');
          // const placeholder = inputs[error].querySelector('.field__placeholder-content');
          // placeholder.textContent = errors[error][0].split(' ').slice(1, errors[error][0].length).join(' ');
          // console.log(placeholder);
        }
      }
    });
  });
});
