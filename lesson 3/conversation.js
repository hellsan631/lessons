decide(30, 40, 15);

function decide(people, cars, buses){
  console.log(decideCars(cars, people));
  console.log(decideBuses(buses, cars));
  console.log(decidePeople(people, buses));
}

function decideCars(cars, people){
  if ( cars > people ){
    return "We should take the cars.";
  }else if ( cars < people ){
    return "We should not take the cars.";
  }

  return  "We can't decide.";
}

function decideBuses(buses, cars){
  if ( buses > cars ){
    return "That's too many buses.";
  }else if ( buses < cars ){
    return "Maybe we could take the buses.";
  }

  return "We still can't decide.";
}

function decidePeople(people, buses){
  if ( people > buses ){
    return "All right, let's just take the buses.";
  }

  return "Fine, let's stay home then.";

}
