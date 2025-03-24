const marquees = document.querySelectorAll(".marquee")
if (marquees){
const addAnimation = () =>{
    marquees.forEach(marquee =>{
    const marqueeInner = marquee.querySelector(".marquee__inner")
    const marqueeContent = Array.from(marqueeInner.children)

    console.log(marqueeContent)


    marqueeContent.forEach(item =>{
        const duplicatedItem = item.cloneNode(true)
        console.log(duplicatedItem)
        duplicatedItem.setAttribute('aria-hidden', true)
        marqueeInner.appendChild(duplicatedItem)
    })
    })
}
if (!window.matchMedia("(prefers-reduced-motion : reduce)").matches){
    addAnimation()
}

}