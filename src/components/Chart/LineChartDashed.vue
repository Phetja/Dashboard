<template>
  <div class="p-1 bg-light m-1">
    <apexchart
      type="line"
      height="350"
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
      series: [
        {
          name: 'Steam Consumtion (ton/day)',
          data: [130, 102, 105, 103, 108, 107, 103, 101, 103, 101],
        },
      ],
      chartOptions: {
        chart: {
          background: '#cfd3d2',
          height: 350,
          width: '100%',
          type: 'line',
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: [5, 7, 5],
          curve: 'smooth',
          dashArray: [8],
          colors: '#51326d',
        },
        title: {
          text: 'Steam Consumtion (ton/day)',
          align: 'center',
        },
        legend: {
          tooltipHoverFormatter: function (val, opts) {
            return (
              val +
              ' - <strong>' +
              opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
              '</strong>'
            );
          },
        },
        markers: {
          size: 0,
          hover: {
            sizeOffset: 6,
          },
        },
        xaxis: {
          labels: { show: true, rotate: 45 },
          categories: [
            '01/01/2024',
            '01/01/2024',
            '01/01/2024',
            '01/01/2024',
            '01/01/2024',
            '01/01/2024',
            '01/01/2024',
            '01/01/2024',
            '01/01/2024',
            '01/01/2024',
          ],
        },
        tooltip: {
          y: [
            {
              title: {
                formatter: function (val) {
                  return val;
                },
              },
            },
            {
              title: {
                formatter: function (val) {
                  return val + ' per session';
                },
              },
            },
            {
              title: {
                formatter: function (val) {
                  return val;
                },
              },
            },
          ],
        },
        grid: {
          borderColor: '#f1f1f1',
        },
      },
    };
  },
};
</script>
