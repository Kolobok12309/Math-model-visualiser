let id = 0;

export default class MathFunction {
  variables;

  func;

  name;

  view;

  id;

  constructor({
    name = null,
    func = (v) => v,
    variables = {},
    view = null,
    computed = {},
  } = {}) {
    this.name = name;
    this.func = func;
    this.variables = variables;
    this.computed = computed;
    this.view = view;

    // eslint-disable-next-line no-plusplus
    this.id = id++;
  }

  calc(arg) {
    const functionName = this.constructor.name;

    Object.keys(this.variables)
      .forEach((key) => {
        if (typeof arg[key] === 'undefined') {
          throw new Error(`[MathFunction] Required prop ${key} for ${functionName} is undefined`);
        }
      });

    return this.func(arg);
  }
}
