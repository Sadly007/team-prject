(() => {
  const refs = {
    openModalBtn3: document.querySelector('[contacts-modal-open-one]'),
    openModalBtn5: document.querySelector(".button-franchise"),
    closeModalBtn3: document.querySelector('[contacts-close-one]'),
    closeModalBtn4: document.querySelector('[contacts-close3]'),
    modal3: document.querySelector('[contacts-modal-one]'),
    modal4: document.querySelector('[contactsmodal2]'),
};
   refs.openModalBtn3.addEventListener('click', toggleModal3);
   refs.openModalBtn5.addEventListener('click', toggleModal5);
   refs.closeModalBtn3.addEventListener('click', toggleModal3);
   refs.closeModalBtn4.addEventListener('click', toggleModal5);
  function toggleModal3() {
      refs.modal3.classList.toggle("is-hidden-one");
  }
  function toggleModal5() {
    refs.modal4.classList.toggle("is-hidden-two");
  }
})();
