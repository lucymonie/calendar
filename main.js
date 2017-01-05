const calendar_months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const months_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const back = document.querySelector('.fa-caret-left');
const next = document.querySelector('.fa-caret-right');

let dateObj = {};
console.log(dateObj);

function makeCalendar() {
  let calendar = document.querySelector('.calendar');
  dateObj.htmlStr += `<thead><tr><th class="col">M</th><th class="col">T</th><th class="col">W</th><th class="col">T</th><th class="col">F</th><th class="col">S</th><th class="col">S</th></tr></thead><tbody class="table__body"><tr>`;
  for (i = 0; i < dateObj.emptyDays; i++) {
    dateObj.htmlStr += `<td class="col"></td>`
  }
  for (i = 1; i < 8 - dateObj.emptyDays; i++) {
    dateObj.htmlStr += `<td class="col">${i}</td>`
  }
  dateObj.htmlStr += `</tr>`;
  dateObj.monStart = 8 - dateObj.emptyDays;
  for (i = 0; i < dateObj.rows; i++) {
    dateObj.htmlStr += `<tr>`
    for (j = dateObj.monStart; j < dateObj.monStart+7; j++) {
      if (j > dateObj.numDays) break;
      if (j === dateObj.today)
      dateObj.htmlStr += `<td class="today col">${j}</td>`;
      else
      dateObj.htmlStr += `<td class="col">${j}</td>`;
    }
    dateObj.htmlStr += '</tr>';
    dateObj.monStart = j;
  }
  dateObj.htmlStr += `</tbody></table>`;
  calendar.innerHTML = dateObj.htmlStr;
  }

function buildCalendar() {
  let firstDay = new Date(dateObj.year, dateObj.month_1, 1).toString().split(' ')[0];
    dateObj.calendar = 'calendar1';
    dateObj.firstDay = firstDay;
    dateObj.numDays = months_days[dateObj.month_1];
    dateObj.emptyDays = days.indexOf(firstDay);
    dateObj.rows = Math.ceil((dateObj.numDays + dateObj.emptyDays) / 7);
    if(dateObj.month_1 !== new Date().getMonth()) dateObj.today = null;
    dateObj.htmlStr = `<table><caption class="calendar__head">${calendar_months[dateObj.month_1]} ${dateObj.year}</caption>`;
  makeCalendar();
}

window.onload = function() {
  let now = new Date();
    dateObj.now = now;
  let month_one = now.getMonth();
    dateObj.month_1 = month_one;
  let year = now.getFullYear();
    dateObj.year = year;
  let today = Math.abs((dateObj.now).toString().split(' ')[2].split('')[1]);
    dateObj.today = today;
  buildCalendar(month_one);
}

back.addEventListener('click', (e) => {
  let month_one, year;
  if(dateObj.month_1 > 0) month_one = dateObj.month_1 - 1;
  else {
    month_one = 11;
    year = dateObj.year - 1;
    dateObj.year = year;
  }
  dateObj.month_1 = month_one;
  buildCalendar(month_one);
});

next.addEventListener('click', (e) => {
  let month_one, year;
  if(dateObj.month_1 < 11) month_one = dateObj.month_1 + 1;
  else {
    month_one = 0;
    year = dateObj.year + 1;
    dateObj.year = year;
  }
  dateObj.month_1 = month_one;
  buildCalendar(month_one);
});
