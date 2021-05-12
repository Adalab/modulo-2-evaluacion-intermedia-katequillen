"use strict";

const leadNumber = document.querySelector(".fill_number");
const clue = document.querySelector(".fill_clue");
const attempts = document.querySelector(".fill_attempts")
const max = 100;
const generatedNumber = Math.ceil(Math.random() * max);
const button = document.querySelector(".button_test")

console.log(generatedNumber);

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
   }

if(leadNumber < generatedNumber) {
    clue.innerHTML = `Your number is too low.`;
    }
else if (leadNumber > generatedNumber){
        clue.innerHTML = `Your number is too high.`;
    }
    else if (leadNumber === generatedNumber) {
        clue.innerHTML = `Congratulations! You guessed correctly.`
    }
    else {
        clue.innerHTML = `Please enter a valid number.`
    }

// function handleClickButton() {
//   attempts.innerHTML = ('Numero de intentos:' + click++);
// }


// for (let button = 0; button < 1000; button++) {
//     attempts.innerHTML = ('Numero de intentos:' + button);
//   }
       
// button.addEventListener( 'click' , handleClickButton );


   //get random number
   // lead introduced number
   //if number too big
   //if number too small
   //if number the same
   //if number not valid

   //number of attempts