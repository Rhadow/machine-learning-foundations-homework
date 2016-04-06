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

//Q14 & 15
let lamdaList = [],
    minEinResult = {
        lambda: undefined,
        minEin: Infinity,
        Eout: undefined
    },
    minEoutResult = {
        lambda: undefined,
        Ein: undefined,
        minEout: Infinity
    };

for (let i = 2; i > -11; i--) {
    lamdaList.push(Math.pow(10, i));
}

minEinResult = lamdaList.reduce((result, lambda) => {
    let temp = LinearRegressionTrain(trainingData, lambda),
        tempEOut = zeroOneError(testData, temp.w);
    return (temp.errRate < result.minEin) ? {
        lambda: Math.log(lambda) / Math.log(10),
        minEin: temp.errRate,
        Eout: tempEOut
    } : result;
}, minEinResult);

console.log(`Q14: Minimum Ein is achieved by log(lambda) = ${minEinResult.lambda} and Ein is ${minEinResult.minEin} with Eout equal to ${minEinResult.Eout}`);

minEoutResult = lamdaList.reduce((result, lambda) => {
    let temp = LinearRegressionTrain(trainingData, lambda),
        tempEOut = zeroOneError(testData, temp.w);
    return (tempEOut < result.minEout) ? {
        lambda: Math.log(lambda) / Math.log(10),
        Ein: temp.errRate,
        minEout: tempEOut
    } : result;
}, minEoutResult);

console.log(`Q15: Minimum Eout is achieved by log(lambda) = ${minEoutResult.lambda} and Ein is ${minEoutResult.Ein} with Eout equal to ${minEoutResult.minEout}`);

// Q16 & 17
let trainingSet = trainingData.slice(0, 120),
    validationSet = trainingData.slice(120),
    minEtrainResult = {
        lambda: undefined,
        Etrain: Infinity,
        Eval: undefined,
        Eout: undefined
    },
    minEvalResult = {
        lambda: undefined,
        Etrain: undefined,
        Eval: Infinity,
        Eout: undefined
    };

minEtrainResult = lamdaList.reduce((result, lambda) => {
    let temp = LinearRegressionTrain(trainingSet, lambda),
        tempEval = zeroOneError(validationSet, temp.w),
        tempEOut = zeroOneError(testData, temp.w);
    return (temp.errRate < result.Etrain) ? {
        lambda: Math.log(lambda) / Math.log(10),
        Etrain: temp.errRate,
        Eval: tempEval,
        Eout: tempEOut
    } : result;
}, minEtrainResult);

console.log(`Q16: Minimum Etrain is achieved by log(lambda) = ${minEtrainResult.lambda} and Etrain is ${minEtrainResult.Etrain}, Eval is ${minEtrainResult.Eval} and Eout is ${minEtrainResult.Eout}`);

minEvalResult = lamdaList.reduce((result, lambda) => {
    let temp = LinearRegressionTrain(trainingSet, lambda),
        tempEval = zeroOneError(validationSet, temp.w),
        tempEOut = zeroOneError(testData, temp.w);
    return (tempEval < result.Eval) ? {
        lambda: Math.log(lambda) / Math.log(10),
        Etrain: temp.errRate,
        Eval: tempEval,
        Eout: tempEOut
    } : result;
}, minEvalResult);

console.log(`Q17: Minimum Eval is achieved by log(lambda) = ${minEvalResult.lambda} and Etrain is ${minEvalResult.Etrain}, Eval is ${minEvalResult.Eval} and Eout is ${minEvalResult.Eout}`);

// Q18
let { w: optimalW, errRate: optimalErr } = LinearRegressionTrain(trainingData, 1);
Ein = optimalErr;
EOut = zeroOneError(testData, optimalW);
console.log(`Q18: With lambda set to 1, Ein is ${Ein} and Eout is ${EOut}`);
