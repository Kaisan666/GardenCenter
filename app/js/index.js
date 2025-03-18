//// ================================ Imports ======================================
//scss
// import 'bootstrap/dist/css/bootstrap-grid.css';
// import 'nouislider/dist/nouislider.css';
import 'choices.js/public/assets/styles/choices.css';
import '../scss/index.scss';

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

import './btnToggle';

//// ================================ Code ======================================

window.addEventListener('load', () => {
  const tooltipElements = document.querySelectorAll('.custom-tooltip');

  tooltipElements.forEach((item) => {
    const tooltip = item.querySelector('.custom-tooltip__container');

    let tm = null;

    function update() {
      computePosition(item, tooltip, {
        placement: 'bottom-start',
        strategy: 'fixed',
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

      document.body.appendChild(tooltip);

      update();
    }

    function hideTooltip() {
      if (tm) clearTimeout(tm);
      tm = setTimeout(async () => {

        console.log(tooltip);
        
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

  const itemMoreContainer = document.querySelector('#jsItemMoreContainer');

  const checkOffsetItem = (items, item) => {
    const itemsMore = document.querySelector('#jsItemsMore');
    const itemsContainer = itemsMore.querySelector('#jsItemsContainer');

    const offsetTop = itemMoreContainer.offsetTop;

    if (item.offsetTop > offsetTop) {

      const newLink = items[items.length - 1].cloneNode(true);

      newLink.classList = 'custom-tooltip__item';

      itemsContainer?.prepend(newLink)

      items[items.length - 1].remove();

      items.pop();
      checkOffsetItem(items, item);
    }
  };

  const checkPageLink = (items) => {
    if (items && items.length > 1) {
      items.forEach((item) => {
        checkOffsetItem(items, item);
      });
    }
  };

  if (itemMoreContainer) {
    let itemMore = [...itemMoreContainer.querySelectorAll('.item-more')];

    checkPageLink(itemMore);

    window.addEventListener('resize', () => {
      checkPageLink(itemMore);
    });
  }
});
