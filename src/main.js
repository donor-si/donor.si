import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { initFlowbite } from 'flowbite';
import aspectRatio from '@tailwindcss/aspect-ratio';

initFlowbite();
Vue.use(aspectRatio);

Vue.config.productionTip = process.env.NODE_ENV === 'development';

new Vue({
  name: 'App',
  router,
  render: h => h(App)
}).$mount('#app');
