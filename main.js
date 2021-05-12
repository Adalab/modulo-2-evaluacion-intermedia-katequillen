"use strict";


const leadNumber = document.querySelector(".fill_number");
const clue = document.querySelector(".fill_clue");

var fillNumber = function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
   }
console.log(fillNumber);
console.log(leadNumber);

const clueNumber = (leadNumber) => {
    if(number < fillNumber) {
        clue.innerHTML = `Your number is too low.`;
    }
    else if (number > fillNumber){
        clue.innerHTML = `Your number is too high.`;
    }
    else if (number === fillNumber) {
        clue.innerHTML = `Congratulations! You guessed correctly.`
    }
    else if (number < 1) {
        clue.innerHTML = `Please enter a valid number.`
    }
    else if (number > 100) {
        clue.innerHTML = `Please enter a valid number.`
    }
}


   //get random number
   // lead introduced number
   //if number too big
   //if number too small
   //if number the same
   //if number not valid

   //number of attempts