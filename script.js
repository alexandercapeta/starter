'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  } else if (Number(guess) === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    score++;
    document.querySelector('.score').textContent = score;
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Guess is Too high!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Guess is Too low!';
    score--;
    document.querySelector('.score').textContent = score;
  }
});
