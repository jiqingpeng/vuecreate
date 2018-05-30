import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/view/Home'
import Detail from '@/view/Detail'
import User from '@/view/User'
import Detailchild from '@/view/Detailchild'
import Detailfoo from '@/view/Detailfoo'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Detail/id',
      name: 'Detail',
      component: Detail,
      children:[{
        path: '',
        name: 'Detailchild',
        component: Detailchild,
      },
      {
        path: 'Detailfoo',
        name: 'Detailfoo',
        component: Detailfoo,
      },
      ]
    },
    {
      path: '/User',
      name: 'User',
      component: User
    }
  ]
})
