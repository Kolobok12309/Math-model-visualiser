import { Line, mixins } from 'vue-chartjs';

export default {
  extends: Line,
  mixins: [mixins.reactiveProp],

  props: {
    chartData: {
      type: Object,
      required: true,
    },
  },

  mounted() {
    this.renderChart(this.chartData);
  },
};
