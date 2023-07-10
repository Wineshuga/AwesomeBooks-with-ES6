export default function displayDate() {
  const dateHtml = document.querySelector('.date');
  const currentDate = new Date();
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const time = currentDate.toLocaleTimeString('default', { timeStyle: 'medium' });
  dateHtml.innerHTML = `${month} ${day}, ${year} ${time}`;
}
