const nav = document.querySelector('.header__nav');
const openButton = document.querySelector('.header__item-button');
const closeButton = document.querySelector('.header__nav-icon-button');

const openNav = () => {
  nav.classList.toggle('header__nav--opened');
};

const onOpenNav = () => {
  openButton.addEventListener('click', openNav);
  closeButton.addEventListener('click', openNav);
};

export { onOpenNav };
