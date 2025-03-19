const burger = document.querySelector('#burger')

if(burger) {
    const burgerBtn = burger.querySelector('.burger__btn')
    const burgerModal = burger.querySelector('.burger__modal')
    
    burgerBtn.addEventListener('click', () => {
        burger.classList.toggle('burger--active')
        burgerModal.classList.toggle('burger__modal--active')
        document.querySelector('body').classList.toggle('body--active')
    })
}