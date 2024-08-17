import { createApp } from 'vue';
import App from './App';
import './index.css';
import VueApexCharts from 'vue3-apexcharts';
import CanvasJSChart from '@canvasjs/vue-charts';
import VueGauge from 'vue-gauge';
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS

import router from './router';

const app = createApp(App);
app.use(CanvasJSChart); // install the CanvasJS Vuejs Chart Plugin
app.use(VueApexCharts);
app.use(VueGauge);
app.use(router);
app.use(bootstrap);

app.mount('#app');
