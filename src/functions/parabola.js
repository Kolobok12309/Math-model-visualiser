import MathFunction from './class';

export default new MathFunction({
  name: 'Парабола',
  func: ({ x = 1, c = 0, a = 1 }) => (a * (x * x)) + c,
  variables: {
    x: {
      name: 'X',
      defaultVar: true,
      defaults: {
        min: -15,
        max: 15,
        value: 5,
      },
      delta: 1,
    },
    c: {
      name: 'C',
      defaults: {
        min: -5,
        max: 15,
        value: 0,
      },
      delta: 1,
    },
    a: {
      name: 'A',
      defaults: {
        min: 1,
        max: 10,
        value: 1,
      },
      delta: 1,
    },
  },
  view: 'a * (x^2) + c = y',
});
