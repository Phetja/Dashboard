<template>
  <div class="p-1">
    <apexchart
      width="400"
      type="bar"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    vulue: String,
    unit: String,
  },

  data() {
    return {
      chartOptions: {
        chart: {
          id: 'vuechart-example',
          background: '#cfd3d2',
        },

        colors: ['#51326d'],
        xaxis: {
          categories: [
            'Boiler A',
            'Boiler B',
            'Boiler C',
            'Boiler D',
            'Boiler E',
            'Boiler F',
          ],
        },
        plotOptions: {
          bar: {
            columnWidth: '45%',
            borderRadius: 0,
            dataLabels: {
              position: 'top', // top, center, bottom
            },
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val;
          },
          offsetY: -20,
          style: {
            fontSize: '12px',
            colors: ['#304758'],
          },
        },
        title: {
          text: this.title,
          align: 'center',

          floating: false,
          style: {
            fontSize: '16px',
            fontWeight: 'bold',
            fontFamily: undefined,
            color: '#263238',
          },
        },
        grid: {
          show: true,
          borderColor: '#90A4AE',
          strokeDashArray: 0,
          position: 'back',
          xaxis: {
            lines: {
              show: false,
            },
          },
          yaxis: {
            lines: {
              show: false,
            },
          },
        },
      },
      series: [
        {
          name: this.unit,
          data: this.vulue.split(','),
        },
      ],
    };
  },
};
</script>
