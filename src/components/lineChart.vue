<template>
  <div class="line-chart">
    <LineChart
      :height="70"
      :chartData="chartData"
    />

    <VOverlay
      :value="pending"
      absolute
    >
      <VProgressCircular
        color="primary"
        indeterminate
      />
    </VOverlay>
  </div>
</template>

<script>
import LineChart from '@/components/lineChartRaw';

const colors = ['rgba(255, 99, 132)', 'rgba(255, 159, 64)', 'rgba(255, 205, 86)', 'rgba(75, 192, 192)', 'rgba(54, 162, 235)', 'rgba(153, 102, 255)'];

const setColorOpacity = (color, opacity) => `${color.slice(0, -1)}, ${opacity})`;

export default {
  components: {
    LineChart,
  },

  props: {
    pending: {
      type: Boolean,
      default: false,
    },
    dataset: {
      type: Array,
      default: () => [],
    },
    label: {
      type: String,
      default: 'Function',
    },
  },

  data() {
    return {
      color: null,
    };
  },

  computed: {
    chartData() {
      const { color, dataset } = this;

      return {
        labels: dataset.map(({ x }) => x),
        datasets: [{
          label: this.label,
          data: dataset.map(({ y }) => y),
          borderColor: color,
          backgroundColor: setColorOpacity(color, 0.3),
        }],
      };
    },
  },

  created() {
    this.color = colors[Math.floor(Math.random() * colors.length)];
  },
};
</script>

<style lang="stylus" scoped>
.line-chart
  position relative
</style>
