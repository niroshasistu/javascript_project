let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const input = document.getElementById("guessInput");
const button = document.getElementById("checkBtn");
const message = document.getElementById("message");
const attemptsText = document.getElementById("attempts");

button.addEventListener("click", function () {
  const userGuess = Number(input.value);
  attempts++;

  if (userGuess === randomNumber) {
    message.textContent = "🎉 Correct! You guessed the number.";
    message.style.color = "green";
  } 
  else if (userGuess > randomNumber) {
    message.textContent = "📉 Too high! Try again.";
    message.style.color = "red";
  } 
  else {
    message.textContent = "📈 Too low! Try again.";
    message.style.color = "red";
  }

  attemptsText.textContent = "Attempts: " + attempts;
});