// Player 1 - setting the dice to return random numbers from 1 to 6 inc.
const randomNumber1 = Math.floor(Math.random() * 6 + 1);


// Player 2 - setting the dice to return random numbers from 1 to 6 inc.
const randomNumber2 = Math.floor(Math.random() * 6 + 1);


// Object with the image values
const diceImg = {
  1 : "images/dice" + 1 + ".png",
  2 : "images/dice" + 2 + ".png",
  3 : "images/dice" + 3 + ".png",
  4 : "images/dice" + 4 + ".png",
  5 : "images/dice" + 5 + ".png",
  6 : "images/dice" + 6 + ".png",
}

// Player 1 - Selects the path to the image corresponding to the random number returned from randomNumber1
var diceImage1 = diceImg[randomNumber1];

// Player 2 - Selects the path to the image corresponding to the random number returned from randomNumber2
var diceImage2 = diceImg[randomNumber2];

// Changing images in browser
document.querySelectorAll("img")[0].setAttribute("src", diceImage1);

document.querySelectorAll("img")[1].setAttribute("src", diceImage2);


// GAME LOGIC
let result = (diceImage1 > diceImage2) ? "Player 1 wins!" :
(diceImage1 < diceImage2) ? "Player 2 wins!" :
"It's a draw!";

document.querySelector("h1").textContent = result;