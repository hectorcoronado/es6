/////////
// map //
/////////

let numbers = [1, 2, 3];

let doubledNumbers = [];

for (var i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}

let doubled = numbers.map(function(number) {
  return number * 2;
});

console.log(doubled);

let cars = [
  {
    model: 'Buick',
    price: 'CHEAP'
  }, {
    model: 'Ferrari',
    price: 'EXPENSIVE'
  }
];

let prices = cars.map(function(car) {
  return car.price;
});

console.log(prices);

let images = [
  {
    height: '34px',
    width: '39px'
  }, {
    height: '54px',
    width: '19px'
  }, {
    height: '83px',
    width: '75px'
  }
];

let heights = images.map((image) => {
  return image.height;
});

/*
Calculating Values with Map

Using map, create a new array that contains the distance / time value from each trip.  In other words, the new array should contain the (distance / time) value.  Assign the result to the variable 'speeds'.
*/

let trips = [
  {
    distance: 34,
    time: 10
  }, {
    distance: 90,
    time: 50
  }, {
    distance: 59,
    time: 25
  }
];

let speeds = trips.map((trip) => {
  return trip.distance / trip.time;
});

/*
Implement a 'pluck' function.  Pluck should accept an array and a string representing a property name and return an  array containing that property from each object.

Example:

var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];
pluck(paints, 'color'); // returns ['red', 'yellow', 'blue'];
*/

function pluck(array, property) {
  let result = array.map((element) => {
    return element[property];
  });
  return result;
}
