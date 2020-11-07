import { startButton } from './dataConst';
import { stopButton } from './dataConst';
import { colors } from './dataConst';
import { randomIntegerFromInterval } from './dataConst';


startButton.addEventListener('click', setStart);
stopButton.addEventListener('click', setStop);
let timerId

function setStart(event) {
    startButton.removeEventListener('click', setStart);
   
    timerId =  setInterval(() => {
        const currentColor = randomIntegerFromInterval(0, colors.length - 1);
        document.body.style.background = colors[currentColor];
    }, 1000);

}

function setStop(event) {
    clearInterval(timerId);
    startButton.addEventListener('click', setStart);
}

