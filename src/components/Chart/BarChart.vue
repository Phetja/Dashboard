<template>
  <div id="chart">
    <apexchart
      type="bar"
      height="350"
      width="100%"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      series: [
        {
          data: [79.92, 130, 88, 96, 140, 150, 120, 79, 103, 110, 155],
        },
      ],
      chartOptions: {
        chart: { background: '#fff', type: 'bar', height: 350 },
        plotOptions: {
          bar: {
            borderRadius: 4,
            borderRadiusApplication: 'end',
            horizontal: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        title: {
          text: 'Dipping Line Consumption (ton/Mpcs)',
          align: 'left',
        },
        xaxis: {
          categories: [
            'Line 29',
            'Line 30',
            'Line 31',
            'Line 32',
            'Line 33',
            'Line 34',
            'Line 35',
            'Line 36',
            'Line 37',
            'Line 38',
            'Line 39',
          ],
        },
      },
    };
  },
};
</script>
