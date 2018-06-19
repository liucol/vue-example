import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'  //首页

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',  // /stat/v1/sansheng/2/home
      name: 'index',
      component: Index
    }
  ]
})
