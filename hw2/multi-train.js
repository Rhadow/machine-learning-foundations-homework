import train from './train.js';

function parseDataByDimension(data) {
    let result = [],
        dimension = data[0].length - 1,
        temp, x, y;

    for (let i = 0; i < dimension; i++) {
        temp = [];
        for (let j = 0; j < data.length; j++) {
            x = data[j][i];
            y = data[j][data[j].length - 1];
            temp.push([x, y]);
        }
        result.push(temp);
    }

    return result;
}

function countMultiDimensionError(data, theta, s, dimension) {
    let errorCount = 0,
        parsedData = parseDataByDimension(data),
        dataCount = parsedData[0].length;

    parsedData[dimension].forEach((dimensionData) => {
        let x = dimensionData[0],
            y = dimensionData[1],
            learningResult = s * (x - theta >= 0 ? 1 : -1);
        if (learningResult !== y) {
            errorCount++;
        }
    });

    return errorCount / dataCount;
}


function multiTrain(data) {
    let parsedData = parseDataByDimension(data),
        result = parsedData.map(train).reduce((acc, x) => {
            return acc['eIn'] > x['eIn'] ? x : acc;
        });
    return result;
}

export { multiTrain, countMultiDimensionError};
