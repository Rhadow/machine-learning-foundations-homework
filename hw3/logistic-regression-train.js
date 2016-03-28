import { dot, transpose, add, div, mul, sub } from 'numeric';
const e = 2.718281828459045;

let sigmoid = function(s) {
    return 1 / (1 + Math.pow(e, -s));
};

let isSlopeZero = function(slope) {
    return slope.length !== 0 && slope.filter((w) => w !== 0).length === 0;
};

export function zeroOneError(x, y) {
    let predicted = x >= 0.5 ? 1 : -1;
    return predicted === y;
};

export function calcEout(data, w, errFunction) {
    let X = data.map((d) => [1, ...d.slice(0, -1)]),
        Y = data.map((d) => d[d.length - 1]),
        error = X.map((x, i) => {
            let score = dot(w, x);
            return errFunction(sigmoid(score), Y[i]);
        }).filter((r) => !r).length;
    return error / data.length;
}

export function logisticTrain(data, eta, maxLoop) {
    let w = new Array(data[0].length).fill(0),
        initialSlope = new Array(data[0].length).fill(0),
        X = data.map((d) => [1, ...d.slice(0, -1)]),
        Y = data.map((d) => d[d.length - 1]),
        slope = [],
        counter = 0;

    while (counter < maxLoop && !isSlopeZero(slope)) {
        slope = X.reduce((acc, x, i) => {
            let y = Y[i];
            let score = -y * dot(w, x);
            return add(acc, dot(sigmoid(score), dot(-y, x)));
        }, initialSlope);
        slope = div(slope, data.length);
        w = sub(w, mul(eta, slope));
        counter++;
    }

    return w;
};
