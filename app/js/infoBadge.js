
export const INSTANCES = {
    "error" :{
        "message" : "Что-то пошло не так… Не удалось отправить заявку. Попробуйте ещё раз чуть позже или свяжитесь с нами напрямую",
        "imgURL" : "/assets/icons/sprite.svg#formError",
    },
    "success" :{
        "message" : "Что-то пошло не так… Не удалось отправить заявку. Попробуйте ещё раз чуть позже или свяжитесь с нами напрямую",
        "imgURL" : "/assets/icons/sprite.svg#formSuccess",
    },
    "telegram" :{
"message" : "Розыгрыши призов, информация о мероприятиях и все самое главное о Садовом центре на Атербекова!",
        "imgURL" : "/assets/icons/sprite.svg#tg",
    },
}
function getCookie(name) {
        const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return match ? match[2] : null;
    }

    function setCookie(name, value, days) {
        const d = new Date();
        d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${value}; expires=${d.toUTCString()}; path=/`;
    }




const header = document.querySelector(".header")
const badge = header.querySelector(".info-badge")
import {headerPartsHeights, calculateHeaderHeight} from "./hidingHeader"
if(badge){
    if (!getCookie("tgBadge")){

        badge.classList.add("info-badge--telegram")
        badge.querySelector(".info-badge__text").textContent = "Розыгрыши призов, информация о мероприятиях и все самое главное о Садовом центре на Атербекова!"
        badge.querySelector(".info-badge__icon").querySelector("use").setAttribute("href", "/assets/icons/sprite.svg#tg")
        badge.classList.remove("info-badge--hidden")
        badge.addEventListener("transitionend", ()=>{
            headerPartsHeights.headerBadgeHeight = badge.offsetHeight
            console.log(headerPartsHeights.headerBadgeHeight);
            
            calculateHeaderHeight()
        })
        
    }
    const closeBtn = badge.querySelector(".close-btn")
    closeBtn.addEventListener("click", () =>{
        // header.classList.add("header__fixed--hidden")
        if (badge.classList.contains("info-badge--telegram")){
            setCookie("tgBadge", "closed", 0.125)
        }
        badge.classList.add("info-badge--hidden")
        badge.addEventListener("transitionend", ()=>{
            headerPartsHeights.headerBadgeHeight = badge.offsetHeight
            console.log(headerPartsHeights.headerBadgeHeight);
            
            calculateHeaderHeight()
        })
        console.log(headerPartsHeights);
        
    })
}


