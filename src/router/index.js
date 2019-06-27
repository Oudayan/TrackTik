import Vue from 'vue'
import Router from 'vue-router'
import Sites from '@/components/Sites'
import SiteDetails from '@/components/SiteDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Sites',
      component: Sites
    },
    {
      path: '/site-details/',
      name: 'SiteDetails',
      component: SiteDetails,
      props: true
    }
  ]
})
