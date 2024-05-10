document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

/** GRID JS */

document.addEventListener('DOMContentLoaded', function() {
  const gridMargin = document.querySelector('.grid-margin');
  const gridCol = document.querySelector('.grid-col');
  const gridGutter = document.querySelector('.grid-gutter');

  const overlayMargin = document.getElementById('.grid-margin-overlay');
  const overlayCol = document.getElementById('.grid-col-overlay');
  const overlayGutter = document.getElementById('.grid-gutter-overlay');

  overlayMargin.style.display = 'none';
  overlayCol.style.display = 'none';
  overlayGutter.style.display = 'none';

  gridMargin.addEventListener('mouseover', () => {
    overlayMargin.style.display = 'block';
  });

  gridMargin.addEventListener('mouseout', () => {
    overlayMargin.style.display = 'none';
  });

  gridCol.addEventListener('mouseover', () => {
    overlayCol.style.display = 'block';
  });

  gridCol.addEventListener('mouseout', () => {
    overlayCol.style.display = 'none';
  });

  gridGutter.addEventListener('mouseover', () => {
    overlayGutter.style.display = 'block';
  });

  gridGutter.addEventListener('mouseout', () => {
    overlayGutter.style.display = 'none';
  });
});