import { dot, inv, transpose } from 'numeric';

export default function train(data) {
    let X = data.map((d) => {
        return [1, d[0], d[1]];
    });
    let Y = data.map((d) => {
        return d[2];
    });
    let wDagger = dot(inv(dot(transpose(X), X)), transpose(X));
    let w = dot(wDagger, Y);
};
