var prompt = require('prompt');

var playerHP = 100;
var playerChoice;

var computerHP = 100;
var computerChoice;

var choices = [
  'rock',
  'paper',
  'scissors'
];

var turn = 0;
tick();

/*
 * Runs a turn for both players. Both players get a choice and then an outcome is decided;
 */
function tick() {
  turn++;
  playerChoice    = getRandomChoice();
  computerChoice  = getRandomChoice();

  var outcome = decideOutcome();

  if (outcome === 'player') {
    computerHP -= 25;
  } else if (outcome === 'computer') {
    playerHP -= 25;
  }

  console.log('Turn: ' + turn);
  console.log('Player: ' + choices[playerChoice] + ' | HP: ' + playerHP);
  console.log('Computer: ' + choices[computerChoice] + ' | HP: ' + computerHP);
  console.log(' ');

  if (playerHP <= 0 || computerHP <= 0) {
    return console.log('Winner Winner chicken sauce');
  }

  return tick();
}

function getRandomChoice() {
  return Math.floor(Math.random() * choices.length);
}

function decideOutcome() {
  if (playerChoice === 0 && computerChoice === 2) {
    return 'player';
  }

  if (playerChoice === 2 && computerChoice === 0) {
    return 'computer';
  }

  if (playerChoice > computerChoice) {
    return 'player';
  }

  if (computerChoice > playerChoice) {
    return 'computer';
  }

  return false;
}
