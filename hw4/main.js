import fs from 'fs';
import LinearRegressionTrain from './linear-regression-train';
import { zeroOneError } from './error-function';
import parseData from '../hw2/data-parser.js';


console.log('Reading data from file...');

let trainingData = fs.readFileSync('./hw4/ntumlone-hw4-hw4_train.dat').toString(),
    testData = fs.readFileSync('./hw4/ntumlone-hw4-hw4_test.dat').toString(),
    Ein, EOut;

console.log('Parsing data...\n');
trainingData = parseData(trainingData);
testData = parseData(testData);

// Q13
let { w, errRate } = LinearRegressionTrain(trainingData, 10);
Ein = errRate;
EOut = zeroOneError(testData, w);
console.log(`Q13: With lambda set to 10, Ein is ${Ein} and Eout is ${EOut}`);
