

var cards = ['Ace', 'King', 'Queen', 'Jack', 10];
var fortune = ['Success', 'You have a big ass', 'Your Gay', 'Back Alley', 'Your age'];
var randomNumbers = [];

function pickACard(){
  var random = Math.floor(Math.random() * cards.length);
  var result = random + ' : ' + cards[random] + ' : ' + fortune[random];

  randomNumbers.push(result);

  return result;
}


pickACard();
pickACard();
pickACard();
pickACard();
pickACard();
pickACard();
pickACard();
pickACard();
pickACard();
pickACard();
pickACard();

console.log(randomNumbers);
