# ES6: a reference guide to common features

### Code snippets to learn & solidify knowledge of ES6 syntax

#### ES6 features covered:
- review of array helpers: forEach, map, filter, find, every, some & reduce
- const / let
- template strings
- arrow functions
- enhanced object literals
- default function arguments
- rest & spread operators
- destructuring
- classes
- generator functions / yield keyword
- promises & fetch


[Link to MDN article](https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/)

Note that an arrow function with a block body does not automatically return a value. Use a return statement for that.

There is one caveat when using arrow functions to create plain objects. Always wrap the object in parentheses:

```javascript
// create a new empty object for each puppy to play with
var chewToys = puppies.map(puppy => {});   // BUG!
var chewToys = puppies.map(puppy => ({})); // ok
```
Unfortunately, an empty object {} and an empty block {} look exactly the same. The rule in ES6 is that { immediately following an arrow is always treated as the start of a block, never the start of an object. The code puppy => {} is therefore silently interpreted as an arrow function that does nothing and returns undefined.

Even more confusing, an object literal like {key: value} looks exactly like a block containing a labeled statement—at least, that’s how it looks to your JavaScript engine. Fortunately { is the only ambiguous character, so wrapping object literals in parentheses is the only trick you need to remember.

### What's 'this'??

There is one subtle difference in behavior between ordinary function functions and arrow functions. Arrow functions do not have their own this value. The value of this inside an arrow function is always inherited from the enclosing scope.

All the new ES6 parameter forms, like default values, destructuring, rest params, etc… all those force you to use ( ) around the param list, even if only using the one param.
