import mathFunctions from '@/functions';

// eslint-disable-next-line no-restricted-globals
self.addEventListener('message', ({ data: { id, config, variables } }) => {
  const mathFunction = mathFunctions.find(({ id: funcId }) => id === funcId);

  if (!mathFunction) throw new Error(`Cannot find function with id ${id}`);

  const {
    min, max, delta, variable,
  } = config;

  const dataset = [];
  let counter = min;

  do {
    const funcRes = mathFunction.calc({ ...variables, [variable]: counter });

    dataset.push({ x: counter, y: funcRes });

    counter += delta;
  } while (counter <= max);

  // eslint-disable-next-line no-restricted-globals
  self.postMessage(dataset);
});
