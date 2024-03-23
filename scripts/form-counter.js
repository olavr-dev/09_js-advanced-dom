const paragraphElement = document.getElementById('event');
const inputField = document.getElementById('text-field');
const remainingCharactersElement = document.getElementById('counter');

function changeParagraphText() {
  paragraphElement.textContent = 'Thank you for clicking :)';
  console.log('Paragraph Clicked');
}

function updateCounter(event) {
  const enteredValue = event.target.value;
  const enteredTextLength = enteredValue.length;
  const maxAllowedCharacters = event.target.maxLength;

  const remainingCharacters = maxAllowedCharacters - enteredTextLength;

  remainingCharactersElement.textContent = remainingCharacters;

  if (remainingCharacters === 0) {
    remainingCharactersElement.classList.add('error');
    event.target.classList.add('error');
  } else if (remainingCharacters <= 30) {
    remainingCharactersElement.classList.add('warning');
    event.target.classList.add('warning');
    remainingCharactersElement.classList.remove('error');
    event.target.classList.remove('error');
  } else {
    remainingCharactersElement.classList.remove('warning');
    event.target.classList.remove('warning');
  }
}

inputField.addEventListener('input', updateCounter);
paragraphElement.addEventListener('click', changeParagraphText);
