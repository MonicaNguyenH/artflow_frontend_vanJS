document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

//Quiz Demo
/*
function checkcheckcheck() {
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
*/

/*
//Quiz 
function checkAnswer() {
  var selectedAnswer = document.querySelector('.option:focus') || document.querySelector('.option:active');

  if (selectedAnswer) {
    if (selectedAnswer.id === "Henri") {
      showAlert("Correct! Henri Matisse used bold colors and simplified forms to capture the exoticism and beauty.");
    } else {
      showAlert("Wrong! The correct answer is Henri Matisse.");
    }
  } else {
    showAlert("Please select an option before submit");
  }
}

function showAlert(message) {
  var alertContainer = document.getElementById("alert-container");

  var alertBox = document.createElement("div");//element specified by tag name
  alertBox.classList.add("alert");
  alertBox.textContent = message;
  alertContainer.appendChild(alertBox);

  //remove the alert after 3 seconds 
  setTimeout(function() {
    alertBox.parentNode.removeChild(alertBox);
  }, 3000);
}
*/


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

