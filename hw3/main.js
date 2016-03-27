import { generateLRData } from './data-generator';
import LinearRegressionTrain from './linear-regression-train';

let linearRegressionTransformedData,
    linearRegressionData;
// Q13
let lrEin = 0;
for (let i = 0; i < 1000; i++) {
    linearRegressionData = generateLRData(1000, true);
    let { w, errRate } = LinearRegressionTrain(linearRegressionData);
    lrEin += errRate;
}
console.log(`Error rate for linear regression is: ${lrEin / 1000}`);

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
console.log(`Closest W for transformed linear regression is: ${finalW}`);

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
console.log(`Error rate for linear regression is: ${result.length / 1000}`);
