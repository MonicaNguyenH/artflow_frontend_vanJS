document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  /*********************** CAROUSEL FUNCTION ************************/
  document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("[data-carousel-button]");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const offset = button.dataset.carouselButton === "next" ? 1 : -1;
      const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]");
        
      const activeSlide = slides.querySelector("[data-active]");
      let newIndex = [...slides.children].indexOf(activeSlide) + offset;
      if (newIndex < 0) newIndex = slides.children.length - 1;
      if (newIndex >= slides.children.length) newIndex = 0;   
      
      slides.children[newIndex].dataset.active = true;
      delete activeSlide.dataset.active;
    });
  });
});
  /*********************** CAROUSEL FUNCTION ************************/

function color(z) {
  var computedStyle = getComputedStyle(z);
  var backgroundColor = computedStyle.backgroundColor;
  document.body.style.backgroundColor = backgroundColor;
}
