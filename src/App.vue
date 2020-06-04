<template>
  <v-app>
    <v-content>
      <VTabs
        v-model="tab"
        dark
      >
        <VTabsSlider/>

        <VTab
          v-for="func in mathFunctions"
          :key="func.name"
          :href="`#tab-${func.name}`"
        >
          {{ func.name }}
        </VTab>

        <VTabItem
          v-for="func in mathFunctions"
          :key="func.name"
          :value="`tab-${func.name}`"
        >
          <FuncVisualiser :func="func" />
        </VTabItem>
      </VTabs>
    </v-content>
  </v-app>
</template>

<script>
import FuncVisualiser from '@/components/funcVisualiser/index.vue';

import mathFunctions from '@/functions';
import MathFunction from '@/functions/class';

export default {
  name: 'App',

  components: {
    FuncVisualiser,
  },

  data() {
    return {
      tab: null,
    };
  },

  computed: {
    mathFunctions: () => mathFunctions,
  },

  mounted() {
    window.mathFunctions = mathFunctions;
    window.MathFunction = MathFunction;
  },
};
</script>
