<template>
	<view>
		<el-card>
			<div style="display: flex;justify-content: center;width: 100%;">
				<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
					class="demo-ruleForm" :label-position="labelPosition" size="small" >
					<div class="title">更改登录密码</div>
					<el-form-item label="身份证后6位:" prop="postcard">
						<el-input  v-model="ruleForm.postcard" autocomplete="off" size="small"></el-input>
					</el-form-item>
					<el-form-item label="当前密码:" prop="newpass">
						<el-input type="password" v-model="ruleForm.newpass" size="small"></el-input>
					</el-form-item>
					<el-form-item label="新密码:" prop="pass">
						<el-input type="password" v-model="ruleForm.pass" autocomplete="off" size="small"></el-input>
					</el-form-item>
					<el-form-item label="确认新密码:" prop="checkPass">
						<el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" size="small"></el-input>
					</el-form-item>
					
					<el-form-item>
						<el-button  @click="submitForm('ruleForm')" size="small">修改密码</el-button>
						<!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
					</el-form-item>
				</el-form>
			</div>
		</el-card>
	</view>
</template>

<script>
	export default {
		name: 'login-password',
		data() {
			var validatePassnew = (rule, value, callback) => {
				if (!value) {
					return callback(new Error('请输入当前使用密码'));
				}else {
					if (this.ruleForm.newpass !== '') {
						this.$refs.ruleForm.validateField('newpass');
					}
					callback();
				}
			};
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
				} else if (value !== this.ruleForm.pass) {
					callback(new Error('两次输入密码不一致!'));
				} else {
					callback();
				}
			};
			var validatepasscard = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入身份证后6位'));
				} else {
					callback();
				}
			};
			return {
				ruleForm: {
					pass: '',
					checkPass: '',
					newpass: '',
					userid:'',
					postcard:''
				},
				labelPosition:'right',
				rules: {
					pass: [{
						validator: validatePass,
						trigger: 'blur'
					}],
					checkPass: [{
						validator: validatePass2,
						trigger: 'blur'
					}],
					newpass: [{
						validator: validatePassnew,
						trigger: 'blur'
					}],
					postcard:[{
						validator: validatepasscard,
						trigger: 'blur'
					},{
						min: 6,
						message: '长度为 6 个字符',
						trigger: 'blur'
					},{
						max: 6,
						message: '长度为 6 个字符',
						trigger: 'blur'
					}]
				}
			};
		},
		mounted() {
			this.getScreenWidth(); 
			window.addEventListener('resize', this.handleResize); 
		},
		beforeDestroy() {
			window.removeEventListener('resize', this.handleResize); 
		},
		methods: {
			submitForm(formName) {
				const {userinfo} = uni.getStorageSync('tokenArray')
				this.ruleForm.userid = userinfo
				console.log(this.ruleForm)
				let self = this
				self.$axios.post('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.account.hanldeChangepass',self.ruleForm)
					.then(res=>{
						// console.log(res)
						const { status,result:{message} } = res
						if(status==1){
							self.$message({
								message: message,
								type: 'success'
							});
						}else if(status==0){
							self.$message.error(message);
						}
					})
					.catch(err=>{
						console.log(err)
					})
			},
			getScreenWidth() {
				this.screenWidth = window.innerWidth;
				if (this.screenWidth <= 990) {
					this.labelPosition = 'top'
				} else {
					this.labelPosition = 'left'
				}
			},
			handleResize() {
				const newScreenWidth = window.innerWidth;
				if (newScreenWidth !== this.screenWidth) {
					this.screenWidth = newScreenWidth;
					console.log(newScreenWidth);
					if (newScreenWidth <= 990) {
						this.labelPosition = 'top'
					} else {
						this.labelPosition = 'left'
					}
				}
			},
			// resetForm(formName) {
			// 	this.$refs[formName].resetFields();
			// }
		}
	}
</script>

<style>
	.el-card{
		font-size: 26rpx;
	}
	.title{
		text-align: center;
		font-size: 26rpx;
		color:#5B626B;
	}

</style>