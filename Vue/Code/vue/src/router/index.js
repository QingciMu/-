import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import hello from '@/components/hello'
import sysin from '@/components/sysin'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

    {
      path:'/hello',
      name:'hello',
      component:hello
    },

    {
      path:'/sysin',
      name:'sysin',
      component:sysin
    }
  ]
})
