let lastScroll = 0;
const header = document.querySelector('.header');
const headerTop = header.querySelector(".header__up").offsetHeight
const headerOffSet = header.offsetHeight;

const hideScroll = () => {
  const burger = header.querySelector('.burger__modal');
  if (burger.classList.contains('burger__modal--active')) {
    header.classList.add('header__fixed--visible');
    header.classList.remove('header__fixed--hidden');
  } else {
    header.classList.add('header__fixed--hidden');
  }

  if (window.scrollY > headerOffSet + 150) {
    header.classList.add('header__fixed');
    !burger.classList.contains('burger__modal--active') == true ? header.classList.add('header__fixed--hidden') : null;
    document.querySelector('body').style = `padding-top : ${headerOffSet}`;

    if (window.scrollY > lastScroll || burger.classList.contains('burger__modal--active')) {
      header.classList.remove('header__fixed--visible');
    } else if (window.scrollY < lastScroll) {
      header.classList.add('header__fixed--visible');
    }
  } else {
    header.classList.remove('header__fixed');
    header.classList.remove('header__fixed--hidden');
    header.classList.remove('header__fixed--visible');
    document.querySelector('body').style = `padding-top : ${0}`;
  }

  lastScroll = window.scrollY;
};
window.addEventListener('scroll', () => {
  hideScroll();
});
hideScroll();
