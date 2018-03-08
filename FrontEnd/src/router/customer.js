
import Index from '@/components/customer/Index';
import Home from '@/components/customer/Home';
import Classify from '@/components/customer/Classify';
import About from '@/components/customer/About';
import Article from '@/components/customer/Article';



export default [
	{
      path: '/',
      name: 'Index',
      component: Index,
      children:[
      {
	      path: '/home',
	      name: 'Home',
	      component: Home
	   },
	   {
	      path: '/classify',
	      name: 'classify',
	      component: Classify
	   },
	   {
	      path: '/about',
	      name: 'about',
	      component: About
	   },
	   {
	      path: '/article',
	      name: 'article',
	      component: Article
	    }
      ]
   },
   
]
