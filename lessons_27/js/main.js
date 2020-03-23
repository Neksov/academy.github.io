$(document).ready(function () {
  let modal = $(".modal"), //помесщаем модальное окно
    modalBtn = $("[data-toggle = modal]"), //
    closeBtn = $(".modal__close"); //

  modalBtn.on("click", function () {
    //присваееваем класс
    modal.toggleClass("modal--visible");
  });

  closeBtn.on("click", function () {
    //присваееваем класс
    modal.toggleClass("modal--visible");
  });
  //закрытие по esc
  $(document).keyup("click", function (event) {
    if (event.which == "27") {
      $(".modal").removeClass("modal--visible");
    }
  });
  //открытие модального окна подписки
  $('.modalSend-btn').on('click', function (event) {
    event.preventDefault();
    $('.modalSend').fadeIn();
  });
  //открытие модального окна подписки по крестику
  $('.modalSend-close').on('click', function (event) {
    event.preventDefault();
    $('.modalSend').fadeOut();
  });
  //закрытие по esc
  $(document).keyup("click", function (event) {
    if (event.which == "27") {
      $(".modalSend").fadeOut();
    }
  });

  /* // закрытие по клику
   modal.click(function () {
     $(".modal").removeClass("modal--visible");
   });*/

  //слайдер
  var mySwiper = new Swiper(".swiper-container", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets" //точки
    },
    navigation: {
      // движене кнопок
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
  var next = $(".swiper-button-next");
  var prev = $(".swiper-button-prev");
  var bullets = $(".swiper-pagination");

  next.css("left", prev.width() + 10 + bullets.width() + 10);
  bullets.css("left", prev.width() + 10);

  new WOW().init();

  //валидация форм
  $(".modal__form").validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      checkBox: "required",
      // правило- обьект
      userEmail: {
        required: true,
        email: true
      }
    },
    //сообщения
    messages: {
      userName: {
        required: "Имя обязателньо",
        minlength: "Имя не короче 2 символов",
        maxlength: "Имя не длиньше 15 символов"
      },

      userPhone: "Телефон обязателньо",
      checkBox: "Подтвердите свое согласие",

      userEmail: {
        required: "Обязательно укажите email",
        email: "Введите в формате: name@domain.com"
      }
    },
    //отправка формы через аякс
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "sendModal.php",
        data: $(".modal__form").serialize(), //Преобразует данные формы в строку, пригодную для использования в URL
        success: function (response) {
          //modal.on('.modalSend');
          $(form)[0].reset(); // чистит поля после отправки формы
          modal.removeClass("modal--visible");
          $('.modalSend').fadeIn();
        }
      });
    }
  });

  $(".control__form").validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      checkBox: {
        required: true
      }
      // правило- обьект
    },
    //сообщения
    messages: {
      userName: {
        required: "Имя обязателньо",
        minlength: "Имя не короче 2 символов",
        maxlength: "Имя не длиньше 15 символов"
      },
      userPhone: "Телефон обязателньо",
      checkBox: "Подтвердите свое согласие"
    },
    //отправка формы через аякс
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "sendControl.php",
        data: $(".control__form").serialize(), //Преобразует данные формы в строку, пригодную для использования в URL
        success: function (response) {
          //control.on('.modalSend');
          $(form)[0].reset(); // чистит поля после отправки формы
          $('.modalSend').fadeIn();
        }
      });
    }
  });

  $(".footer__form").validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      checkBox: "required",
      userQuestion: {
        required: true,
        minlength: 10,
        maxlength: 30
      }
      // правило- обьект
    },
    //сообщения
    messages: {
      userName: {
        required: "Имя обязателньо",
        minlength: "Имя не короче 2 символов",
        maxlength: "Имя не длиньше 15 символов"
      },
      userPhone: "Телефон обязателньо",
      checkBox: "Подтвердите свое согласие",

      userQuestion: {
        required: "Вопрос обязателньо",
        minlength: "Вопрос не короче 10 символов",
        maxlength: "Вопрос не длиньше 30 символов"
      }
    },
    //отправка формы через аякс
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "sendFooter.php",
        data: $(".footer__form").serialize(), //Преобразует данные формы в строку, пригодную для использования в URL
        success: function (response) {
          //footer.on('.modalSend');
          $(form)[0].reset(); // чистит поля после отправки формы
          $('.modalSend').fadeIn();
        }
      });
    }
  });

  //маска для номера телефона
  $("[type=tel]").mask("+7(000)000-00-00", {
    placeholder: "+7(___)___-__-__"
  });

  //Яндекс карта
  ymaps.ready(function () {
    var myMap = new ymaps.Map(
        "map", {
          center: [7.268056, 80.596667],
          zoom: 9
        }, {
          searchControlProvider: "yandex#search"
        }
      ),
      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),
      myPlacemark = new ymaps.Placemark(
        myMap.getCenter(), {
          hintContent: "Я на Шриланке",
          balloonContent: "Это красивое место"
        }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: "default#image",
          // Своё изображение иконки метки.
          iconImageHref: "img/me.jpg",
          // Размеры метки.
          iconImageSize: [40, 40],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -38]
        }
      );
    myMap.behaviors.disable("scrollZoom");
    myMap.geoObjects.add(myPlacemark);
  });
});