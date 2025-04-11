import { Fancybox, Carousel, Panzoom } from '@fancyapps/ui';

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
      const photoSwiper = trigger.closest(".photo-swiper")
      let swiper
      Fancybox.show([{
        src: photoSwiper,
        type: "clone",
        dragToClose : false,
        
      }], {
        on : {
          reveal : (event, fancybox, slide) => {
            console.log(event.$container)
            console.log(fancybox.$content)
            console.log(slide)
            const clonedSwiper = fancybox.$content.querySelector(".swiper")
            // fancyboxContent.style = "background : transparent; padding : 0; width : calc(100% - 50px) ; max-width : fit-content"
            // fancyboxContent.closest(".fancybox__slide").style = "padding : 0"
            // clonedSwiper.style = "width : 100%"
            swiper = new Swiper(clonedSwiper, {
              loop : true,
            pagination : {  
                el : ".item-swiper__pagination",
                clickable : true
            },
            navigation: {
                nextEl: '.item-swiper__button-next',
                prevEl: '.item-swiper__button-prev',
              },
            slidesPerView: "1",
            spaceBetween : 10,
            }
          )
          swiper.slideTo(index, 0)
          },
          closing : () =>{
            swiper.destroy()
          }
        }
        
      })
    })
    
  })
}

const videoTrigger = document.querySelectorAll(".video-trigger")

if (videoTrigger){
  videoTrigger.forEach(trigger => {
    trigger.addEventListener("click", () => {
      const content = trigger.closest(".swiper-slide")
      console.log(content)
      const videoPlayer = content.querySelector(".video-player")
      console.log(videoPlayer)
      Fancybox.show([{
        src : videoPlayer,
        type : "inline",
        dragToClose : false

      }])
    })
  })
}






