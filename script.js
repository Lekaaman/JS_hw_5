document.addEventListener("DOMContentLoaded", function () {

    let clickCount = 0;
    const clickButton = document.getElementById("clickButton");
    const clickMessage = document.getElementById("clickMessage");

    clickButton.addEventListener("click", () => {
        clickCount++;
        clickButton.textContent = `Клик: ${clickCount}`;

        if (clickCount >= 15) {
            clickButton.disabled = true;
            clickMessage.textContent = "Клики закончились!";
        }
    });

    let countdown = 10;
    let countdownInterval;
    const countdownDisplay = document.getElementById("countdownDisplay");
    const startCountdown = document.getElementById("startCountdown");
    const resetCountdown = document.getElementById("resetCountdown");

    startCountdown.addEventListener("click", () => {
        clearInterval(countdownInterval);
        countdownInterval = setInterval(() => {
            countdown--;
            countdownDisplay.textContent = countdown;

            if (countdown === 0) {
                clearInterval(countdownInterval);
                countdownDisplay.textContent = "Время вышло!";
            }
        }, 1000);

        startCountdown.disabled = true;
    });

    resetCountdown.addEventListener("click", () => {
        clearInterval(countdownInterval);
        countdown = 10;
        countdownDisplay.textContent = countdown;
        startCountdown.disabled = false;
    });

    let stopwatchTime = 0;
    let stopwatchInterval;
    const stopwatchDisplay = document.getElementById("stopwatchDisplay");
    const startStopwatch = document.getElementById("startStopwatch");
    const stopStopwatch = document.getElementById("stopStopwatch");
    const resetStopwatch = document.getElementById("resetStopwatch");

    startStopwatch.addEventListener("click", () => {
        stopwatchInterval = setInterval(() => {
            stopwatchTime++;
            stopwatchDisplay.textContent = stopwatchTime;
        }, 1000);

        startStopwatch.disabled = true;
        stopStopwatch.disabled = false;
        resetStopwatch.disabled = false;
    });

    stopStopwatch.addEventListener("click", () => {
        clearInterval(stopwatchInterval);
        startStopwatch.disabled = false;
        stopStopwatch.disabled = true;
    });

    resetStopwatch.addEventListener("click", () => {
        clearInterval(stopwatchInterval);
        stopwatchTime = 0;
        stopwatchDisplay.textContent = stopwatchTime;
        startStopwatch.disabled = false;
        stopStopwatch.disabled = true;
        resetStopwatch.disabled = true;
    });

});
