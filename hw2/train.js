function countError(data, theta, s) {
    let errorCount = 0;

    data.forEach((d) => {
        let x = d[0],
            y = d[1],
            learningResult = s * (x - theta >= 0 ? 1 : -1);
        if (learningResult !== y) {
            errorCount++;
        }
    });

    return errorCount / data.length;
}

function train(data, dimension) {
    let eIn = data.length + 1,
        theta, s, tempErr, bestTheta, bestS;

    data.forEach((x) => {
        theta = x[0];
        s = 1;
        tempErr = countError(data, theta, s);
        if (tempErr < eIn) {
            eIn = tempErr;
            bestTheta = theta;
            bestS = s;
            dimension = dimension;
        }
        s = -1;
        tempErr = countError(data, theta, s);
        if (tempErr < eIn) {
            eIn = tempErr;
            bestTheta = theta;
            bestS = s;
            dimension = dimension;
        }
    });

    return {
        theta: bestTheta,
        s: bestS,
        eIn,
        dimension
    };
}

export default train;
