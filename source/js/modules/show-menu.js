export const showMenu = () => {
  const button = document.querySelector('.menu-button');
  const buttonContent = document.querySelector('.burger');
  const buttonImage = document.querySelector('.burger__image');
  const menu = document.querySelector('.navigation__inner');
  const logo = document.querySelector('[data-header-logo]');

  if (window.matchMedia('(max-width: 767px)').matches) {
    button.addEventListener('touchstart', () => {
      if (!menu.classList.contains('navigation__inner--js-active')) {
        menu.classList.add('navigation__inner--js-active');
        buttonImage.href.baseVal = 'img/sprite.svg#plus';
        buttonContent.style.width = 15;
        buttonContent.style.height = 15;
        logo.style.opacity = 0;
      } else {
        menu.classList.remove('navigation__inner--js-active');
        buttonImage.href.baseVal = 'img/sprite.svg#burger';
        buttonContent.style.width = 24;
        buttonContent.style.height = 12;
        logo.style.opacity = 1;
      }
    });
  }
};
