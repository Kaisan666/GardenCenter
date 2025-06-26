
const header = document.querySelector(".header")
const badge = header.querySelector(".info-badge")
import { headerOffset} from "./hidingHeader"
if(badge){
    const closeBtn = badge.querySelector(".close-btn")
    closeBtn.addEventListener("click", () =>{
        // header.classList.add("header__fixed--hidden")
        badge.classList.add("info-badge--hidden")
        setTimeout(()=>{
        headerOffset.value = header.offsetHeight

        }, 10)
    })
}






const MESSAGES = {
    "error" :{
        "message" : "Что-то пошло не так… Не удалось отправить заявку. Попробуйте ещё раз чуть позже или свяжитесь с нами напрямую",
        "imgURL" : "/assets/icons/sprite.svg#formError",
    },
    "success" :{
        "message" : "Что-то пошло не так… Не удалось отправить заявку. Попробуйте ещё раз чуть позже или свяжитесь с нами напрямую",
        "imgURL" : "/assets/icons/sprite.svg#formSuccess",
    },
    "subscribe" :{
"message" : "Розыгрыши призов, информация о мероприятиях и все самое главное о Садовом центре на Атербекова!",
        "imgURL" : "/assets/icons/sprite.svg#tg",
    },
}