let faturamento = require('./dados.json');

function getMin(faturamento, valor) {
    let min;
    for (let i = 0; i < faturamento.length; i++) {
        if (min == null || parseInt(faturamento[i][valor]) < parseInt(min[valor]))
            min = faturamento[i];
    }

    return min;
}

function getMax(faturamento, valor) {
    let max;
    for (let i = 0 ; i < faturamento.length ; i++) {
        if (max == null || parseInt(faturamento[i][valor]) > parseInt(max[valor]))
            max = faturamento[i];
    }
    return max;
}

console.log("Max Value:");
let maxValue = getMax(faturamento, "valor");
console.log("Day: " + maxValue.dia + " - " + maxValue.valor);

console.log("Min Value:");
let minValue = getMin(faturamento, "valor");
console.log("Day: " + minValue.dia + " - " + minValue.valor);

let total = 0;
let days = 0
for (let i = 0 ; i < faturamento.length ; i++) {
    total += faturamento[i].valor;
    if (faturamento[i].valor != 0) {
        days++;
    }
}

let average = total/days;
let daysGreaterAverage = 0;

for (let i = 0 ; i < faturamento.length ; i++) {
    if (faturamento[i].valor != 0 && faturamento[i].valor > average) {
        daysGreaterAverage++;
    }
}

console.log("Days with value greater than the average: " + daysGreaterAverage);
