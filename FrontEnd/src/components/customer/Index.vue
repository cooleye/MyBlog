<template>
	<div>

		<div class="header">
			<div>
				<div class="logo">
					<img src="../../../static/bird.png" />
				</div>
				<div style="float: left;margin-left: 10px;">
					<h2> BeautyBlog </h2>
				</div>
				<ul class="nav">
					<li>
						<router-link to="/" @click="tohome">首页</router-link>
					</li>
					<li>
						<el-input type="text" size="small" class="search" suffix-icon="el-icon-search" v-model="searchval"></el-input>

					</li>
				
				</ul>
				
				<div class="write-article">
					<el-button round icon="el-icon-edit" size="medium" @click="writeArticle">写文章</el-button>
				</div>
				
				<div class="user">
					<el-dropdown  trigger="hover">
					  <span class="el-dropdown-link" style="color: #fff;font-size: 16px;">
					    <img src="../../../build/logo.png" class="avatar" alt="" />
					    <i class="el-icon-arrow-down el-icon--right"></i>
					  </span>
					  <el-dropdown-menu slot="dropdown">
					    <el-dropdown-item><i class="el-icon-menu"></i> 我的主页</el-dropdown-item>
					    <el-dropdown-item><i class="el-icon-document"></i> 收藏文章</el-dropdown-item>
					    <el-dropdown-item><i class="el-icon-setting"></i> 设置</el-dropdown-item>
					    <el-dropdown-item><i class="el-icon-back"></i> 退出</el-dropdown-item>
					  </el-dropdown-menu>
					</el-dropdown>
				</div>
				
				
			</div>
		</div>

		<div class="main">
			<router-view style="margin-top: 50px;"></router-view>
		</div>

		<footer>
			<div>
				<h4> created by davie kong </h4>
			</div>

		</footer>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				searchval: ''
			}
		},
		methods:{
			tohome(){
				this.$router.push('/')	
			},
			writeArticle(){
				this.$router.push('/admin/article-manage')
			}
		}
	}
</script>

<style>
	
	.avatar{
		width: 30px;
		height: 30px;
		border-radius: 15px;
		background-color: #fff;
		vertical-align: middle;
	}
	.header {
		width: 100%;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		position: fixed;
		top: 0;
		left: 0;
		margin-bottom: 50px;
	}
	
	.header>div {
		width: 100%;
		height: 50px;
		/*background-color: rgb(62,86,111);*/
		background-color: #ea6f5a;
		line-height: 50px;
	}
	
	.nav {
		float: left;
		font-size: 16px;
		margin-left: 90px;
	}
	
	.nav li {
		float: left;
		margin-left: 10px;
	}
	
	h2 {
		padding: 0;
		margin: 0;
		color: #fff;
	}
	
	.logo {
		width: 40px;
		height: 40px;
		border-radius: 20px;
		float: left;
		background-color: #fff;
		margin-left: 10px;
		margin-top: 5px;
	}
	
	.logo img {
		width: 70%;
		height: 70%;
		margin-top: 15%;
	}
	
	.banner {
		width: 100%;
		color: #fff;
		text-align: center;
		font-size: 1rem;
		line-height: 250px;
	}
	
	footer {
		width: 100%;
		height: 50px;
		background: #333;
		margin-top: 50px;
		color: #fff;
	}
	
	footer div {
		width: 800px;
		height: 100%;
		margin: 0 auto;
		text-align: center;
		line-height: 50px;
	}
	
	.el-input input{
		border-radius: 50px;
	}
	
	.user{
		float: right;
		margin-right: 20px;
	}
	.write-article{
		float: right;
		margin-right: 20px;
	}
	
</style>