window.onload = function () {
    var seconds = 0;
    var milliseconds = 0;
    var appendmilliseconds = document.getElementById("milisecond");
    var appendSeconds = document.getElementById("second");
    var buttonStart = document.getElementById("start");
    var buttonStop = document.getElementById("stop");
    var buttonReset = document.getElementById("reset");
    var Interval;

    buttonStart.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function () {
        clearInterval(Interval);
    }

    buttonReset.onclick = function () {
        clearInterval(Interval);
        milliseconds = "00";
        seconds = "00";
        appendmilliseconds.innerHTML = milliseconds;
        appendSeconds.innerHTML = seconds;

    }

    function startTimer() {
        milliseconds++;

        if (milliseconds <= 9) {
            appendmillisecond.innerHTML = "0" + milliseconds;
        }

        if (milliseconds > 9) {
            appendmilliseconds.innerHTML = milliseconds;
        }

        if (milliseconds > 99) {
            seconds++;
            appendSeconds.innerHTML = "0" + 0;

        }

        if (seconds > 9) {
            appendSeconds.innerHTML = seconds
        }
    }
}