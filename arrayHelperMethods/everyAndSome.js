////////////////////
// every and some //
////////////////////

let computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 },
];

// for-loop
let everyComputerCanRunProgram = true,
    someComputersCanRunProgram = false;

for (var i = 0; i < computers.length; i++) {
  var computer = computers[i];

  if(computer.ram < 16) {
    everyComputerCanRunProgram = false;
  } else {
    someComputersCanRunProgram = true;
  }
}

console.log(
  "Every: " + everyComputerCanRunProgram + "\n" +
  "Some: " + someComputersCanRunProgram
)

// ------------------------------
// every
computers.every((computer) => {
  return computer.ram > 16;
}); // false


// some
computers.some((computer) => {
  return computer.ram > 16;
}); // true


// ------------------------------
let names = [
  "Alexandria",
  "Matthew",
  "Joe"
];

names.every((name) => {
  return name.length > 4;
}); // false

names.some((name) => {
  return name.length > 4;
}); // true


// ------------------------------
/*
How might we implement every() and/or some() in a real world example? We can use every, e.g., to validate a form's fields:
*/

function Field(value) {
  this.value = value;
}

// a Field is valid so long as it's not empty
Field.prototype.validate = function() {
  return this.value.length > 0;
}

let username = new Field("2kool");
let password = new Field("my_password");
let birthdate = new Field("7 March 1981");

let fields = [ username, password, birthdate ];

// and the form is valid if EVERY field is filled:
let formIsValid = fields.every((field) => {
  return field.validate();
});

if(formIsValid) {
  // allow user to submit!
} else {
  // display an error message!
}


// ------------------------------
/*
Given an array of network objects representing network requests, assign the boolean 'true' to the variable 'inProgress' if any network request has a 'status' of 'pending'.
*/
let requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

let inProgress = requests.some(request => {
    return request.status === 'pending';
});


/*
Given an array of users, return 'true' if every user has submitted a request form.  Assign the result to the variable 'hasSumbmitted'.
*/
let users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

let hasSubmitted = users.every(user => {
    return user.hasSubmitted;
});
