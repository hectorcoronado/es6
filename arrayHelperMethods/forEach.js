/////////////
// forEach //
/////////////

let colors = [ 'red', 'blue', 'green' ];

// for loop
for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// es5
colors.forEach(function(color) {
  console.log(color);
});

// es6
colors.forEach( color => console.log(color));


// Create an array of numbers
let numbers = [1, 2, 3, 4, 5];

// Create a var to hold the sum
let sum = 0;

// Loop over array, incrementing sum variable
numbers.forEach( (number) => {
  sum += number;
});

// print the sum variable
console.log(sum);
