import { dot, inv, transpose } from 'numeric';

function countErrorRate(data, w) {
    let X = data.map((d) => {
        return [1, ...d.slice(0, -1)];
    });
    let predictedResult = dot(w, transpose(X)).map((r) => {
        return r >= 0 ? 1 : -1;
    });
    let actualResult = data.map((d) => {
        return (d[0] * d[0] + d[1] * d[1] - 0.6) >= 0 ? 1 : -1;
    });
    let err = actualResult.reduce((acc, next, index) => {
        return next === predictedResult[index] ? acc : acc + 1;
    }, 0);

    return err / data.length;
};

export default function train(data, isTransformed) {
    let X = data.map((d) => {
        return [1, ...d.slice(0, -1)];
    });
    let Y = data.map((d) => {
        return d[d.length - 1];
    });
    let wDagger = dot(inv(dot(transpose(X), X)), transpose(X));
    let w = dot(wDagger, Y);
    let errRate = NaN;
    if (!isTransformed) {
        errRate = countErrorRate(data, w);
    }
    return {
        w,
        errRate
    };
};
