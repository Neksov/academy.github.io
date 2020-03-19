$(document).ready(function () {
  let modal = $(".modal"), //помесщаем модальное окно
    modalBtn = $("[data-toggle = modal]"), //
    closeBtn = $(".modal__close"), //
    modalD = $(".modal__dialog");

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
  // закрытие по клику
  /*modal.click(function () {
    $(".modal").removeClass("modal--visible");
  });*/

  //слайдер 
  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets', //точки 
    },
    navigation: { // движене кнопок
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 10 + bullets.width() + 10)
  bullets.css('left', prev.width() + 10)

  new WOW().init();


  //валидация форм
  $('.modal__form').validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
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
      userEmail: {
        required: "Обязательно укажите email",
        email: "Введите в формате: name@domain.com"
      }
    }
  });

  $('.control__form').validate({
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
      },
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

    }
  });

  $('.footer__form').validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      userQuestion: {
        required: true,
        minlength: 10,
        maxlength: 30
      },
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
      userQuestion: {
        required: "Вопрос обязателньо",
        minlength: "Вопрос не короче 10 символов",
        maxlength: "Вопрос не длиньше 30 символов"
      },
    }
  });

  //маска для номера телефона
  $('[type=tel]').mask('+7(000)000-00-00', {
    placeholder: "+7(___)___-__-__"
  });

});