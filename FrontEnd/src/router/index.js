import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import custRoute from './customer';
import adminRoute from './admin';

var router =  new Router({
  routes: [
    ...custRoute,
    ...adminRoute
  ]
})

router.push('/')

export default router;
