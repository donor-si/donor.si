import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import App from './App.vue';
import router from './router';
import Flowbite from 'flowbite';
import aspectRatio from '@tailwindcss/aspect-ratio';

Vue.use(VueCompositionAPI);
Vue.use(Flowbite);
Vue.use(aspectRatio);

Vue.config.productionTip = process.env.NODE_ENV === 'development';

new Vue({
  name: 'App',
  router,
  render: h => h(App)
}).$mount('#app');
