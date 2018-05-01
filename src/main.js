// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import "./assets/less/tiles.less";
import VueExtend from './vue-extend'
import router from './router'
import axios from 'axios'
import Qs from 'qs'
import VueAxios from 'vue-axios'

Vue.use(VueExtend)
Vue.config.productionTip = false

axios.defaults.baseURL = win10Config.baseUrl;
axios.defaults.headers = {'X-REQUESTED-WITH':'xmlhttprequest'};
axios.defaults.withCredentials = true;
var axios_instance = axios.create({
    baseURL:win10Config.baseUrl,
    transformRequest: [function (data) {
        data = Qs.stringify(data);
        return data;
    }],
    headers:{'Content-Type':'application/x-www-form-urlencoded'},
    withCredentials:true
})
Vue.use(VueAxios, axios_instance)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
    router,
  template: '<App/>'
})
