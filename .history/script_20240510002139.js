document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

function checkAnswer() {
  var selectedAnswer = document.querySelector('input[name="capital"]:checked');

  if (selectedAnswer) {
      if (selectedAnswer.value === "paris") {
          showAlert("Correct! Paris is the capital of France.");
      } else {
          showAlert("Wrong! The correct answer is Paris.");
      }
  } else {
      showAlert("Please select an option.");
  }
}