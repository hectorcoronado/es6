// let's say we're building an object that tracks expenses:

/////////
// ES5 //
/////////
var expense = {
  type: 'Business',
  amount: '$45 USD'
};

// how do we reference the type and amount on this object? We could do:

var type = expense.type,
    amount = expense.type;

//////////////////////////
// DESTRUCTURING IN ES6 //
//////////////////////////

const { type } = expense;
const { amount } = expense;

// we're NOT creating an object with the two consts above; if a curly brace is found to the LEFT of the '=', we DON'T create an object, we create a variable that references a previously declared object with keys of the same name!

// And! if we're pulling properties off of one single object, we can do the following:

const { type, amount } = expense;

// the variable name within the curly braces MUST BE IDENTICAL to the key in the object.


/////////
// ES5 //
/////////
var savedFile = {
  extension: '.jpg',
  name: 'repost',
  size: 14040
};
//
// function fileSummary(file) {
//   return `The file ${file.name}${file.extension} is of size ${file.size}.`
// }
//
// console.log(fileSummary(savedFile));


//////////////////////////
// DESTRUCTURING IN ES6 //
//////////////////////////
function fileSummary({ name, extension, size }, { date }) {
  return `The file ${name}${extension} is of size ${size}, created on ${date}.`
}

console.log(fileSummary(savedFile, { date: new Date() }));


// destructuring arrays:
const companies = [
  'Google',
  'Facebook',
  'Lyft'
];

// the rule behind destruct'ing arrays is that the order in which we place the variable will determine which element of the array is assigned to it:
const [ name1, name2, name3  ] = companies; // 'Google', 'Facebook', 'Lyft'

// spread operator also works:
const [ name, ...names ] = companies; // 'Google', ['Facebook', 'Lyft']


////////////////////////////////
// DESTRUCT'ING ARRAY OF OBJS //
////////////////////////////////
const companies1 = [
  { name: 'Google', location: 'Mountain View' },
  { name: 'Facebook', location: 'Menlo Park' },
  { name: 'Uber', location: 'San Francisco' }
];


// ES6 //
// This is destructuring 'companies1', which is an array, and further destructuring it's first element, which is an object, and pulling the 'location' property out of it:
const [ { location } ] = companies1;
console.log(location); // 'Mountain View'


const Google = {
  locations: ['Mountain View', 'New York', 'London']
};

// This is destructuring 'Google', which is an object, and further destructuring its first property, 'locations', whose value is an array and pulling the first element from it:
const { locations: [ location ] } = Google;
console.log(location); // 'Mountain View'
