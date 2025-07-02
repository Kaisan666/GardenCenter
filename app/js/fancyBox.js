import { Fancybox, Carousel, Panzoom } from '@fancyapps/ui';

import IMask from 'imask';
import Swiper from 'swiper/bundle';
function lockTouch(e) {
    e.preventDefault();

}
import {checkAspectRatio} from "./swiper"
const photoSwipers = document.querySelectorAll('.photo-swiper');
if (photoSwipers.length > 0) {
  photoSwipers.forEach((photoSwiper) => {

    const triggers = photoSwiper.querySelectorAll('.fancybox-trigger');
    if (triggers.length > 0) {
      triggers.forEach((trigger, index) => {
        trigger.addEventListener('click', (e) => {
          const photoSwiper = trigger.closest('.photo-swiper');
          const originalSwiper = photoSwiper.swiperInstance
          const currentSlide = originalSwiper.activeIndex
          let swiper;
          Fancybox.show(
            [
              {
                src: photoSwiper,
                type: 'clone',
                dragToClose: false,
              },

            ],
            {
              on: {
                reveal: (event, fancybox, slide) => {
                  document.addEventListener('touchmove', lockTouch, { passive: false });
                  const clonedSwiper = fancybox.$content.querySelector('.swiper');
                  swiper = new Swiper(clonedSwiper, {
                    loop: true,
                    preloadImages: false,
                    lazy: true,
                    pagination: {
                      el: '.item-swiper__pagination',
                      dynamicBullets : true,
                      dynamicMainBullets : 1,
                    },
                    zoom: true,
                    on : {
                      slideChange : function(){
                        const activeSlide = this.slides[this.activeIndex]

                        if (activeSlide){
                          const currentImage = activeSlide.querySelector("img")
                          if (!currentImage.classList.contains("image-vertical") || !currentImage.classList.contains("image-horizontal")){
                            checkAspectRatio(currentImage)
                          }



                        }


                      }
                    },
                    navigation: {
                      nextEl: '.item-swiper__button-next',
                      prevEl: '.item-swiper__button-prev',
                    },
                    slidesPerView: '1',
                    spaceBetween: 10,
                  });
                  swiper.slideTo(currentSlide, 0);
                },
                destroy: () => {
                  document.documentElement.classList.remove('fancybox-open');
                  document.removeEventListener('touchmove', lockTouch);
                  swiper.destroy();
                },
              },
            }
          );
        });
      });
    }
  });
}

const videoTrigger = document.querySelectorAll('.video-trigger');

if (videoTrigger.length > 0) {
  videoTrigger.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const content = trigger.closest('.swiper-slide');
      const videoPlayer = content.querySelector('.video-player');
      const url = videoPlayer.getAttribute('data-videoUrl');
      videoPlayer.querySelector('iframe').setAttribute('src', url);
      Fancybox.show([
        {
          src: videoPlayer,
          type: 'inline',
          dragToClose: false,
        },
      ]);
    });
  });
}
