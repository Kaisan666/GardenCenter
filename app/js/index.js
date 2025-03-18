//// ================================ Imports ======================================
//scss
// import 'bootstrap/dist/css/bootstrap-grid.css';
// import 'nouislider/dist/nouislider.css';
import 'choices.js/public/assets/styles/choices.css';
import '../scss/index.scss';
import "./swiper"
//js
// import $ from 'jquery';
// import Swiper from 'swiper';
// import { Fancybox, Carousel, Panzoom } from '@fancyapps/ui';
// import IMask from 'imask';
// import Choices from 'choices.js';
// import autoComplete from '@tarekraafat/autocomplete.js';
// import validate from 'validate.js';
// import ApexCharts from 'apexcharts';
// import { rippleEffect, Ripple } from 'data-ripple';
// import noUiSlider from 'nouislider';
// import Scrollbar from 'smooth-scrollbar';
import { computePosition, shift, offset, flip } from '@floating-ui/dom';

//// ================================ Code ======================================

const tooltipElements = document.querySelectorAll('.custom-tooltip');

tooltipElements.forEach((item) => {
  const tooltip = item.querySelector('.custom-tooltip__container');

  let tm = null;

  function update() {
    computePosition(item, tooltip, {
      placement: 'top',
      strategy: 'fixed',
      middleware: [offset(26), flip(), shift({ padding: 5 })],
    }).then(({ x, y, placement, middlewareData }) => {
      Object.assign(tooltip.style, {
        left: `${x}px`,
        top: `${y}px`,
      });
    });
  }

  function showTooltip() {
    clearTimeout(tm);
    document.body.appendChild(tooltip);

    item.classList.add('custom-tooltip--open');

    tooltip.style.display = 'block';
    update();
  }

  function hideTooltip() {
    if (tm) clearTimeout(tm);
    tm = setTimeout(async () => {
      if (tooltip) {
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
