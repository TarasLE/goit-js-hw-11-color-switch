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

startButton.addEventListener('click', setStart);

function setStart(event) {
    
}

console.log(colors[randomIntegerFromInterval(0, colors.length-1)]);