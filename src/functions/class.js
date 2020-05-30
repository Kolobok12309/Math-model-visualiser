export default class MathFunction {
  variables;

  func;

  name;

  constructor(name, func, variables) {
    this.name = name;
    this.func = func;
    this.variables = variables;
  }

  calc(arg) {
    return this.func(arg);
  }
}
