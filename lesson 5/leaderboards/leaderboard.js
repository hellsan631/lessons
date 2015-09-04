var scores = [];
var names = [];

function generateScores(){

  addToLeaderboard('Bane');
  addToLeaderboard('Batman');
  addToLeaderboard('Dr. Freeze');
  addToLeaderboard('Robin');
  addToLeaderboard('Joker');
  addToLeaderboard('Bruce');
}

function getRandomScore(){
  return Math.floor(Math.random() * 19000) + 1001;
}

function addToLeaderboard(name, score){
  if(!score || score === 0){
    score = getRandomScore();
  }

  names.unshift(name);
  scores.unshift(score);

  var sort = bubbleSort(scores, names);

  scores = sort[0];
  names = sort[1];

  if(names.length > 5){
    removeFromLeaderboard();
  }
}

function removeFromLeaderboard(){
  names.pop();
  scores.pop();
}

function getScores(){
  console.log(names[0] + ' | ' + scores[0]);
  console.log(names[1] + ' | ' + scores[1]);
  console.log(names[2] + ' | ' + scores[2]);
  console.log(names[3] + ' | ' + scores[3]);
  console.log(names[4] + ' | ' + scores[4]);
}

function addScore(){
  var name = prompt('Whose name do you want to add?');
  var score = prompt('Whats their score?');

  addToLeaderboard(name, score);
  getScores();
}
