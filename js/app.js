'use strict';

var table = document.getElementById('table');
var time = ['6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM'];

// constructor for locations
function Location(name, minCustomer, maxCustomer, averageCookies){
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.averageCookies = averageCookies;
  this.totalCookies = 0;
  this.cookiesPerHour = [];

  Location.allLocations.push(this);
  this.avgCookiesPerHour();
}
Location.allLocations = [];

Location.prototype.randomCustPerHour = function() {
  return Math.floor(Math.random() *
    (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
};


Location.prototype.avgCookiesPerHour = function() {
  for (var i = 0; i < time.length; i++) {
    var calculatedCookies = Math.floor(this.randomCustPerHour() * this.averageCookies);
    this.cookiesPerHour.push(calculatedCookies);
    this.totalCookies += calculatedCookies;
    console.log('total cookie ', this.totalCookies );
  }
};

Location.prototype.render = function() {
  var tableRow = document.createElement('tr');
  var tableData = document.createElement('td');
  tableData.textContent = this.name;
  tableRow.appendChild(tableData);
  for (var i = 0; i < time.length; i++) {
    var td = document.createElement('td');
    td.textContent = this.cookiesPerHour[i];
    tableRow.appendChild(td);
  }

  table.appendChild(tableRow);
  var tdTotal = document.createElement('td');
  tdTotal.textContent = this.totalCookies;
  tableRow.appendChild(tdTotal);
};


function createHeader() {
  var tableRow = document.createElement('tr');
  var firstColumn = document.createElement('th');
  firstColumn.textContent = '';
  tableRow.appendChild(firstColumn);
  table.appendChild(tableRow);

  for (var i = 0; i < time.length; i++) {
    var tableHead = document.createElement('th');
    tableHead.textContent = time[i];
    tableRow.appendChild(tableHead);
  }
  var lastColumn = document.createElement('th');
  lastColumn.textContent = 'Total daily';
  tableRow.appendChild(lastColumn);
}

var sum = 0;
var totalHourlyArr = [];
function hourlyCalc(){
  for (var x = 0; x < time.length; x++) {
    sum = 0;
    for (var k = 0; k < Location.allLocations.length; k++) {
      sum += Location.allLocations[k].cookiesPerHour[x];
    }
    totalHourlyArr.push(sum);
    console.log(totalHourlyArr[x]);
  }
}

function createFooter() {
  var tableRowTotal = document.createElement('tr');
  var firstColumnTotal = document.createElement('td');
  firstColumnTotal.textContent = 'total';
  table.appendChild(tableRowTotal);
  tableRowTotal.appendChild(firstColumnTotal);


  for (var i = 0; i < time.length; i++) {
    var tableTdTotal = document.createElement('td');
    tableTdTotal.textContent = totalHourlyArr[i];
    tableRowTotal.appendChild(tableTdTotal);
  }
  var total = 0;
  for (var h = 0; h < Location.allLocations.length; h++) {
    total += Location.allLocations[h].totalCookies;
  }
  var lastTd = document.createElement('td');
  lastTd.textContent = total;
  tableRowTotal.appendChild(lastTd);
}

new Location ('1st & Pike', 23 , 65, 6.3);
new Location ('SeaTac Airport', 3, 24, 1.2);
new Location ('Seattle Center', 11, 38, 3.7);
new Location ('Capitol Hill', 20, 38, 2.3);
new Location ('Alki', 2, 16, 4.6);

createHeader();
for(var i = 0; i < Location.allLocations.length; i++){
  Location.allLocations[i].render();
}
hourlyCalc();
createFooter();

// creating the form
var formEl = document.getElementById('form');


function handleFormSubmit(event) {
  event.preventDefault();
  var name = event.target.name.value;
  var minCustomer = parseInt(event.target.minCustomer.value);
  var maxCustomer = parseInt(event.target.maxCustomer.value);
  var averageCookies = event.target.averageCookies.value;
  new Location (name, minCustomer, maxCustomer, averageCookies);
  console.log(name, minCustomer, maxCustomer, averageCookies);

  table.innerHTML = '';
  createHeader();
  for(var i = 0; i < Location.allLocations.length; i++){
    Location.allLocations[i].render();
  }
  hourlyCalc();
  createFooter();
}

formEl.addEventListener('submit', handleFormSubmit);
