import Vue from 'vue'
import Router from 'vue-router'
import APP from '../App'
import HOME from '../components/home'
import MISTE from '../components/miste'
Vue.use(Router)
export default new Router({
    routes:[{
        path:'/',
        component:APP,
        children:[
            {
              path:'/home',
              component:HOME
            },
            {
              path:'/miste',
              component:MISTE,
              meta: { keepAlive: true },//这个组件会被缓存
            }
        ]
    }]
});
