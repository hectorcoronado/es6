////////////
// reduce //
////////////

/*
reduce() syntax is a bit different; we can assign a starting value as the 2nd argument to reduce. If no initial value is supplied, the first element in the array will be used. Calling reduce on an empty array without an initial value is an error.
*/

let numbers = [ 10, 20, 30, 40, 50 ],
    sum = 0;

// for-loop
for(var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);

// reduce
numbers.reduce((sum, number) => {
  return sum + number;
}, 0);

/*
in the above example, 1st arg 'sum' in the anon func passed to reduce is set to initial value of 0, bc that's the 2nd arg passed directly to reduce.

the 2nd arg, number, is the element being iterated
*/


// ------------------------------
/*
Using reduce, create an array with the values for the primaryColors array. Should return:

[ 'red', 'yellow', 'blue' ];

Default initial value should be an empty array
*/

let primaryColors = [
  { color: 'red' },
  { color: 'yellow' },
  { color: 'blue' }
];

primaryColors.reduce(function(accumulator, primaryColor) {
  accumulator.push(primaryColor.color);
  return accumulator;
}, []);

// ------------------------------
/*
Use the 'reduce' helper to find the sum of all the distances traveled.  Assign the result to the variable 'totalDistance'
*/
let trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

let totalDistance = trips.reduce(function(sum, trip) {
    return sum += trip.distance;
}, 0);


// ------------------------------
/*
Use the 'reduce' helper to create an object that tallies the number of sitting and standing desks.  The object returned should have the form '{ sitting: 3, standing: 2 }'.  The initial value has been provided to you.
*/
let desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

let deskTypes = desks.reduce(function(accumulator, desk) {
    if(desk.type === 'sitting') {
        accumulator.sitting++;
    } else if(desk.type === 'standing') {
        accumulator.standing++;
    }
    return accumulator;
}, { sitting: 0, standing: 0 });


// ------------------------------
/*
Employing reduce(), solve for the classic whiteboarding challenge of balanced parens. Becomes easy if our accumulator is set to 0, and for each "(" we increase by one, whereas for each ")" we decrease by one. If our counter at the end is ANYTHING other than 0, it's unbalanced :)

So we can write a reduce function that returns an integer and flip its Boolean with the ! operator; any number other than 0 is truthy, so it'll return false if it's unbalanced, and vice versa :)

One edge case: ")(". We handle that with the first condition below; if accumulator is less than 0, return it.
*/

function balancedParens(string) {
  return !string.split("").reduce(function(accumulator, char) {
    if (accumulator < 0) { return accumulator; }
    if (char === '(') { return accumulator++; }
    if (char === ')') { return accumulator--; }
    return accumulator;
  }, 0);
}


// ------------------------------
/*
Write a function called 'unique' that will remove all the duplicate values from an array.

For example, given the following array:
var numbers = [1, 1, 2, 3, 4, 4];
Your function should return
[1, 2, 3, 4]
*/

function unique(array) {
    return array.reduce((acc, el) => {
        if (!acc.includes(el)) {
            acc.push(el);
        }
        return acc;
    }, []);
}
