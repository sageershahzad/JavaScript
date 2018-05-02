'use strict'
//Defines that JavaScript code should be executed in "strict mode".


//Write a if-else statement that prints "Yes" if the last charcacter of a string is a question mark. it should print "that's not a question!" if it's not.'

//if string.charAt[-1] === "?" print "Yes" otherwise "that's not a question!"

var lastCharAsQuestionMark = function () {

    var question = "What is the color of Water?"

    var notAQuestion = "What is the color of Water"

    if (question.charAt(question.length - 1) === "?") {
        return "yes";
    }

    else {
        return "that's not a question!";
    }


}

// Write an if-else statement that compares two strings that are all lower case and prints out the one that would come first in the dictionary

var printFirstDictionaryString = function() {

    var firstString = "awkward";
    var secondString = "back";
    //return firstString < secondString;
    
    if (firstString < secondString) {

        document.write(firstString);
    }

    else {
        document.write(firstString);
    }

    
}

//getTagName p and article from "<p>" or "</p>" and "<article>" or "</article>".

var getName = function(tag) {

    var result;
    if (tag.charAt(1) !== "/") {
        result = tag.slice(1, tag.length - 1);
    }

    else
    {
        result = tag.slice(2, tag.length - 1);
    }

    return result;
}


var getIndex = function () {

    var result = "teri meri prem kahani";
    
    return result.indexOf("k");
}


        var improveTweet = function (tweet) {

            var result = tweet;

            if (tweet.toLowerCase().indexOf("lol") === -1) {

                result = tweet + " lol";
            }

            return result;

        }


var classifyTweet = function (tweet) {

    var result = tweet;

    if (tweet.length >= 100) {

        return "Awesome";
    }

    else if (tweet.length > 50 && tweet.length < 100) {

        return "sorta-good";
    }

    else (tweet.length < 50)
    {

        return "not great";
    }



    return result;
}


//Find biggest number 

var biggestNumber = function() {

    var result = Math.max(4, 3, 5, 7, 9, 10, 21, 34, 17, 11, 19, 37);

    document.write(result);
    //console.log(result);
}

biggestNumber();

var biggestNumberr = function () {

    var result = Math.max(4, 3, 5, 7, 9, 10, 21, 34, 17, 11, 19, 37, 56);

    document.write(result);
    //console.log(result);
}

biggestNumberr();

var maxOfThree = function(a, b, c) {
    var result;

    if (a > b && a > c) {
        result = a;
    }

    else if (b > a && b > c) {
        result = b;
    }

    else {
        result = c;
    }

    return result;
}



var isNumber = function(value) {
    return typeof value === "number";
}


//Add three values

var addThreeValues = function(a, b, c) {

    if (!isNumber(a) || !isNumber(b) || !isNumber(c)) {
        throw "INSERT ONLY NUMBERS THANKS!"
    }
    return a + b + c;
}

var printNumbersUsingWhileLoop = function() {

    var number = 0;

    while (number <= 10) {
        if (number % 2 === 0) {
            console.log("the " + number + " is Even");
        } else {
            console.log("the " + number + " is Odd");
        }
        number = number + 1;
    }

}


var printNumbersUsingForLoop = function() {

    
    var i;

    for (i = 0; i <= 10; i++)
    {

        if (i % 2 === 0)
        {
            console.log("the " + [i] + " is Even");
        }

        else
        {
            console.log("the " + [i] + " is Odd");
        }

        
    }
}

var sumOneHundered = function (number) {

    var sum = 0;

    var currentNumber;

    for (currentNumber = 1; currentNumber <= number; currentNumber = currentNumber + 1) {

        sum = sum + currentNumber;
    }

    return sum;
}


var largestDivisor = function (number) {

    var result = 1;
    var current;

    for (current = 2; current < number; current = current + 1) {

        if (number % current === 0) {

            result = current;

        }
    }


    return result;
}


var removeVowels = function (greetings) {
    if (typeof(greetings) !== "string") {
        throw "Not Allowed";
    }
    var result = "";
    var index;

    for (index = 0; index < greetings.length; index++) {

        var currentChar = greetings.charAt(index).toLowerCase();

        if (currentChar !== "a" && currentChar !== "e" && currentChar !== "i" && currentChar !== "o" && currentChar !== "u")
        {
            result = result + greetings.charAt(index);
        }
    }

    return result;
}


var positiveEvenArrayNumbers = function() {

    var evanNumbers = [];

    for (var count = 0; count < 10; count++) {

        if (count % 2 === 0) {

            evanNumbers.push(count);

            console.log(evanNumbers);

        }
    }

}


var sum = function(list) {
    var sum = 0;

    list.forEach(function(number) {
        sum = sum + number;
    })

    return sum;
}

var sumForLoop = function(list) {
    var sum = 0;
    var index;

    for (index = 0; index < list.length; index++) {

        sum = sum + list[index];

    }

    return sum
}

var doulesByForLoop = function (list) {
    var result = [];
    var index;

    for (index = 0; index < list.length; index++) {

        result.push(list[index] * 2);

    }

    return result
}


var doulesByForEach = function (list) {
    var result = [];
    
    list.forEach(function (number) {

        result.push(number * 2);
        
    });

    return result
}


var firstLetterByMap = function (list) {

    return list.map(function(lists) {
        return lists[0];

    });
}

var firstLeterByForLoop = function(list) {
    var result = [];
    var index;
    for (index = 0; index < list.length; index++) {

        result.push(list[index].charAt(0));
    }


    return result;
}

var firstLeterByForEach = function () {

    var list = (["gracie", "loki", "allie", "layla", "janu", "khatri"]);
    var result = [];

    list.forEach(function (lists) {

        result.push(lists[0]);
    });

    return result;
}


var doublesByMap = function(list) {

    return list.map(function(number) {
        return (number * 2);
    });

}

var powerOfThreeByMap = function(list) {

   return list.map(function(number) {
        return Math.pow(number, 3);
    });

}

var range = function(max) {
    var result = [];
    var index;
    for (var index = 1; index <= max; index = index + 1) {
        result.push(index);
    }
    return result;
}

var fizzBuzz = function () {

  return range(50).map(function(number) {
        if (number % 3 === 0) {
            return "FIZZ"
        } else if (number % 5 === 0) {
            return "Buzz";
        } else {
            return number;
        }
       
    });

 }

var isEven = function(number) {
    return number % 2 === 1;
}

var filterNumbers = function() {
    return range(100).filter(isEven);
}

var isBigger = function (number) {
    return number > 2;
}

var filterBigNumbers = function () {
    return range(10).filter(isBigger);
}


var isPrimeNumber = function(number) {

    var result = true;
    var index;

    if (number <= 1) {
        result = false;
    }

    for (var index = 2; index < number; index = index + 1) {
        if (number % index === 0) {
            result = false;
        }
    }

    return result;
}

var filterPrimeNumbers = function () {
    return range(50).filter(isPrimeNumber);
}
























