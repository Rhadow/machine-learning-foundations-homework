import { generateLRData } from './data-generator';
import LinearRegressionTrain from './linear-regression-train';

let linearRegressionData = generateLRData(3);
LinearRegressionTrain(linearRegressionData);
