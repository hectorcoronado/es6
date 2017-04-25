function* colors() {
  yield 'red';
  yield 'blue';
  yield 'green';
}

const gen = colors();

gen.next(); // { 'value': 'red', 'done': false}
gen.next(); // { 'value': 'blue', 'done': false}
gen.next(); // { 'value': 'green', 'done': false}
gen.next(); // {'done': true}


// generators work with for-of loops
const myColors = [];

for (let color of colors()) {
  myColors.push(color);
}


// ------------------------------
const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill'
}

const engineeringTeam = {
  testingTeam, // key-value pair is identical
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave'
};

// we can define a generator to iterate only through specific properties:

/***********************
  generator delegation
***********************/
function* TeamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
  const testingTeamGenerator = TestingTeamIterator(team.testingTeam);
  yield* testingTeamGenerator;
}

function* TestingTeamIterator(team) {
  yield team.lead;
  yield team.tester;
}

const names = [];

for (let name of TeamIterator(engineeringTeam)) {
  names.push(name);
}

/*
We can refactor the code above by using Symbol.iterator

Symbol.iterator is a tool that teaches objects how to respond to a for-of-loop

In the testingTeam below, Symbol.iterator is NOT an array, it's in '[]' because it's in key interpolation (we can have a dynamic key by using key interpolation in ES6)
*/
const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill',
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.tester;
  }
}

function* TeamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
  yield* team.testingTeam;
}

const names = [];

for (let name of TeamIterator(engineeringTeam)) {
  names.push(name);
}

/*
...And we can do the same refactoring for the TeamIterator function by adding a Symbol.iterator key to our engineeringTeam. If we do the following, we don't need a separate TeamIterator function:
*/
const engineeringTeam = {
  testingTeam, // key-value pair is identical
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave',
  [Symbol.iterator]: function* () {
    yield this.lead; // 'Jill'
    yield this.manager; // 'Alex'
    yield this.engineer; // 'Dave'
    yield* this.testingTeam; // and then iterate over the other object!
  }
};

const names = [];

for (let name of engineeringTeam) {
  names.push(name);
}
