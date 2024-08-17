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
          name: 'Header Boiler',
          data: [
            6.2, 6.0, 5.9, 6.2, 6.3, 6.4, 6.5, 6.7, 6.5, 6.3, 6.2, 6.0, 5.8,
            5.7,
          ],
        },
        {
          name: 'Header TG1',
          data: [
            6.1, 5.9, 5.8, 6.1, 6.2, 6.3, 6.4, 6.6, 6.4, 6.2, 6.1, 5.9, 5.7,
            5.6,
          ],
        },
        {
          name: 'Main Stream TG2',
          data: [
            6.0, 5.8, 5.7, 6.0, 6.1, 6.2, 6.3, 6.5, 6.3, 6.1, 6.0, 5.8, 5.6,
            5.5,
          ],
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
          // width: [5, 7, 5],
          curve: 'smooth',
          // dashArray: [0, 8, 5],
        },
        title: {
          text: 'Pressure Main Steam',
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
        yaxis: {
          logBase: 10,
          lines: {
            show: false,
          },
        },
        xaxis: {
          labels: {
            show: true,
            rotate: -45,
            style: {
              colors: [],
              fontSize: '10px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 400,
              cssClass: 'apexcharts-xaxis-label',
            },
          },
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
                  return val + ' (mins)';
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
