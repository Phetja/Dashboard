<template>
  <div id="app">
    <DashboardHeader title="My Dashboard" />
    <!-- <main> -->
    <div class="md:container md:mx-auto px-2">
      <div class="flex flex-row flex-wrap">
        <!-- <div class="basis-1/4"><TonPerDay /></div> -->
        <TestChart
          class="basis-1/3"
          title="Steam Flow rate (ton/day)"
          vulue="214,355,204,487,549,582"
        />
        <div class="basis-1/3"><TonPerHour /></div>
        <div class="basis-1/3"><KgPerTon /></div>
      </div>

      <div class="flex flex-row flex-wrap">
        <div class="basis-1/5">
          <TestGauge title="Pressure Drum A (barg)" value="6.7" />
        </div>
        <div class="basis-1/5">
          <TestGauge title="Pressure Drum A (barg)" value="6.7" />
        </div>
        <div class="basis-1/5">
          <TestGauge title="Pressure Drum A (barg)" value="6.7" />
        </div>
        <div class="basis-1/5">
          <TestGauge title="Pressure Drum A (barg)" value="6.7" />
        </div>
        <div class="basis-1/5">
          <TestGauge title="Pressure Drum A (barg)" value="6.7" />
        </div>
      </div>

      <div class="flex flex-row flex-wrap">
        <div class="basis-1/2">
          <TestTreemap />
        </div>
        <div class="basis-1/2">
          <BarChart />
        </div>
      </div>
    </div>
  </div>
  <!-- </main> -->
</template>

<script>
export default {
  name: 'MyDashboard',
};
import BarChart from './components/BarChart.vue';
import KgPerTon from './components/ColumnChart/KgPerTon.vue';
import TestChart from './components/ColumnChart/TestChart.vue';
// import TonPerDay from './components/ColumnChart/TonPerDay.vue';
import TonPerHour from './components/ColumnChart/TonPerHour.vue';
import DashboardHeader from './components/DashboardHeader.vue';
import TestGauge from './components/TestGauge.vue';
import TestTreemap from './components/TestTreemap.vue';
</script>

<style></style>
