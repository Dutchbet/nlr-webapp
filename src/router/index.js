import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import All from '../views/All.vue'
import Activities from '../views/Activities.vue'
import Planes from '../views/Plane.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Activities/:id',
    name: 'Plane',
    component: Planes
  },
  
  {
    path: '/Activities',
    name: 'Activities',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Activities.vue')
  },
  {
    path: '/All',
    name: "All",
    component: All

  }
]

const router = new VueRouter({
  routes
})

export default router
