<template>
	
	<div  class="container">
		<div class="title">
			{{article.title}}
		</div>
		<div class="author">
			<h3 style="margin-bottom: 5px;"><img src="../../../static/cnz.png" class="avatar"/>{{article.author}}</h3>
			<span>字数：2343423</span>
			<span>阅读：4645745</span>
			<span>评论：4645745</span>
			<span>喜欢：4645745</span>
		</div>
		<div v-html="article.content" class="content">
			
		</div>
		
		<div class="zan" @click="clickStar">
			<img src="../../../static/heart-r.png" alt="" /> 喜欢 | <span>{{article.stars}}</span>
		</div>
		<!--<div class="line"></div>-->
		<div class="comment">
			
			<el-input
			  type="textarea"
			  :rows="4"
			  placeholder="请输入内容"
			  v-model="textarea">
			</el-input>
			
			<div style="text-align: right;margin-top: 10px;">
				<el-button round @click="cancelHandler">取消</el-button>
				<el-button type="success" round  @click="sendHandler">发送</el-button>	
			</div>
			
			<div class="comment-item" v-for="(com,index) in comments">
				<div class="comment-item-user">
					<div>
						<img src="../../../build/logo.png" class="avatar"/>
					</div>
					<div style="padding-left: 5px;">
						<h3>{{com.author}}</h3>
						<p>{{index}}楼  <span>{{com.createtime}}</span></p>
					</div>
				</div>
				
				<div>
					{{com.content}}
				</div>
			</div>
			
			
			
		</div>
		
	</div>
</template>

<script>
	
	export default{
		data(){
			return{
				article:{},
				textarea:'',
				comments:[],
				isTapStar: false
			}
		},
		mounted(){
			var id = this.$route.query.id;
			console.log(id)
			this.$store.dispatch('getArticleByID',{id:id})
			.then( (res) => {
				console.log(res)
				this.article = res.data
			})
			
			this.$store.dispatch('getComment',{articleId:id})
				.then( (res) => {
					console.log(res)
					this.comments = res.data
				})
			
			
		},
		methods:{
			clickStar(){
				console.log('star')
				if(!this.isTapStar){
					this.isTapStar = true;
					var id = this.$route.query.id;
					this.$store.dispatch('addStar',{articleId:id,stars:this.article.stars})
					.then( res => {
						console.log(res)
						this.article = res.data;
					})
				}
				
			},
			cancelHandler(){
				
			},
			sendHandler(){
				this.$store.dispatch('addComment',{
					articleId:this.article._id,
					author:'Davie',
					content:this.textarea
				})
				.then( res => {
					console.log(res)
					this.comments = res.data;
					
					this.textarea = ''
				})
			}
			 
		}
	}
</script>

<style>
	
	.container{
		width: 700px;
		margin: 0 auto;
		text-align: left;
		background-color: #fff;
		color: #000;
		padding: 50px;
	}
	.title{
		font-size: 36px;
		font-weight: 800;
	}
	h3{
		padding: 0;
		margin: 0;
	}
	.author{
		font-size: 12px;
		margin-top: 20px;
		color: #666;
	}
	.author h3{
		color: #333;
		
	}
	.content{
		margin-top: 50px;
		font-size: 16px;
	}
	.avatar{
		width: 30px;
		height: 30px;
		border: solid 1px #999;
		border-radius: 20px;
		padding: 5px;
	}
	
	.comment{
		/*margin-top: 100px;*/
		/*padding-top: 50px;*/
		/*border-top: solid 1px #aaa;*/
	}
	.line{
		width: 500px;height: 0px;
		border-top: solid 1px #eee;
		margin: 50px auto;
		
	}
	
	.zan{
		margin: 50px auto;
		width: 150px;
		height: 50px;
		border: solid 1px #ea6f5a;
		border-radius: 30px;
		text-align: center;
		line-height: 50px;
		font-size: 18px;
		color: #888;
		font-weight: 800;
		cursor: pointer;
		-moz-user-select: none;
		-webkit-user-select: none;
	}
	
	.zan img{
		width: 25px;
		vertical-align: middle;
	}
	.comment-item{
		border-bottom: solid 1px #eee;
		padding: 20px 0;
	}
	
	.comment-item-user{
		height: 45px;
	}
	.comment-item-user div{
		float: left;
		
	}
	.comment-item-user div p{
		padding: 0 5px;
		margin: 0;
		/*padding-left: 5px;*/
	}

</style>