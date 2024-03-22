let paragraphElement = document.getElementById('event');
let inputElement = document.querySelector('input');

function changeParagraphText() {
  paragraphElement.textContent = 'Clicked';
  console.log('Paragraph Clicked');
}

function retrieveUserInput() {
  let enteredText = inputElement.value;
  console.log(enteredText);
}

paragraphElement.addEventListener('click', changeParagraphText);

inputElement.addEventListener('input', retrieveUserInput);
