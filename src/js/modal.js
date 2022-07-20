(() => {
  const refs = {
    openModalBtn1: document.querySelector('[header-modal-open1]'),
    openModalBtn2: document.querySelector('[header-modal-open2]'),
    closeModalBtn1: document.querySelector('[header-modal-close1]'),
    modal1: document.querySelector('[header-modal1]'),};
  refs.openModalBtn1.addEventListener('click', toggleModal);
  refs.openModalBtn2.addEventListener('click', toggleModal);
  refs.closeModalBtn1.addEventListener('click', toggleModal);
   
  function toggleModal() {
    refs.modal1.classList.toggle('backdrop--is-hidden');
  }
  
})();

