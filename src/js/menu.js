(() => {
  const refs = {
    hdropenMenuBtn: document.querySelector('.header-btn'),
    hdrcloseMenuBtn: document.querySelector('.close-btn'),
    buyopenMenuBtn: document.querySelector('.header-btn'),
    buycloseMenuBtn: document.querySelector('.close-btn'),
  buyopenMenuBtn2: document.querySelector('.header-btn'),
    buycloseMenuBtn2: document.querySelector('.close-btn'),
    
    menu: document.querySelector('.menu-wrapper'),
    buy: document.querySelector('.btn-hidden'),
    buy2: document.querySelector('.btn2-hidden'),
    body: document.querySelector('body'),
  };

  refs.hdropenMenuBtn.addEventListener('click', toggleMenu);
  refs.hdrcloseMenuBtn.addEventListener('click', toggleMenu);
    refs.buyopenMenuBtn.addEventListener('click', toggleMenu);
  refs.buycloseMenuBtn.addEventListener('click', toggleMenu);
    refs.buyopenMenuBtn2.addEventListener('click', toggleMenu);
  refs.buycloseMenuBtn2.addEventListener('click', toggleMenu);
  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.buy.classList.toggle('is-none');
        refs.buy2.classList.toggle('is-none');
    refs.body.classList.toggle('no-scroll');
  }
})();