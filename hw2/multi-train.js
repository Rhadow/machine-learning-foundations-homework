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


function multiTrain(data) {
    let parsedData = parseDataByDimension(data),
        result = parsedData.map(train);
    console.log(result);
}

export default multiTrain;
