<template>
	
<div class="container">

	<div>
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item>管理面板</el-breadcrumb-item>
		  <el-breadcrumb-item>分类管理</el-breadcrumb-item>
		</el-breadcrumb>
	</div>
	
	<div class="table-panel">
		<div class="table-head">
			<el-button type="primary" @click="openMessageBox">添加分类</el-button>
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
		        label="分类名称"
		        align="center"
		        width="180" >
		      </el-table-column>
		      <el-table-column  label="操作" align="center">
		        <template slot-scope="scope">
		        <el-button
		          size="mini"
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
		          this.$store.dispatch('delClass',{id:row._id})
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
		       this.$prompt('请输分类名称', '新增', {
		          confirmButtonText: '提交',
		          cancelButtonText: '取消',
		          inputPattern: /\S/,
		          inputErrorMessage: '请输入分类名称'
		        }).then(({ value }) => {
		          this.$message({
		            type: 'success',
		            message: '你的邮箱是: ' + value
		          });
		          this.newClassify = value;
		          console.log('你的邮箱是: ' + value)
		          this.$store.dispatch('addClass',{clazz:value})
		          .then((data) => {
		          	this.tableData.push(data.data)
		          })
		        }).catch(() => {
		          this.$message({
		            type: 'info',
		            message: '取消输入'
		          });       
		        });
		      }
		},
		mounted(){
			this.$store.dispatch('getClassify')
			.then((data) => {
				console.log(data)
				this.tableData = data.data
			})
		}
		
	}
</script>

<style scoped="scoped">
	
	.container{
		background-color: #eee;
	}
	
	.table-panel{
		width: 100%;
		margin-top: 20px;
	}
	.table-head{
		width: 100%;
		text-align: left;
		padding: 20px;
	}
	.table-header-class{
		background-color: #eee;
		/*text-align: left !important;*/
	}
	table{
		text-align: left !important;
	}
	
</style>