
import Admin from '@/components/admin/Admin'
import ArticleManage from '@/components/admin/articleManage'
import ClassifyManage from '@/components/admin/classifyManage'
import CreateArticle from '@/components/admin/createArticle'
import EditArticle from '@/components/admin/editArticle'
import ProfileManage from '@/components/admin/profile'
import CommentManage from '@/components/admin/commentManage'


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
      	},
      	{
      		path:'/admin/profile',
      		component:ProfileManage
      	},
      	{
      		path:'/admin/comment',
      		component:CommentManage
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
