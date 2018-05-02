var sqsum = function(a, b) {
    return Math.pow(a, 2) + Math.pow(b, 3);
}

function scopeTest() {
    var foo;

    if (true) {

        foo = 'bar';
        
    }
    console.log(foo);
    
}


function factorial(num) {

    if (num === 0 || num === 1) {
        return 1;
    }
    //var result = num;
    //while (num > 1) {
    //    result *= (num - 1);
    //    num = num - 1;

    //}
    
    return num * factorial(num - 1);

}