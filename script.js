document.getElementById("correct").addEventListener("click", function () {
  handleButtonClick("correct");
});

document.getElementById("incorrect1").addEventListener("click", function () {
  handleButtonClick("incorrect1");
});

document.getElementById("incorrect2").addEventListener("click", function () {
  handleButtonClick("incorrect2");
});

function handleButtonClick(userChoice) {
  var button = document.getElementById(userChoice);
  var questionText = document.querySelector(".section h3");
  var feedbackText = document.createElement("p");
  feedbackText.classList.add("feedback-text");

  var previousFeedback = document.querySelector(".feedback-text");
  if (previousFeedback) {
    previousFeedback.remove();
  }

  if (userChoice === "correct") {
    button.style.backgroundColor = "green";
    feedbackText.textContent = "Correct!";
    feedbackText.classList.add("correct-answer");
  } else {
    button.style.backgroundColor = "red";
    feedbackText.textContent = "Incorrect!";
    feedbackText.classList.add("incorrect-answer");
  }

  document.querySelector(".section").appendChild(feedbackText);
}

function checkAnswer() {
  var userAnswer = document
    .getElementById("freeResponse")
    .value.trim()
    .toLowerCase();
  var feedbackText = document.getElementById("feedback");

  if (userAnswer === "porto alegre") {
    document.getElementById("freeResponse").style.backgroundColor = "green";
    feedbackText.textContent = "Correct!";
    feedbackText.classList.add("correct-answer");
  } else {
    document.getElementById("freeResponse").style.backgroundColor = "red";
    feedbackText.textContent = "Incorrect";
    feedbackText.classList.add("incorrect-answer");
  }
}
