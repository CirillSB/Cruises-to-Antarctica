export const showLogo = () => {
  const logo = document.querySelectorAll('.logo');
  const logoImage = document.querySelectorAll('.logo__image');

  if (window.matchMedia('(max-width: 1023px)').matches) {
    for (let i = 0; i < logo.length; i++) {
      logo[i].style.width = 38;
      logo[i].style.height = 20;
      logoImage[i].href.baseVal = 'img/sprite.svg#logo-tablet';
    }
  }
  if (window.matchMedia('(max-width: 767px)').matches) {
    for (let i = 0; i < logo.length; i++) {
      logo[i].style.width = 42;
      logo[i].style.height = 22;
      logoImage[i].href.baseVal = 'img/sprite.svg#logo-mobile';
    }
  }
};
