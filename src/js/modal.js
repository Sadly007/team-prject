

(() => {
  const refs = {
    hdropenModalBtn: document.querySelector('[hdrdata-modal-open]'),
    hdropenModalBtn1: document.querySelector('[hdrdata-modal-open2]'),
    hdrcloseModalBtn: document.querySelector('[hdrdata-modal-close]'),
    hdrmodal: document.querySelector('[hdrdata-modal]'),
  };

  refs.hdropenModalBtn.addEventListener('click', toggleModal);
  refs.hdropenModalBtn1.addEventListener('click', toggleModal);
  refs.hdrcloseModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.hdrmodal.classList.toggle('backdrop--is-hidden');
  }
})();