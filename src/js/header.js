const menuIcon = document.querySelector('.menu-button');
const backdrop = document.querySelector('.backdrop');
const closeIcon = document.querySelector('.close-button');
const listOfLinks = document.querySelector('.nav-list');
menuIcon.addEventListener('click', () => {
  backdrop.classList.add('is-open');
});
closeIcon.addEventListener('click', () => {
  backdrop.classList.remove('is-open');
});
listOfLinks.addEventListener('click', e => {
  if (e.target.classList.contains('nav-link')) {
    backdrop.classList.remove('is-open');
  }
});
