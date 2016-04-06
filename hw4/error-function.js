import { dot, transpose } from 'numeric';
import LinearRegressionTrain from './linear-regression-train';

export function zeroOneError(data, w) {
    let X = data.map((d) => {
            return [1, ...d.slice(0, -1)];
        }),
        predictedResult = dot(w, transpose(X)).map((r) => {
            return r >= 0 ? 1 : -1;
        }),
        actualResult = data.map((d) => {
            return d[2];
        }),
        err = actualResult.reduce((acc, next, index) => {
            return next === predictedResult[index] ? acc : acc + 1;
        }, 0);

    return err / data.length;
}

export function computeEcv(data, lambda) {
    let tempTrainingSet = [],
        tempValidationSet = [],
        totalError = 0;

    for (let i = 0; i < 5; i++) {
        tempValidationSet = data.slice(i * 40, (i + 1) * 40);
        tempTrainingSet = [...data.slice(0, i * 40), ...data.slice((i + 1) * 40)];
        let { w, errRate } = LinearRegressionTrain(tempTrainingSet, lambda);
        totalError += zeroOneError(tempValidationSet, w);
    }

    return totalError / 5;
}
