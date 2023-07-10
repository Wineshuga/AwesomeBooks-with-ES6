import { DateTime } from '../node_modules/luxon/src/luxon.js';

const displayDate = () => {
  const dateHtml = document.querySelector('.date');
  const currentDate = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
  dateHtml.innerHTML = currentDate;
}

export default displayDate;