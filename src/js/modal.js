(() => {
  const refs = {
    //  1 Кнопка
    openModalBtn: document.querySelector('[data-modal-open]'),       
    // 2 Кнопка
    openModalBtn1: document.querySelector('[data-modal-open2]'),
    // 3 Кнопка
    openModalBtn2: document.querySelector('[data-modal-open3]'),

    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtn1.addEventListener('click', toggleModal);
  refs.openModalBtn2.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('backdrop--is-hidden');
  }
})();