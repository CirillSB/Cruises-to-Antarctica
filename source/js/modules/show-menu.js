export const showMenu = () => {
  const body = document.querySelector('body');
  const page = document.querySelector('.wrapper');
  const modal = document.querySelector('[data-modal]');
  const overlay = document.querySelector('.modal__overlay');

  const button = document.querySelector('.menu-button');
  const buttonContent = document.querySelector('.burger');
  const buttonImage = document.querySelector('.burger__image');
  const menu = document.querySelector('.navigation--modal');
  const logo = document.querySelector('[data-header-logo]');
  const links = document.querySelectorAll('[data-link]');

  const hideModal = () => {
    modal.classList.remove('is-active');
    body.classList.remove('scroll-lock-ios');

    modal.removeEventListener('pointerdown', hideModalClick);
    overlay.addEventListener('pointerdown', hideModal);

    buttonImage.href.baseVal = 'img/sprite.svg#burger';
    buttonContent.style.width = 24;
    buttonContent.style.height = 12;
  };

  const hideModalClick = () => {
    for (let i = 0; i < links.length; i++) {
      if (event.target === links[i]) {
        hideModal();
      }
    }
  }

  const showModal = () => {
    modal.classList.add('is-active');
    body.classList.add('scroll-lock-ios');

    modal.addEventListener('pointerdown', hideModalClick);
    overlay.addEventListener('pointerdown', hideModal);

    buttonImage.href.baseVal = 'img/sprite.svg#plus';
    buttonContent.style.width = 15;
    buttonContent.style.height = 15;
  }

  const initModal = () => {
    if (!modal.classList.contains('is-active')) {
      showModal();
    } else if (modal.classList.contains('is-active')) {
      hideModal();
    }
  }
  
  button.addEventListener('pointerdown', initModal);

}
