import { Fancybox, Carousel, Panzoom } from '@fancyapps/ui';

import IMask from 'imask';
import Swiper from 'swiper/bundle';



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
      const url = videoPlayer.getAttribute("data-videoUrl")
      videoPlayer.querySelector("iframe").setAttribute("src", url)
      console.log(videoPlayer)
      Fancybox.show([{
        src : videoPlayer,
        type : "inline",
        dragToClose : false

      }])
    })
  })
}






