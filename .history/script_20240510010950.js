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

function showOverlay() {
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
    var alertBox = document.getElementById("alert-box");
    alertBox.innerHTML = message;
    document.getElementById("alert-overlay").style.display = "block";

    // Remove the alert after 3 seconds
    setTimeout(function() {
        hideOverlay();
    }, 3000);
}

function hideOverlay() {
    document.getElementById("alert-overlay").style.display = "none";
}
