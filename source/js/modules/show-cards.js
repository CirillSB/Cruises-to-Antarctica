export const showCards = () => {
  const canvas = document.querySelector('.wrapper');
  const listItem = document.querySelectorAll('.catalog-list__item');
  const cardsPictures = document.querySelectorAll('.catalog__image');
  const cardsPicturesNames = document.querySelectorAll('.catalog-list__item p');
  const cardsContent = document.querySelectorAll('.card');

  const hideCardsContent = () => {
    cardsContent.forEach((e) => {
      e.classList.remove('focus-visible');
    });
  };

  for (let i = 0; i < listItem.length; i++) {
    listItem[i].addEventListener('mouseover', () => {
      hideCardsContent();
      cardsContent[i].classList.add('focus-visible');
    });
  }


  canvas.addEventListener('pointerdown', () => {
    hideCardsContent();
    for (let i = 0; i < cardsPictures.length; i++) {
      if (event.target === cardsPictures[i] || event.target === cardsPicturesNames[i]) {
        hideCardsContent();
        cardsContent[i].classList.add('focus-visible');
      }
    }
  });
};
