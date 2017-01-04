const calendar_months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const months_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

let dateObj = {};

console.log(dateObj);

function makeCalendarHeader() {
  let calHead = document.querySelector('.calendar__head');
    calHead.textContent = `${dateObj.month} ${dateObj.year}`;
  createFirstRow();
}

function createFirstRow() {
  let htmlStr = `<tr>`;
  for (i = 0; i < dateObj.emptyDays; i++) {
    htmlStr += `<td class="col"></td>`
  }
  for (i = 1; i < 8 - dateObj.emptyDays; i++) {
    htmlStr += `<td class="col">${i}</td>`
  }
  htmlStr += `</tr>`;
  dateObj.monStart = 8 - dateObj.emptyDays;
  buildRest(htmlStr);
}

function buildRest(htmlStr) {
  let tableBody = document.querySelector('.table__body');
  for (i = 0; i < dateObj.rows; i++) {
    htmlStr += `<tr>`
    for (j = dateObj.monStart; j < dateObj.monStart+7; j++) {
      if (j > dateObj.numDays) break;
      if (j === dateObj.today)
      htmlStr += `<td class="today col">${j}</td>`;
      else
      htmlStr += `<td class="col">${j}</td>`;
    }
    htmlStr += '</tr>';
    dateObj.monStart = j;
  }
  tableBody.innerHTML = htmlStr;
}

window.onload = function() {
  let now = new Date();
  let month = now.getMonth();
  let year = now.getFullYear();
  let firstDay = new Date(year, month, 1).toString().split(' ')[0];
  let today = Math.abs(now.toString().split(' ')[2].split('')[1]);
    dateObj.now = now;
    dateObj.month = calendar_months[month];
    dateObj.year = year;
    dateObj.firstDay = firstDay;
    dateObj.numDays = months_days[month];
    dateObj.emptyDays = days.indexOf(firstDay);
    dateObj.rows = Math.ceil((dateObj.numDays + dateObj.emptyDays) / 7);
    dateObj.today = today;
  makeCalendarHeader();
}
