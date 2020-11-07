export const startButton = document.querySelector('button[data-action="start"]');
export const stopButton = document.querySelector('button[data-action="stop"]');
export const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

export const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};