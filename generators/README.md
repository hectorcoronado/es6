```javascript
function* shopping() {
  // going shopping, walking along sidewalk...
  // got to the store carrying some cash...
  const stuffFromStore = yield 'cash';

  // walking to the laundromat
  const cleanClothes = yield 'laundry';

  // walking back home
  return [stuffFromStore, cleanClothes];
}

// stuff in the store
const gen = shopping();
gen.next(); // leaving our house

// walked into store, up & down aisles, then paid up:
gen.next('groceries'); // leaving store with groceries (reenters generator)

gen.next('clean clothes'); // reenter generator till we reach return...

```

### What is a generator?
A function that can be entered and exited multiple times by using the `yield` keyword and `.next()`.

We can run some code, return a value, and then go back into the function at the same place that it left off when this first value was returned.


### The `*` after the `function` keyword makes it a `generator`
Our `generator` begins executing when we call `.next()` up until the point where we reach the `yield` statement; when we call `.next` again, execution of the `generator` resumes immediately after the `yield` keyword where we exited.

### What is the purpose of a `generator`?
We can use them along with for-of loops to iterate over them easily.

### Generator delegation:
We use generator delegation when we have multiple generators and it makes sense to run them together in some fashion.
