import BookList from './modules/classes.js';
import displayDate from './modules/date.js';
import showElement from './modules/showElement.js';
import submitForm from './modules/submitForm.js';

const bookList = new BookList();

// Display date and time
setInterval(displayDate, 1000);

// Add book implementation
const form = document.querySelector('#form');
form.addEventListener('submit', submitForm);

// Navigation toggle display content
const userBooks = document.querySelector('.book-list-sec');
const formPage = document.querySelector('.form-sec');
const contactPage = document.querySelector('.contact');
const listBtn = document.querySelector('.list-btn');
const addNewBtn = document.querySelector('.add-new-btn');
const contactBtn = document.querySelector('.contact-btn');

listBtn.addEventListener('click', () => showElement(userBooks));
addNewBtn.addEventListener('click', () => showElement(formPage));
contactBtn.addEventListener('click', () => showElement(contactPage));

// Display books
bookList.displayBooks();