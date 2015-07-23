var age = 20;
var name = 'Matt';

console.log(sayAge(age));
sayName();

function sayAge(personAge){
  var result = name + ' is ' + personAge + ' years old.';

  name = "Twinkletoes";

  sayName();

  return result;

  function sayName(){
    var result = name + '!';

    console.log(result);
  }
}
