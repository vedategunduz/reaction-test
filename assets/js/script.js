const container = document.getElementById("container");

const colorBlue = "#2B87D1";
const colorRed = "#CE2636";
const colorGreen = "#4BDB6A";

var screenBlue = true;
var screenRed = false;
var screenGreen = false;
var screenRedDoubleClick = false;
var screenGreenDoubleClick = false;

var time;
var timeout;

var startInterval;
var timeInterval;

container.addEventListener("click", () => {
    if (screenBlue) {
        screenBlue = !screenBlue;
        screenRed = !screenRed;
        screenRedDoubleClick = false;

        container.style.backgroundColor = colorRed;
        container.innerHTML = "<h1>Yeşili bekleyin</h1>";

        time = 0;
        timeout = (Math.random() * 3000);

        startTimeout = setTimeout(() => {
            screenRed = !screenRed;
            screenGreen = !screenGreen;

            time = Date.now();

            container.style.backgroundColor = colorGreen;
            container.innerHTML = "<h1>Tıkla!</h1>";

            clearInterval(startTimeout);
        }, timeout);
    }
    else if (screenRed && !screenRedDoubleClick) {
        screenRed = !screenRed;
        screenBlue = !screenBlue;
        screenRedDoubleClick = !screenRedDoubleClick;

        clearInterval(startTimeout);
        container.style.backgroundColor = colorBlue;
        container.innerHTML = "<h1>Çok erken!</h1> <h4>Tekrar denemek için tıklayın.</h4>"
    }
    else if (screenGreen) {
        screenGreenDoubleClick = !screenGreenDoubleClick;

        container.style.backgroundColor = colorBlue;
        container.innerHTML = `<h1>${Date.now() - time}ms</h1> <h4>Yeniden denemek için tıklayın.</h4>`;

        if (screenGreenDoubleClick) {
            screenGreenDoubleClick = !screenGreenDoubleClick;
            screenBlue = !screenBlue;
            screenGreen = !screenGreen;
        }
    }
});