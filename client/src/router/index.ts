import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import(/* webpackChunkName: "home" */ '../views/Users.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/ui',
    name: 'Ui',
    component: () => import(/* webpackChunkName: "home" */ '../views/UI.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/tables',
    name: 'Tables',
    component: () => import(/* webpackChunkName: "home" */ '../views/Tables.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/forms',
    name: 'Forms',
    component: () => import(/* webpackChunkName: "home" */ '../views/Forms.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/modals',
    name: 'Modals',
    component: () => import(/* webpackChunkName: "home" */ '../views/Modals.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/errors',
    name: 'Errors',
    component: () => import(/* webpackChunkName: "home" */ '../views/Errors.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "home" */ '../views/Auth/Login.vue'),
    meta: { requiresUnauth: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "home" */ '../views/Auth/Register.vue'),
    meta: { requiresUnauth: true }
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

router.beforeEach(async (to, _from, next) => {
  const token = document.cookie.split('=')[0] === 'token'
  if (!token && to.meta.requiresAuth) {
    // Kullanıcı giriş yapmamışsa ve giriş yapılması gereken bir sayfaya erişmeye çalışıyorsa
    next('/login')
  } else if (token && to.meta.requiresUnauth) {
    // Kullanıcı giriş yapmışsa ve giriş yapılmaması gereken bir sayfaya erişmeye çalışıyorsa
    next('/')
  } else {
    // Diğer durumlarda normal şekilde devam et
    next()
  }
})

export default router
