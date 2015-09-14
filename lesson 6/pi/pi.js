// Problem 1.2
function getIterations() {
  return prompt('How many times do you want to iterate for Pi?', 10);
}

// Problem 1.1
function solvePi() {
  var count   = getIterations();

  // Problem 2.1
  var divisor = 1;
  var pi      = 0;

  for (var i = 0; i < count; i++) {
    pi      += calculate(i, divisor);

    divisor += 2;
  }

  alert(pi);
}

function calculate(iteration, divisor){

  // Problem 3
  var answer = (4/divisor);

  // Problem 2.2
  if (iteration % 2 === 0) {
    return answer;
  }

  return -answer;
}
