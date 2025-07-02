import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export function checkAspectRatio(img, attempt = 0){
    console.log(img)
    console.log(2112341312321)
    console.log(img.naturalWidth)
    console.log(img.naturalHeight)
    const MAX_ATTEMPS = 50
    if (img.naturalHeight > img.naturalWidth){
        img.classList.add("image-vertical")
        return
    }
    else if(img.naturalHeight === 0 && img.naturalWidth === 0)
    {
        setTimeout(() => {
            checkAspectRatio(img, attempt + 1)
        }, 100)
    }
    else{
        img.classList.add("image-horizontal")
        return
    }
}

const swiperSection = document.querySelector(".swiper-main")
if (swiperSection){
const mainSwiper = swiperSection.querySelector(".swiper")
new Swiper(mainSwiper, {
    loop : true,
    pagination : {
        el : ".swiper-main__pagination",
        // clickable : true,
        dynamicBullets : true,
        dynamicMainBullets : 1,
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
    const isLooped = blogSwiper.querySelectorAll(".swiper-slide")
    new Swiper(blogSwiper, {
        pagination : {
            el : ".item-swiper__pagination",
            // clickable : true,
            dynamicBullets : true,
            dynamicMainBullets : 1,
        },
        navigation: {
            nextEl: '.item-swiper__button-next',
            prevEl: '.item-swiper__button-prev',
          },
        observer: true, // Включаем отслеживание
  observeParents: true,
  loop: isLooped,
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
    
    const productSwiper = new Swiper(productDetailSwiper, {
        pagination : {
            el : ".item-swiper__pagination",
            dynamicBullets : true,
            dynamicMainBullets : 1,
        },
        loop : true,
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
    const isLooped = newItems.querySelector(".swiper").querySelectorAll(".swiper-slide").length > 4
    const newItemsSwiper = new Swiper(newItems.querySelector(".swiper"), {
        pagination : {
            el : ".item-swiper__pagination",
            // clickable : true,
            dynamicBullets : true,
            dynamicMainBullets : 1,
        },
        navigation: {
            nextEl: '.item-swiper__button-next',
            prevEl: '.item-swiper__button-prev',
            },
        loop : isLooped,
        slidesPerView: 1.48,
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
if(productsSwipers.length > 0){
    productsSwipers.forEach(productSwiper => {
        const swiper = productSwiper.querySelector(".swiper")
        const isLooped = swiper.querySelectorAll(".swiper-slide").length > 4
        new Swiper(swiper, {
            pagination : {
                el : ".item-swiper__pagination",
                dynamicBullets : true,
                dynamicMainBullets : 1,
            },
            navigation: {
                nextEl: '.item-swiper__button-next',
                prevEl: '.item-swiper__button-prev',
              },
            loop : isLooped,
            slidesPerView: 1.47,
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
if(breadcrumbs.length > 0){
    breadcrumbs.forEach(breadcrumb => {
        new Swiper(breadcrumb.querySelector('.swiper'), {
            slidesPerView: "auto",
            noSwiping : false,
            spaceBetween : 8,
        })
    })
    
}

const photoSwipers = document.querySelectorAll(".photo-swiper")
if (photoSwipers.length > 0){
    photoSwipers.forEach(photoSwiper => {
        const slides = photoSwiper.querySelectorAll(".swiper-slide")
        slides.forEach(slide => {
        })
        const originalSwiper = new Swiper(photoSwiper.querySelector(".swiper"), {
            loop : true,
            pagination : {
                el : ".item-swiper__pagination",
                dynamicBullets : true,
                dynamicMainBullets : 1,
            },

            on : {
                slideChange : function(){
                    const activeSlide = this?.slides[this.activeIndex]
                    if (activeSlide){
                        console.log(activeSlide)
                        const currentImage = activeSlide.querySelector("img")
                        console.log(currentImage)
                        if (!currentImage.classList.contains("image-vertical") || !currentImage.classList.contains("image-horizontal")){
                            checkAspectRatio(currentImage)
                        }



                    }


                },
            },
            navigation: {
                nextEl: '.item-swiper__button-next',
                prevEl: '.item-swiper__button-prev',
              },
            slidesPerView: 1,
            spaceBetween : 100,
        })

        photoSwiper.swiperInstance = originalSwiper;
    })
}
const blogPageSwipers = document.querySelectorAll(".blog-page__swiper")
if (blogPageSwipers.length > 0){
    blogPageSwipers.forEach(blogPageSwiper => {
        const isLooped = blogPageSwiper.querySelectorAll(".swiper-slide").length > 4
        new Swiper(blogPageSwiper.querySelector(".swiper"), {
            loop : isLooped,
            pagination : {
                el : ".item-swiper__pagination",
                // clickable : true,
                dynamicBullets : true,
                dynamicMainBullets : 1,
            },
            navigation: {
                nextEl: '.item-swiper__button-next',
                prevEl: '.item-swiper__button-prev',
              },
            slidesPerView: "1",
            spaceBetween : 32,
            breakpoints : {
                1315 : {
                    slidesPerView: "5",
            spaceBetween : 32,
                },
                765 : {
                    slidesPerView: "4",
            spaceBetween : 32,
                },
                375 : {
                    slidesPerView: "2",
            spaceBetween : 32,
                },
            },
        })
    })
}