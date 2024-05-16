document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

let selectedOption = null;


/*********************** QUIZ ************************/
function selectOption(option) {
    selectedOption = option;
}

function checkAnswer() {
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

/**QUIZ OVERLAY APPEAR */
function showAlert(message) {
    var alertContainer = document.getElementById("alert-container");

    if (document.querySelector('.alertBox')) {
        return; // If there's already an alert, exit the function
    }

    var alertBox = document.createElement("div");
    alertBox.className = "alertBox";
    alertBox.id = "alertBox";
    

    alertBox.textContent = message;
    alertContainer.appendChild(alertBox);

    setTimeout(function() {
        alertBox.parentNode.removeChild(alertBox);
        alertContainer.style.display = "none";
    }, 3000);

    alertContainer.addEventListener("click", function(event) {
        if (event.target === alertContainer) {
            overlay.style.display = "none";
        }
    });
};

/**QUIZ OVERLAY ONCLICK DISPLAY */
document.addEventListener("DOMContentLoaded", function() {
    var openButton = document.getElementById("open-overlay");
    var overlay = document.getElementById("alert-container");
  
    openButton.addEventListener("click", function() {
      overlay.style.display = "block";
    });
  
    overlay.addEventListener("click", function(event) {
      if (event.target === overlay) {
        overlay.style.display = "none";
      }
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
    var a = getComputedStyle(z);
    var b = a.background;
    document.getElementsByTagName("BODY")[0].style.background= b;
}

/*********************** FORM ************************/
const regexAlphabet = /^[a-zA-Z]+$/;
/**any single alphabetical character (both uppercase and lowercase)
 * + more than 1 character
*/
const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
/**[a-zA-Z0-9._-]+: alphanumeric characters, dots, underscores, or hyphens BEFORE @
 * [a-zA-Z0-9.-]+: alphanumeric characters, dots, or hyphens AFTER @
 * @: +@
 * [a-zA-Z]{2,4}: com, org, edu
 */

document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.querySelector(".main-form .submitButton");
  const successMsg = document.querySelector(".success");
  const mainForm = document.querySelector(".main-form");
  const successButton = document.querySelector(".success button");

  submitButton.addEventListener("click", () => {
    const validation = formValidation();
    if (validation == true) {
      successMsg.style.display = "flex";
      mainForm.style.display = "none";
    }
  })

  successButton.addEventListener("click", () => {
    successMsg.style.display = "none";
    mainForm.style.display = "block";
  })
});

function formValidation() {
  const formInputs = document.querySelectorAll(".main-form input");
  const errorMsg = document.querySelector(".error");
  let validated;
  formInputs.forEach((input) => {
    if (input.value.length < 1) {
      errorMsg.style.display = "block";
      validated = false;
      return;
    } else {
      errorMsg.style.display = "none";
      validated = true;
      return;
    }
  }) 
  return validated;
}

document.addEventListener("DOMContentLoaded", function () {
  const switchToggle = document.querySelector(".switch input");
  switchToggle.addEventListener("change", () => {
    setTimeout(() => {
      window.alert("Noooo don't click me :(");
      switchToggle.checked = false;
    }, 400)
  })
})

