/////////
// ES5 //
/////////

function createBookShop(inventory) {
  return {
    inventory: inventory,
    inventoryValue: function() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle: function(title) {
      return this.inventory.find(book => book.title === title).price;
    }
  };
}

const inventory = [
  { title: 'Mrs Dalloway', price: 10 },
  { title: 'Middlemarch', price: 15 },
  { title: 'Hannibal', price: 20 },
];

const bookShop = createBookShop(inventory);

console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle('Mrs Dalloway'));

//////////////////////////////////
// ES6 Enhanced Object Literals //
//////////////////////////////////

/* If an object has a key value pair where the value is a funciton, one can delete the function keyword and the ':'

And if the key and value are defined with the same name, value can be omitted
*/
function createBookShop(inventory) {
  return {
    inventory,
    inventoryValue() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle(title) {
      return this.inventory.find(book => book.title === title).price;
    }
  };
}

// ES6 using jQuery (which we don't have, so don't run this code)
// ES5 would look like:
function saveFile() {
  $.ajax({method: 'POST', url: url, data: data});
}

const url = "http://somesite.com";
const data = { color: red };

saveFile(url, data);

// ES6... generally, if we're creating an object with a mix of identical and disparate key-value pairs, you write the shortened ones first:
function saveFile() {
  $.ajax({ url, data, method: 'POST' });
}
