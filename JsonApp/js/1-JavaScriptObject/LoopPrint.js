function printFiftyNumbers() {
    var target = Number(prompt("Please Enter a target - 50 (MAX)", ""));

    var start = 0;

    while (start <= target) {
        document.write(start + "<br/>");

        start += 2;

        if (start > 50) {
            break;
        }
    }
}


