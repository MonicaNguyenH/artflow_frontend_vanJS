document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

let selectedOption = null;

function selectOption(option) {
    selectedOption = option;
}

function checkAnswer() {
    if (!selectedOption) {
        showAlert("Please select an option.");
        return;
    }

    if (selectedOption === "paris") {
        showAlert("Correct! Paris is the capital of France.");
    } else {
        showAlert("Wrong! The correct answer is Paris.");
    }
}

function showAlert(message) {
    var alertContainer = document.getElementById("alert-container");

    var alertBox = document.createElement("div");
    alertBox.classList.add("alert");
    alertBox.textContent = message;
    alertContainer.appendChild(alertBox);

    // Remove the alert after 3 seconds
    setTimeout(function() {
        alertBox.parentNode.removeChild(alertBox);
    }, 3000);
}

