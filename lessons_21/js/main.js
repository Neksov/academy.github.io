$(document).ready(function() {
  let modal = $(".modal"), //помесщаем модальное окно
    modalBtn = $("[data-toggle = modal]"), //
    closeBtn = $(".modal__close"), //
    modalD = $(".modal__dialog");

  modalBtn.on("click", function() {
    //присваееваем класс
    modal.toggleClass("modal--visible");
  });

  closeBtn.on("click", function() {
    //присваееваем класс
    modal.toggleClass("modal--visible");
  });
  //esc
  $(document).keyup(function(event) {
    if (event.which == "27") {
      $(".modal").removeClass("modal--visible");
    }
  });
});
