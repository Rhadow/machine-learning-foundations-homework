import { dot, transpose } from 'numeric';

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
