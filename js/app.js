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

  allLocations.push(this);
  this.avgCookiesPerHour();
}
var allLocations = [];


// calculate random customer per hour

Location.prototype.randomCustPerHour = function() {
  return Math.floor(Math.random() *
    (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
};

// calculate random cookies per hour

Location.prototype.avgCookiesPerHour = function() {
  for (var i = 0; i < time.length; i++) {
    var calculatedCookies = Math.floor(this.randomCustPerHour() * this.averageCookies);
    this.cookiesPerHour.push(calculatedCookies);
    this.totalCookies += calculatedCookies;
    console.log('total cookie ', this.totalCookies );
  }
};

// create table without header and footer


Location.prototype.render = function() {

  // create tr
  var trEl = addElement('tr', false, table);
  //create td
  addElement('td', this.name, trEl);

  for (var i = 0; i < time.length; i++) {
    addElement('td', this.cookiesPerHour[i], trEl);

  }

  addElement('td', this.totalCookies, trEl);

};

// create header

function createHeader() {
  var trEl = addElement('tr', false, table);

  addElement('td', '', trEl);


  for (var i = 0; i < time.length; i++) {
    addElement('th', time[i], trEl);

  }
  addElement('th', 'Total daily', trEl);

}

// create footer

function createFooter() {
  var trEl = addElement('tr', false, table);

  addElement('td', 'total', trEl);


  var total = 0;
  for (var i = 0; i < time.length; i++) {
    var hourlyTotal = 0;
    for(var k = 0; k < allLocations.length; k++){
      hourlyTotal += allLocations[k].cookiesPerHour[i];
    }
    total += hourlyTotal;
    addElement('td', hourlyTotal, trEl);

  }
  addElement('td', total, trEl);
}

new Location ('1st & Pike', 23 , 65, 6.3);
new Location ('SeaTac Airport', 3, 24, 1.2);
new Location ('Seattle Center', 11, 38, 3.7);
new Location ('Capitol Hill', 20, 38, 2.3);
new Location ('Alki', 2, 16, 4.6);

// run functions

createHeader();
for(var i = 0; i < allLocations.length; i++){
  allLocations[i].render();
}
createFooter();

// creating the form
var formEl = document.getElementById('form');


// when I call this, my element needs to be a string

function addElement(element, content, parent){
  var newElement = document.createElement(element);
  if(content){
    var newContent = document.createTextNode(content);
    newElement.appendChild(newContent);
  }

  parent.appendChild(newElement);
  return newElement;
}

// add listener

function handleFormSubmit(event) {
  event.preventDefault();
  var name = event.target.name.value;
  var minCustomer = parseInt(event.target.minCustomer.value);
  var maxCustomer = parseInt(event.target.maxCustomer.value);
  var averageCookies = event.target.averageCookies.value;
  new Location (name, minCustomer, maxCustomer, averageCookies);
  console.log('new location', name, minCustomer, maxCustomer, averageCookies);

  // clearing table content

  while(table.firstChild){
    table.removeChild(table.firstChild);
  }
  console.log ('children of tbody cleared', table.firstChild);


  // run functions with new content

  createHeader();
  for(var i = 0; i < Location.allLocations.length; i++){
    Location.allLocations[i].render();
  }

  createFooter();
}

formEl.addEventListener('submit', handleFormSubmit);
