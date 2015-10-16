// Class
class Dragon {

  /* constructor is a default method that is called when
  creating a new Dragon object */
  constructor: function(name, strength, size) {

    //'this' refers to the object itself.
    this.name     = name;
    this.strength = strength;
    this.size     = size;
  }

  //the fireBreath method of our object.
  fireBreath: function() {
    return 20 * this.strength;
  }
}

/*extends is a type of inheritence. We are reusing the
code from the dragon class here for our charmander */

class Charmander extends Dragon {
  constructor: function(level) {

    /* We want to talk to the dragon's constructor to have it
    do its thing inside our charmander object*/

    super('Charmander', 10*level, 50);

    this.level = level;
  }

  scratch: function() {
    return 5 + this.strength;
  }
}

//Declaring the new object as a variable named enemy
var enemy = new Dragon('Valrogg', 10, 100);

var hp = 1000 - enemy.fireBreath();

var charchar = new Charmander(2);

//We maintain access to all of the dragon methods
hp = hp - charchar.fireBreath();
