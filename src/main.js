// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import "./assets/less/tiles.less";
import VueExtend from './vue-extend'

import VueRouter from 'vue-router'
import router from './router'

Vue.use(VueExtend)
Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
    router,
  template: '<App/>'
})
