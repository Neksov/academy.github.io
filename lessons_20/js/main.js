/*document.addEventListener("DOMContetntLoaded", function (event) {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle = modal]');
  const closeBtn = document.querySelector('modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });
  closeBtn.addEventListener('click', switchModal);
});*/

document.addEventListener("DOMContentLoaded", function (event) {
  //do work
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle = modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });
  closeBtn.addEventListener('click', switchModal);
});