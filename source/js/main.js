import {
  iosVhFix
} from './utils/ios-vh-fix';
// import {
//   initModals
// } from './modules/modals/init-modals';
// import {
//   Form
// } from './modules/form-validate/form';
import {
  showLogo
} from './modules/show-logo';
import {
  showMenu
} from './modules/show-menu';
import {
  testWebP
} from './utils/test-webp';
import {
  setFocusCard
} from './modules/set-focus-card';
import {
  showCards
} from './modules/show-cards';
import {
  initMap
} from './modules/init-map';
import {
  setMaskTel
} from './modules/set-mask-tel';
import {
  initLoadImages
} from './modules/init-load-images.js';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  testWebP();

  // ---------------------------------
  iosVhFix();
  // Modules
  initLoadImages();
  showLogo();
  showMenu();


  // ---------------------------------
  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    // initModals();
    // const form = new Form();
    // window.form = form;
    // form.init();
    setFocusCard();
    showCards();
    setMaskTel();
    initMap();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
