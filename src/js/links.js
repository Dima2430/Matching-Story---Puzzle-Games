document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.querySelector('.menu-button');
  const backdrop = document.querySelector('.backdrop');
  const closeIcon = document.querySelector('.close-button');
  const listOfLinks = document.querySelector('.nav-list');
  const headerLinks = document.querySelectorAll('.nav-link');
  const footerLinks = document.querySelectorAll('.footer-link');

  if (menuIcon) {
    menuIcon.addEventListener('click', () => {
      backdrop.classList.add('is-open');
    });
  }

  if (closeIcon) {
    closeIcon.addEventListener('click', () => {
      backdrop.classList.remove('is-open');
    });
  }

  if (listOfLinks) {
    listOfLinks.addEventListener('click', e => {
      if (e.target.classList.contains('nav-link')) {
        backdrop.classList.remove('is-open');
      }
    });
  }

  headerLinks.forEach(link => {
    link.addEventListener('mousedown', () => {
      headerLinks.forEach(item => item.classList.remove('active-link'));
      link.classList.add('active-link');
    });

    link.addEventListener('mouseup', () => {
      setTimeout(() => {
        link.classList.remove('active-link');
      }, 0);
    });
  });

  footerLinks.forEach(link => {
    link.addEventListener('mousedown', () => {
      footerLinks.forEach(item => item.classList.remove('active-link'));
      link.classList.add('active-link');
    });

    link.addEventListener('mouseup', () => {
      setTimeout(() => {
        link.classList.remove('active-link');
      }, 0);
    });
  });
});
