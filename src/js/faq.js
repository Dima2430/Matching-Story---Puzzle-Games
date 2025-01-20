document.querySelectorAll('.faq-list-item').forEach(item => {
  const itemContainer = item.querySelector('.faq-list-item-container');

  item.addEventListener('click', () => {
    item.classList.toggle('open');
    itemContainer.classList.toggle('active');
  });
});
