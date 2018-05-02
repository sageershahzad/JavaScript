// JavaScript Document

//var start = '{"favColor":"Orange", "favSeason":"Fall"}';

var start = [
    {
        favColor: "Orange",
        favSeason: "Fall"
    },

    {
        favColor: "Mango",
        favSeason: "Yellow"
    }

    ];


//var myString = JSON.stringify(start);
//console.log(myString);


//var myObject = JSON.parse(myString);
//console.log(myObject);


//var myString = JSON.stringify(myObject);
//console.log(myString);

//var myObject = JSON.parse(myString);
//console.log(myObject);
var output = '';
for (i = 0; i < start.length; i++) {
    output += '<li>'+start[i].favColor+'<br>'+start[i].favSeason+'</li>';
}

document.getElementById('message').innerHTML = output;