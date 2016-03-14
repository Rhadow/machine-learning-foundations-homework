import generateData from './data-generator.js';
import train from './train.js';

let eInTotal = 0;
let eOutTotal = 0;

for (let i = 0; i < 5000; i++) {
    let generatedData = generateData(20, true),
        { theta, s, eIn} = train(generatedData);
    eInTotal += eIn;
    eOutTotal += 0.5 + 0.3 * s * (Math.abs(theta) - 1);
}

console.log(`Ein: ${eInTotal / 5000}`);
console.log(`Eout: ${eOutTotal / 5000}`);
