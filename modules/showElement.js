const userBooks = document.querySelector('.book-list-sec');
const formPage = document.querySelector('.form-sec');
const contactPage = document.querySelector('.contact');
const listBtn = document.querySelector('.list-btn');
const addNewBtn = document.querySelector('.add-new-btn');
const contactBtn = document.querySelector('.contact-btn');

export default function showElement(element) {
  userBooks.style.display = (element === userBooks) ? 'block' : 'none';
  formPage.style.display = (element === formPage) ? 'block' : 'none';
  contactPage.style.display = (element === contactPage) ? 'block' : 'none';

  listBtn.style.color = (element === userBooks) ? 'blue' : 'black';
  addNewBtn.style.color = (element === formPage) ? 'blue' : 'black';
  contactBtn.style.color = (element === contactPage) ? 'blue' : 'black';
}
