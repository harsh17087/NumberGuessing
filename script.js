'use strict';

// Define a random secret number for which we'll test against

let secretNumber = Math.trunc(Math.random() * 20) + 1;

// create a score variable to constantly update it.
let score = 20;
let highScore = 0;
const showMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // check if no number is entered, then display 'no number entered'

  if (!guess) {
    showMessage('No number entered, Please enter to Play');
  } else {
    if (guess === secretNumber) {
      showMessage('Correct Answer');
      // Also change the background to green once user win

      document.querySelector('body').style.backgroundColor = '#60b347';
      // Also make secretNumber visible to the user
      document.querySelector('.number').textContent = secretNumber;

      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else if (guess !== secretNumber) {
      if (score > 1) {
        showMessage(guess > secretNumber ? 'Too High!!' : 'Too Low!!');
        // for every wrong guess, we'll decrease score by 1. And since it's a wrong guess

        score--;
        document.querySelector('.score').textContent = score;
      } else {
        showMessage('You lost!!');
        document.querySelector('.score').textContent = 0;
      }
    }
    /* } else if (guess > secretNumber) {
      if (score > 1) {
        document.querySelector(".message").textContent = "Too High";
        // for every wrong guess, we'll decrease score by 1. And since it's a wrong guess

        score--;
        document.querySelector(".score").textContent = score;
      } else {
        document.querySelector(".message").textContent = "You lost!!";
        document.querySelector(".score").textContent = 0;
      }
    } else if (guess < secretNumber) {
      if (score > 1) {
        document.querySelector(".message").textContent = "Too Low";
        // for every wrong guess, we'll decrease score by 1. And since it's a wrong guess

        score--;
        document.querySelector(".score").textContent = score;
      } else {
        document.querySelector(".message").textContent = "You lost!!";
        document.querySelector(".score").textContent = 0;
      }
    }                                                                        */
  }
});
document.querySelector('.again').addEventListener('click', function () {
  //location.reload();    We don't do as we have to preserve the highScore also for single session
  // Reassign the score to 20
  score = 20;
  //Reassign the secretNumber
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // Set the message to default 'Start guessing...'
  showMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  // Set the guess value to empty string so that the ser can enter from scratch
  document.querySelector('.guess').value = '';

  // set the bg color of body to default

  document.querySelector('body').style.backgroundColor = '#222';
});

// Selecting and manipulating elements

/* console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct Answer";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value); */

/*  Handling click events and event handlers
    Clicking a mouse or moving a mouse is an event */
