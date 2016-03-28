import fs from 'fs';
import { generateLRData } from './data-generator';
import LinearRegressionTrain from './linear-regression-train';
import parseData from './data-parser.js';
import { logisticTrain, calcEout, zeroOneError } from './logistic-regression-train';

let linearRegressionTransformedData,
    linearRegressionData;
// Q13
let lrEin = 0;
for (let i = 0; i < 1000; i++) {
    linearRegressionData = generateLRData(1000, true);
    let { w, errRate } = LinearRegressionTrain(linearRegressionData);
    lrEin += errRate;
}
console.log(`Error rate for linear regression is: ${lrEin / 1000}\n`);

// Q14
let finalW = [0,0,0,0,0,0];
for (let j = 0; j < 1000; j++) {
    linearRegressionTransformedData = generateLRData(1000, true, true);
    let { w, errRate } = LinearRegressionTrain(linearRegressionTransformedData, true);
    finalW = finalW.map((feature, index) => {
        return feature + w[index];
    });
}
finalW = finalW.map((feature) => feature / 1000);
console.log(`Closest W for transformed linear regression is: ${finalW}\n`);

// Q15
let result = [];
for (let i = 0; i < 1000; i++) {
    linearRegressionData = generateLRData(1000, true);
    result = linearRegressionData.map((d) => {
        let actualResult, predictedResult;
        let x1 = d[0],
            x2 = d[1],
            y = d[2];
        actualResult = (d[0] * d[0] + d[1] * d[1] - 0.6) >= 0 ? 1 : -1;
        predictedResult = -1 - (0.05 * x1) + (0.08 * x2) + (0.13 * x1 * x2) + (1.5 * x1 * x1) + (1.5 * x2 * x2) >= 0 ? 1 : -1;
        return actualResult === predictedResult;
    });

    result = result.filter((r) => !r);
}
console.log(`Error rate for linear regression is: ${result.length / 1000}\n`);

// Q18
console.log('Reading data from file...');
let trainingData = fs.readFileSync('./hw3/ntumlone-hw3-hw3_train.dat').toString();
let validationData = fs.readFileSync('./hw3/ntumlone-hw3-hw3_test.dat').toString();
console.log('Parsing data...');
trainingData = parseData(trainingData);
validationData = parseData(validationData);
let trainedW = logisticTrain(trainingData, 0.001, 2000);
let Eout = calcEout(validationData, trainedW, zeroOneError);
console.log(`Eout for eta = 0.001 and T = 2000 is ${Eout}`);
// Q19
trainedW = logisticTrain(trainingData, 0.01, 2000);
Eout = calcEout(validationData, trainedW, zeroOneError);
console.log(`Eout for eta = 0.01 and T = 2000 is ${Eout}`);
// Q20
trainedW = logisticTrain(trainingData, 0.001, 2000, true);
Eout = calcEout(validationData, trainedW, zeroOneError);
console.log(`Eout for SGD with eta = 0.001 and T = 2000 is ${Eout}`);
