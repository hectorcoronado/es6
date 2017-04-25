////////////
// filter //
////////////

let products = [
  { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
  { name: 'banana', type: 'fruit', quantity: 10, price: 15 },
  { name: 'celery', type: 'vegetable', quantity: 30, price: 9 },
  { name: 'orange', type: 'fruit', quantity: 3, price: 5 }
];

// for-loop
let filteredProducts = [];

for (var i = 0; i < products.length; i++) {
  if (products[i].type === 'fruit') {
    filteredProducts.push(products[i]);
  }
}

console.log(filteredProducts);

// filter
products.filter((product) => {
  return product.type === 'fruit';
});

// type is 'vegetable', quantity is > 0, price is < 10
products.filter((product) => {
  return product.type === 'vegetable'
    && product.quantity > 0
    && product.price < 10;
});

let post = { id: 4, title: 'New post' };

let comments = [
  { postId: 4, content: 'awesome post' },
  { postId: 3, content: 'it was ok' },
  { postId: 4, content: 'neat' }
];

function commentsForPost(post, comments) {
  return comments.filter( (comment) => {
    return comment.postId === post.id;
  });
}

console.log(commentsForPost(post, comments));

/*
Filter the array of numbers using the filter helper, creating a new array that only contains numbers greater than 50.  Assign this new array to a variable called 'filteredNumbers'.
*/
let numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

let filteredNumbers = numbers.filter((number) => {
    return number > 50;
});

/*
Filter the array of users, only returning users who have admin level access.  Assign the result to the variable 'filteredUsers'.
*/

let users = [
 { id: 1, admin: true },
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];

let filteredUsers = users.filter((user) => {
    return user.admin === true;
});

/*
REVERSING functionality (filter out truthy values)

Create a function called 'reject'.  Reject should work in the opposite way of 'filter' - if a function returns 'true', the item should *not* be included in the new array.
*/
function reject(array, iteratorFunction) {
    return array.filter((element) => {
        return !iteratorFunction(element);
    });
}
