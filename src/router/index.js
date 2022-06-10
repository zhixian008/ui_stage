import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/E_Index.vue'

Vue.use(VueRouter)

const routes = [

  // 后台系统路由
  {
    path: '/index',
    name: 'index',
    component: Index,
    redirect: "/index/container",
    children: [{
      path: "container",
      name: "container",
      component: () => import('../views/Container.vue'),
    }, {
      path: "form",
      name: "form",
      component: () => import('../views/Form.vue'),
    }, {
      path: "table",
      name: "table",
      component: () => import('../views/Table.vue'),
    }
    ]
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
