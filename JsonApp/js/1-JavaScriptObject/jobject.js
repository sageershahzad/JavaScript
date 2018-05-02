function onReady() {
    console.log('Hello Chapter 1');
    setInterval(updateClock, 1000);
    updateClock();
}

function updateClock() {
   
    var date = new Date();

    console.log(date.getHours());

    var clock = document.getElementById('clock');
    clock.innerHTML = formDigits(date.getHours()) + ":" + formDigits(date.getMinutes()) + ":" + formDigits(date.getSeconds());
}

function formDigits(val) {
    if (val < 10) {
        val = "0" + val;
    }
    return val;
}

window.load = onReady();