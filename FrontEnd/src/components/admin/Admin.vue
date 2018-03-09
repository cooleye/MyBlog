<template>

	<el-container>
		<el-header height="80px">
			<div class="logo"></div>
			<div style="float: left;margin-left: 60px;font-size: 20px;">
				<h2> BeautyBlog </h2>
			</div>
		</el-header>
		<el-container>
			<el-aside width="200px">
				<el-menu :default-openeds="['1']" active-text-color="#ea6f5a" default-active="/admin/article-manage" :router=true align="left">
				<el-submenu index="1">
					<template slot="title"><i class="el-icon-menu"></i>管理面板</template>
					<el-menu-item index="/admin/article-manage">文章管理</el-menu-item>
					<el-menu-item index="/admin/classify-manage">分类</el-menu-item>
				</el-submenu>

				<el-submenu index="2">
					<template slot="title"><i class="el-icon-edit-outline"></i>评论管理</template>
					<el-menu-item index="/admin/comment">评论</el-menu-item>
					
				</el-submenu>

				<el-submenu index="3">
					<template slot="title"><i class="el-icon-setting"></i>设置</template>
					<el-menu-item index="/admin/profile">基础设置</el-menu-item>
					<el-menu-item index="#">个人资料</el-menu-item>
				</el-submenu>

			</el-menu>
			</el-aside>
			<el-main>
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>

</template>

<script>
	export default {
		name: 'admin',
		data() {
			const item = {
				date: '2016-05-02',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1518 弄'
			};
			return {
				tableData: Array(20).fill(item)
			}
		},
		mounted() {
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
	.el-container {
		/*width: 100%;*/
		/*height: 100%;*/
	}
	
	.el-main {
		/*width: 100%;
		height: 100%;
		padding: 0;*/
	}
	
	.el-header {
		background-color: #ea6f5a;
		color: #333;
		position: relative;
		line-height: 80px;
	}
	
	.logo {
		width: 40px;
		height: 40px;
		border-radius: 20px;
		background-color: #fff;
		position: absolute;
		background-image: url(../../../static/bird.png);
		background-size: 80%;
		background-repeat: no-repeat;
		background-position: center;
		top: 15px;
	}
</style>