"use strict";

const max = 100;
const generatedNumber = Math.ceil(Math.random() * max);
const button = document.querySelector('.button_test')
const guessfill= document.getElementById('number');
const guess = parseInt(guessfill.innerHTML);
const clue = document.querySelector('.fill_clue');
const attempts = document.querySelector('.fill_attempts')

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
   }
console.log(generatedNumber);

//console.log(guess);

// button.addEventListener('click', handleClickButton);

if (guess.value < generatedNumber) {
    clue.innerHTML = `Your number is too low.`;
} else if (guess.value > generatedNumber) {
    clue.innerHTML = `Your number is too high.`;
} else if (guess.value === generatedNumber) {
    clue.innerHTML = `Congratulations! You guessed correctly.`
} else if (guess > 100) {
    clue.innerHTML = `Please enter a valid number.`;
} else if (guess < 1) {
    clue.innerHTML = `Please enter a valid number.`;
}   



// for (let i = 0; i < 10; i++) {
//     attempts.innerHTML = ('Numero de intentos:' + i);
//   }
