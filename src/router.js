import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Films from './views/Films.vue'
import Series from './views/Series.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/films',
      name: 'films',
      component: Films
    },
    {
      path: '/series',
      name: 'series',
      component: Series
    }
  ]
})
