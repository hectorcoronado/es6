/*************************
// CONSTRUCTOR FUNCTION //
*************************/
function Car(options) {
  this.model = options.model;
}

// let's add a method to Car by adding to the 'prototype' object of the constructor:
Car.prototype.drive = function () {
  return 'VROOM!';
}

const car = new Car({ model: 'M3' });
car.drive(); // VROOM!


// how de we hook up Toyota to Car?
function Toyota(options) {
  Car.call(this, options); // initializes everything that occurs in Car
  this.color = options.color;
}

Toyota.prototype = Object.create(Car.prototype);
Totota.prototype.constructor = Toyota; // wtf??

Toyota.prototype.honk = function() {
  return 'BEEP!';
}

const toyota = new Toyota({ color: 'red', model: 'Prius' });

toyota.drive(); // this works as a result of prototypal inheritance, somehow
toyota.honk();

/*
When working with ES6 classes, we don't have to use 'prototype', which isn't very well documented and tends to be confusing.
*/
