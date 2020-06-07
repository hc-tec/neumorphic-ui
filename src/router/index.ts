import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: () => import('../single_test.vue'),
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
