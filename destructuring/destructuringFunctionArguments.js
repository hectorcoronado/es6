/*
Let's say we're writing a function to save a user to a db:
*/

function signup(username, password) {
  // code to create new user
}

// ...and then we call our function:

signup('myname', 'mypassword');

// ...later, we realize we need much more information:

function signup(username, password, email, dateOfBirth, city) {
  // code to create new user
}

/*
This is very brittle; the order of args has to be accurate, and if we have no easy access to the function signature, we're liable to make mistakes:
*/
signup('Joe', '12345', 'email@email.com', '1/1/1980', 'New York');

/*
If we refactor our signup function to use destructuring, we can minimize the odds of mistakes! Instead of passing in a bunch of strings, we can pass in one object. If we do this, we don't have to keep track of the order of required properties; our only concern is to pass in the property names, and their order is irrelevant.
*/

function signup( { username, password, email, dateOfBirth, city }) {
  // code to create new user
}

const user = {
  username: 'My Name',
  password: 'security',
  email: 'email@email.com',
  dateOfBirth: '1/1/1990',
  city: 'New York'
};

signup(user);


// ------------------------------
/*
The snippet of code below duplicates references to 'profile' inside of the 'isEngineer' function.  Perhaps we can reduce the amount of code used for referencing the 'title' and 'department' properties.  Refactor this code to use destructuring.
*/

const profile = {
  title: 'Engineer',
  department: 'Engineering'
};

// ES5 //
function isEngineer({profile}) {
  var title = profile.title;
  var department = profile.department;
  return title === 'Engineer' && department === 'Engineering';
}

//ES6 //
function isEngineer({ title, department } = profile) {
  return title === 'Engineer' && department === 'Engineering';
}

// ------------------------------
/*
Use array destructuring, recursion, and the rest/spread operators to create a function 'double' that will return a new array with all values inside of it multiplied by two.  Do not use any array helpers! Sure, the map, forEach, or reduce helpers would make this extremely easy but give it a shot the hard way anyways :)

Input:

double([1,2,3])

Output

[2,4,6]

Hint: Don't forget that with recursion you must add a base case so you don't get an infinite call stack.  For example, if 'const [ number, ...rest ] = numbers' and number is undefined do you need to keep walking through the array?
*/

const numbers = [1, 2, 3];
let result = [];

function double([ number, ...rest ] = numbers) {
    if (number) {
        result.push(number * 2);
    } else {
        return result;
    }
    return double(rest);
}

// or this also works:
function double([ number, ...rest] = numbers) {
    if (!number) {
        return [];
    }
    return [number * 2, ...double(rest)];
}


// or this:
function double([number, ...numbers]) {
  return (numbers.length ? [ number * 2, ...double(numbers) ] : [ number * 2 ]);
}

// or:
const double = ([number, ...rest]) => !number ? [] : [number * 2, ...double(rest)];
