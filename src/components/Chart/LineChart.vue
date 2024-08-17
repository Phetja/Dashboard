<template>
  <div id="chart" class="bg-light p-1 m-1">
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
  data: function () {
    return {
      series: [
        {
          name: 'Supply',
          data: [
            55.0, 56.0, 58.0, 60.0, 59.0, 58.0, 57.0, 58.0, 56.0, 55.0, 56.0,
          ],
        },
        {
          name: 'Demand',
          data: [
            50.0, 51.0, 52.0, 51.0, 56.0, 50.0, 51.0, 49.0, 54.0, 51.0, 50.0,
          ],
        },
      ],
      chartOptions: {
        chart: {
          background: '#cfd3d2',
          height: 300,
          width: '100%',
          type: 'line',
          dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2,
          },
          // zoom: {
          //   enabled: false,
          // },
          toolbar: {
            show: false,
          },
        },
        colors: ['#51326d', '#545454'],
        // dataLabels: {
        //   enabled: true,
        // },
        stroke: {
          curve: 'smooth',
        },
        title: {
          text: 'Steam Total(Supply/Demand)',
          align: 'left',
        },
        grid: {
          borderColor: '#e7e7e7',
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        markers: {
          size: [4, 4],
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
            '9 Jan 09.00',
            '9 Jan 09.00',
            '9 Jan 09.00',
            '9 Jan 09.00',
            '9 Jan 09.00',
            '9 Jan 09.00',
            '9 Jan 09.00',
            '9 Jan 09.00',
            '9 Jan 09.00',
            '9 Jan 09.00',
            '9 Jan 09.00',
          ],
        },

        legend: {
          position: 'bottom',
          horizontalAlign: 'center',
          // floating: true,
          // offsetY: -25,
          // offsetX: -5,
        },
      },
    };
  },
};
</script>
