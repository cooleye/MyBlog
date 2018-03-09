import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    classifies:[]
  },
  mutations: {
   	 saveClass(state,params){
   	 	state.classifies = params.data
   	 }
  },
  actions: {
    getClassify({commit}){
    		return axios.get('http://localhost:3000/classify')
    },
    addClass({commit,state},params){
    		return axios.get('http://localhost:3000/addClass?clazz=' + params.clazz)
    },
    delClass({commit,state},params){
    		return axios.get('http://localhost:3000/delClass?id=' + params.id)
    },
    publishArticle({commit,state},params){
    		return axios.post('http://localhost:3000/publish',params)
    },
    getArticles({commit,state},params){
    		return axios.get('http://localhost:3000/articles')
    },
    delArticle({commit,state},params){
    		return axios.get('http://localhost:3000/delarticle?id='+params.id)
    },
    getArticleByID({commit,state},params){
    		return axios.get('http://localhost:3000/article?id='+params.id)
    },
    getArticlesByClass({commit,state},params){
    		return axios.get('http://localhost:3000/articles_condition?classify='+params.classify)
    },
    getComment({commit,state},params){
    		return axios.get('http://localhost:3000/getcomment?articleId='+params.articleId)
    },
    addComment({commit,state},params){
    		return axios.post('http://localhost:3000/addcomment',params)
    },
    addStar({commit,state},params){
    		return axios.post('http://localhost:3000/addstar',params )
    },
    regist({commit,state},params){
    		return axios.post('http://localhost:3000/regist',params )
    },
    login({commit,state},params){
    		return axios.post('http://localhost:3000/login',params )
    }
    
    
  },
  getters: {}
})

