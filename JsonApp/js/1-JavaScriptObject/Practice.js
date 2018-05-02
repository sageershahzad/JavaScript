// Write a function called isDivisibleBy3 which returns `true` if a number is
// divisible by 3, and `false` otherwise.
var isDivisibleBy3 = function () {

    return 3 % 3 == 0;
};

var isDivided = isDivisibleBy3();
document.getElementById("isDivisibleBy3").innerHTML = isDivided;
console.log(isDivided);

// Write a function that converts a Celsius temperature to Fahrenheit,
// and vice-versa. To convert from Celsius to Fahrenheit, you multiply
// the celsius value by 9 and then divide by 5. Then you add 32. To
// convert the other way, you subtract 32, and then multiply by
// 5. Finally, you divide by 9. The division operator in JavaScript is
// `/`.
var celsToFahr = function () {
};

var fahrToCels = function () {
};


// Write a function called `randUpTo` that accepts a number and returns a random
// whole number between 0 and that number. For example:
//
//     randUpTo(10);
//     //=> 5
//
//     randUpTo(10);
//     //=> 9
//
//     randUpTo(1000);
//     //=> 561
//
//     randUpTo(1000);
//     //=> 236
var randUpTo = function () {
};


// Write a function called `randBetween` that accepts two numbers representing a
// range and returns a random whole number between those two numbers.
var randBetween = function () {
};


// The standard card suits are clubs, diamonds, hearts and spades. Write a
// function called isSuit that accepts a string and returns true if the input
// string is a suit, and false otherwise. Consider making a more robust function
// that will allow the case to be arbitrary, meaning "HEARTS", "hearts", and
// "hEaRtS" all return `true`. You can use the `toLowerCase` or `toUpperCase`
// string methods to achieve this.
//
//     isSuit("hearts");
//     //=> true
//
//     isSuit("HEARTS");
//     //=> true
//
//     isSuit("coins");
//     //=> false
var isSuit = function () {
};


// The valid ranks for a card are two, three, four, five, six, seven, eight,
// nine, ten, jack, queen, king and ace. Write a function called `isRank` that
// accepts a string and returns true if it is a card rank.
//
//     isRank("jack");
//     //=> true
//
//     isRank("Queen");
//     //=> true
//
//     isRank("one");
//     //=> false
var isRank = function () {
};


// Using the previous two functions, write a function called isCard that accepts
// two arguments, a rank and a suit, and returns true if they are valid for a card,
// and false otherwise.
var isCard = function () {
};


// Write a function called `isCapitalized` that accepts a string and returns
// `true` if the first letter is a capital letter. How can you determine that?
// Remember that you can use strings in comparisons in the same way that you can
// use numbers, and the ordering is alphabetical (with capital letters having lower
// values than their lower-case counterparts).
var isCapitalized = function () {
};


// Write a function that accepts a string representation of an HTML element (it
// can't have nested HTML elements) and returns the string contained inside. For
// example:
//
//     getHTMLText("<p>this is some text in a paragraph</p>");
//     //=> this is some text
//
//     getHTMLText("<li>this is a list item</li>");
//     //=> this is a list item
var getHTMLText = function () {
};


// Write a function that determines if a string represents an HTML element. This
// means it has to start with an opening HTML tag and end with a closing HTML tag.
//
//     isHTMLElement("<p>this is a paragraph</p>");
//     //=> true
//
//     isHTMLElement("this is a tweet!");
//     //=> false
//
//     isHTMLElement("<p>this is NOT an paragraph</div>");
//     //=> false
//
//     isHTMLElement("<li>this is an HTML list element</li>");
//     //=> true
//
// It may help in this case to look up the `lastIndexOf` method on the string
// objects.
var isHTMLElement = function () {
};


var getTagName = function(tag) {

    var result;
    //<p>
    if (tag.charAt(1) !== "/") {
        result = tag.slice(1, tag.length - 1);
    } else {
        result = tag.slice(2, tag.length - 1);

    }

    return result;
};

var htmlElement = getTagName("</p>");
console.log(htmlElement);


var improveTweet = function(tweet) {
    var result = tweet;

    if (tweet.toLowerCase().indexOf("lol") === -1) {
        result = tweet + " lol";
    }

    return result;
}

var tweeter = improveTweet("LOL what are you doing");
console.log(tweeter);


var classifyTweet = function(tweet) {

    var resultOfTweet;

    if (tweet.length < 50) {

        resultOfTweet = "Not a good";
    } else if (50 <= tweet.length && tweet.length < 100) {
        resultOfTweet = "Sorta good";
    } else {
        resultOfTweet = "Awesome";
    }

    return resultOfTweet;
}


var maxOfThreeNumbers = function (a, b, c) {

    var resultOfMaxNumber;

    if (a > b && a > c) {
        resultOfMaxNumber = a;

    } else if (b > a && b > c) {
        resultOfMaxNumber = b;

    } else {
        resultOfMaxNumber = c;
    }

    
    return resultOfMaxNumber;
}

var maxNumber = maxOfThreeNumbers(20, 35, 2);

console.log(maxNumber);


var printMessage = function() {


    var number = 1;
    while (number <= 10) {
        console.log("2 X " + number + " = " + number * 2);
        number = number + 1;
    }

    return number;
}


var evenOrOdd = function () {


    var number = 1;
    while (number <= 10) {
        if (number % 2 === 0) {
            console.log("Number " + number + " is Even");
        } else {
            console.log("Number " + number + " is Odd");
        }
        number += 1;
    }

    return number;
}

evenOrOdd();


//largestDivisir
var largestDivisir = function(number) {

    var result = 1;

    var current;

    for (current = 2; current < number; current++) {

        if (number % current === 0) {
            result = current;
        }
    }

    return result;
}

var divider = largestDivisir(10);

console.log(divider);

//removeVowels

var removeVowels = function(word) {

    if (typeof word !== "string") {
        throw "the input to remove vowels should be string!";
    }

    var result = "";
    var index;

    for (index = 0; index < word.length; index = index + 1) {

        if (word.charAt(index) !== "a" &&
            word.charAt(index) !== "e" &&
            word.charAt(index) !== "u" &&
            word.charAt(index) !== "i" &&
            word.charAt(index) !== "o") {
            result = result + word.charAt(index);
        }
     }
    
    return result;
};

var remove = removeVowels("Hello World");

console.log(remove);



//findFirstLowercaseLetter

var findFirstLowercaseLetter = function(tweet) {
    if (typeof tweet !== "string") {
        throw "Tweet must be in string!";
    }

    var result = "";
    var index;
    for (index = 0; index < tweet.length; index++) {

        if ("a" <= tweet.charAt(index) && tweet.charAt(index) <= "z") {

            return tweet.charAt(index);
        }
    }


    return result;
}


//countDown 

var countDown = function(number) {
    if (typeof number !== "number") {
        throw "Sorry it is not a number";
    }

    var count;

    for (count = number; count >= 1; count--) {
        console.log(count);
        }
   };

var count = countDown(10);
console.log(count);


//countBackword
var countBackword = function(number) {
    if (typeof number !== "number") {
        throw "Sorry it is not a number";
    }
    console.log("This is from While Loop");

    var current = number;

    while (current >= 1) {
        console.log(current);
        current--;

    }

};

var current = countBackword(10);
console.log(current);

//sumValues using Array
var sumValues = function(values) {

    var sum = 0;

    var index;

    for (index = 0; index < values.length; index++) {

        sum += values[index];

    }
    return sum;
}

//Check if vowels

var isVowels = function(letter) {
    var letterLc = letter.toLowerCase();

    return letterLc === "a" ||
        letterLc === "e" ||
        letterLc === "i" ||
        letterLc === "o" ||
        letterLc === "u";
};

var removeVowels = function(word) {

    var result = "";
    var index;
    for (index = 0; index < word.length; index++) {

        if (!isVowels(word[index])) {
            result += word[index];
        }
    }

    return result;
}

//removeVowelFromEach
var removeVowelFromEach = function(tweets) {
    var result = [];
    var index;

    for (index = 0; index < tweets.length; index++) {

        result.push(removeVowels(tweets[index]));
    }


    return result;
}


     var smallestNumber = function (list) {

            var smallestSoFar = list[0];
            var index;
            for (index = 0; index < list.length; index++) {

                if (list[index] < smallestSoFar) {

                    smallestSoFar = list[index];
                }

            }
            return smallestSoFar;
        };

var small = smallestNumber([2, 4, 5, 7, 1]);
console.log(small);


var loopSum = function() {

    var result = 0;

    var index;

    for (index = 2; index < 11; index++) {
        result += index;
    }
    return result;
};

var res = loopSum();

console.log(res);

//largestNumber
var largestNumber = function(list) {
    var largestNumberSoFar = list[0];
    var index;

    for (index = 1; index < list.length; index++) {

        if (list[index] > largestNumberSoFar) {
            largestNumberSoFar = list[index];
        }

    }

    return largestNumberSoFar;
}

var largNumber = largestNumber([12, 11, 7, 9]);
console.log(largNumber);

