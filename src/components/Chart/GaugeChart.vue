<template>
  <div class="bg-light p-2 m-1">
    <p>
      <small>{{ title }}</small>
    </p>
    <div>
      <vue-gauge
        :refid="'_' + Math.random().toString(36).substr(2, 9)"
        :options="chartOptions"
      >
      </vue-gauge>
    </div>
  </div>
</template>

<script>
import VueGauge from 'vue-gauge';
export default {
  components: { VueGauge },
  props: {
    title: String,
    value: String,
  },
  data() {
    return {
      chartOptions: {
        needleValue: this.value * 10,
        centralLabel: this.value,
        needleColor: '#410082',
        arcDelimiters: [50, 55, 70, 75],
        arcColors: ['#e35551', '#edc23f', '#4ca354', '#a3df32', '#f5d439'],
        arcOverEffect: true,
        chartWidth: 200,
        rangeLabel: ['0', '10'],
        hasNeedle: true,
      },
    };
  },
};
</script>
