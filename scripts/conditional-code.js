const myName = 'Olav';

if (myName === 'Olav') {
  console.log('Hello, Olav!');
}

const isLoggedIn = true;

if (!isLoggedIn) {
  console.log('User is NOT logged in!');
}

// Truthy and Falsy Values

const enteredUserName = 'Olav';

if (enteredUserName.length > 0) {
  console.log('Input is valid!');
}

if (enteredUserName) {
  console.log('Input is valid!');
}
