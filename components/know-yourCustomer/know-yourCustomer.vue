<template>
	<view>
		<el-card>
			<div style="display: flex;justify-content: center;">
				<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"
					class="demo-ruleForm" :label-position="labelPosition" size="small">
					<div class="title">KYC</div>
					<el-form-item label="KYC Status	:" >
						Not Submitted Yet
					</el-form-item>
					<el-form-item label="Identity Card (Front)  Passport No  Business Registration:" prop="pass">
						<el-upload
						  class="upload-demo"
						  action="https://jsonplaceholder.typicode.com/posts/"
						  :on-change="handleChange"
						  :file-list="fileList">
						  <el-button size="small">点击上传</el-button>
						</el-upload>
					</el-form-item>
					<el-form-item label="Identity Card (Back)	:" prop="checkPass">
						<el-upload
						  class="upload-demo"
						  action=""
						  :on-change="handleChange"
						  :file-list="fileList">
						  <el-button size="small">点击上传</el-button>
						</el-upload>
					</el-form-item>
					<el-form-item>
						<el-button @click="submitForm('ruleForm')" size="small">upload</el-button>
					</el-form-item>
				</el-form>
			</div>
		</el-card>
	</view>
</template>

<script>
	export default {
		name: 'know-yourCustomer',
		data() {
			return {
				
			};
		},
		mounted() {
			this.getScreenWidth(); // 初始化获取屏幕宽度和缩放比例
			window.addEventListener('resize', this.handleResize); // 监听窗口大小变化
		},
		beforeDestroy() {
			window.removeEventListener('resize', this.handleResize); // 移除监听事件
		},
		methods: {
			submitForm(formName) {
				
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