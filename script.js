'use strict';

let secretNumber = Math.ceil(Math.random() * 20);
// console.log(secretNumber);
let score = 20;
let highScore = 0;
const diplayMsg = msg => (document.querySelector('.message').textContent = msg);

//on clicking check
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when no number or valid input is typed
  if (!guess) {
    diplayMsg('⛔ No number');
    //correct guess - win
  } else if (guess === secretNumber) {
    //   document.querySelector('.message').textContent = '🐱‍🏍🤘 Correct Number!';
    diplayMsg('🐱‍🏍🤘 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //guess higher/lower than secret number
  } else if (guess !== secretNumber) {
    if (score > 1) {
      diplayMsg(guess > secretNumber ? '👇👇 Too high' : '👆👆 Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      diplayMsg('⛔‍🤦‍♂️ You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
//on clicking again - reset
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.ceil(Math.random() * 20);
  // console.log(secretNumber);
  diplayMsg('⚡⚡ Start guessing ...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
