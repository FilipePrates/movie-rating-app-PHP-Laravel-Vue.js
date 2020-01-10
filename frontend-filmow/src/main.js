import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'
import './css/animation.css'
import './css/main.css'


window.axios = require('axios');
window.axios.defaults.headers.common['Accept'] = 'application/json';
window.axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + Vue.auth.getToken();
window.axios.defaults.baseURL = 'http://localhost/app';


Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
