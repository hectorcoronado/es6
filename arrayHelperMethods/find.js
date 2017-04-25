//////////
// find //
//////////

let users = [
  { name: 'Jill' },
  { name: 'Alex' },
  { name: 'Bill' }
];

// for-loop
let user;

for (var i = 0; i < users.length; i++) {
  if (users[i].name === 'Alex') {
    user = users[i];
    break; // stop looping once first 'Alex' is found
  }
}

console.log(user);

// find
users.find((user) => {
  return user.name === 'Alex';
});


// ------------------------------
function Car(model) {
  this.model = model;
}

let cars = [
  new Car('Civic'),
  new Car('Prius'),
  new Car('Volt')
];

cars.find((car) => {
  return car.model === 'Prius';


// ------------------------------
let posts = [
  {id: 1, title: 'new'},
  {id: 2, title: 'old'}
];

let comment = {postId: 1, content: 'great post'};

function postForComment(posts, comment) {
  return posts.find((post) => {
    return post.id === comment.postId;
  });
}

console.log(postForComment(posts, comment));


// ------------------------------
/*
Find the user in the users's array who is an admin.  Assign this user to the variable 'admin'.
*/
let users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

let admin = users.find((user) => {
    return user.admin === true;
});

// ------------------------------
/*
Find the account with a balance of 12 and assign it to the variable 'account'.
*/
var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account = accounts.find((account) => {
    return account.balance === 12;
});


// ------------------------------
/*
The most common find operation is to an object that has a given property.  Rather than writing out a full function every time, it would be great if we have a shorthand syntax to find an object like this:
findWhere(ladders, { height: '20 feet' });
The object { ladders: '20 feet' } should be used as the search criteria - we would want to find a ladder whose 'height' property was '20 feet'
*/

function findWhere(array, criteria) {
    let property = Object.keys(criteria)[0];
    let result = array.find((element) => {
      return element[property] === criteria[property];
    });
   return result;
}
