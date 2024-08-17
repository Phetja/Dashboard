<template>
  <div id="chart" class="bg-light p-2 m-1">
    <apexchart
      type="treemap"
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
          data: [
            {
              x: 'line29',
              y: 3.11,
            },
            {
              x: 'line30',
              y: 3.6,
            },
            {
              x: 'line31',
              y: 5.6,
            },
            {
              x: 'line32',
              y: 5.27,
            },
            {
              x: 'line33',
              y: 6.57,
            },
            {
              x: 'line34',
              y: 2.81,
            },
            {
              x: 'line35',
              y: 3.83,
            },
            {
              x: 'line36',
              y: 3.04,
            },
            {
              x: 'line37',
              y: 4.35,
            },
            {
              x: 'line38',
              y: 4.55,
            },
            {
              x: 'line39',
              y: 3.51,
            },
          ],
        },
      ],
      chartOptions: {
        legend: {
          show: false,
        },
        chart: {
          height: 350,
          type: 'treemap',

          background: '#fff',
        },
        title: {
          text: 'Dipping Line Consumption (ton/hr)',
          align: 'left',
        },
        colors: [
          '#3B93A5',
          '#F7B844',
          '#ADD8C7',
          '#EC3C65',
          '#CDD7B6',
          '#C1F666',
          '#D43F97',
          '#1E5D8C',
          '#421243',
          '#7F94B0',
          '#EF6537',
          '#C0ADDB',
        ],
        plotOptions: {
          treemap: {
            distributed: true,
            enableShades: false,
          },
        },
      },
    };
  },
};
</script>
