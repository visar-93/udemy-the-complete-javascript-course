'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 9;
// document.querySelector('.score').textContent = 10;


// document.querySelector('.guess').value = 21;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random()*20) + 1;   // create random number
let score = 20;  // set score 
let highScore = 0;  // set highscore

const displayMessage = function(message) {  // this function selects .message class element and changes its inner content
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);     // guess takes the number of input which has class name guess
    
    // When there is no input
    if(!guess) {  
        displayMessage('No Number⛔!');
   
    //When player wins
    } else if(guess === secretNumber) {
        displayMessage('🎉Correct Number!');
        document.querySelector('.number').textContent = secretNumber;  // when player wins, show the secret number
        document.querySelector('body').style.backgroundColor = '#60b347'; // change background color
        document.querySelector('.number').style.width = '30rem'; // change box size

        if(score > highScore) { // if score is higher than highScore, set highscore = score
            highScore = score;
            document.querySelector('.highscore').textContent = highScore; // selector with class highscore takes the value of variable highScore
        }

    } else if (guess !== secretNumber) { // if it's not equal 
        if(score > 1) {
            // if guess is higher show the message Too High else if is lower show the message Too Low
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!)'); 
            score --; // decrement score for 1
            document.querySelector('.score').textContent = score; // set the new value of score to selector with class .score            
        }
        else { // else if score is lower than 1, player has lost the game
            displayMessage('💥 You lost the game!'); 
            document.querySelector('.score').textContent = 0;  
        }
    }

    // } else if(guess > secretNumber) {

    //     if(score > 1) {
    //         document.querySelector('.message').textContent = '📈 Too high!';
    //         score --;
    //         document.querySelector('.score').textContent = score;            
    //     }
    //     else {
    //         document.querySelector('.message').textContent = '💥 You lost the game!';
    //         document.querySelector('.score').textContent = 0;  
    //     }

    // // When guess is too low
    // } else if (guess < secretNumber) {
    //     document.querySelector('.message').textContent = '📉 Too low!';
    //     score --;
    //     document.querySelector('.score').textContent = score;
    // }
});
// when you press again button , you can play a new game without refreshing the page
document.querySelector('.again').addEventListener('click', function() {
    // set all values to its beginning form
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').textContent = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
