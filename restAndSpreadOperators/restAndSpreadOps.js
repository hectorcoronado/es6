function addNumbers(numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

console.log(addNumbers([1, 2, 3, 4, 5]));

// What if we want to add a bunch of numbers that aren't in an arr? We may not know how many numbers we're gunna get passed in, and that could be problematic

// Rest operator ('...' before an arg) captures a list of unknown quantity of args; to sort of 'gather together' variables
function addNumbers(...numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

// Spread operator is used to 'flatten' or 'spread out' a series of things (namely, array elements)
const defaultColors = ['red', 'green'];

const userFavoriteColors = ['orange', 'yellow'];

const fallColors = ['auburn', 'ochre'];

// we could use the concat method to join the above arrays:
defaultColors.concat(userFavoriteColors);

// but we can refactor this code to use the spread operator; we want to take all the elements in each of our arrays and create a single array out of them, and we can add elements manually if need be :
[ 'blue', ...defaultColors, ...userFavoriteColors, ...fallColors ];



function validateShoppingList(...items) {
  if (items.indexOf('milk') < 0) { //if 'milk' isn't in our list, add it automatically
    return [ 'milk', ...items ];
  }

  return items;
}

validateShoppingList('oranges', 'bread');



// here's a real-world example of using these operators:

const MathLibrary = {
  calculateProduct(a, b) {
    return a * b;
  }
};

// let's say you wrote this library, deployed it, and it's being used by 100s of developers; but the name of the method clearly sucks pretty hard, and so you have to change it. If you do, you're likely gonna break every implementation of your library out there... So:

const MathLibrary = {
  calculateProduct(a, b) {
    return a * b;
  },
  multiply(a, b) {
    return a * b;
  }
};

// this still isn't very good, because we're literally repeating the exact same code.. So!:

const MathLibrary = {
  calculateProduct(...rest) {
    console.log('calculateProduct method deprecated, please use mulitply instead');
    return this.multiply(...rest);
  },
  multiply(a, b) {
    return a * b;
  }
};
