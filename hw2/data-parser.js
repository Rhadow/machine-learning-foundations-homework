export default function parseData(str) {
    let result = str.split('\r\n').slice(0, -1);
    return result.map((data) => {
        return data.split(' ');
    });
};
