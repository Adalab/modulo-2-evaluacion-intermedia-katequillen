"use strict";

const max = 100;
const min = 1;
const generatedNumber = Math.ceil(Math.random() * max);
const form = document.querySelector(".js-form");
const button = document.querySelector(".js-button");
const guessfill = document.getElementById("inputNumber");
const count = document.querySelector(".js-count");
const clue = document.querySelector(".js-clue");
const attempts = document.querySelector(".fill_attempts");

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
console.log(generatedNumber);

function getGuess() {
  const userGuess = parseInt(guessfill.value);
  return userGuess;
}

function compareNumbers() {
  const valueGuess = getGuess();
  if (valueGuess < generatedNumber && valueGuess < max && valueGuess > min) {
    clue.innerHTML = `Your number is too low.`;
  } else if (
    valueGuess > generatedNumber &&
    valueGuess > min &&
    valueGuess < max
  ) {
    clue.innerHTML = `Your number is too high.`;
  } else if (valueGuess === generatedNumber) {
    clue.innerHTML = `Congratulations! You guessed correctly.`;
  } else if (valueGuess > max) {
    clue.innerHTML = `Please enter a number between 1-100.`;
  } else if (valueGuess < min) {
    clue.innerHTML = `Please enter a number between 1-100.`;
  }
}

function countAttempts() {
  count.innerHTML = parseInt(count.innerHTML) + 1;
}

function bunchFunctions() {
  getGuess();
  compareNumbers();
  countAttempts();
}
function handleSubmit(event) {
  event.preventDefault();
}

form.addEventListener("submit", handleSubmit);
button.addEventListener("click", bunchFunctions);
