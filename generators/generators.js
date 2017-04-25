function* numbers() {
  yield;
}

const gen = numbers();

gen.next();


/*
Let's say that we're walking to the store; we have money in hand, but we'll be returning with groceries in lieu of our money:
*/

function* shopping() {
  // stuff on the sidewalk

  // walking down the sidewalk

  // go into the store with cash
  const stuffFromStore = yield 'cash';

  //walking back home
  return stuffFromStore
}

// stuff in the store
const shoppingGen = shopping();
shoppingGen.next(); // leaving our house
// walked into the store

// buy some groceries
shoppingGen.next('groceries'); // leaving the store with groceries

/*
In the above example:
- calling shopping() in our shoppingGen const doesn't actually do much

- the first time we call next() we start executing code until we reach the 'yield' keyword (with a value of 'cash')

- the second time we call next() we reenter our generator function and it resumes execution immediately following the 'yield' keyword
*/
