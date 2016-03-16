export default function(n) {
    let result = [],
        newData;
    for (let i = 0; i < n; i++) {
        newData = [];
        newData.push(-1 + Math.random() * 2);
        newData.push(newData[0] >= 0 ? 1 : -1);
        // Generate noise
        if (Math.random() <= 0.2) {
            newData[1] *= -1;
        }
        result.push(newData);
    }
    return result;
};
