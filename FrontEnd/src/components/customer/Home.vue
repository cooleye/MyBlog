<template>
	
	
	<div class="container" >
		<div v-loading="loading" class="loading" v-show="loading"></div>
		
		
		<div class="banner">
			<img src="../../../static/banner.jpg"/>
		</div>
		
		<div class="classify-list">
			<el-button v-for="cla in classifies" @click="classifyHandler(cla)">
				{{ cla.classify }}
			</el-button>
			<!--<div class="classify-tag" >
				
			</div>-->
		</div>
		
		<div class="line"></div>
		<div class="row"  v-for="art in articles">
			<router-link  :to="'article?id='+art._id">
				<div class="article-title">
					<div class="author">
						 <img src="../../../build/logo.png" alt="" /> 
						 <span class="author-name">{{art.author}}</span>
						 <span class="author-time">{{art.createdtime}}</span>
					</div>
					<h2>{{ art.title}}</h2>
					<p class="summary" v-html="art.content.substring(100,10)"></p>
					<div>
						<span class="classify">{{art.classify}}</span>
						<span><i class="el-icon-edit"></i>{{art.author}} | </span>  
					  	<span><i class="el-icon-view"></i> {{art.views}} | </span>  
					  	<span><i class="el-icon-star-off"></i>{{art.stars}}</span>
					</div>
				</div>	
			</router-link>
		</div>
	</div>

</template>

<script>
	export default{
		name:'home',
		data(){
			return{
				articles:[],
				loading:false,
				classifies:[]
			}
			
		},
		filters:{
			summary(ele){
				return ele.substring(0,100)
			}
		},
		mounted(){
			
			this.loading =true;
			this.$store.dispatch('getArticles')
			.then((res) => {
				setTimeout( () => {
					this.articles = res.data
					this.loading = false;
				},500 )
			})
			
			this.$store.dispatch('getClassify')
			.then( res => {
//				console.log(res)
				this.classifies = res.data
			})
			
		},
		methods:{
			classifyHandler(cla){
				console.log(cla)
				this.loading = true;
				this.$store.dispatch('getArticlesByClass',cla)
				.then( res => {
					setTimeout( () => {
						console.log(res)
						this.articles = res.data
						this.loading = false;
					},500 )
				})
			}
		}
	}
</script>

<style scoped="scoped">
.container{
	width: 700px;
	margin: 0 auto;
	padding-top: 20px;
	padding-left: 20px;
}
.row{
	margin-top: 5px;
	width: 100%;
	height: 100%;
	border-bottom: solid 1px #eee;
	padding-top: 20px;
	text-align: left;
	padding-bottom: 10px;
}
.row a{
	display: block;
	width: 100%;
	height: 100%;
	color: #000000;
}

.row .article-title h2{
	color: #666;
}
.row .readmore{
	flex: 1;
}
.classify{
	padding: 0 5px;
	border: salmon solid 1px;
	border-radius: 3px;
	text-align: center;
	line-break: 20px;
	line-height: 15px;
	color: salmon;
}

.classify img{
	height: 15px;
	vertical-align: middle;
}

.author{
	height: 40px;
	line-height: 40px;
}
.author .author-name{
	font-size: 16px;
	margin-left: 10px;
	font-weight: 800;
}
.author .author-time{
	font-size: 12px;
	color: #999;
	margin-left: 10px;
}
.author img{
	width: 40px;
	border: solid 1px #ccc;
	border-radius: 100%;
	float: left;
}

.loading{
	width: 100%;height: 100%;
	position: absolute;
	left: 0;
	top: 50px;
}

.el-button{
	margin: 10px 20px;
}

.line{
	width: 100%;
	height: 0;
	border-top: solid 1px #eee;
}

.summary{
	width: 100%;
	font-size: 14px;
	text-overflow: ellipsis;
	white-space:nowrap; 
	overflow:hidden;
	max-height: 50px;
}

.classify-list{
	text-align: left;
	margin-top: 0px;
	padding: 20px 20px;
}

.banner{
	width: 700px;
	margin-bottom: 0;
	line-height: 0;
}
.banner img{
	width: 100%;
	border-radius: 5px;
}
</style>