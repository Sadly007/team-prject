(() => {
  const refs = {
    openMenuBtn: document.querySelector('.header-btn'),
    closeMenuBtn: document.querySelector('.close-btn'),
    btnopenMenuBtn: document.querySelector('.header-btn'),
    btncloseMenuBtn: document.querySelector('.close-btn'),
        mhopenMenuBtn: document.querySelector('.header-btn'),
    mhcloseMenuBtn: document.querySelector('.close-btn'),
    menu: document.querySelector('.menu-wrapper'),
    btn: document.querySelector('.btn-hid'),
    mh: document.querySelector('.menu-hid'),
    body: document.querySelector('body'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.btnopenMenuBtn.addEventListener('click', toggleMenu);
  refs.btncloseMenuBtn.addEventListener('click', toggleMenu);
  refs.mhopenMenuBtn.addEventListener('click', toggleMenu);
  refs.mhcloseMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.btn.classList.toggle('btn-hdn');
    refs.mh.classList.toggle('btn-hdn');
    refs.body.classList.toggle('no-scroll');
  }
})();