<template>
	<view class="content">
		<el-container v-if="maindisable">
			<el-dialog title="FELEMENT WHATSAPP & TELEGRAM 群主" :visible.sync="centerDialogVisible" :width="width">
				<div id="print"  style="height: 800rpx;overflow-y: scroll;">{{tanccontent}}</div>
				<span slot="footer" class="dialog-footer">
					<i class="el-icon-printer" @click="handleCustomButton" style="margin-right: 35rpx;margin-top: 20rpx;"></i> 
					<el-button type="primary" @click="changeads" size="mini">关闭弹窗不再显示</el-button>
				</span>
			</el-dialog>

			<el-menu default-active="1-5-1" class="el-menu-vertical-demo asos" :collapse="isCollapse"
				@select="handleSelect" style="height: 100vh;">
				<image src="../../static/img/logo.png" alt="" v-if="disable" class="userLo"></image>
				<image src="../../static/img/favicon.png" v-else class="userLogo"></image>
				<el-menu-item index="1">
					<i class="el-icon-menu"></i>
					<span slot="title">主页</span>
				</el-menu-item>
				<el-submenu index="2">
					<template slot="title">
						<i class="el-icon-s-fold"></i>
						<span slot="title" v-if="disable">电子钱包</span>
					</template>
					<el-menu-item-group>
						<!-- <span slot="title">电子钱包</span> -->
						<el-menu-item index="2-1">电子钱包历史记录</el-menu-item>
						<el-menu-item index="2-2">电子钱包取款</el-menu-item>
						<el-menu-item index="2-3">电子钱包取款状况</el-menu-item>
						<el-menu-item index="2-4">奖金说明</el-menu-item>
						<el-menu-item index="2-5">KYC</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
				<!-- <el-menu-item index="3">
					<i class="el-icon-menu"></i>
					<span slot="title">经销商注册</span>
				</el-menu-item> -->
				<el-submenu index="4">
					<template slot="title">
						<i class="el-icon-s-fold"></i>
						<span slot="title" v-if="disable">购物</span>
					</template>
					<el-menu-item-group>
						<!-- <span slot="title">购物</span> -->
						<el-menu-item index="4-1">产品购买</el-menu-item>
						<el-menu-item index="4-2">购买历史记录</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
				<!-- <el-submenu index="5">
					<template slot="title">
						<i class="el-icon-s-fold"></i>
						<span slot="title" v-if="disable">报告</span>
					</template>
					<el-menu-item-group>
						<span slot="title">报告</span>
						<el-menu-item index="5-1">小组销售报告</el-menu-item>
						<el-menu-item index="5-2">Member Tree</el-menu-item>
					</el-menu-item-group>
				</el-submenu> -->
				<el-menu-item index="6">
					<i class="el-icon-menu"></i>
					<span slot="title">架构图</span>
				</el-menu-item>
				<el-menu-item index="10">
					<i class="el-icon-menu"></i>
					<span slot="title">公告表</span>
				</el-menu-item>
			</el-menu>
			<div :class="classp?'placeholder':'newplaceholder'"></div>
			<el-container class="conent">
				<el-header :style="{backgroundColor:hColr}">
					<div class="headerTop" :style="{backgroundColor:topColor}">
						<div style="display: flex;" :class="{'colorb':isblock}">
							<i class="el-icon-s-grid changeStatu" @tap="changeStatus"></i>
							<image src="../../static/img/favicon.png" class="changeStatus1 smalllogo"></image>
							<i class="el-icon-s-grid changeStatus1" @tap="showDrawer" style="margin-left: 36rpx;"></i>
						</div>
						<div style="display: flex;margin-top: 10rpx;position: fixed;right: 0;">
							<i class="el-icon-full-screen fullsc" @tap="toggleFullscreen"></i>
							<el-dropdown trigger="click">
								<span class="el-dropdown-link">
									<el-avatar :src="circleUrl" class=" el-icon--right"
										style="margin-top: 9rpx;"></el-avatar>
								</span>
								<el-dropdown-menu slot="dropdown" class="atvatr">
									<el-dropdown-item style="border-bottom: 2rpx solid #DCDFE6;">
										{{username}}
									</el-dropdown-item>
									<div @tap="hanldeChangepass">
										<el-row>
											<el-dropdown-item>
												<i class="el-icon-user-solid"></i>更改登录密码
											</el-dropdown-item>
										</el-row>
									</div>
									<div @tap="hanldeChangeEwalletspass">
										<el-row>
											<el-dropdown-item>
												<i class="el-icon-user-solid"></i>修改电子钱包密码
											</el-dropdown-item>
										</el-row>
									</div>
									<!-- <div @tap="hanldeKYC">
										<el-row>
											<el-dropdown-item>
												<i class="el-icon-user-solid"></i>KYC
											</el-dropdown-item>
										</el-row>
									</div> -->
									<el-row>
										<el-dropdown-item style="border-top: 2rpx solid #DCDFE6;">
											<div @tap="logOff"><i class="el-icon-switch-button"></i><el-link href="#"
													type="danger">登出</el-link></div>
										</el-dropdown-item>
									</el-row>
								</el-dropdown-menu>
							</el-dropdown>
							<el-row>
								<i class="el-icon-setting setting" style="margin-right: 20rpx;"
									@tap="showDrawerleft"></i>
							</el-row>
						</div>
					</div>
				</el-header>
				<el-drawer class="drawerright" :visible.sync="drawerVisibletwo" @close="handleDrawerClose"
					title="Settings" :size="drawerSize">
					<!-- 在这里放置抽屉中的内容 -->
					<p style="text-align: center;"><b>Choose Layouts</b></p>
					<el-row><el-switch v-model="option1" @change="handleOptionChange('option1')"></el-switch><span>Light
							Mode</span><br /></el-row>
					<el-row><el-switch v-model="option2" @change="handleOptionChange('option2')"></el-switch><span>Dark
							Mode</span></el-row>
				</el-drawer>
				<div class="ableta">
					<my-drawer @viewIndex="handleSelect" v-show="drawerVisible" @close="closeDrawer"></my-drawer>
				</div>
				<el-main :style="{backgroundColor:baColr}">
					<div v-if="index=='1'" style="width: 100%;">
						<my-home @changeAd="getAdstatus" />
					</div>
					<div v-else-if="index=='2-1'">
						<wallet-records />
					</div>
					<div v-else-if="index=='2-2'">
						<withdraw-money />
					</div>
					<div v-else-if="index=='2-3'">
						<withdrawal-status />
					</div>
					<div v-else-if="index=='2-4'">
						<bonus-description />
					</div>
					<div v-else-if="index=='3'">
						<reseller-registration :nodeid='nodeid' @handlereg="handlereg" />
					</div>
					<div v-else-if="index=='4-1'">
						<product-purchase @godatail="getdatail" />
					</div>
					<div v-else-if="index=='4-2'">
						<purchase-history />
					</div>
					<div v-else-if="index=='4-3'">
						<product-detail :todatail='todatail' @getresrt="newindex" />
					</div>
					<div v-else-if="index=='5-1'">
						<performance-reports />
					</div>
					<div v-else-if="index=='5-2'">
						<member-tree />
					</div>
					<div v-else-if="index=='6'">
						<binary-tree @indexChange="getIndex" />
					</div>
					<div v-else-if="index=='7'">
						<login-password />
					</div>
					<div v-else-if="index=='8'">
						<wallet-password />
					</div>
					<div v-else-if="index=='9'">
						<know-yourCustomer />
					</div>
					<div v-else-if="index=='10'">
						<announcement-table />
					</div>
				</el-main>
				<el-footer :style="{backgroundColor:footbg}">
					<div class="footer">Copyright 2023. Felement Sdn Bhd. All Right Reserved.</div>
				</el-footer>
			</el-container>
		</el-container>
		<div v-else style="display: flex;justify-content: center;width: 100%;background-color: #F5F5F5;">
			<div class="homepage">
				<website-homepage @getstatus="getstatus" />
			</div>

		</div>
	</view>
</template>

<script>
	import MyDrawer from '@/components/my-drawer/my-drawer.vue';
	import MyHome from '@/components/my-home/my-home.vue';
	import WalletRecords from '@/components/wallet-records/wallet-records.vue';
	import BinaryTree from '@/components/binary-tree/binary-tree.vue';
	import WithdrawMoney from '@/components/withdraw-money/withdraw-money.vue';
	import WithdrawalStatus from '@/components/withdrawal-status/withdrawal-status.vue';
	import BonusDescription from '@/components/bonus-description/bonus-description.vue';
	import ResellerRegistration from '@/components/reseller-registration/reseller-registration.vue';
	import ProductPurchase from '@/components/product-purchase/product-purchase.vue';
	import ProductDetail from '@/components/product-purchase/product-detail.vue';
	import PurchaseHistory from '@/components/purchase-history/purchase-history.vue';
	import PerformanceReports from '@/components/performance-reports/performance-reports.vue';
	import MemberTree from '@/components/member-tree/member-tree.vue';
	import LoginPassword from '@/components/login-password/login-password.vue';
	import WalletPassword from '@/components/wallet-password/wallet-password.vue';
	import knowYourCustomer from '@/components/know-yourCustomer/know-yourCustomer.vue';
	import WebsiteHomepage from '@/components/website-homepage/website-homepage.vue'
	import AnnouncementTable from '@/components/announcement-table/announcement-table.vue'
	export default {
		components: {
			MyDrawer,
			MyHome,
			WalletRecords,
			BinaryTree,
			WithdrawMoney,
			WithdrawalStatus,
			BonusDescription,
			ResellerRegistration,
			ProductPurchase,
			PurchaseHistory,
			PerformanceReports,
			MemberTree,
			LoginPassword,
			WalletPassword,
			knowYourCustomer,
			ProductDetail,
			WebsiteHomepage,
			AnnouncementTable
		},
		data() {
			return {
				centerDialogVisible: true,
				isCollapse: false,
				disable: true,
				drawerVisible: false,
				drawerVisibletwo: false,
				circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
				drawerSize: '60%',
				screenWidth: 0,
				option1: true,
				option2: false,
				index: '1',
				classp: true,
				isblock: false,
				baColr: '#F2F2F2',
				hColr: '#FFFFFF',
				footbg: '#FAFAFA',
				topColor: '#FFFFFF',
				drawbg: '#FFFFFF',
				nodeid: '',
				todatail: {},
				maindisable: false,
				username: '',
				width: '30%',
				tanccontent: '',
				type:0
			}
		},
		mounted(param) {
			// console.log(1111)
			this.login()
			// console.log(uni.getStorageSync('tokenArray'))
			this.getScreenWidth(); // 初始化获取屏幕宽度和缩放比例
			window.addEventListener('resize', this.handleResize); // 监听窗口大小变化
		},
		onShow() {
			this.login()
			this.getScreenWidth(); // 初始化获取屏幕宽度和缩放比例
			window.addEventListener('resize', this.handleResize); // 监听窗口大小变化
		},
		beforeDestroy() {
			window.removeEventListener('resize', this.handleResize); // 移除监听事件
		},
		methods: {
			 handleCustomButton() {
			    // 执行自定义按钮的操作
				const content = document.getElementById("print");
				console.log(content)
				window.print(content)
			},
			getAdstatus(param) {
				// console.log(param)
				const { type,ad } = param
				let self = this
				this.$axios.post('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.member.agr')
					.then(res => {
						// console.log('弹窗',type)
						const {
							result: {
								agrcontent,
								content
							}
						} = res
						self.centerDialogVisible = true
						if(type==0){
							self.tanccontent = agrcontent
						}else{
							self.tanccontent = content
						}
				
					})
					.catch(err => {
						console.log(err)
					})
			},
			changeads() {
				const {
					userinfo
				} = uni.getStorageSync('tokenArray')
				let _this = this
				_this.$axios.get('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.member.newAdstauts&userid=' +
						userinfo)
					.then(res => {
						console.log(res)
						if (res.status == 1) {
							_this.centerDialogVisible = false
						}
					})
					.catch(err => {
						console.log(err)
					})
			},
			getstatus(param) {
				// console.log('主页状态',param)
				// if(param==100){
				// 	self.maindisable = false
				// }else{
				// 	self.maindisable = true
				// }
			},
			newindex(param) {
				this.index = param
				// console.log(param)
			},
			async login() {
				let self = this
				this.$axios.post('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.member.agr')
					.then(res => {
						// console.log('弹窗',type)
						const {
							result: {
								agrcontent,
								content
							}
						} = res
						if(self.type==0){
							self.tanccontent = agrcontent
						}else{
							self.tanccontent = content
						}
				
					})
					.catch(err => {
						console.log(err)
					})
				await this.$axios.get('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.member')
					.then(res => {
						// console.log('登录状态',res)
						const {
							status,
							result: {
								avatar,
								nickname,
								adstatus
							}
						} = res
						self.username = nickname
						// console.log('登录状态',res)
						if (adstatus == 0) {
							self.centerDialogVisible = false
						} else {
							self.centerDialogVisible = true
						}
						if (status == 100) {
							self.maindisable = false
						} else {
							self.maindisable = true
						}
						self.circleUrl = avatar
					})
					.catch(err => {
						console.log(err)
					})

				const {
					userinfo
				} = uni.getStorageSync('tokenArray')
				let array = {
					'userid': userinfo
				}
				self.$axios.post('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.member.selectTree',
						array)
					.then(res => {
						const {
							result
						} = res
						uni.setStorageSync('data', result)
						// console.log('更新',result)
					})
					.catch(err => {
						console.log(err)
					})
			},
			handlereg(param) {
				this.index = param
			},
			getdatail(res) {
				// const lastarr = res[res.length -1]
				// // console.log(lastarr)
				const {
					id,
					index
				} = res
				this.todatail = res
				this.index = index
			},
			getIndex(data) {
				// console.log(data)
				const {
					index,
					nodeid
				} = data
				this.index = index
				this.nodeid = nodeid
			},
			hanldeChangepass() {
				this.index = 7
			},
			hanldeChangeEwalletspass() {
				this.index = 8
			},
			hanldeKYC() {
				this.index = 9
			},
			logOff() {
				let self = this
				const {
					result: {
						userinfo
					}
				} = uni.getStorageSync('userInfo')
				const logof = {
					'userid': userinfo
				}
				this.$axios.post('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.account.logout', logof)
					.then(res => {
						// console.log(res)
						const {
							status
						} = res
						if (status == 1) {
							uni.clearStorageSync();
							const {
								result: {
									message
								}
							} = res
							self.maindisable = false
							self.$message({
								message: message,
								center: true
							});


							// self.maindisable = false
							// uni.navigateTo({
							// 	url: '/pages/userLogin/userLogin'
							// })
						} else {

						}
					})
					.catch(err => {
						console.log(err)
					})
			},
			changeStatus() {
				let self = this
				self.isCollapse = !self.isCollapse
				self.disable = !self.disable
				self.classp = !self.classp
			},
			showDrawer() {
				// console.log(111)
				this.drawerVisible = !this.drawerVisible;
			},
			toggleFullscreen() {
				const element = document.documentElement; // 获取整个文档的根元素
				// console.log(element)
				if (element.requestFullscreen) {
					// 兼容不同浏览器的API调用方式
					element.requestFullscreen();
				} else if (element.mozRequestFullScreen) { // Firefox
					element.mozRequestFullScreen();
				} else if (element.webkitRequestFullscreen) { // Chrome, Safari和Opera
					element.webkitRequestFullscreen();
				} else if (element.msRequestFullscreen) { // IE/Edge
					element.msRequestFullscreen();
				}
			},
			showDrawerleft() {
				this.drawerVisibletwo = !this.drawerVisibletwo;
				// this.isblock = true
			},
			handleDrawerClose() {
				this.isblock = false
			},
			getScreenWidth() {
				this.screenWidth = window.innerWidth;
				if (this.screenWidth <= 990) {
					this.drawerSize = '60%'
					this.width = '90%'
				} else {
					this.drawerSize = '15%'
				}
			},
			handleResize() {
				const newScreenWidth = window.innerWidth;
				if (newScreenWidth !== this.screenWidth) {
					this.screenWidth = newScreenWidth;
					console.log(newScreenWidth);
					if (newScreenWidth <= 990) {
						this.drawerSize = '60%'
						this.width = '90%'
					} else {
						this.drawerSize = '15%'
					}
				}
			},
			handleOptionChange(option) {
				if (option === 'option1') {
					this.option2 = !this.option1; // 关闭选项2并开启选项1
				} else if (option === 'option2') {
					this.option1 = !this.option2; // 关闭选项1并开启选项2
				}
				this.option1 == true ? (this.baColr = '#F2F2F2', this.hColr = '#fff', this.footbg = '#FAFAFA', this
					.topColor = '#fff', this.drawbg = '#fff') : (this.baColr = '#1F2431', this.hColr = '#7A6FBE', this
					.footbg = '#323A4E',
					this.topColor = '#7A6FBE', this.drawbg = '#2A3142')
			},
			handleSelect(index) {
				// console.log(index);
				let self = this
				self.index = index
				this.drawerVisible = false
			},
		}
	}
</script>

<style>

	.colorb {
		background-color: #7F7F7F;
	}

	.placeholder {
		width: 400rpx;
		height: 100vh;
		visibility: hidden;
		/* 或者使用 opacity: 0; */
	}

	.newplaceholder {
		width: 128rpx;
		height: 100vh;
		visibility: hidden;
		/* 或者使用 opacity: 0; */
	}

	.fullsc,
	.setting {
		font-size: 50rpx;
		margin-right: 20rpx;
		color: #000;
		margin-top: 20rpx;
	}

	.el-dropdown-link {
		cursor: pointer;
		color: #409EFF;
	}

	.setting {
		margin-left: 20rpx;
		display: inline-block;
		animation: rotation 2s infinite linear;
	}

	.drawerright {
		font-weight: 1000;
	}

	@keyframes rotation {
		from {
			transform: rotate(0deg);
		}

		to {
			transform: rotate(360deg);
		}
	}

	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 400rpx;
		min-height: 800rpx;
	}

	.userLogo {
		margin-left: 10rpx;
		padding: 30rpx;
		width: 100rpx;
		height: 100rpx;
	}

	.userLo {
		padding: 22rpx;
		width: 90%;
		height: 80rpx;
		margin-left: 20rpx;
		margin-top: 18rpx;
	}

	.el-switch {
		margin-left: 25rpx;
	}

	.el-row span {
		display: inline-block;
		margin-top: 20rpx;
		margin-left: 20rpx;
	}

	.changeStatu,
	.changeStatuw {
		font-size: 45rpx;
		margin-top: 30rpx;
		cursor: pointer;
	}

	@media screen and (max-width: 1400px) {
		.userLo {
			width: 70%;
		}
	}

	@media screen and (max-width: 990px) {
		.el-header {
			height: 120rpx !important;
			/* position: fixed; */
			/* top:0; */
		}

		.homepage {
			width: 100% !important;
		}

		.changeStatu {
			display: none;
		}

		.changeStatuw {
			display: block !important;
		}

		.asos,
		.fullsc,
		.placeholder {
			display: none;
		}

		.changeStatus1 {
			display: block !important;
			font-size: 50rpx;
			margin-top: 30rpx;
			cursor: pointer;
			width: 100%;
		}

		.smalllogo {
			width: 55rpx;
			height: 55rpx;
		}

		.atvatr {
			width: 84%;
			left: 0rpx;
		}

		.ableta {
			position: fixed;
			width: 400rpx;
			top: 100rpx;
			margin-top: 20rpx;
			z-index: 99;
		}

		.newplaceholder {
			width: 0rpx;
			height: 100vh;
			visibility: hidden;
			/* 或者使用 opacity: 0; */
		}

		.footer {
			font-size: 20rpx;
		}
	}

	.homepage {
		width: 80%;
		height: 100vh;
	}

	.changeStatus1,
	.changeStatuw {
		display: none;
	}

	.el-main {
		height: 86vh;
		/* position: absolute; */
		top: 100rpx;
		z-index: 1;
		/* width: 100%; */
	}

	.el-menu {
		position: fixed;
		/* right: 400rpx; */
	}


	.headerTop {
		display: flex;
		/* z-index: 9999; */
		/* width: 100%; */
		position: fixed;
		background-color: #fff;
	}

	.el-header {
		height: 120rpx;
	}

	.footer {
		line-height: 120rpx;
		text-align: center;
		font-size: 26rpx;
		color: rgb(91, 98, 107);
	}

	/* 设置滚动条的轨道样式 */
	::-webkit-scrollbar {
		width: 8px;
		/* 滚动条宽度 */
	}

	/* 设置滚动条的滑块样式 */
	::-webkit-scrollbar-thumb {
		background-color: #409EFF;
		/* 滑块背景颜色 */
		border-radius: 4px;
		/* 滑块圆角 */
	}

	/* 设置滚动条的滑道样式 */
	::-webkit-scrollbar-track {
		background-color: #f1f1f1;
		/* 滑道背景颜色 */
		border-radius: 4px;
		/* 滑道圆角 */
	}
</style>