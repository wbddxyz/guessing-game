'use strict';

/*generate a random number for the user to guess */
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


const displayMessage = function (message) {
    document.querySelector('.message').textContent =
        message;
}

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    displayMessage ('Start guessing...');
    document.querySelector('.guess').value = ''
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.number').textContent = '?';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
});






/*select the button class 'check' and check if the user clicks it */
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    //when there is no input
    if (!guess) {
        displayMessage(' No number');

        // when player wins         
    } else if (guess === secretNumber) {
        //  document.querySelector('.message').textContent =
        displayMessage('Correct Number!');
        document.querySelector('.number').textContent = secretNumber;


        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem'

        if (score > highscore) {
            highscore = score;
            document.querySelector('highscore').textContent = highscore;
        }


        //when guess is wrong         
    } else if (guess !== secretNumber) {

        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too high!' : 'Too Low!');
            score--;
            document.querySelector('.score').textContent = score;

        } else {
            displayMessage('You lost the game!');
            document.querySelector('.score').textContent =
                0;
        }


    }







});