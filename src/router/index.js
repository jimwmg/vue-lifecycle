import Vue from 'vue'
import Router from 'vue-router'
import APP from '../App'
import HOME from '../components/home'
import MISTE from '../components/miste'
import ELE from '../components/ele'
Vue.use(Router)

const router =  new Router({
    routes:[{
        path:'/app',
        name:'app',
        component:APP,
        children:[
            {
              path:'/home',
              component:HOME
            },
            {
              path:'miste',
              component:MISTE,
              meta: { keepAlive: true },//这个组件会被缓存
            }
        ]
    },{
        path:'/ele',
        component:ELE
    }]
});

router.beforeEach((to,from,next)=>{
    console.log('to',to,'from',from)
    next()
})
export default router ;