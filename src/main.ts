import Vue from 'vue';
import App from './App.vue';
import router from './router';
// 全局导入 css 配置
import './components/neumorphic/utils/css/global.css';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
