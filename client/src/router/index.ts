import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import(/* webpackChunkName: "home" */ '../views/Users.vue')
  },
  {
    path: '/ui',
    name: 'Ui',
    component: () => import(/* webpackChunkName: "home" */ '../views/UI.vue')
  },
  {
    path: '/tables',
    name: 'Tables',
    component: () => import(/* webpackChunkName: "home" */ '../views/Tables.vue')
  },
  {
    path: '/forms',
    name: 'Forms',
    component: () => import(/* webpackChunkName: "home" */ '../views/Forms.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "home" */ '../views/Auth/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "home" */ '../views/Auth/Register.vue')
  },
  {
    path: '/modals',
    name: 'Modals',
    component: () => import(/* webpackChunkName: "home" */ '../views/Modals.vue')
  },
  {
    path: '/errors',
    name: 'Errors',
    component: () => import(/* webpackChunkName: "home" */ '../views/Errors.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "not-found" */ '../views/NotFound.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
