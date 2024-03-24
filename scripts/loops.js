// Sets i to 0 and loop as long as the value is less than 10.
// Increment i with 1 for each loop.
// Loops a total of 10 times.
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// Looping through an array
const users = ['Olav', 'Kristin', 'Malin', 'Emil', 'Mie', 'Baltus'];

for (const user of users) {
  console.log(user);
}

// Looping through an object
const loggedInUser = {
  name: 'Olav',
  age: 42,
  isAdmin: true,
};

for (const key in loggedInUser) {
  console.log(key);
  console.log(loggedInUser[key]);
}

// Looping while a condition is true
let isFinished = false;

while (!isFinished) {
  isFinished = confirm('Do you want to quit?');
}
console.log('Done');
