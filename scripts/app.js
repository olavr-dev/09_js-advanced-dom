// document.body.children[2].children[0].href = 'https://google.com';

let anchorElement = document.getElementById('external-link');
anchorElement.href = 'https://google.com';

anchorElement = document.querySelector('#external-link');
anchorElement.href = 'https://olavr.dev';

// ADD AN ELEMENT
// 1. Create the new element

let newAnchorElement = document.createElement('a');
newAnchorElement.id = 'js-link';
newAnchorElement.href = 'https://google.com';
newAnchorElement.textContent = 'Link to Google.com';

// 2. Get access to the parent that should hold the new element

let firstParagraph = document.querySelector('p');

// 3. Insert the new element into the parent element content

firstParagraph.append(newAnchorElement);

// REMOVE AN ELEMENT
// 1. Select the element that should be removed

let jsLink = document.querySelector('#js-link');

// 2. Remove the element

jsLink.remove();
// For older browsers (IE)
// firstH1Element.parentElement.removeChild(firstH1Element);

// MOVE ELEMENTS

firstParagraph.parentElement.append(firstParagraph);

// innerHTML

console.log(firstParagraph.innerHTML);

firstParagraph.innerHTML = 'Hi! This is <strong>important</strong>';
