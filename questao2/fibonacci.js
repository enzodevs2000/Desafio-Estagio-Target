let fibonacciSeries = [0, 1];

function calculateFibonacci(previousValue, nextValue) {
    return previousValue + nextValue;
}

let answer = false;
let isInFibonacci = 35;
let previousValue = fibonacciSeries[0];
let nextValue = fibonacciSeries[1];
let currentValue = calculateFibonacci(previousValue, nextValue);

while (currentValue <= isInFibonacci) {
    fibonacciSeries.push(currentValue);
    previousValue = nextValue;
    nextValue = currentValue;
    if (currentValue == isInFibonacci) {
        answer = true;
    }
    currentValue = calculateFibonacci(previousValue, nextValue);
}

string = answer == true ? "The number is in fibonacci series" : "The number is not in fibonacci series";

console.log(string);

for (let i = 0; i < fibonacciSeries.length; i++) {
    console.log(fibonacciSeries[i]);
}