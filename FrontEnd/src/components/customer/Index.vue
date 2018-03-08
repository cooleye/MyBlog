<template>
	<div>
		
		<div class="header">
			<div>
				<div class="logo">
					<img src="../../../static/bird.png"/>
				</div>
				<div style="float: left;margin-left: 10px;">
					<h2> BeautyBlog </h2>
				</div>
				<ul>
					<li><router-link to="/home">首页</router-link></li>
					<li><router-link to="/classify">分类</router-link></li>
					<li><router-link to="/about">关于</router-link></li>
				</ul>
				
				<!--<div class="banner">
					Make More Time
				</div>-->
			</div>
		</div>
		
		<router-view  style="margin-top: 50px;"></router-view>
		
		<footer>
			<div>
				<h4> created by davie kong </h4>	
			</div>
			
		</footer>
		
	</div>
</template>

<script>
	
	export default{}
</script>

<style>
	
.header{
	width: 100%;
	background-repeat: no-repeat;
	background-size: 100% 100%;
	position: fixed;
	top: 0;
	left: 0;
	margin-bottom: 50px;
}
/*@media only screen and (min-width: 414px){
	.header{
		width: 100%;
		height: 6rem;
		background-size: 100%;
	}
}*/


.header>div{
	width: 100%;
	height: 50px;
	/*background-color: rgb(62,86,111);*/
	background-color: #ea6f5a;
	line-height: 50px;
	
}

ul{
	float: right;
	font-size: 14px;
	margin-right: 10px;
	
}
ul li{
	float: left;
	margin-left: 10px;
}

h2{
	padding: 0;margin: 0;
	color: #fff;
	
}

.logo{
	width: 40px;
	height: 40px;
	border-radius: 20px;
	float: left;
	background-color:#fff;
	margin-left: 100px;
	margin-top: 5px;
}
.logo img{
	width: 70%;height: 70%;
	margin-top: 15%;
}

.banner{
	width: 100%;
	color: #fff;
	text-align: center;
	font-size: 1rem;
	line-height: 250px;
}

footer{
	width: 100%;
	height: 50px;
	background: #333;
	margin-top: 50px;
	color:#fff;
}

footer div{
	width: 800px;
	height: 100%;
	margin: 0 auto;
	text-align: center;
	line-height: 50px;
}
</style>