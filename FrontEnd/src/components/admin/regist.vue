<template>
	<div class="container">
		
		<div class="toplogo">
			<img src="../../../static/bird.png"/>
		</div>
		<div class="panel">
			
			<div class="panel-header">
				<span><router-link to="/login">登录</router-link></span>
				·
				<span><router-link to="/regist">注册</router-link></span>
			</div>
			
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm"  class="demo-ruleForm">
				<el-form-item prop="username">
			    		<el-input v-model="ruleForm.username" placeholder="你的昵称" auto-complete="off" prefix-icon="el-icon-news"></el-input>
			  	</el-form-item>
			  	<el-form-item label="" prop="userpwd">
			    		<el-input v-model="ruleForm.userpwd" placeholder="设置密码" type="password" auto-complete="off"  prefix-icon="el-icon-view"></el-input>
			  	</el-form-item>
			  	<el-form-item prop="checkPass">
			    		<el-input type="password" placeholder="确认密码" v-model="ruleForm.checkPass" auto-complete="off" prefix-icon="el-icon-view"></el-input>
			  	</el-form-item>
			</el-form>
			
			<el-button type="success" round width="200px" @click="submitForm('ruleForm')">注册</el-button>
			
			<p style="margin-top: 20px;">用户协议 和 隐私政策</p>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			var validatePass = (rule, value, callback) => {
		        if (value === '') {
		          callback(new Error('请输入密码'));
		        } else {
		          if (this.ruleForm.checkPass !== '') {
		            this.$refs.ruleForm.validateField('checkPass');
		          }
		          callback();
		        }
		      };
		    var validatePass2 = (rule, value, callback) => {
		        if (value === '') {
		          callback(new Error('请再次输入密码'));
		        } else if (value !== this.ruleForm.userpwd) {
		          callback(new Error('两次输入密码不一致!'));
		        } else {
		          callback();
		        }
		      };
		      
			return {
			 	ruleForm: {
      		 		username: '',
      		 		userpwd:'',
      		 		checkPass:''
        			},
        			rules: {
          			username: [
			            { required: true, message: '请输入你的昵称', trigger: 'blur' },
			            { min: 3, max: 6, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          			],
          			userpwd: [ { validator: validatePass, trigger: 'blur' }],
          			checkPass: [ { validator: validatePass2, trigger: 'blur' }]
        			}
			}
		},
		methods:{
			submitForm(formName) {
		        this.$refs[formName].validate((valid) => {
		          if (valid) {
					this.$store.dispatch('regist',this.ruleForm)
					.then( res => {
//						console.log(res)
						if(res.status == 200){
							this.$router.push('/login')
						}
					})
					
		          } else {
		            console.log('error submit!!');
		            return false;
		          }
		        });
		      },
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
	.toplogo{
		width: 80px;
		height: 80px;
		margin: 20px auto;
		background-color: #fff;
		text-align: center;
		border-radius: 40px;
		box-shadow: 0px 1px 4px #bbb;
	}
	.toplogo img{
		width: 80%;
		height: 80%;
		vertical-align: middle;
		margin-top: 8px;
	}
	
	.router-link-active{
		color: #ea6f5a !important;
		border-bottom: solid 2px #ea6f5a;
	}

</style>