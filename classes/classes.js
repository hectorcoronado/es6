/*
Class Inheritance: A class is like a blueprint — a description of the object to be created. Classes inherit from classes and create subclass relationships: hierarchical class taxonomies.

Instances are typically instantiated via constructor functions with the `new` keyword. Class inheritance may or may not use the `class` keyword from ES6. Classes don’t technically exist in JavaScript. Constructor functions are used, instead. The ES6 `class` keyword desugars to a constructor function.
*/

class Car {
  // 'constructor()' is invoked EVERY TIME/AUTOMATICALLY when we create a 'new' instance of Car:
  constructor({ model }) {
    // this is where we do any initialization of our class
    this.model = model
  } // no need to use ',' to add methods

  // use enhanced object literal syntax to add methods:
  drive() {
    return `VROOM!`;
  }
}

const car = new Car(); // creates an INSTANCE of Car
car.drive(); // works!

// how do we 'inherit' from the base class 'Car'? We no longer need the 'prototype' keyword, we use 'extends':
class Toyota extends Car {
  // if we extend a class, we can reuse the 'constructor()' keyword and use 'super()' within it, along with the options, without destructuring, we need for the sub-class we're extending:
  constructor(options) {
    super(options); // basically calls 'Car.constructor()'';
    this.color = options.color;
  }

  honk() {
    return 'BEEP!';
  }
}

const prius = new Toyota({ color: 'red' });
prius.honk(); // 'BEEP!'


// ------------------------------
/*
You are a game developer tasked with setting up some basic classes for a new game you are working on.  Create a class called 'Monster'.  In the constructor, you'll need to do some basic setup for Monster whenever they are created.

- Initialize the Monster's health to 100.
- The constructor will be called with an 'options' object that has a 'name' property.  Assign the 'name' to the Monster
*/
class Monster {
  constructor({ name }) {
      this.name = name;
      this.health = 100;
  }
}


// ------------------------------
/*
Now that you have a monster created, create a subclass of the Monster called Snake.

The Snake should have a 'bite' method.  The only argument to this method is another instance of a Snake.
The instance of Snake that is passed in should have their 10 deducted from health.
*/


class Snake extends Monster {
    constructor(options) {
        super(options);
    }

    bite(snake) {
        return snake.health -= 10;
    }

    getName() {
        return `Snake's name is ${this.name}`;
    }
}

const hissy = new Snake({name: 'hissy'});

hissy.getName();
