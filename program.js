const N = 29;
const length = N + 10;

function generateSequence(length) {
    const values = [1, 2, 3, 4, 5];
    const sequence = [];

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * values.length);
        sequence.push(values[randomIndex]);
    }

    return sequence;
}

const sequence = generateSequence(length);
console.log(`Згенерована послідовність: ${sequence}`);

const variationSeries = [...sequence].sort((a, b) => a - b);
console.log(`Варіаційний ряд: ${variationSeries}`);

const distribution = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0};

sequence.forEach(value => {
    distribution[value]++;
});

console.log("Статистичний розподіл:");
for (let key in distribution) {
    console.log(`${key} → ${distribution[key]}`);
}

let integralFrequency = 0;

console.log("Інтегральні частоти:");
for (let key in distribution) {
    integralFrequency += distribution[key];

    console.log(`${key} → ${integralFrequency}`);
}

console.log("Відносні частоти:");
for (let key in distribution) {
    console.log(`${key} → ${(distribution[key] / length).toFixed(3)}`);
}