import Vue from 'vue';
import App from './App.vue';
import router from './router';
// 全局导入 css 配置
import '../packages/utils/css/global.css';
import neumorphic from '../packages/index';

Vue.use(neumorphic);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
