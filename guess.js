var randomNumber = Math.floor(Math.random() * 100) + 1;

var guesses = document.querySelector(".guesses");
var lastResult = document.querySelector(".lastResult");
var resultColor = document.querySelector(".resultColor");
var chance = document.querySelector(".chance");

var guessSubmit = document.querySelector(".guessSubmit");
var guessField = document.querySelector(".guessField");
var guessCount = 1;
var resetButton;


function checkGuess() {
  var userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Guess history: ";
  }
  guesses.textContent += userGuess + " ";

  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulation, you won!";
    chance.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "You Lost, Game Over!";
    (chance.textcontent = ""), setGameOver();
  } else {
    if (userGuess < randomNumber) {
        chance.textContent = "Too low, try again!";
    } else if (userGuess > randomNumber) {
        chance.textContent = "Too high, try again!";
    }
  }

  guessCount++;
  guessField.value = " ";
  guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  document.body.appendChild(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  guessCount = 1;

  var resetParas = document.querySelectorAll(".resultParas p");
  for (var i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = "";
    console.log(".resultParas p");
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();

  randomNumber = Math.floor(Math.random() * 100) + 1;
}
