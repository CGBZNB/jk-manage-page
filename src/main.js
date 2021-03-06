import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import '@/assets/css/inconfont.css'

Vue.config.productionTip = false


Vue.use(ElementUI, { size: 'medium', zIndex: 3000 });

import router from './router'
import store from './store';
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
