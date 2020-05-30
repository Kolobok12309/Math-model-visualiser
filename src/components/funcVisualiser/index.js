import MathFunction from '@/functions/class';
import LineChart from '@/components/lineChart.vue';

export default {
  components: {
    LineChart,
  },

  props: {
    func: {
      type: MathFunction,
      required: true,
    },
  },

  data() {
    return {
      dataset: [],

      variables: null,

      delta: null,
      min: null,
      max: null,
      nowVar: null,

      color: null,
      pending: false,
    };
  },

  computed: {
    nowFullVar() {
      if (!this.nowVar) return null;

      return this.func.variables[this.nowVar];
    },
  },

  watch: {
    func: {
      handler(newVal) {
        const resultsVariables = {};

        this.nowVar = null;

        const varEntries = Object.entries(newVal.variables);

        varEntries.forEach(([key, { defaults: { value }, defaultVar }]) => {
          if (defaultVar) {
            this.nowVar = key;
          }

          resultsVariables[key] = value;
        });

        if (!this.nowVar) {
          const [[key]] = varEntries;

          this.nowVar = key;
        }

        this.variables = resultsVariables;

        this.$nextTick(() => this.calc());
      },
      immediate: true,
    },

    nowVar: {
      handler(newVal) {
        if (!newVal) return;

        const { defaults: { min, max }, delta } = this.func.variables[newVal];

        this.min = min;
        this.max = max;
        this.delta = delta;
      },
      immediate: true,
    },
  },

  methods: {
    async calc() {
      const {
        min, max, delta, nowVar, variables, func,
      } = this;

      this.pending = true;
      const dataset = await this.$calcWorker(
        func.id,
        {
          min,
          max,
          delta,
          variable: nowVar,
        },
        variables,
      );
      this.pending = false;

      this.dataset = dataset;
    },
  },
};
