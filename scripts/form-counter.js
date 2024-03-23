let paragraphElement = document.getElementById('event');
let inputField = document.getElementById('text-field');
let remainingCharactersElement = document.getElementById('counter');

function changeParagraphText() {
  paragraphElement.textContent = 'Thank you for clicking :)';
  console.log('Paragraph Clicked');
}

function updateCounter(event) {
  let enteredValue = event.target.value;
  let enteredTextLength = enteredValue.length;
  let maxAllowedCharacters = event.target.maxLength;

  let remainingCharacters = maxAllowedCharacters - enteredTextLength;

  remainingCharactersElement.textContent = remainingCharacters;
}

inputField.addEventListener('input', updateCounter);
paragraphElement.addEventListener('click', changeParagraphText);
