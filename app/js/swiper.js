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
    spaceBetween : 20,
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
        observer: true, // Включаем отслеживание
  observeParents: true,
  loop: true,
        slidesPerView: 2,
        breakpoints : {
            650 : {
                slidesPerView : 3,
            },
            925 : {
                slidesPerView : 4
            },
            1023 : {
                slidesPerView : 1
            },
            1150 : {
                slidesPerView : 2
            },

        },
        // autoHeight : true
        spaceBetween : 10,
    })
}
const productDetail = document.querySelector(".product-details__swiper-item")
if(productDetail){
    const productDetailSwiper = productDetail.querySelector(".swiper")
    new Swiper(productDetailSwiper, {
        pagination : {
            el : ".item-swiper__pagination",
            clickable : true
        },
        navigation: {
            nextEl: '.item-swiper__button-next',
            prevEl: '.item-swiper__button-prev',
          },
        slidesPerView : "auto",
        spaceBetween : 10,
    })
}

const newItems = document.querySelector(".new-items")
if(newItems){
    new Swiper(newItems.querySelector(".swiper"), {
        pagination : {
            el : ".item-swiper__pagination",
            clickable : true
        },
        navigation: {
            nextEl: '.item-swiper__button-next',
            prevEl: '.item-swiper__button-prev',
            },
        loop : true,
        slidesPerView: 1.5,
        spaceBetween : 24,
        breakpoints : {
            765 : {
                slidesPerView : 4,
                spaceBetween : 32,
            }
        },
    })
}
const productsSwipers = document.querySelectorAll(".products-swiper")
if(productsSwipers){

    productsSwipers.forEach(productSwiper => {
        const swiper = productSwiper.querySelector(".swiper")
        new Swiper(swiper, {
            pagination : {
                el : ".item-swiper__pagination",
                clickable : true
            },
            navigation: {
                nextEl: '.item-swiper__button-next',
                prevEl: '.item-swiper__button-prev',
              },
            loop : true,
            slidesPerView: 1.5,
            spaceBetween : 24,
            breakpoints : {
                765 : {
                    slidesPerView : 4,
                    spaceBetween : 32,
                }
            },
        })
    })
    
}
const categories = document.querySelector(".categories")
if (categories){
    new Swiper(categories.querySelector(".swiper"), {
        slidesPerView: "auto",
        noSwipingClass : "swiper-no-swiping",
        noSwiping : false,
        breakpoints : {
            1023 : {
                noSwiping : true,
            }
        },
        on : {
            resize : function(){
                this.slideTo(0)
            }
        }
    })
}
const breadcrumbs = document.querySelectorAll(".breadcrumbs")
console.log(breadcrumbs)
if(breadcrumbs){
    breadcrumbs.forEach(breadcrumb => {
        new Swiper(breadcrumb.querySelector('.swiper'), {
            slidesPerView: "auto",
            noSwiping : false,
            spaceBetween : 8,
        })
    })
    
}

const photoSwipers = document.querySelectorAll(".photo-swiper")
if (photoSwipers){
    photoSwipers.forEach(photoSwiper => {
        new Swiper(photoSwiper.querySelector(".swiper"), {
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
            spaceBetween : 100,
        })
    })
}