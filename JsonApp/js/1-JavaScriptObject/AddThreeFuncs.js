
function findPower() {

    

    var simple = Math.floor(Math.random() * 10);
    return document.getElementById("demo").innerHTML = "Result Your number is: " + simple;
    }

document.getElementById("demo").innerHTML = "Result Your number is: 0";


var isNumber = function(potentialNumber) {
    return typeof potentialNumber === "number";
  };

var result = isNumber("1");

console.log(result);


var isPositive = function(number) {
    return typeof number === "number";
};

var positiveNumber = isPositive(2);
console.log(positiveNumber);

var isTweet = function(potentialTweet) {
    if (potentialTweet.length <= 140) {
        return potentialTweet;
    }

    else {
        return "Sorry your tweet is too long.";
    }
}

var potentialTweets = isTweet("Hi, I am Sageer Whats up.");
document.getElementById("demoo").innerHTML = potentialTweets;
console.log(potentialTweets);