'use strict';

var time =['6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM',];

var firstLocation = {
  name: '1st and Pike',
  minCustomer: 23,
  maxCustomer: 65,
  averageCookies: 6.3,
  totalCookies: 0,
  cookiesPerHour: [],
  randomCustomer: function() {
    return Math.floor((Math.random()*(this.maxCustomer-this.minCustomer) + this.minCustomer));
  },
  addCookies: function(){
    var cookiesElement = document.getElementById('firstPlace');
    for(var i = 0; i<time.length;i++){
      var newItem = document.createElement('li');
      this.cookiesPerHour[i] = Math.floor(this.randomCustomer() * this.averageCookies);
      newItem.textContent = `${time[i]}: ${this.cookiesPerHour[i]} cookies`;
      cookiesElement.appendChild(newItem);
      this.totalCookies += (this.cookiesPerHour[i]);
    }
    newItem = document.createElement('li');
    newItem.textContent = `Total: ${this.totalCookies} cookies`;
    cookiesElement.appendChild(newItem);
  }
};
firstLocation.addCookies();

var secondLocation = {
  name: 'SeaTac Airport',
  minCustomer: 3,
  maxCustomer: 24,
  averageCookies: 1.2,
  totalCookies: 0,
  cookiesPerHour: [],
  randomCustomer: function() {
    return Math.floor((Math.random()*(this.maxCustomer-this.minCustomer) + this.minCustomer));
  },
  addCookies: function(){
    var cookiesElement = document.getElementById('seaTac');
    for(var i = 0; i<time.length;i++){
      var newItem = document.createElement('li');
      this.cookiesPerHour[i] = Math.floor(this.randomCustomer() * this.averageCookies);
      newItem.textContent = `${time[i]}: ${this.cookiesPerHour[i]} cookies`;
      cookiesElement.appendChild(newItem);
      this.totalCookies += (this.cookiesPerHour[i]);
    }
    newItem = document.createElement('li');
    newItem.textContent = `Total: ${this.totalCookies} cookies`;
    cookiesElement.appendChild(newItem);
  }
};
secondLocation.addCookies();


var thirdLocation = {
  name: 'Seattle Center',
  minCustomer: 11,
  maxCustomer: 38,
  averageCookies: 3.7,
  totalCookies: 0,
  cookiesPerHour: [],
  randomCustomer: function() {
    return Math.floor((Math.random()*(this.maxCustomer-this.minCustomer) + this.minCustomer));
  },
  addCookies: function(){
    var cookiesElement = document.getElementById('seattleCenter');
    for(var i = 0; i<time.length;i++){
      var newItem = document.createElement('li');
      this.cookiesPerHour[i] = Math.floor(this.randomCustomer() * this.averageCookies);
      newItem.textContent = `${time[i]}: ${this.cookiesPerHour[i]} cookies`;
      cookiesElement.appendChild(newItem);
      this.totalCookies += (this.cookiesPerHour[i]);
    }
    newItem = document.createElement('li');
    newItem.textContent = `Total: ${this.totalCookies} cookies`;
    cookiesElement.appendChild(newItem);
  }
};
thirdLocation.addCookies();

var fourthLocation = {
  name: 'Capitol Hill',
  minCustomer: 20,
  maxCustomer: 38,
  averageCookies: 2.3,
  totalCookies: 0,
  cookiesPerHour: [],
  randomCustomer: function() {
    return Math.floor((Math.random()*(this.maxCustomer-this.minCustomer) + this.minCustomer));
  },
  addCookies: function(){
    var cookiesElement = document.getElementById('capitolHill');
    for(var i = 0; i<time.length;i++){
      var newItem = document.createElement('li');
      this.cookiesPerHour[i] = Math.floor(this.randomCustomer() * this.averageCookies);
      newItem.textContent = `${time[i]}: ${this.cookiesPerHour[i]} cookies`;
      cookiesElement.appendChild(newItem);
      this.totalCookies += (this.cookiesPerHour[i]);
    }
    newItem = document.createElement('li');
    newItem.textContent = `Total: ${this.totalCookies} cookies`;
    cookiesElement.appendChild(newItem);
  }
};
fourthLocation.addCookies();

var fifthLocation = {
  name: 'Alki',
  minCustomer: 2,
  maxCustomer: 16,
  averageCookies: 4.6,
  totalCookies: 0,
  cookiesPerHour: [],
  randomCustomer: function() {
    return Math.floor((Math.random()*(this.maxCustomer-this.minCustomer) + this.minCustomer));
  },
  addCookies: function(){
    var cookiesElement = document.getElementById('alki');
    for(var i = 0; i<time.length;i++){
      var newItem = document.createElement('li');
      this.cookiesPerHour[i] = Math.floor(this.randomCustomer() * this.averageCookies);
      newItem.textContent = `${time[i]}: ${this.cookiesPerHour[i]} cookies`;
      cookiesElement.appendChild(newItem);
      this.totalCookies += (this.cookiesPerHour[i]);
    }
    newItem = document.createElement('li');
    newItem.textContent = `Total: ${this.totalCookies} cookies`;
    cookiesElement.appendChild(newItem);
  }
};
fifthLocation.addCookies();

