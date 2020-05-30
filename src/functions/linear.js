import MathFunction from './class';

export default new MathFunction(
  'Линейная функция',
  ({ x = 1, c = 0 }) => x + c,
  {
    x: {
      name: 'X',
      defaultVar: true,
      defaults: {
        min: 0,
        max: 15,
        value: 5,
      },
      delta: 0.5,
    },
    c: {
      name: 'C',
      defaults: {
        min: 0,
        max: 15,
        value: 0,
      },
      delta: 0.5,
    },
  },
  'x + c = y',
);
