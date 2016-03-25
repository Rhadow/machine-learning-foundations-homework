export function generateLRData(n) {
    let result = [],
        x1, x2, y;
    for (let i = 0; i < n; i++) {
        x1 = -1 + Math.random() * 2;
        x2 = -1 + Math.random() * 2;
        y = (x1 * x1 + x2 * x2 - 0.6) >= 0 ? 1 : -1;
        // Generate noise
        if (Math.random() <= 0.1) {
            y *= -1;
        }
        result.push([x1, x2, y]);
    }
    return result;
};
