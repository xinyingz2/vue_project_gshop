/*
路由器对象模块  
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'
//声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  //所有路由
  routes: [
    {
      path: '/msite',
      component: Msite,
      meta: {
        showFooter: true //显示FooterGuide
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true //显示FooterGuide
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true //显示FooterGuide
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true //显示FooterGuide
      }
    },
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/login',
      component: Login,
      meta: { //可以不写 meta.showFooter为undefined
        showFooter: false //不显示FooterGuide
      }
    }
  ]
})


