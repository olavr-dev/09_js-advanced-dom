let paragraphElement = document.getElementById('event');
let inputElement = document.querySelector('input');

function changeParagraphText() {
  paragraphElement.textContent = 'Thank you for clicking :)';
  console.log('Paragraph Clicked');
}

function retrieveUserInput(event) {
  let enteredText = inputElement.value;
  console.log(enteredText);
  console.log(event);
}

inputElement.addEventListener('input', retrieveUserInput);

paragraphElement.addEventListener('click', changeParagraphText);
