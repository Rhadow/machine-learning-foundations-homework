export default function parseData(str) {
    let result = str.split('\n').slice(0, -1);
    return result.map((data) => {
        return data.split(' ').map((s) => { return parseFloat(s, 10); });
    });
};
