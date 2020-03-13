document.addEventListener("DOMContentLoaded", function (event) {
  //do work
  let modal = document.querySelector(".modal");
  let modalBtn = document.querySelectorAll("[data-toggle = modal]");
  let closeBtn = document.querySelector(".modal__close");
  let switchModal = () => {
    modal.classList.toggle("modal--visible");
  };
  modalBtn.forEach(element => {
    element.addEventListener("click", switchModal);
  });

  closeBtn.addEventListener("click", switchModal);

  document.addEventListener("click", e => {
    if (e.target == modal) {
      modal.classList.remove("modal--visible");
    }
  })

  document.addEventListener('keydown', function (e) {
    switch (e.keyCode) {
      case 27:
        switchModal();
    }
  });
});