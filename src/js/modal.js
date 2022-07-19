

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    openModalBtn1: document.querySelector('[data-modal-open2]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),

    openModalBtn: document.querySelector('[data-modal-open1]'),
    closeModalBtn: document.querySelector('[data-modal-close1]'),
    
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtn1.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('backdrop--is-hidden');
  }
})();