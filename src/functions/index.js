import linerFunction from './linear';
import parabolaFunction from './parabola';

const functions = [
  linerFunction,
  parabolaFunction,
];

if (window) window.mathFunctions = functions;

export default functions;
