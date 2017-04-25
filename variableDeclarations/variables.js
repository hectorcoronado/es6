/////////////
// ES5 VAR //
/////////////
// If using ES6, don't use 'var' keyword anywhere.
var name = 'Jane',
    title = 'Software Engineer',
    hourlyWage = 40;

///////////
// CONST //
///////////
// Do we expect a variable to remain constant over time? Use 'const'!

/*
A name binding defined with const can't be reassigned to refer to a different value. It's important to understand that const does not represent an immutable value.
*/
const name = 'Jane';

// some time later...
name = 'Janet' // throws an error because declared as 'const'!

/////////
// LET //
/////////
// Do we expect a variable to change over time? Use 'let'!
let title = 'Software Engineer',
    hourlyWage = 40;

// some time later...

title = 'CTO';
hourlyWage = 4000; // ok!
