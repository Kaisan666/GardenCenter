//// ================================ Imports ======================================
//scss
// import 'bootstrap/dist/css/bootstrap-grid.css';
// import 'nouislider/dist/nouislider.css';
import 'choices.js/public/assets/styles/choices.css';
import "@fancyapps/ui/dist/fancybox.css";
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
import { computePosition, shift, offset, flip } from '@floating-ui/dom';

import './btnToggle';
import './moreBtn';
import './burger';
import "./fancyBox"
import "./map"


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


// let lastScroll = 0
// const defaultOffset = 100
// const fixedHeader = document.querySelector(".header__fixed")

// const scrollPosition = () =>{
//   return window.pageYOffset || document.documentElement.scrollTop
// }

// const isActive = () =>{
//   return fixedHeader.classList.contains("header__fixed--active")
// }

// window.addEventListener("scroll", () =>{
//   console.log(document.documentElement.scrollTop)
//   if (scrollPosition() > lastScroll && isActive() && scrollPosition() > defaultOffset || window.pageYOffset < 200){
//     fixedHeader.classList.remove("header__fixed--active")
//   }
//   else if (scrollPosition() < lastScroll && !isActive()){
//     fixedHeader.classList.add("header__fixed--active")
//   }
//   lastScroll = scrollPosition()
// })


let lastScroll = 0
const treshold = 50
const header = document.querySelector('.header')
const headerUp = header.querySelector('.header__up')
const headerBottomHeight = header.querySelector(".header__bottom").offsetHeight
const headerOffSet = header.offsetHeight + 150
const scrollPosition = () =>{
  return window.pageYOffset || document.documentElement.scrollTop
}

// const isHidde = () =>{
//   return header.classList.contains("header--sticky")
// }
const isVisible = () =>{
  return header.classList.contains("header__sticky--visible")
}

const hideHeader = () =>{(window.addEventListener("scroll", () =>{
    console.log("scrollPosition", scrollPosition())
    console.log("lastScroll", lastScroll)
  // console.log(headerOffSet)
  // console.log(lastScroll)
    if(Math.abs(scrollPosition() - lastScroll) > treshold){
      // if (scrollPosition() > 160){
      //   header.classList.add("header__sticky--hidden")
      // }
     if (scrollPosition() > lastScroll && isVisible() && scrollPosition() > headerOffSet){
        console.log(headerBottomHeight)
        header.classList.remove("header__sticky--visible")
        header.classList.add("header__sticky--hidden")
      }
      else if (scrollPosition() < lastScroll && !isVisible()){
        console.log(headerBottomHeight)
        console.log(scrollPosition() < lastScroll)
        // header.classList.remove("header__sticky--hidden")
        header.classList.add("header__sticky--visible")
      }
      lastScroll = scrollPosition()
}}))
}

hideHeader()



// const hideHeader = () =>{
//   (document.addEventListener("scroll", (e) =>{
//   const headerHeight = document.querySelector(".header").offsetHeight
//   console.log(e)
//   // console.log( window.scrollY)
//   if (window.scrollY > headerHeight+100){
//     const header = document.querySelector(".header")
//     header.style = `position : fixed`
//     document.querySelector('body').style = `padding-top : ${headerHeight}`
//   }
//   else { 
//     const header = document.querySelector(".header")
//     header.style = `position : normal ;`
//     document.querySelector('body').style = `padding-top : ${0}`
//   }


// }))
// }


// hideHeader()
