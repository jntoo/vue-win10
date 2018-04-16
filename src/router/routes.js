/**
 * Created by JnToo on 2018/4/16.
 */
import Home from '../win10.vue'
import Login from '../template/login.vue'
const routes = [
    {
        path:'/',
        name:'Win10',
        component:Home
    },
    {
        path:'/login',
        name:'Login',
        component:Login
    }
]

export default routes