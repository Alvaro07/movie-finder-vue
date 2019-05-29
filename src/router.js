import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Search from './views/Search.vue'
import Title from './views/Title.vue'

Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'nav__item__link--active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/search/:type',
      name: 'search',
      component: Search
    },
    {
      path: '/title/:name',
      name: 'title',
      component: Title
    }
  ]
})
