export const showMenu = () => {
  const html = document.querySelector('html');
  const button = document.querySelector('.menu-button');
  const buttonContent = document.querySelector('.burger');
  const buttonImage = document.querySelector('.burger__image');
  const menu = document.querySelector('.navigation__inner');
  const logo = document.querySelector('[data-header-logo]');
  const links = document.querySelectorAll('[data-link]');
  const overlay = document.querySelector('.overlay');

  const changeMenuVisibility = () => {
    if (!menu.classList.contains('navigation__inner--js-active')) {
      menu.classList.add('navigation__inner--js-active');
      buttonImage.href.baseVal = 'img/sprite.svg#plus';
      buttonContent.style.width = 15;
      buttonContent.style.height = 15;
      logo.style.opacity = 0;
      overlay.classList.remove('visually-hidden');
      html.classList.add('scroll-lock');
    } else {
      menu.classList.remove('navigation__inner--js-active');
      buttonImage.href.baseVal = 'img/sprite.svg#burger';
      buttonContent.style.width = 24;
      buttonContent.style.height = 12;
      logo.style.opacity = 1;
      overlay.classList.add('visually-hidden');
      html.classList.remove('scroll-lock');
    }
  };
  const hideMenu = () => {
    for (let i = 0; i < links.length; i++) {
      if (event.target === links[i]) {
        changeMenuVisibility();
      }
    }
  };

  if (window.matchMedia('(max-width: 767px)').matches) {
    button.addEventListener('pointerdown', changeMenuVisibility);
    menu.addEventListener('pointerdown', hideMenu);
    overlay.addEventListener('pointerdown', changeMenuVisibility);
  }
};
