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
          alert("Correct! Paris is the capital of France.");
      } else {
          alert("Wrong! The correct answer is Paris.");
      }
  } else {
      alert("Please select an option.");
  }
}

