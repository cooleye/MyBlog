<template>
	
<div class="container">

	<div>
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item>管理面板</el-breadcrumb-item>
		  <el-breadcrumb-item>文章管理</el-breadcrumb-item>
		</el-breadcrumb>
	</div>
	
	<div class="table-panel">
		<div class="table-head">
			<el-button type="primary" @click="openMessageBox">添加文章</el-button>
		</div>
		<el-table :data="tableData"
			
			>
		      <el-table-column
		        type="index"
		        label="#"
		        align="center"
		        width="80">
		      </el-table-column>
		      <el-table-column
		        prop="createdtime"
		        label="创建时间"
		        align="center"
		        width="180">
		      </el-table-column>
		      <el-table-column
		        prop="classify"
		        label="所属分类"
		        align="center"
		        width="180" >
		      </el-table-column>
		      <el-table-column
		        prop="title"
		        label="文章标题"
		        align="center"
		        width="180" >
		      </el-table-column>
		      <el-table-column  label="操作" align="center">
		        <template slot-scope="scope">
		        	<el-button
		          size="mini"
		          @click="handleEdit(scope.$index, scope.row)">查看</el-button>
		        <el-button
		          size="mini" type="primary"
		          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
		        <el-button
		          size="mini"
		          type="danger"
		          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
		      </template>
		      </el-table-column>
		    </el-table>
	</div>




</div>
		
</template>

<script>

	export default{
		data(){
			 return {
			 dialogFormVisible:false,
			 newClassify:'',
	          tableData: [{
	          	createdtime:new Date,
	          	classify:'aa'
	          }]
	        }
		},
		methods:{
			 handleEdit(index, row) {
		        console.log(index, row);
		      },
		      handleDelete(index, row) {
		        	        
		        this.$confirm('删除分类?', '提示', {
		          confirmButtonText: '确定',
		          cancelButtonText: '取消',
		          type: 'warning'
		        }).then(() => {
		          this.$message({
		            type: 'success',
		            message: '删除成功!'
		          });
		          console.log('----id',row._id)
		          this.$store.dispatch('delArticle',{id:row._id})
			        .then((data) => {
			        		this.tableData = data.data
			        })
		          
		        }).catch(() => {
		          this.$message({
		            type: 'info',
		            message: '已取消删除'
		          });          
		        });
		        
		      },
		      openMessageBox() {
		      	console.log('---')
		      		this.$router.push('/admin/createArticle')
		      }
		},
		mounted(){
			this.$store.dispatch('getArticles')
			.then((data) => {
				console.log(data)
				this.tableData = data.data
			})
		}
		
	}
</script>

<style scoped="scoped">
	
	.table-panel{
		width: 100%;
		margin-top: 20px;
	}
	.table-head{
		width: 100%;
		text-align: left;
		padding: 20px;
	}
	
	.el-table{
		border-top: solid 1px #eee;
	}
	

</style>