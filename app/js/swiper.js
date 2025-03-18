import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const swiperSection = document.querySelector(".swiper-main")
if (swiperSection.querySelector(".swiper")){
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