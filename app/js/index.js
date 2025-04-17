//// ================================ Imports ======================================
//scss
// import 'bootstrap/dist/css/bootstrap-grid.css';
// import 'nouislider/dist/nouislider.css';
import 'choices.js/public/assets/styles/choices.css';
import '@fancyapps/ui/dist/fancybox.css';
import '../scss/index.scss';
import './swiper';
//js
// import $ from 'jquery';
// import Swiper from 'swiper';
// import IMask from 'imask';
// import Choices from 'choices.js';
// import autoComplete from '@tarekraafat/autocomplete.js';
// import validate from 'validate.js';
// import ApexCharts from 'apexcharts';
// import { rippleEffect, Ripple } from 'data-ripple';
// import noUiSlider from 'nouislider';
// import Scrollbar from 'smooth-scrollbar';
import { computePosition, shift, offset, flip, hide } from '@floating-ui/dom';

// import './btnToggle';
import './moreBtn';
import './burger';
import './fancyBox';
import './map';
import "./forms"
//// ================================ Code ======================================

const tooltipElements = document.querySelectorAll('.custom-tooltip');

tooltipElements.forEach((item) => {
  const tooltip = item.querySelector('.custom-tooltip__container');

  let tm = null;

  function update() {
    computePosition(item, tooltip, {
      placement: 'bottom-end',
      middleware: [offset(12), flip(), shift({ padding: 5 })],
    }).then(({ x, y }) => {
      Object.assign(tooltip.style, {
        left: `${x}px`,
        top: `${y}px`,
      });
    });
  }

  function showTooltip() {
    clearTimeout(tm);

    item.classList.add('custom-tooltip--open');

    tooltip.style.display = 'block';

    if (!item.classList.contains('custom-tooltip--dom')) {
      document.body.appendChild(tooltip);
    }

    update();
  }

  function hideTooltip() {
    if (tm) clearTimeout(tm);
    tm = setTimeout(async () => {
      if (tooltip && !item.classList.contains('custom-tooltip--dom')) {
        tooltip.remove();
      }
      tooltip.style.display = '';
      item.classList.remove('custom-tooltip--open');
    }, 150);
  }

  [
    ['mouseenter', showTooltip],
    ['mouseleave', hideTooltip],
    ['focus', showTooltip],
    ['blur', hideTooltip],
  ].forEach(([event, listener]) => {
    item.addEventListener(event, listener);
  });

  tooltip.addEventListener('mouseenter', showTooltip);
  tooltip.addEventListener('mouseleave', hideTooltip);
});


let lastScroll = 0;
const header = document.querySelector('.header');
const headerOffSet = header.offsetHeight;
const hideScroll = () => {
  console.log(window.scrollY);
  console.log('scrollPosition', window.scrollY);
  console.log('lastScroll', lastScroll);
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
