const script = document.createElement('script');
let ok = false;
window.addEventListener('scroll', () => {
  if (ok === false) {
    ok = true;
    setTimeout(() => {
      script.src = 'https://api-maps.yandex.ru/2.1/?apikey=726b8561-cba3-487c-a8b4-e3e92f1591d0&lang=ru_RU';
      document.body.appendChild(script);
    }, 1000);
  }
});

const initMap = () => {
  script.onload = () => {

    ymaps.ready(init);

    function init() {
      ymaps.ready(function () {
        let myMap = new ymaps.Map('map', {
          center: [59.938691, 30.323146],
          zoom: 16,
        }, {
          searchControlProvider: 'yandex#search',
        });

        // Создаём макет содержимого.
        let MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        );

        let myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'Собственный значок метки',
          balloonContent: 'Это красивая метка',
        }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: 'img/sprite/point.svg',
          // Размеры метки.
          iconImageSize: [20, 28],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -38],
        });

        let myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
          hintContent: 'Собственный значок метки с контентом',
          balloonContent: 'А эта — новогодняя',
          iconContent: '12',
        }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#imageWithContent',
          // Своё изображение иконки метки.
          iconImageHref: '',
          // Размеры метки.
          iconImageSize: [48, 48],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-24, -24],
          // Смещение слоя с содержимым относительно слоя с картинкой.
          iconContentOffset: [15, 15],
          // Макет содержимого.
          iconContentLayout: MyIconContentLayout,
        });

        myMap.geoObjects
            .add(myPlacemark)
            .add(myPlacemarkWithContent);
      });
    }
  };
};

export {
  initMap
};
