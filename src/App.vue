<template>
  <v-app>
    <v-content>
      <LineChart
        label="Func"
        :data="dataset"
        style="width: 50%; height: 100%"
      />
    </v-content>
  </v-app>
</template>

<script>
import LineChart from '@/components/lineChart';

export default {
  name: 'App',

  components: {
    LineChart,
  },

  computed: {
    dataset() {
      const length = 15;
      const result = [];
      const func = ({ x, c }) => x * x + c;

      for (let i = 0; i < length; i += 1) {
        const funcRes = func({ x: i, c: 3 });

        result.push({ x: i, y: funcRes });
      }

      return result;
    },
  },
};
</script>
