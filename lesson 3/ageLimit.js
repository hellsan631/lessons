console.log(ageLimit(42));

function ageLimit(age){

  if(age < 16){
    return 'You can\'t drive';
  }else if(age < 18){
    return 'You can\'t vote';
  }else if(age < 25){
    return 'You can\'t rent a car';
  }

  return 'You can do anything';
}

//hello
