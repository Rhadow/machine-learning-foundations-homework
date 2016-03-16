import fs from 'fs';
import generateData from './data-generator.js';
import train from './train.js';
import parseData from './data-parser.js';

const CYCLE_COUNT = 5000;
const DATA_LENGTH = 20;
let eInTotal = 0,
    eOutTotal = 0,
    generatedData,
    trainingData,
    validationData;

console.log('Reading data from file...');
trainingData = fs.readFileSync('./train-data.dat').toString();
validationData = fs.readFileSync('./test-data.dat').toString();

console.log('Parsing data...');
trainingData = parseData(trainingData);
validationData = parseData(validationData);

for (let i = 0; i < CYCLE_COUNT; i++) {
    generatedData = generateData(DATA_LENGTH);
    let { theta, s, eIn } = train(generatedData);
    eInTotal += eIn;
    eOutTotal += 0.5 + 0.3 * s * (Math.abs(theta) - 1);
}

console.log(`Ein: ${eInTotal / CYCLE_COUNT}`);
console.log(`Eout: ${eOutTotal / CYCLE_COUNT}`);
