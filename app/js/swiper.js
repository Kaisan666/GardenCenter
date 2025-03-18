import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


new Swiper(".swiper-main", {
    pagination : {
        el : ".main-swiper-pagination",
        clickable : true
    },
    navigation: {
        nextEl: '.main-swiper-button-next',
        prevEl: '.main-swiper-button-prev',
      },
    slidesPerView: 1,
    // autoHeight : true
})