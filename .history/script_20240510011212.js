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

  if (selectedOption === "henri") {
      showAlert("Correct! Henri Matisse used bold colors and simplified forms to capture the exoticism and beauty.");
  } else {
      showAlert("Wrong! The correct answer is Henri Matisse.");
  }
}

function showAlert(message) {
  var alertBox = document.getElementById("alert-box");
  alertBox.innerHTML = message;
  document.getElementById("alert-overlay").style.display = "block";

  console.log("Before setTimeout");

  // Remove the alert after 3 seconds
  setTimeout(function() {
      console.log("Inside setTimeout");
      hideOverlay();
  }, 3000);

  console.log("After setTimeout");
}

function hideOverlay() {
  console.log("Hiding overlay");
  document.getElementById("alert-overlay").style.display = "none";
}

