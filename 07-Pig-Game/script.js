'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0'); // all section of player1 (for changing bacground)
const player1El = document.querySelector('.player--1'); // all section of player2 (for changing bacground)
const score0El = document.querySelector('#score--0'); //  scores of player1 (increased with current score after pressing the hold button)
const score1El = document.getElementById('score--1'); //  scores of player2 (increased with current score after pressing the hold button)
const current0El = document.getElementById('current--0'); // current scores of player1 (takes value from the dice roll, if it's 1 becomes 0)
const current1El = document.getElementById('current--1'); // current scores of player2 (takes value from the dice roll, if it's 1 becomes 0)
const diceEl = document.querySelector('.dice'); // based on dice roll changes image
const btnNew = document.querySelector('.btn--new'); // button for new game
const btnRoll = document.querySelector('.btn--roll'); // buton for rolling dice
const btnHold = document.querySelector('.btn--hold'); // buton for holding current score (add current score to score)

// Starting conditions
score0El.textContent = 0; // set initial score of player1 to 0
score1El.textContent = 0; // set initial score of player2 to 0
diceEl.classList.add('hidden'); // hide dice at begining of the game

const scores = [0, 0]; // array where are stored scores of each player, (initial values are 0)
let currentScore = 0; // current score value for each player, initialized to zero
let activePlayer = 0; // activePlayer defines which player has the turn, is initialized to 0 (player1) and takes only values 0 and 1
let playing = true; // the statemet wich defines if game will continue or will stop
 
// function wich will change the turn of the player
const switchPlayer = function () { 
  document.getElementById(`current--${activePlayer}`).textContent = 0; // set the current players current scores to 0
  currentScore = 0; // current score is zero, and it will increase based on dice rolls
  activePlayer = activePlayer === 0 ? 1 : 0; // change the player, if is player1 change to player2 and vice versa
  player0El.classList.toggle('player--active'); // if player1 contains this class, then remove it, or if it doesn't then add it 
  player1El.classList.toggle('player--active'); // if player0 contains this class, then remove it, or if it doesn't then add it
  // player--active class changes background-color to white, depending on wich player has the turn to roll the dice
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) { // if game is still continue
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`; // dynamically change the image content based on dice

    // 3. Check for rolled 1
    if (dice !== 1) { 
      // Add dice to the current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      // Switch to next player
      switchPlayer();

      // document.getElementById(`current--${activePlayer}`).textContent = 0;
      // currentScore = 0;
      // activePlayer = activePlayer === 0 ? 1 : 0;
      // player0El.classList.toggle('player--active');
      // player1El.classList.toggle('player--active');
    }
  }
});

// Holding the score functionality
btnHold.addEventListener('click', function () {
  if (playing) { // if game still continues
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');

      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

// New Game functionality
btnNew.addEventListener('click', function() {
// Basically set all values to their initial conditions
    for(let i=0; i < scores.length; i++){
        scores[i] -= scores[i];
        document.querySelector(`.player--${i}`).classList.remove('player--winner');
    }
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    diceEl.classList.add('hidden');
});