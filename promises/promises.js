// create a Promise
promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 3000);
});

promise.then(() => console.log('finished'))
  .then(() => console.log('i also ran'))
  .catch(() => console.log('i catch errors'));
