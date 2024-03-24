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
  const links = document.querySelectorAll('#highlight-links a');
  for (link of links) {
    link.className = 'highlight';
  }
}

highlightLinksButtonElement.addEventListener('click', highlightLinks);
