import Vue from 'vue';
import CalcWorker from './calc.worker';

const workersCache = {};

Vue.prototype.$calcWorker = (id, config, variables) => new Promise((res, rej) => {
  if (!workersCache[id]) {
    workersCache[id] = new CalcWorker();
  }

  const worker = workersCache[id];

  worker.postMessage({ id, config, variables });

  worker.addEventListener('message', (e) => res(e.data));
  worker.addEventListener('error', (e) => rej(e));
});
