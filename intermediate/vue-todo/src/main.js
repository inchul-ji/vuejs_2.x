import Vue from 'vue';
import App from './App.vue';
import { store } from '@/store/store';

Vue.config.productionTip = false;

console.log('test');

new Vue({
  render: h => h(App),
  store,
}).$mount('#app');
