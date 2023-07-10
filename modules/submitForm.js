import BookList from './classes.js';

const bookList = new BookList();

const submitForm = (event) => {
  const inputTitle = document.querySelector('.title');
  const inputAuthor = document.querySelector('.author');
  event.preventDefault();
  if (inputTitle.value && inputAuthor.value) {
    bookList.addBook(inputTitle.value, inputAuthor.value);
    inputTitle.value = '';
    inputAuthor.value = '';
  } else {
    inputTitle.value = '';
    inputAuthor.value = '';
  }
}

export default submitForm;