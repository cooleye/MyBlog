<template>

	<el-container direction="vertical">

		<el-row>
			
	
			<el-upload class="avatar-uploader" 
				action="http://localhost:3000/fileupload" 
				name="avatar"
				:data="params"
				:show-file-list="false" 
				:on-success="handleAvatarSuccess" 
				:before-upload="beforeAvatarUpload">
				<img v-if="user.avatar" :src="user.avatar" class="avatar">
				<i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>

		</el-row>

		<el-row>
			<el-col>
				<el-form ref="form" :model="user" label-width="80px">
					<el-form-item label="昵称">
						<el-input v-model="user.name"></el-input>
					</el-form-item>

				</el-form>
			</el-col>
		</el-row>
		<el-row>
			<el-col>
				<el-button type="success" size="medium" @click="updateProfile">保存</el-button>
			</el-col>
		</el-row>
	</el-container>

</template>

<script>
	export default {

		data() {
			return {
				user: {
					name: '',
					avatar: ''
				},
				params:{}
			}
		},
		mounted() {
			if(this.$store.state.user) {
				this.user = this.$store.state.user;
				this.params = {id:this.user._id};
			} else {
				this.$router.push('/login')
			}

		},
		methods: {
			updateProfile(){
				
			},
			handleAvatarSuccess(res, file) {
				console.log('res:',res)
				console.log('file:',file)
				this.user.avatar = file.url;
//				this.user.avatar = URL.createObjectURL(file.raw);
			},
			beforeAvatarUpload(file) {
				const isJPG = file.type === 'image/jpeg';
				const isLt2M = file.size / 1024 / 1024 < 2;

				if(!isJPG) {
					this.$message.error('上传头像图片只能是 JPG 格式!');
				}
				if(!isLt2M) {
					this.$message.error('上传头像图片大小不能超过 2MB!');
				}
				return isJPG && isLt2M;
			}
		}
	}
</script>

<style scoped="scoped">
	/*.avatar {
		width: 100px;
		height: 100px;
		border: solid 1px #eee;
		border-radius: 50px;
		vertical-align: middle;
	}*/
	
	.el-row {
		text-align: left;
		vertical-align: middle;
		align-items: center;
	}
	
	.el-button {
		width: 100px;
		border-radius: 20px;
	}
	
	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}
	
	.avatar-uploader .el-upload:hover {
		border-color: #409EFF;
	}
	
	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		line-height: 178px;
		text-align: center;
	}
	
	.avatar {
		width: 178px;
		height: 178px;
		border-radius: 100%;
		display: block;
	}
</style>