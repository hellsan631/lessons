sayAge("Matt", 25, false);

function sayAge(name, age, log){
  if(log)
    console.log(name + ' is ' + age + ' years old.');
  else
    console.log("hello");
}

function addAge(age){
  return age + 1;
}
