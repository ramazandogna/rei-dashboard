import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    meta: { requiresUnauth: true }
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import(/* webpackChunkName: "home" */ '../views/Users.vue'),
    meta: { requiresUnauth: true }
  },
  {
    path: '/ui',
    name: 'Ui',
    component: () => import(/* webpackChunkName: "home" */ '../views/UI.vue'),
    meta: { requiresUnauth: true }
  },
  {
    path: '/tables',
    name: 'Tables',
    component: () => import(/* webpackChunkName: "home" */ '../views/Tables.vue'),
    meta: { requiresUnauth: true }
  },
  {
    path: '/forms',
    name: 'Forms',
    component: () => import(/* webpackChunkName: "home" */ '../views/Forms.vue'),
    meta: { requiresUnauth: true }
  },
  {
    path: '/modals',
    name: 'Modals',
    component: () => import(/* webpackChunkName: "home" */ '../views/Modals.vue'),
    meta: { requiresUnauth: true }
  },
  {
    path: '/errors',
    name: 'Errors',
    component: () => import(/* webpackChunkName: "home" */ '../views/Errors.vue'),
    meta: { requiresUnauth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "home" */ '../views/Auth/Login.vue'),

    meta: { requiresAuth: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "home" */ '../views/Auth/Register.vue'),
    meta: { requiresAuth: true }
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

router.beforeEach((to, _from, next) => {
  if (to.meta.requiresAuth && !localStorage.getItem('token')) {
    next('/')
  } else if (to.meta.requiresUnauth && localStorage.getItem('token')) {
    next('/login')
  } else {
    next()
  }
})

export default router
