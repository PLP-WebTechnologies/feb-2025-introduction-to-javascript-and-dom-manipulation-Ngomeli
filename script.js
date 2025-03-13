// Select the elements
const changeTextButton = document.getElementById('changeTextButton');
const toggleColorButton = document.getElementById('toggleColorButton');
const addElementButton = document.getElementById('addElementButton');
const contentSection = document.getElementById('content');

// Change text content dynamically when the button is clicked
changeTextButton.addEventListener('click', () => {
    const paragraph = contentSection.querySelector('p');
    paragraph.textContent = 'The text has been changed dynamically using JavaScript!';
});

// Modify the background color when the button is clicked
toggleColorButton.addEventListener('click', () => {
    document.body.style.backgroundColor = document.body.style.backgroundColor === 'lightblue' ? 'white' : 'lightblue';
});

// Add a new paragraph element when the button is clicked
addElementButton.addEventListener('click', () => {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a newly added paragraph!';
    contentSection.appendChild(newElement);
});
