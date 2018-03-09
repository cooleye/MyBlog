<template>

	<div>
		<h1>  添加文章 </h1>
		<el-form ref="form" :model="form" label-width="80px">
			<el-form-item label="文章标题">
				<el-input v-model="form.title"></el-input>
			</el-form-item>
			<el-form-item label="文章分类" align="left">
				<el-select v-model="form.classify" placeholder="请选择文章分类">
					<el-option v-for="op in classifies" :key="op._id" :label="op.classify" :value="op.classify"></el-option>
				</el-select>
			</el-form-item>
		</el-form>

		<quill-editor ref="myTextEditor" :content="content" :options="editorOption" v-model="content" height="300px" @change="onEditorChange($event)">//内容改变事件
		</quill-editor>

		<el-row style="text-align: right; margin-top: 5px;">
			<el-button @click="cancle" size="mini"> 取消 </el-button>
			<el-button @click="publish" type="primary" size="mini"> 立即发布 </el-button>
		</el-row>

	</div>
</template>

<script>
	import { quillEditor } from 'vue-quill-editor'

	export default {
		components: {
			quillEditor
		},
		data() {
			return {
				content: "",
				editorOption: {},
				form: {
					title: '',
					classify: ''
				},
				classifies: []
			}
		},
		methods: {
			onEditorChange({editor,html,text}) {
//				this.content = html
			},
			cancle() {
				console.log('cancle')
				this.$router.push('/admin/article-manage')
			},
			publish() {
				console.log(this.form)
				if(this.form.title == '') {
					this.$message({
						message: '标题不能为空',
						type: 'error'
					});
				} else if(this.form.classify == '') {
					this.$message({
						message: '请选择文章分类',
						type: 'error'
					});
				} else if(this.content == "") {
					this.$message({
						message: '文章内容不能为空',
						type: 'error'
					});
				} else {
					this.$store.dispatch('publishArticle', {
							content: this.content,
							title: this.form.title,
							classify: this.form.classify
						})
						.then((res) => {
							console.log(res)
							if(res.data.msg == 'success') {
								this.$router.push('/admin/article-manage')
							}
						})
				}

			}
		},
		mounted() {
			this.$store.dispatch('getClassify')
				.then((res) => {
					console.log(res)
					this.classifies = res.data
				})
		}

	}
</script>

<style type="text/css">
	.el-input input {
		border-radius: 2px;
	}
	
	.ql-container {
		height: 240px;
	}
</style>