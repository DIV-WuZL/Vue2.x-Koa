import Vue from 'vue'
import Router from 'vue-router'
import Shopping from '@/components/pages/Shopping'
import Register from '@/components/pages/Register'
import Login from '@/components/pages/Login'
import Goods from '@/components/pages/Goods'
import CategoryList from '@/components/pages/CategoryList'
import Cart from '@/components/pages/Cart'
import Main from '@/components/pages/Main'
import Member from '@/components/pages/Member'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/Main', name: 'Main', component: Main,
      children: [
        {path: '/',name: 'Shopping',component: Shopping},
        {path: '/CategoryList',name: 'CategoryList',component: CategoryList},
        {path: '/Cart',name: 'Cart',component: Cart},
        {path: '/Member',name: 'Member',component: Member},
      ]},
    {path: '/Register',name: 'Register',component: Register},
    {path: '/Login',name: 'Login',component: Login},
    {path: '/Goods',name: 'Goods',component: Goods},
  ]
})
