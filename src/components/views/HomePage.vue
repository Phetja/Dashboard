<template>
  <div class="flex h-screen">
    <SideBarComponent
      @toggleSidebar="toggleSidebar"
      :isCollapsed="isCollapsed"
    />
    <div class="flex-1 flex flex-col">
      <HeaderComponent />
      <main
        class="p-6 flex-1 pt-8 flex items-start justify-center bg-slate-700 dark:bg-white overflow-auto"
      >
        <div class="md:container md:mx-auto">
          <!-- ColumnChart -->
          <div class="flex flex-row flex-wrap">
            <ColumnChart
              class="basis-1/3"
              title="Steam Flow rate (ton/day)"
              vulue="214,355,204,487,549,582"
              unit="ton/day"
            />
            <ColumnChart
              class="basis-1/3"
              title="Steam Flow rate (ton/hr)"
              vulue="8.9, 14.0, 8.5, 20.3, 22.9, 24.3"
              unit="ton/hr"
            />
            <ColumnChart
              class="basis-1/3"
              title="Prime Energy (Kg/ton)"
              vulue="338, 281, 339, 290, 280, 286"
              unit="Kg/ton"
            />
          </div>
          <!-- LineChart -->
          <div class="flex flex-row flex-wrap w-100">
            <div class="w-50">
              <LineChart />
            </div>
            <div class="w-50">
              <LineChartDashed3Line />
            </div>
          </div>
          <div class="flex flex-row flex-wrap w-100">
            <div class="w-100">
              <LineChartDashed />
            </div>
          </div>

          <!-- GaugeChart -->
          <div class="flex flex-row flex-wrap">
            <GaugeChart title="Pressure Drum A (barg)" value="6.7" />
            <GaugeChart title="Pressure Drum A (barg)" value="6.7" />
            <GaugeChart title="Pressure Drum A (barg)" value="6.7" />
            <GaugeChart title="Pressure Drum A (barg)" value="6.7" />
            <GaugeChart title="Pressure Drum A (barg)" value="6.7" />
          </div>

          <div class="flex flex-row flex-wrap">
            <div class="w-100">
              <TableComponent />
            </div>
          </div>
          <!-- TreemapChart -->
          <div class="flex flex-row flex-wrap">
            <div class="w-50">
              <TreemapChart />
            </div>
            <div class="w-50">
              <BarChart />
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import SideBarComponent from '../SideBar.vue';
import HeaderComponent from '../Header.vue';
import TableComponent from '../Table.vue';
import ColumnChart from '../Chart/ColumnChart.vue';
import GaugeChart from '../Chart/GaugeChart.vue';
import LineChart from '../Chart/LineChart.vue';
import TreemapChart from '../Chart/TreemapChart.vue';
import LineChartDashed from '../Chart/LineChartDashed.vue';
import LineChartDashed3Line from '../Chart/LineChartDashed3Line.vue';
import BarChart from '../Chart/BarChart.vue';

export default {
  components: {
    SideBarComponent,
    HeaderComponent,
    ColumnChart,
    GaugeChart,
    LineChart,
    TreemapChart,
    LineChartDashed,
    LineChartDashed3Line,
    BarChart,
    TableComponent,
  },
  data() {
    return {
      isCollapsed: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed;
    },
  },
};
</script>
