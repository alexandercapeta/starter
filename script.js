'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Presenting the message without repeating code.
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  //console.log(guess);

  if (!guess) {
    displayMessage('No number!');
  } else if (Number(guess) === secretNumber) {
    // When the player wins.

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30 rem';

    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = guess;
    score++;
    document.querySelector('.score').textContent = score;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    displayMessage('You lost the game!');
    document.querySelector('.score').textContent = 0;
  }

  // else if (guess > secretNumber) {
  //   // When the guess is too high.
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Guess is Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   // When the guess is too low.
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Guess is Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15 rem';
});
