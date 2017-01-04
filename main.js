const calendar_months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const months_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

let dateObj = {};

console.log(dateObj);

function makeCalendar() {
  let calendar = document.querySelector('.calendar');
  dateObj.htmlStr += `<tr>`;
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
  dateObj.htmlStr += `</tbody></table>`
  calendar.innerHTML = dateObj.htmlStr;
}

window.onload = function() {
  let now = new Date();
  let year = now.getFullYear();
  let month_one = now.getMonth();
  let month_two, month_three;
  if((month_one + 2) <= 12) {
    month_two = month_one + 1;
    month_three = month_one + 2;
  } else if(month_one === 11) {
    month_two = 12;
    month_three = 0;
  } else if(month_one === 12) {
    month_two = 0;
    month_three = 1;
  }
  let firstDay = new Date(year, month_one, 1).toString().split(' ')[0];
  let today = Math.abs(now.toString().split(' ')[2].split('')[1]);
    dateObj.now = now;
    dateObj.curr_month = calendar_months[month_one];
    dateObj.year = year;
    dateObj.firstDay = firstDay;
    dateObj.numDays = months_days[month_one];
    dateObj.emptyDays = days.indexOf(firstDay);
    dateObj.rows = Math.ceil((dateObj.numDays + dateObj.emptyDays) / 7);
    dateObj.today = today;
    dateObj.htmlStr = `<table><caption class="calendar__head">${dateObj.curr_month} ${dateObj.year}</caption><thead><tr><th class="col">M</th><th class="col">T</th><th class="col">W</th><th class="col">T</th><th class="col">F</th><th class="col">S</th><th class="col">S</th></tr></thead><tbody class="table__body">`
  makeCalendar();
    dateObj.curr_month = calendar_months[month_two];
    firstDay = new Date(year, month_two, 1).toString().split(' ')[0];
    dateObj.firstDay = firstDay;
    dateObj.emptyDays = days.indexOf(firstDay);
    dateObj.numDays = months_days[month_two];
    dateObj.rows = Math.ceil((dateObj.numDays + dateObj.emptyDays) / 7);
    dateObj.today = null;
    if(month_two === 0) year++;
    dateObj.year = year;
    dateObj.htmlStr += `<table><caption class="calendar__head">${dateObj.curr_month} ${dateObj.year}</caption><thead><tr><th class="col">M</th><th class="col">T</th><th class="col">W</th><th class="col">T</th><th class="col">F</th><th class="col">S</th><th class="col">S</th></tr></thead><tbody class="table__body">`
  makeCalendar();
    dateObj.curr_month = calendar_months[month_three];
    firstDay = new Date(year, month_three, 1).toString().split(' ')[0];
    dateObj.firstDay = firstDay;
    dateObj.emptyDays = days.indexOf(firstDay);
    dateObj.numDays = months_days[month_two];
    dateObj.rows = Math.ceil((dateObj.numDays + dateObj.emptyDays) / 7);
    dateObj.today = null;
    if(month_two === 0) year++;
    dateObj.year = year;
    dateObj.htmlStr += `<table><caption class="calendar__head">${dateObj.curr_month} ${dateObj.year}</caption><thead><tr><th class="col">M</th><th class="col">T</th><th class="col">W</th><th class="col">T</th><th class="col">F</th><th class="col">S</th><th class="col">S</th></tr></thead><tbody class="table__body">`
  makeCalendar();
}
