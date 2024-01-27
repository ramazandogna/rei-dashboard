import VueRouter from 'vue-router'
import App from "../views/App.vue"



const routes = [
    {
    path: '/', 
    name: "Home",
    component:  () => import(/* webpackChunkName: "home" */ '../views/App.vue')
    },
    { path: '/about', component: App },
  ]
  
  // 3. Create the router instance and pass the `routes` option
  // You can pass in additional options here, but let's
  // keep it simple for now.
  const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
  })

export default router
