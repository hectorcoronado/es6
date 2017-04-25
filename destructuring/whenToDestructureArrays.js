/*
Practical use of array destructuring!

Let's say we're plotting data on a chart and we're getting x & y coordinates from some API:
*/

const points = [
  [4, 5],
  [10, 1],
  [0, 40]
];

/*
...but the data visualization library we're using expects data that looks like an array of objects with 'x' and 'y' properties:

[
  { x: 4, y: 5 },
  { x: 10, y: 1 },
  { x: 0, y: 40 },
]

We can change our data with destructuring to do this.

Approach:
1. Map over the array
2. for every element in the array, we're going to
3. destructure an x value
4. destructure a y value
5. use the improved obj literal syntax to return an obj with x & y properties
*/

// we can destructure the array in the arguments:
points.map(([ x, y ]) => {
  // and return in an object:
  return { x, y };
});



// ------------------------------
/*
The 'classes' variable holds an array of arrays, where each array represents a single class that a student is enrolled in.  Convert this array of arrays into an array of objects, where each object has the keys 'subject', 'time', and 'teacher' and assign the result to 'classesAsObject.  Use array destructuring and the map helper.

An array for a class has the form [subject, time, teacher]

The resulting data structure should look something like the following:

const classesAsObject = [{ subject: 'Geography', time: '2PM', teacher: 'Mrs. Larsen' }]
*/

const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const classesAsObject = classes.map(([subject, time, teacher]) => {
    return { subject, time, teacher };
});
