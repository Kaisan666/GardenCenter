let lastScroll = 0;
const header = document.querySelector('.header');
if (header) {
const headerTop = header.querySelector(".header__up").offsetHeight
const headerOffSet = header.offsetHeight;
const wrapperBottom = header.querySelector(".header__wrapper-bottom")
const hideScroll = () => {
  console.log(wrapperBottom)
  const burger = header.querySelector('.burger__modal');
  if (burger.classList.contains('burger__modal--active')) {
    header.classList.add('header__fixed--visible');
    header.classList.remove('header__fixed--hidden');
  }
  if (window.scrollY > headerOffSet + 150 && window.scrollY > lastScroll) {
    header.classList.add('header__fixed--hidden');
    header.classList.add('header__fixed');
    burger.classList.contains('burger__modal--active') == true ? header.classList.remove('header__fixed--hidden') : null;
    document.querySelector('body').style = `padding-top : ${headerOffSet}`;

    
  } 
  else if (window.scrollY < lastScroll) {
    header.classList.remove('header__fixed--hidden');
  }

  if (window.scrollY < headerOffSet + 150) {
    header.classList.remove('header__fixed');
    header.classList.remove('header__fixed--hidden');
    document.querySelector('body').style = `padding-top : ${0}`;
  }

  lastScroll = window.scrollY;
};
window.addEventListener('scroll', () => {
  hideScroll();
});
hideScroll();
}