import Vue from 'vue'
import Router from 'vue-router'
import Store from '@/store/index.js'
import Films from '@/views/Films.vue'
import Login from '@/views/Login.vue'
import Profile from '@/views/Profile.vue'
import CreateAccount from '@/views/CreateAccount.vue'
import Favorites from '@/views/Favorites.vue'


Vue.use(Router)

let router =  new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Filmes',
      component: Films
    },
    {
      path: '/create-account',
      name: 'CreateAccount',
      component: CreateAccount
    },
    {
      path: '/favoritos',
      name: 'Favorites',
      component: Favorites
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

router.beforeEach((to,from,next)=>{
  console.log(Object.keys(Store.getters.user).length)
  // Object.keys(Store.getters.user).length != 0
  if(Object.keys(Store.getters.user).length == 0 && to.path !== '/login'){
    next('/login')
  }else{
    next()
  }
})

export default router;
