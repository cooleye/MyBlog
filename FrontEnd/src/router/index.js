import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import custRoute from './customer';
import adminRoute from './admin';

export default new Router({
  routes: [
    ...custRoute,
    ...adminRoute
  ]
})
