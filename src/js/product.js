(() => {
  const refs = {
    openModalBtn6: document.querySelector('[products-modal-open-one]'),
    openModalBtn7: document.querySelector("[products-modal-open-two]"),
    openModalBtn8: document.querySelector("[products-modal-open-three]"),
    closeModalBtn6: document.querySelector('[products-close-one]'),
    closeModalBtn7: document.querySelector('[products-close-two]'),
    closeModalBtn8: document.querySelector('[products-close-three]'),
    modal6: document.querySelector('[products-modal-one]'),
    modal7: document.querySelector('[products-modal-two]'),
    modal8: document.querySelector('[products-modal-three]'),
    
};
   refs.openModalBtn6.addEventListener('click', toggleModal6);
   refs.openModalBtn7.addEventListener('click', toggleModal7);
   refs.openModalBtn8.addEventListener('click', toggleModal8);
   refs.closeModalBtn6.addEventListener('click', toggleModal6);
   refs.closeModalBtn7.addEventListener('click', toggleModal7);
   refs.closeModalBtn8.addEventListener('click', toggleModal8);
  function toggleModal6() {
      refs.modal6.classList.toggle("is-hidden6");
  }
  function toggleModal7() {
    refs.modal7.classList.toggle("is-hidden7");
    }
    function toggleModal8() {
    refs.modal8.classList.toggle("is-hidden8");
  }
})();