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
  modal.click(function () {
    $(".modal").removeClass("modal--visible");
  });

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

  //ДЛя анимации
  /*$(window).scroll(function () {
    $('img/video.svg').each(function () {
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow + $(window).innerHeight()) {
        $(this).addClass("animated slideInUp")
      }
    });
  });*/

});