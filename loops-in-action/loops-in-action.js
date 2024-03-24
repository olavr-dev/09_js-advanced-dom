// ---------------------------------------------//
// ---- First Exercise: Total Sum Of Numbers ---//
// ---------------------------------------------//

const calcSumButtonElement = document.querySelector('#calculator button');

function calculateSum() {
  const userNumberInputElement = document.getElementById('user-number');
  const enteredNumber = userNumberInputElement.value;

  let sumUpToNumber = 0;
  for (let index = 0; index <= enteredNumber; index++) {
    sumUpToNumber = sumUpToNumber + index;
  }

  const outputResultElement = document.getElementById('calculated-sum');
  outputResultElement.textContent = sumUpToNumber;
  outputResultElement.style.display = 'block';
}

calcSumButtonElement.addEventListener('click', calculateSum);

// ---------------------------------------------//
// ----- Second Exercise: Highlight Links ------//
// ---------------------------------------------//

const highlightLinksButtonElement = document.querySelector(
  '#highlight-links button'
);

function highlightLinks() {
  const anchorElements = document.querySelectorAll('#highlight-links a');
  for (const anchorElement of anchorElements) {
    anchorElement.classList.add('highlight');
  }
}

highlightLinksButtonElement.addEventListener('click', highlightLinks);

// ---------------------------------------------//
// ----- Third Exercise: Display User Data -----//
// ---------------------------------------------//

const userData = {
  firstName: 'Olav',
  lastName: 'Øye Rørvik',
  age: 42,
  joinDate: '24-04-2024',
  isAdmin: true,
};
const userDataButtonElement = document.querySelector('#user-data button');

function displayUserData() {
  const outputUserDataElement = document.querySelector('#output-user-data');

  // Clear any existing lists before executing the loop
  outputUserDataElement.innerHTML = '';

  for (const key in userData) {
    const newUserDataListElement = document.createElement('li');
    const outputText = key.toUpperCase() + ': ' + userData[key];
    newUserDataListElement.textContent = outputText;
    outputUserDataElement.append(newUserDataListElement);
  }
}

userDataButtonElement.addEventListener('click', displayUserData);

// ---------------------------------------------//
// -------- Fourth Exercise: Statistics  -------//
// ---------------------------------------------//

const rollDiceButtonElement = document.querySelector('#statistics button');

function rollDice() {
  return Math.floor(Math.random() * 6 + 1);
}

function getNumberOfDiceRolls() {
  const targetNumberInputElement = document.querySelector(
    '#user-target-number'
  );
  const diceRollsListElement = document.querySelector('#dice-rolls');

  const enteredNumber = targetNumberInputElement.value;
  diceRollsListElement.innerHTML = '';

  let hasRolledTargetNumber = false;
  let numberOfRolls = 0;

  while (!hasRolledTargetNumber) {
    const rolledNumber = rollDice();

    numberOfRolls++;
    const newRollListElement = document.createElement('li');
    const outputText = 'Roll ' + numberOfRolls + ': ' + rolledNumber;
    newRollListElement.textContent = outputText;
    diceRollsListElement.append(newRollListElement);
    // Long Way
    // if (rolledNumber == enteredNumber) {
    //   hasRolledTargetNumber = true;
    // }
    // Short Way
    // Will always return a boolean (True/False)
    hasRolledTargetNumber = rolledNumber == enteredNumber;
  }

  const outputTotalRollsElement = document.querySelector('#output-total-rolls');
  const outputTargetNumberElement = document.querySelector(
    '#output-target-number'
  );

  outputTargetNumberElement.textContent = enteredNumber;
  outputTotalRollsElement.textContent = numberOfRolls;
}

rollDiceButtonElement.addEventListener('click', getNumberOfDiceRolls);
