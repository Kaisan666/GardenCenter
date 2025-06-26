let lastScroll = 0;

const header = document.querySelector('.header');
const headerPaddings = 24;
const headerUp = header.querySelector('.header__wrapper-up');
const headerBottom = header.querySelector('.header__wrapper-bottom');
const headerBadge = header.querySelector('.info-badge');

export const headerPartsHeights = {
  headerUpHeight: 60,
  headerBottomHeight: 68,
  headerBadgeHeight: 64,
};
let headerHeight;

export const calculateHeaderHeight = () => {
  let counter = 24;
  for (let key in headerPartsHeights) {
    counter += headerPartsHeights[key];
  }

  headerHeight = counter;
  return;
};
if (header) {
  window.addEventListener('resize', () => {
    if (!header.classList.contains('header__fixed')) {
      headerPartsHeights.headerUpHeight = headerUp.offsetHeight;
      headerPartsHeights.headerBottomHeight = headerBottom.offsetHeight;
      headerPartsHeights.headerBadgeHeight = headerBadge.offsetHeight;
    }
    calculateHeaderHeight();
  });

  document.addEventListener('DOMContentLoaded', () => {
    if (!header.classList.contains('header__fixed')) {
      headerPartsHeights.headerUpHeight = headerUp.offsetHeight;
      headerPartsHeights.headerBottomHeight = headerBottom.offsetHeight;
      headerPartsHeights.headerBadgeHeight = headerBadge.offsetHeight;
    }
    calculateHeaderHeight();
    hideScroll();
  });

  const hideScroll = () => {
    const burger = header.querySelector('.burger__modal');
    if (burger.classList.contains('burger__modal--active')) {
      header.classList.add('header__fixed--visible');
      header.classList.remove('header__fixed--hidden');
    }
    if (window.scrollY > headerHeight + 150 && window.scrollY > lastScroll) {
      header.classList.add('header__fixed--hidden');
      header.classList.add('header__fixed');
      burger.classList.contains('burger__modal--active') == true ? header.classList.remove('header__fixed--hidden') : null;
      document.querySelector('body').style = `padding-top : ${headerHeight}px`;
    } else if (window.scrollY < lastScroll) {
      header.classList.remove('header__fixed--hidden');
    }

    if (window.scrollY < headerHeight + 150) {
      header.classList.remove('header__fixed');
      header.classList.remove('header__fixed--hidden');
      document.querySelector('body').style = `padding-top : ${0}`;
    }

    lastScroll = window.scrollY;
  };

  window.addEventListener('scroll', () => {
    hideScroll();
  });
}
