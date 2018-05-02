
var range = function(list) {
    var result = [];

    var index;

    for (index = 0; index <= list; index++) {

        result.push(index);
    }

    return result;
}

var fizzBuzz = function(adad) {
    return range(adad).map(function(number) {
         if (number % 3 === 0) {
             return "FIZZ";
         } else if (number % 5 === 0) {
             return "BUZZ";
         } else {return number};
     });
}

var isEven = function(number) {
    return number % 2 === 0;
}

var filterNumbers = function (data) {
    
    return data.filter(isEven);
    
}


var isPrime = function(number) {
    var result = true;
    var div;

    if (number <= 1) {

        result = false;
    }

    for (div = 2; div < number; div++) {
        if (number % div === 0) {
            result = false;
        }
    }
    
    return result;
}

var primeNumbers = function () {

    return range(50).filter(isPrime);
    
}

var someTweets = function () {

    
    var tweets = ["hello world", "lol", "this is an awesome tweet", "this is awesome"];

    return tweets.filter(function (tweet) {

            return tweet.indexOf("awesome") > -1;
        });
    

};


var smallestNumberWithReduce = function (list) {

     return list.reduce(function (smallestSoFar, current) {
        //if current is smaller than smallestSoFar, return current

        if (current > smallestSoFar) {
            return current;
        } else {
            return smallestSoFar;
        }
    });
}


var sumNumberWithReduce = function (list) {

    return list.reduce(function(sumNumber, number) {
        return sumNumber + number;
    });
}

var capitalize = function(tweet) {
    return tweet[0].toUpperCase() + tweet.slice(1);
}

//paragraphify(["this is a tweet", "this is really a tweet", "we have nice party tonight"])

var paragraphify = function(tweets) {
    return tweets.reduce(function(paragraph, tweet) {
            return paragraph + capitalize(tweet) + ". ";
        },
        "");
}

var usingSplit = function(tweet) {

    return tweet.split(",").map(capitalize).join("=====");
}


