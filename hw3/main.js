import { generateLRData } from './data-generator';
import LinearRegressionTrain from './linear-regression-train';

let linearRegressionData = generateLRData(1000);
LinearRegressionTrain(linearRegressionData);
