import { Line } from 'vue-chartjs';

const colors = ['rgba(255, 99, 132)', 'rgba(255, 159, 64)', 'rgba(255, 205, 86)', 'rgba(75, 192, 192)', 'rgba(54, 162, 235)', 'rgba(153, 102, 255)'];

const setColorOpacity = (color, opacity) => `${color.slice(0, -1)}, ${opacity})`;

export default {
  extends: Line,

  props: {
    data: {
      type: Array,
      default: () => [],
    },

    label: {
      type: String,
      default: 'Label',
    },
  },

  mounted() {
    const { label, data } = this;
    const color = colors[Math.floor(Math.random() * colors.length)];

    this.renderChart({
      labels: data.map(({ x }) => x),
      datasets: [{
        label,
        data: data.map(({ y }) => y),
        borderColor: color,
        backgroundColor: setColorOpacity(color, 0.3),
      }],
    });
  },
};
