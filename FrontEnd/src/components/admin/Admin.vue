<template>
	
	<el-container>
		<el-header class="header">
			<h1>admin</h1>
		</el-header>
		<el-main>
			
			<el-aside class="left-side">
				<el-row class="tac">
  
				  <el-col :span="24">
				    <el-menu
				      default-active="/admin/article-manage"
				      class="el-menu-vertical-demo"
				      @open="handleOpen"
				      @close="handleClose"
				      background-color="#405059"
				      text-color="#fff"
					  :router=true
				      active-text-color="#ffd04b">
				      <el-submenu index="1" popper-class="popper-class">
				        <template slot="title">
				          <i class="el-icon-location"></i>
				          <span>管理面板</span>
				        </template>
				        <el-menu-item-group>         
				          <el-menu-item index="/admin/article-manage">文章管理</el-menu-item>
				          <el-menu-item index="/admin/classify-manage">分类管理</el-menu-item>
				        </el-menu-item-group>
	
				      </el-submenu>
				      
				    </el-menu>
				  </el-col>
				</el-row>
			</el-aside>
			<el-main class="content">
				
				
				<el-row>
					<el-col>
						<router-view></router-view>
					</el-col>
				</el-row>
			</el-main>
		</el-main>
	
	</el-container>
</template>

<script>
	export default{
		name:'admin',
		mounted(){
			console.log('admin')
		},
		methods: {
	      handleOpen(key, keyPath) {
	        console.log(key, keyPath);
	      },
	      handleClose(key, keyPath) {
	        console.log(key, keyPath);
	      }
	    }
	}
</script>

<style scoped="scoped">
	
	.el-container{
		width: 100%;
		height: 100%;
	}
	.el-main{
		width: 100%;
		height: 100%;
		padding: 0;
	}
	.header{
		background-color:#404040;
		color: #fff;
	}
	
	.el-aside{
		width: 20% !important;
		height: 100%;
		background-color: #405059;
		float: left;
	}
	
	.el-menu-item{
		background-color: #404040 !important;
	}
	.el-menu-item-group__title{
		padding: 0 !important;
	}
	
	.content{
		width: 80%;
		padding: 30px;
	}
</style>