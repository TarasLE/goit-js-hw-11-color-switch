// import './styles.css';
import { startButton } from './dataConst';
import { stopButton } from './dataConst';
import { colors } from './dataConst';



// document.body.style.background = '#2196F3';
// console.log(startButton);
// console.log(stopButton);
console.log(colors);


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let startPosition = startButton.addEventListener('click', setStart);
stopButton.addEventListener('click', setStop);
let timerId

function setStart(event) {
    if (startPosition) {
       startButton.removeEventListener('click', setStart)
    }
    
    timerId =  setInterval(() => {
        const currentColor = randomIntegerFromInterval(0, colors.length - 1);
        document.body.style.background = colors[currentColor];
    }, 1000);

}

function setStop(event) {
    clearInterval(timerId);
    startButton.addEventListener('click', setStart);
}


console.log(colors[randomIntegerFromInterval(0, colors.length - 1)]);

// setInterval(() => {
//         console.log("test interval");
//     }, 1000);