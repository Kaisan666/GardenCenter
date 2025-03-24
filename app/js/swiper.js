import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const swiperSection = document.querySelector(".swiper-main")
if (swiperSection){
const mainSwiper = swiperSection.querySelector(".swiper")
new Swiper(mainSwiper, {
    loop : true,
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
        spaceBetween : 32,
    })
}
const blog = document.querySelector(".blog__swiper")
if(blog){
    const blogSwiper = blog.querySelector(".swiper")
    new Swiper(blogSwiper, {
        pagination : {
            el : ".item-swiper__pagination",
            clickable : true
        },
        navigation: {
            nextEl: '.item-swiper__button-next',
            prevEl: '.item-swiper__button-prev',
          },
        slidesPerView: 1,
        breakpoints : {
            1065 : {
                slidesPerView : 2
            }
        },
        // autoHeight : true
        spaceBetween : 10,
    })
}