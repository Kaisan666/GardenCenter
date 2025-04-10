import { Fancybox, Carousel, Panzoom } from '@fancyapps/ui';
import "@fancyapps/ui/dist/fancybox.css";
import IMask from 'imask';
import Swiper from 'swiper/bundle';
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


const triggers = document.querySelectorAll(".fancybox-trigger")

if (triggers){
  triggers.forEach( (trigger, index) => {
    trigger.addEventListener("click", () =>{
      // const index = trigger.dataset.index
      console.log(123)
      Fancybox.show([{
        src: "#photo-swiper",
        type: "clone",
        
      }], {
        on : {
          reveal : (event, fancybox, slide) => {

            console.log('Swiper готов!', event)
            console.log('Swiper готов!', fancybox["$content"])
            console.log('Swiper готов!', slide)
            console.log(document.querySelector(".fancybox__content"))
            const fancyBoxContainer = document.querySelector(".fancybox__container")
            const fancyboxContent = document.querySelector(".fancybox__content")
            const clonedSwiper = fancyBoxContainer.querySelector(".swiper")
            fancyboxContent.style = "background : transparent; padding : 0; width : calc(100% - 50px)"
            fancyboxContent.closest(".fancybox__slide").style = "padding : 0"
            clonedSwiper.style = "width : 100%"
            const swiper = new Swiper(clonedSwiper, {
              loop : true,
            pagination : {  
                el : ".item-swiper__pagination",
                clickable : true
            },
            navigation: {
                nextEl: '.item-swiper__button-next',
                prevEl: '.item-swiper__button-prev',
              },
              observer: true,
          observeParents: true, 
            slidesPerView: "1",
            spaceBetween : 10,
            }
          )
          swiper.slideTo(index, 0)
          },
          closing : (fancybox, slide) =>{
            console.log(123)
            console.log(document.querySelector(".fancybox__content"))
            const clonedSwiper = document.getElementById("photo-swiper--clone")
            console.log(clonedSwiper)
          }
        }
        
      })
    })
    
  })
}






