let paragraphElement = document.getElementById('event');
let inputField = document.getElementById('text-field');
let counterParagraph = document.getElementById('counter');

function changeParagraphText() {
  paragraphElement.textContent = 'Thank you for clicking :)';
  console.log('Paragraph Clicked');
}

function updateCounter() {
  let counterValue = inputField.value.length;
  counterParagraph.innerHTML = `${counterValue}`;
}

console.dir(inputField);

inputField.addEventListener('input', updateCounter);

paragraphElement.addEventListener('click', changeParagraphText);
