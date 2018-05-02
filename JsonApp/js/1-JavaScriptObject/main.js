// JavaScript Document

var start = '{"favColor":"Orange", "favSeason":"Fall"}';

    
var myObject = JSON.parse(start);
console.log(myObject);


var myString = JSON.stringify(myObject);
console.log(myString);


var myObject = JSON.parse(myString);
console.log(myObject);


var myString = JSON.stringify(myObject);
console.log(myString);