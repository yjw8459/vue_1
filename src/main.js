import Vue from 'vue'
import App from './App.vue'
import router from './router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  router, //라우터 등록
  render: h => h(App),
}).$mount('#app') //앱 s마운트
