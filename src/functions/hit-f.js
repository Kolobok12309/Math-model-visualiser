import MathFunction from './class';

export default new MathFunction({
  name: 'Сила удара',
  view: 'Fmax = (K * S * T * v) / PI',
  func: ({
    K, S, T, v,
  }) => Math.round((K * S * T * v) / Math.PI),
  variables: {
    K: {
      name: 'Удельная жесткость K кг/см^2',
      defaults: {
        min: 1500,
        max: 4500,
        value: 3000,
      },
      delta: 100,
    },
    S: {
      name: 'Площадь мешка S см^2',
      defaults: {
        min: 20,
        max: 100,
        value: 40,
      },
      delta: 5,
    },
    v: {
      name: 'Скорость удара v м/с',
      defaults: {
        min: 0,
        max: 20,
        value: 10,
      },
      delta: 1,
    },
    T: {
      name: 'Время соударения T с',
      defaultVar: true,
      defaults: {
        min: 0,
        max: 0.03,
        value: 0.012,
      },
      delta: 0.001,
    },
  },
});
