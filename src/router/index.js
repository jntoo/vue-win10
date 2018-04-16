/**
 * Created by JnToo on 2018/4/16.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
Vue.use(VueRouter)

const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
})
export default router