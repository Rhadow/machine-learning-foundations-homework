import { matrix, transpose, inverse, dot } from 'mathjs';

export default function train(data) {
    let X = data.map((d) => {
        return [1, d[0], d[1]];
    });
    let Y = data.map((d) => {
        return d[2];
    });
    // let wDagger = /*dot(inverse(*/dot(transpose(X), X)/*), transpose(X));*/
    console.log(dot(transpose([[1,2],[2,1]]), [[1,2],[2,1]]));
};
