let inputColorgreen = document.querySelector('.gallery__btn--green');
let inputColorrose = document.querySelector('.gallery__btn--rose');
let inputColorcoffe = document.querySelector('.gallery__btn--coffe');

inputColorgreen.addEventListener('click', e => {
  document.documentElement.style.setProperty('--accent-text-color', '#14d443'),
    document.documentElement.style.setProperty(
      '--secondary-text-color',
      '#7e9082'
    ),
    document.documentElement.style.setProperty('--background-color', '#f5fff6'),
    document.documentElement.style.setProperty(
      '--accent-background-color',
      '#b8ffca'
    ),
    document.documentElement.style.setProperty(
      '--secondary-accent-color',
      '#a5ffba'
    ),
    document.documentElement.style.setProperty(
      '--primary-icon-bg-color',
      '#a5febb'
    ),
    document.documentElement.style.setProperty(
      '--modal-accent-color',
      '#60f372'
    ),
    document.documentElement.style.setProperty(
      '--menu-background-color',
      '#79e192'
    ),
    document.documentElement.style.setProperty(
      '--menu-border-top-color',
      '#e18298'
    );
});
inputColorrose.addEventListener('click', e => {
  document.documentElement.style.setProperty('--accent-text-color', '#d41443'),
    document.documentElement.style.setProperty(
      '--secondary-text-color',
      '#907e82'
    ),
    document.documentElement.style.setProperty('--background-color', '#fff5f6'),
    document.documentElement.style.setProperty(
      '--accent-background-color',
      '#ffb8ca'
    ),
    document.documentElement.style.setProperty(
      '--secondary-accent-color',
      '#ffa5ba'
    ),
    document.documentElement.style.setProperty(
      '--primary-icon-bg-color',
      '#fea5bb'
    ),
    document.documentElement.style.setProperty(
      '--modal-accent-color',
      '#f36072'
    ),
    document.documentElement.style.setProperty(
      '--menu-background-color',
      '#e17992'
    ),
    document.documentElement.style.setProperty(
      '--menu-border-top-color',
      '#82e198'
    );
});
inputColorcoffe.addEventListener('click', e => {
  document.documentElement.style.setProperty('--accent-text-color', '#8a6d45'),
    document.documentElement.style.setProperty(
      '--secondary-text-color',
      '#7e9082'
    ),
    document.documentElement.style.setProperty('--background-color', '#fffcf5'),
    document.documentElement.style.setProperty(
      '--accent-background-color',
      '#f2d6ae'
    ),
    document.documentElement.style.setProperty(
      '--secondary-accent-color',
      '#f2cb94'
    ),
    document.documentElement.style.setProperty(
      '--primary-icon-bg-color',
      '#f2c585'
    ),
    document.documentElement.style.setProperty(
      '--modal-accent-color',
      '#f3b860'
    ),
    document.documentElement.style.setProperty(
      '--menu-background-color',
      '#e1b679'
    ),
    document.documentElement.style.setProperty(
      '--menu-border-top-color',
      '#e1be82'
    );
});
