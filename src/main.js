// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import "./assets/less/tiles.less";
import VueExtend from './vue-extend'
import router from './router'
import axios from 'axios'

Vue.use(VueExtend)
Vue.config.productionTip = false

axios.defaults.baseURL = win10Config.baseUrl;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
    router,
  template: '<App/>'
})
