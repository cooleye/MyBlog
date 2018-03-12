import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import custRoute from './customer';
import adminRoute from './admin';

import Cookies from 'js-cookie';


var router =  new Router({
  routes: [
    ...custRoute,
    ...adminRoute
  ]
})


//router.beforeEach((to, from, next) => {
// var token = Cookies.get('token');
//// console.log('token:',token)
// if(token){
// 	 next()
// }else{
// 	next({ path: '/login' })
// }
//})


router.push('/')

export default router;
