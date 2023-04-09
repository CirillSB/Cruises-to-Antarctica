export const setFocusCard = () => {
  const cardsContent = document.querySelectorAll('.card');
  const cardsButtons = document.querySelectorAll('.card__link');

  for (let i = 0; i < cardsButtons.length; i++) {
    cardsButtons[i].onfocus = () => {
      if (!cardsContent[i].classList.contains('focus-visible')) {
        cardsContent[i].classList.add('focus-visible');
      }
    };
  }

  for (let i = 0; i < cardsButtons.length; i++) {
    cardsButtons[i].onblur = () => {
      if (cardsContent[i].classList.contains('focus-visible')) {
        cardsContent[i].classList.remove('focus-visible');
      }
    };
  }
};
