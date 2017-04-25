/////////
// ES5 //
/////////
var add = function(a, b) {
  return a + b;
}

/////////
// ES6 //
/////////
const add = (a, b) => {
  return a + b;
}

///////////////////////
// SINGLE EXPRESSION //
///////////////////////
// ... if a function has a SINGLE JS expression, you can remove '{}' and 'return':
const add = (a, b) => a + b;


/////////////////////
// SINGLE ARGUMENT //
/////////////////////
const double = function(number) {
  return 2 * number;
};

// ... if a func has a SINGLE ARGUMENT, you can omit the "()" around it:
const double = number => 2 * number;
console.log(double(2));


/////////////////
// NO ARGUMENT //
/////////////////
// ... if no args are needed, you gotta include empty parens:
const two = () => console.log(2);


///////////////////////
// using Array.map() //
///////////////////////
const numbers = [1, 2, 3];

// ES5
numbers.map(function(number) {
  return 2 * number;
});

// => function
numbers.map(number => 2 * number);

/////////////////////////////
// ES5, more realistically //
/////////////////////////////
/*
Whats bind() doing below? We created an iterator function, we passed it off to ...somewhere else in our codebase, and so the value of 'this' when the function actually gets called is lost, so one way to solve this otherwise intractable problem is to use the handy bind() method!
*/

const aTeam = {
  members: ['Jane', 'Biff'],
  teamName: 'Supa Squad',
  teamSummary: function() {
    return this.members.map(function(member) {
      return `${member} is on team ${this.teamName}`;
    }.bind(this)); // binding to contextualize 'this' is necessary!
  }
};

team.teamSummary();

/*
...another way to get around this loss of context is to cache a reference to 'this', thusly:
*/
const bTeam = {
  members: ['Jane', 'Biff'],
  teamName: 'Supa Squad',
  teamSummary: function() {
    let self = this;
    return this.members.map(function(member) {
      return `${member} is on team ${self.teamName}`;
    });
  }
};

team.teamSummary();


/////////////////////////////
// ES6, more realistically //
/////////////////////////////

/*
"lexical 'this'"

=> functions making ref to 'this' automatically set 'this' to surrounding context, which in the ex below is the team. By default, ES6 will set the value of 'this' to what we might intuitively expect it to be.
*/

const cTeam = {
  members: ['Jane', 'Biff'],
  teamName: 'Supa Squad',
  teamSummary: function() {
    // this === team
    return this.members.map((member) => {
      return `${member} is on team ${this.teamName}`;
    });
  }
};

team.teamSummary();
