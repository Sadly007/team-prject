(() => {
  const refs = {
    openModalBtn3: document.querySelector('[contacts-modal-open-one]'),
    openModalBtn4: document.querySelector('[contacs-modal2]'),
    closeModalBtn3: document.querySelector('[contacts-close-one]'),
    closeModalBtn4: document.querySelector('[contacts-close3]'),
    modal3: document.querySelector('[contacts-modal-one]'),
    modal4: document.querySelector('[contacts-modal3'),
};
   refs.openModalBtn3.addEventListener('click', toggleModal3);
//    refs.openModalBtn4.addEventListener('click', toggleModal4);
   refs.closeModalBtn3.addEventListener('click', toggleModal3);
   refs.closeModalBtn4.addEventListener('click', toggleModal4);
  function toggleModal3() {
      refs.modal3.classList.toggle("is-hidden-one");
  }
  function toggleModal4() {
    refs.modal4.classList.toggle("is-hidden-two");
  }
})();
