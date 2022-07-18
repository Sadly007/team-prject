let inputColor = document.querySelector('.btn--green');

inputColor.addEventListener('click', e => {
  document.documentElement.style.setProperty('--accent-text-color', '#14d443');
});
