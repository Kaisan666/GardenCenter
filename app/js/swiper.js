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
// const newItems = document.querySelector(".new-items__swiper")
// if (newItems) {
//     const newItemsSwiper = newItems.querySelector(".swiper")
//     new Swiper(newItemsSwiper, {
//         pagination : {
//             el : ".item-swiper__pagination",
//             clickable : true
//         },
//         navigation: {
//             nextEl: '.item-swiper__button-next',
//             prevEl: '.item-swiper__button-prev',
//           },
//         slidesPerView: 1.5,
//         // autoHeight : true
//         spaceBetween : 32,
//         breakpoints : {
//             765 : {
//                 slidesPerView : 4
//             }
//         },
//     })
// }
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
        slidesPerView: 2,
        breakpoints : {
            1065 : {
                slidesPerView : 2
            }
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
        // slidesPerView: 2,
        // autoHeight : true
        spaceBetween : 10,
    })
}
// const similars = document.querySelector(".product-details__swiper-similar")
// if(similars){
//     const similarProductsSwiper = similars.querySelector(".swiper")
//     new Swiper(similarProductsSwiper, {
//         pagination : {
//             el : ".item-swiper__pagination",
//             clickable : true
//         },
//         navigation: {
//             nextEl: '.item-swiper__button-next',
//             prevEl: '.item-swiper__button-prev',
//           },
//         slidesPerView: 1.5,
//         // autoHeight : true
//         spaceBetween : 32,
//         breakpoints : {
//             765 : {
//                 slidesPerView : 4
//             }
//         },
//     })
// }
// const watched = document.querySelector(".product-details__swiper-watched")
// if(watched){
//     const watchedSwiper = watched.querySelector(".swiper")
//     new Swiper(watchedSwiper, {
//         pagination : {
//             el : ".item-swiper__pagination",
//             clickable : true
//         },
//         navigation: {
//             nextEl: '.item-swiper__button-next',
//             prevEl: '.item-swiper__button-prev',
//           },
//         slidesPerView: 1.5,
//         // autoHeight : true
//         spaceBetween : 32,
//         breakpoints : {
//             765 : {
//                 slidesPerView : 4
//             }
//         },
//     })
// }
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
            slidesPerView: 1.5,
            // autoHeight : true
            spaceBetween : 32,
            breakpoints : {
                765 : {
                    slidesPerView : 4
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
const breadcrumbs = document.querySelector(".breadcrumbs")
if(breadcrumbs){
    new Swiper(breadcrumbs.querySelector(".swiper"), {
        // slidesPerView: 2,
        // autoHeight : true
        slidesPerView: "auto",
    })
}