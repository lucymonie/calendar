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
  let curr_month = now.getMonth();
  let year = now.getFullYear();
  let firstDay = new Date(year, curr_month, 1).toString().split(' ')[0];
  let today = Math.abs(now.toString().split(' ')[2].split('')[1]);
    dateObj.now = now;
    dateObj.curr_month = calendar_months[curr_month];
    dateObj.year = year;
    dateObj.firstDay = firstDay;
    dateObj.numDays = months_days[curr_month];
    dateObj.emptyDays = days.indexOf(firstDay);
    dateObj.rows = Math.ceil((dateObj.numDays + dateObj.emptyDays) / 7);
    dateObj.today = today;
    dateObj.htmlStr = `<table><caption class="calendar__head">${dateObj.curr_month} ${dateObj.year}</caption><thead><tr><th class="col">M</th><th class="col">T</th><th class="col">W</th><th class="col">T</th><th class="col">F</th><th class="col">S</th><th class="col">S</th></tr></thead><tbody class="table__body">`
  makeCalendar();
}
