////////////////////////////////////////
// ES5, rolling your own default args //
////////////////////////////////////////
function makeAjaxRequest(url, method) {
  if(!method) {
    method = 'GET';
  }
  // and some code to make a request
}

/////////
// ES6 //
/////////
function makeAjaxRequest(url, method = 'GET') {
  return method;

  // logic to make the request
}

makeAjaxRequest('google.com') // 2nd argument is 'GET' by default
makeAjaxRequest('google.com', undefined) // gets reassigned to 'GET'
makeAjaxRequest('google.com', 'POST') // makes a  'POST' request
makeAjaxRequest('google.com', null) // doesn't get reassigned!

// ------------------------------
//////////////////////////
// without default args //
//////////////////////////
function User(id) {
  this.id = id;
}

function generateId() {
  return Math.random() * 9999999;
}

new User(generateId()) // creates a user w/a more or less random id

// to create an admin, you'd first have to
function createAdminUser(user) {
  user.admin = true;

  return user;
}

createAdminUser(new User(generateId())); // BAD! How to solve this?? Like so:

///////////////////////
// with default args //
///////////////////////
function createAdminUser(user = new User(generateId())) {
  user.admin = true;

  return user;
}
