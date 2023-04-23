import {
  iosVhFix
} from './utils/ios-vh-fix';
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
  showLogo();
  showMenu();
  initLoadImages();


  const initMobileMenu = () => {
    if (window.matchMedia('(min-width: 1024px)').matches) {
      const body = document.querySelector('body');
      const page = document.querySelector('.wrapper');
      const buttonOpenModal = document.querySelector('[data-open-modal]');
      const buttonCloseModal = document.querySelectorAll('[data-close-modal]');
      const modal = document.querySelector('[data-modal="feedback"]');
      const nameInput = document.querySelector('#popup-name');
      const focusableElements = document.querySelectorAll('[data-focusable-element]');
      const firstFocusableElement = focusableElements[1];
      const lastFocusableElement = focusableElements[0];
      const KEYCODE_TAB = 9;

      const createFocusNoose = () => {
        modal.addEventListener('keydown', (e) => {
          const isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);

          if (!isTabPressed) {
            return;
          }

          if (e.shiftKey) /* shift + tab */ {
            if (document.activeElement === firstFocusableElement) {
              lastFocusableElement.focus();
              e.preventDefault();
            }
          } else /* tab */ {
            if (document.activeElement === lastFocusableElement) {
              firstFocusableElement.focus();
              e.preventDefault();
            }
          }
        });
      };

      const showModal = () => {
        modal.classList.add('is-active');
        buttonOpenModal.removeEventListener('click', showModal);
        modal.addEventListener('click', hideModalClick);
        document.addEventListener('keydown', hideModalKeyDown);
        nameInput.focus();
        body.style.overflowY = 'hidden';
        page.inert = true;
        createFocusNoose();
      };

      const closeModal = () => {
        modal.classList.remove('is-active');
        buttonOpenModal.addEventListener('click', showModal);
        modal.removeEventListener('click', hideModalClick);
        document.removeEventListener('keydown', hideModalKeyDown);
        body.style.overflowY = 'visible';
        page.inert = false;
      };

      const hideModalClick = () => {
        for (let i = 0; i < buttonCloseModal.length; i++) {
          if (event.target === buttonCloseModal[i]) {
            closeModal();
          }
        }
      };

      const hideModalKeyDown = (e) => {
        if (e.keyCode === 27) {
          closeModal();
        }
      };

      buttonOpenModal.addEventListener('click', showModal);


    }
  };

  initMobileMenu();


  // ---------------------------------
  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
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
