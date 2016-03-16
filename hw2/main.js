import fs from 'fs';
import generateData from './data-generator.js';
import train from './train.js';
import parseData from './data-parser.js';
import multiTrain from './multi-train.js';

const CYCLE_COUNT = 5000;
const DATA_LENGTH = 20;
let eInTotal = 0,
    eOutTotal = 0,
    generatedData,
    trainingData,
    validationData;

console.log('Reading data from file...\n');
trainingData = fs.readFileSync('./train-data.dat').toString();
validationData = fs.readFileSync('./test-data.dat').toString();

console.log('Parsing data...\n');
trainingData = parseData(trainingData);
validationData = parseData(validationData);

// console.log('Calculating question 17 & 18...\n');
//
// for (let i = 0; i < CYCLE_COUNT; i++) {
//     generatedData = generateData(DATA_LENGTH);
//     let { theta, s, eIn } = train(generatedData);
//     eInTotal += eIn;
//     eOutTotal += 0.5 + 0.3 * s * (Math.abs(theta) - 1);
// }
//
// console.log(`Ein: ${eInTotal / CYCLE_COUNT}`);
// console.log(`Eout: ${eOutTotal / CYCLE_COUNT}\n`);

console.log('Calculating question 19 & 20...');
console.log(trainingData);
multiTrain(trainingData);
