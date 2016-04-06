import { dot, inv, transpose, add, identity, mul } from 'numeric';
import { zeroOneError } from './error-function';

export default function train(data, lambda) {
    let X = data.map((d) => {
            return [1, ...d.slice(0, -1)];
        }),
        Y = data.map((d) => {
            return d[d.length - 1];
        });

    let lambdaI = mul(lambda, identity(X[0].length)),
        XSquared = dot(transpose(X), X),
        wDagger = dot(inv(add(XSquared, lambdaI)), transpose(X)),
        w = dot(wDagger, Y),
        errRate = zeroOneError(data, w);

    return {
        w,
        errRate
    };
};
