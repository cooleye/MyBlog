<template>
	<div class="container">
		
		<div class="logo">
			<img src="../../../static/bird.png"/>
		</div>
		<div class="panel">
			
			<div class="panel-header">
				<span><router-link to="/login">登录</router-link></span>
				·
				<span><router-link to="/regist">注册</router-link></span>
			</div>
			
			<el-input v-model="username" placeholder="你的昵称"  prefix-icon="el-icon-news"></el-input>
			<el-input v-model="userpwd" placeholder="设置密码" type="password"  prefix-icon="el-icon-view"></el-input>
			
			<el-button type="primary" round width="200px">登录</el-button>
			
			<p style="margin-top: 20px;">用户协议 和 隐私政策</p>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				username:'',
				userpwd:""
			}
		}
	}
</script>

<style scoped="scoped">
	
	h1,h2,h3,h4,h5,h6{
		padding: 0;
		margin: 0;
	}
	.container{
		width: 100%;
		height: 100%;
		background-color: #eee;
		border: solid 1px #eee;
	}
	.panel{
		width: 300px;
		height: 400px;
		background-color: #fff;
		margin:20px auto;
		padding: 50px;
		border-radius: 5px;
		box-shadow: 0px 1px 4px #bbb;
	}
	.el-button{
		width: 300px;
		margin-top: 20px;
		font-size: 18px;
	}
	.el-input{
		margin-top: 20px;
	}
	
	.panel-header{
		font-size: 20px;
		color: #888;
		padding-bottom: 30px;
	}
	.panel-header a{
		color: #888;
		padding: 0 10px;
		padding: 5px 10px;
	}
	.logo{
		width: 80px;
		height: 80px;
		/*border: solid 1px #cfcfcf;*/
		margin: 20px auto;
		background-color: #fff;
		text-align: center;
		border-radius: 40px;
		box-shadow: 0px 1px 4px #bbb;
	}
	.logo img{
		vertical-align: middle;
		margin-top: 10px;
	}
	
	.router-link-active{
		color: #ea6f5a !important;
		border-bottom: solid 2px #ea6f5a;
	}
</style>