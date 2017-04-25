```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(); // alternately, reject()
  }, 3000);
});

promise.then(() => console.log('finished!'))
  .then(() => console.log('i also ran!'))
  .catch(() => console.log('i catch errors')); // this runs if reject() is called
```

### Syntax:
Inner function passed to `new Promise()` is called with two arguments, `resolve` & `reject`, which are both functions. Any time we create a `promise` and assign it to a variable, that promise object has two properties: `promise.then()` and `promise.catch()`
- `resolve()`: any callbacks that we register with `then()` get called
- `reject()`: any callbacks that we register with `catch()` get called
- we can register a function (or many functions) with the `then()` and it will be executed upon `promise`'s resolution
- we can register a function (or many functions) with the `catch()` and it will be executed upon `promise`'s rejection

### 3 States of `Promise`s:
1. `unresolved` (aka `pending`) waiting for something to finish (default state)
2. `resolved` something finished and it all went ok
3. `rejected` something finished and something went off

### `resolved`:
If a `Promise` works out as expected, the `then()` callback is executed

### `rejected`:
If  a `Promise` doesn't work out as expected, the `catch()` callback is executed

### Use case:
The vast majority of times, Promises are used when making an AJAX request (though they are not mutually dependent).

### `fetch` helper:
