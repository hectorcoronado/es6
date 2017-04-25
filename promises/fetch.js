const url = "https://jsonplaceholder.typicode.com/posts/";

fetch(url)
  .then(data => console.log(data)); // this doesn't actually display the appropriate data.. to do that, we must use a special method: response

fetch(url)
  .then(response => response.json()) // this takes actual, readable JSON out of our fetch() response.
  .then(data => console.log(data));


// This is a really bad feature of `fetch()`; `fetch()` only runs `catch()` if the network request flat out fails to be issued at all -- if the request hits a server and gets a failed status code, `.catch()` doesn't run, which is NOT how any other library behaves :(
fetch(url)
  .then(response => console.log(response))
  .catch(error => console.log('BAD', error)); // sad.
