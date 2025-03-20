import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const swiperSection = document.querySelector(".swiper-main")
if (swiperSection){
const mainSwiper = swiperSection.querySelector(".swiper")
new Swiper(mainSwiper, {
    pagination : {
        el : ".swiper-main__pagination",
        clickable : true
    },
    navigation: {
        nextEl: '.swiper-main__button-next',
        prevEl: '.swiper-main__button-prev',
      },
    slidesPerView: 1,
    // autoHeight : true
    spaceBetween : 20,
})
}
const newItems = document.querySelector(".new-items__swiper")
if (newItems) {
    const newItemsSwiper = newItems.querySelector(".swiper")
    new Swiper(newItemsSwiper, {
        pagination : {
            el : ".item-swiper__pagination",
            clickable : true
        },
        navigation: {
            nextEl: '.item-swiper__button-next',
            prevEl: '.item-swiper__button-prev',
          },
        slidesPerView: 4,
        // autoHeight : true
        spaceBetween : 20,
    })
}