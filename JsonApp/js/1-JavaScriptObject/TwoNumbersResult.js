
function addNumbers() {

    var firstNumber = parseFloat(document.getElementById("FirstNumber").value);
    var secondNumber = parseFloat(document.getElementById("SecondNumber").value);

    if (isNaN(firstNumber)) {
        alert("Please enter a valid first number");
        return;
    }

    if (isNaN(secondNumber)) {
        alert("Please enter a valid second number");
        return;
    }

    document.getElementById("ResultNumber").value = firstNumber + secondNumber;
}


function myFunction() {
    document.getElementById("myForm").reset();
}

function substractFunction() {
    var str = "Sageer Shahzad";
    var res = str.substring(0, 6);

    document.getElementById("subString").innerHTML = res;
}

$(document).ready(function () {
    $(".btn1").click(function () {
        $("h1").hide();
    });
    $(".btn2").click(function () {
        $("h1").show();
    });
});

function subStr() {
    var str = "Sageer Shahzad";
    var res = str.slice(0, 6);

    document.getElementById("subString").innerHTML = res;
}