
import Admin from '@/components/admin/Admin'
import ArticleManage from '@/components/admin/articleManage'
import ClassifyManage from '@/components/admin/classifyManage'
import CreateArticle from '@/components/admin/createArticle'
import EditArticle from '@/components/admin/editArticle'

import Regist from '@/components/admin/regist'
import Login from '@/components/admin/login'



export default [

	{
      path: '/admin',
      name: 'admin',
      component: Admin,
      children:[
      
      	{
      		path:'/admin/article-manage',
      		component:ArticleManage
      	},
      	{
      		path:'/admin/classify-manage',
      		component:ClassifyManage
      	},
      	{
      		path:'/admin/createArticle',
      		component:CreateArticle
      	},
      	{
      		path:'/admin/editArticle',
      		component:EditArticle
      	}
      ]
   },
   {
   	path:'/regist',
   	component:Regist
   },
   {
   	path:'/login',
   	component:Login
   }


]
