'use strict';

const secretNumber = Math.trunc(Math.random()) + 1;

document.querySelector('check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  console.log(guess);
});
