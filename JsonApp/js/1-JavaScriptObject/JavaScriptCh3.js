function onReady() {
    
    var clock = createClock('clock');
    var clock2 = createClock('clock2');

}

onReady();
console.log('Hello Chapter 1');
function createClock(id) {
    var c = new Object();
    c.updateClock = function() {
        var date = new Date();

        var clock = document.getElementById(id);


        clock.innerHTML = this.formDigits(date.getHours()) +
            ":" +
            this.formDigits(date.getMinutes()) +
            ":" +
            this.formDigits(date.getSeconds());
    };

    c.formDigits = function(val) {
        if (val < 10) {
            val = "0" + val;
        }
        return val;
    };

    setInterval(function () { c.updateClock(); }, 1000);
    c.updateClock();

    return c;
}

