(() => {
const advantages__number = document.querySelector('.advantages__number');
advantages__number.classList.remove('number-animation');

// Добавить наблюдение за появлением элемента
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      advantages__number.classList.add('.number-animation');
      return;
    }
    advantages__number.classList.remove('.number-animation');
  });
});
    observer.observe(document.querySelector('.advantages__item'));
})();
