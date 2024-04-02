await Promise.all([
  import('./assets/styles/normalize.scss'),
  import('./assets/styles/reset.scss'),
  import('./assets/styles/fonts.scss'),
  import('./assets/styles/main.scss'),
  import('./assets/styles/typography.scss'),
  import('./assets/styles/header.scss'),
  import('./assets/styles/variables.scss'),
  import('./assets/styles/g-button.scss'),
])

document.querySelector('body').removeAttribute('style');
