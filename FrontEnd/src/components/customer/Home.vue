<template>
	
	<div class="container">
		<div class="row"  v-for="art in articles">
			<router-link  :to="'article?id='+art._id">
				<div class="article-title">
					<h2>{{ art.title}}</h2>
					<p v-html="art.content.substring(100,20)"></p>
					<div class="classify">
					  <img src="../../../static/tag.png"/>	{{art.classify}}
					</div>
					 
					<div class="author">
						<img src="../../../static/people.png"/>{{art.author}}
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
				articles:[]
			}
			
		},
		filters:{
			summary(ele){
				return ele.substring(0,100)
			}
		},
		mounted(){
			
			this.$store.dispatch('getArticles')
			.then((res) => {
				console.log(res)
				this.articles = res.data
			})
			
		}
	}
</script>

<style scoped="scoped">
.container{
	width: 800px;
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
	width: 50px;
	height: 20px;
	padding: 3px;
	background-color: #ddd;
	border-radius: 1px;
	text-align: center;
	line-break: 20px;
}

.classify img{
	height: 15px;
	vertical-align: middle;
}

.author{
	margin-top: 10px;
	
}
.author img{
	width: 15px;
}
</style>