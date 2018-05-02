function onReady() {
    console.log('Hello Chapter 1');

    var clock = createClock('clock');
    var clock2 = createClock('clock2');
    
}

function createClock(id) {
    var c = new Object();
        c.updateClock = function() {
            var date = new Date();

            var clock = document.getElementById(id);


            clock.innerHTML = formDigits(date.getHours()) +
                ":" +
                formDigits(date.getMinutes()) +
                ":" +
                formDigits(date.getSeconds());
    }

    setInterval(c.updateClock, 1000);
    c.updateClock();

    return c;
}



function formDigits(val) {
    if (val < 10) {
        val = "0" + val;
    }
    return val;
}

window.load = onReady();