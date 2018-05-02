

var myFunc = function() {
    var tweets = ["Hello", "World", "Another Tweet", "Lol"];
    var index;
    for (index = 0; index < tweets.length; index++) {

        //console.log(tweets[index]);
    }

    var printElement = function(tweet) {
        console.log(tweet);
    };

    tweets.forEach(printElement);
};

//myFunc();

var sum = function(listOfNumbers) {
    var sum = 0;

    listOfNumbers.forEach(function(number) {
        sum += number;
    });

    return sum;
}


var total = function(list) {
    var add = 0;
    var index;

    for (index = 0; index < list.length; index++) {

        add += list[index];
    }

    return add;
}


var addArray = function(list) {
    var addArray = [];

    for (var i = 0; i < list.length; i++) {
        addArray.push(list[i] * 2);
    }

    return addArray;
}

var addArrForEach = function (numberList) {
    var result = [];

    numberList.forEach(function(number) {
        result.push(number * 2);
    });

    return result;
}

var doublesWithMap = function(list) {

    return list.map(Math.sqrt);
}

var square = function(number) {
    return number * number;
}

var findPower = function (numbers) {

    return numbers.map(function(number) {
        return Math.pow(number, 3);
    });
   
}


var firstLetters = function (listofStrings) {
   return listofStrings.map(function(word) {
        return word.charAt(0);
    });
};

//how to be false

var myTrue = function () {

    var booll = [true, false, true, false, false, true];

    return booll.map(function (value) {
        return !value;
        
    });
  };

//range

var pushNumbers = function(max) {
    var result = [];
    var index;
    for (index = 0; index <= max; index++) {

        result.push(index);
    }
    return result;
}

var doubleRange = function() {
   return pushNumbers(13).map(function (number) {
        return number * 2;

    });
}




