// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
// import LoginPage from './components/LoginPage.vue';
import Home from './components/views/HomePage.vue';
import Login from './components/views/LoginPage.vue';
// import App from './App.vue';

const routes = [
  { path: '/', name: 'Login', component: Login },
  { path: '/home', name: 'Home', component: Home },
  { path: '/page2', name: 'Page2', component: Home },
  { path: '/page3', name: 'Page3', component: Home },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
