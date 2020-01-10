import Vue from 'vue'
import Router from 'vue-router'
import Films from '@/views/Films.vue'
import Login from '@/views/Login.vue'
import Favorites from '@/views/Favorites.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Filmes',
      component: Films
    },
    {
      path: '/favoritos',
      name: 'Favorites',
      component: Favorites
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
