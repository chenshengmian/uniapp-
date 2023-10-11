<template>
	<view style="background-color: #F5F5F5;">
		<div class="container">
			<el-card class="box-card">
				<div style="width: 100%;display: flex;justify-content: center;"><img src="../../static/img/logo.png"
						alt=""></div>
				<div style="margin-top: 50rpx;font-size: 26rpx;display: flex;justify-content: center;color: #409EFF;"><a
						href=""><b>English</b></a> | <a href=""><b>简体中文</b>
						</a> <!--| <a href=""><b>繁體中文</b></a> | <a href=""><b>Melayu</b></a> | <a
						href=""><b>한국어</b></a> -->
					</div>
				<div>
					<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
						<el-form-item label="email">
							<el-input v-model="formLabelAlign.useraccount" placeholder="邮箱"></el-input>
						</el-form-item>
						<el-form-item label="password">
							<el-input type="password" placeholder="密码" v-model="formLabelAlign.userpass"></el-input>
						</el-form-item>
						<div style="width: 100%;display: flex;justify-content: center;margin-bottom: 10rpx;"
							@tap="newCaptcha" v-show="showCaptcha"><img :src="captcha" alt=""></div>
						<div style="text-align: center;font-size: 26rpx;">请输入以上字符</div>
						<el-form-item>
							<el-input v-model="formLabelAlign.verifycode"></el-input>
						</el-form-item>
						<el-form-item style="display: flex;justify-content: end;">
							<el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
						</el-form-item>
						<el-form-item>
							<div><i class="el-icon-lock"></i> <span style="margin-left: 10rpx;">忘记密码？点击这里</span></div>
						</el-form-item>
					</el-form>
				</div>
			</el-card>

		</div>
		<div class="footer">©2023 Felement</div>
	</view>
</template>

<script>
	import config from '@/utils/config.json'
	import md5 from 'blueimp-md5';
	import CryptoJS from 'crypto-js';
	// import axios from 'axios'
	export default {
		data() {
			return {
				labelPosition: 'top',
				captcha: '',
				showCaptcha: false,
				formLabelAlign: {
					useraccount: '',
					userpass: '',
					verifycode: '',
					iv: '',
					sign: ''
				}
			}
		},
		mounted() {
			this.getUserInfo()
		},
		methods: {
			getUserInfo() {
				let self = this
				uni.request({
					url: config.https + '/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.account',
					method: 'post',
					success(res) {
						const {
							data: {
								result: {
									verifycode_img,
									iv,
									smsimgcode
								}
							}
						} = res
						self.captcha = verifycode_img
						self.formLabelAlign.iv = iv
						self.formLabelAlign.sign = md5(config.version + iv);
						if (smsimgcode == 1) {
							self.showCaptcha = true
						} else {
							self.showCaptcha = false
						}
					},
					fail(err) {
						console.log(err)
					}
				})
			},
			newCaptcha() {
				this.getUserInfo()
			},
			submitForm() {
				let self = this
				// const keys = CryptoJS.enc.Utf8.parse(config.key)
				// const dataString = JSON.stringify(this.formLabelAlign)
				// const encryptedData = CryptoJS.AES.encrypt(dataString, keys).toString();
				// console.log(encryptedData)
				// const transferData = {
				// 	'data':encryptedData
				// }
				uni.request({
					url: config.https +
						'/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.account.login',
					method: 'post',
					data: this.formLabelAlign,
					success(res) {
						// console.log(res)
						const {
							data: {
								status
							}
						} = res
						if (status == 1) {
							const {
								data: {
									result: {
										userinfo,
										token: {
											access_token,
											refersh_token
										}
									}
								}
							} = res
							uni.setStorageSync('userInfo', res.data)
							//先更新一次token
							const refid = {
								'refershtoken': refersh_token,
								'userinfo': userinfo,
								'access_token': access_token
							}
							uni.setStorageSync('tokenArray', refid)
							uni.navigateTo({
								url: '/pages/index/index?maindisable=true'
							})
						} else {
							const {
								data: {
									result: {
										message
									}
								}
							} = res
							self.$message({
								message: message,
								type: 'warning'
							});
						}
					},
					fail(err) {
						console.log(err)
					}
				})
			}
		}
	}
</script>

<style>
	.el-card {
		width: 800rpx;
		position: relative;
	}

	.container {
		display: flex;
		/* 使用flex布局 */
		justify-content: center;
		/* 在主轴上水平居中 */
		align-items: center;
		/* 在交叉轴上垂直居中 */
		height: 100vh;
		/* margin-top: 240rpx; */
		/* 设置容器高度为全屏高度 */
		background-color: #F5F5F5;
	}

	.footer {
		position: absolute;
		bottom: 240rpx;
		font-size: 24rpx;
		text-align: center;
		width: 100%;
	}

	@media screen and (max-width: 990px) {
		.footer {
			bottom: 4.5%;
		}
		.container{
			height: 90vh;
		}
	}
</style>