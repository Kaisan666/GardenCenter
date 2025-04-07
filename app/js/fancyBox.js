import { Fancybox, Carousel, Panzoom } from '@fancyapps/ui';
import "@fancyapps/ui/dist/fancybox.css";
import IMask from 'imask';
const popUps = document.querySelectorAll(".popup-form")
if (popUps){
  popUps.forEach(popUp => {
    const message = popUp.querySelector(".popup-form__input-message")
    const name = popUp.querySelector(".popup-form__input-name")
    const phone = popUp.querySelector(".popup-form__input-phone")
    console.log(message)
    console.log(name)
    console.log(phone)
    
    const maskOptions = {
      mask: '+{7}(000)000-00-00'
    };
    const mask = IMask(phone, maskOptions);
  })
}

Fancybox.bind('[data-fancybox]', {
    // Custom options for all galleries

  });