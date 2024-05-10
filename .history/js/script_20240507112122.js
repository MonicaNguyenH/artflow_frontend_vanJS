document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

/** GRID JS */
const gridMargin = document.querySelector('.grid-margin');
const gridCol = document.querySelector('.grid-col');
const gridGutter = document.querySelector('.grid-gutter');

const overlayMargin = document.getElementById('grid-margin-overlay');
const overlayCol = document.getElementById('grid-col-overlay');
const overlayGutter = document.getElementById('grid-gutter-overlay');
