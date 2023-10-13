<template>
	<view class="home">

		<el-container>
			<el-header>
				<div class="header">
					<div class="logo">
						<img :src="logo" alt="" style="width: 30%;height: 60%;">
					</div>
					<div class="sreach">
						<el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
							<el-select v-model="select" slot="prepend" placeholder="请选择">
								<el-option label="一球" value="1"></el-option>
								<el-option label="三球" value="2"></el-option>
								<el-option label="七球" value="3"></el-option>
							</el-select>
							<el-button class="imgsreach" slot="append" icon="el-icon-search"></el-button>
						</el-input>
					</div>
					<div>
						<el-button type="primary" @tap="handlelogo">登陆</el-button>
					</div>
				</div>

			</el-header>
			<div v-if="homediable">
				<el-main>
					<el-card>
						<el-tabs @tab-click="handleSelect" v-model="activeIndex" :stretch='true'>
							<block v-for="item in tabbleTap">
								<el-tab-pane :label="item.name" :name="item.id"></el-tab-pane>
							</block>
						</el-tabs>
						<div class="carousel-container">
							<el-carousel :interval="3000" arrow="always">
								<el-carousel-item v-for="item in carouselmap" style="width: 100%;height: 100%;">
									<!-- <h3>{{ item }}</h3> -->
									<img :src="item.thumb" alt="" class="carousel-image">
								</el-carousel-item>
							</el-carousel>
						</div>

						<div class="scrolling-container" style="background-color: #E8F3FE;margin:20rpx 0rpx;height: 80rpx;line-height: 80rpx;">
							<div :class="['subtitle-item', { 'hidden': index !== currentIndex }]"
								v-for="(subtitle, index) in subtitles" :key="index">
								{{ subtitle }}
							</div>
						</div>

						<div style="margin: 20rpx 0rpx;">
							<!-- <span style="font-size: 40rpx;">猜你喜欢</span> --><el-tag type="danger">个性推荐</el-tag>
						</div>

						<el-row>
							<el-col :span="span" v-for="item in prounddata">
								<el-card :body-style="{ padding: '20px' }" @click.native="handelDetail(item.id)">
									<img :src="item.thumb" class="image">
									<div style="padding: 14px;">
										<span>{{item.title}}</span>
										<div class="bottom clearfix">
											<time class="time">MYR {{ item.productprice }}</time>
										</div>
									</div>
								</el-card>
							</el-col>
						</el-row>
						<div class="pagination">
							<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
								:current-page="currentPage" :page-sizes="[2, 4, 6, 8]" :page-size="pageSize"
								layout="total, sizes, prev, pager, next" :total="counttotal"></el-pagination>
						</div>
					</el-card>
				</el-main>
			</div>
			<div v-else>
				<el-main>
					<el-card>
						<div style="display: flex;">
							<div>
								<div style="width: 40%;display:flex;justify-content: center;margin: 30rpx;">
									<img :src="imgt">
								</div>
								<div style="width: 44%;">
									<block v-for="(item,i) in imgarr">
										<img :src="item" @click="changePhoto(i)" style="width: 50%;">
									</block>
								</div>
							</div>
							<div>
								<h4>{{title}}</h4>
								<div style="color: #b4b2b2;margin-top: 20rpx;">库存： {{total}}</div>
								<div style="color: red;margin-top: 20rpx;">价格： {{price}}</div>
								<el-button @tap="resert" size="mini" style="margin-top: 20rpx;">返回主页</el-button>
							</div>
						</div>
					</el-card>
				</el-main>
			</div>
		</el-container>
		<el-footer>
			<div class="footer">Copyright 2023. Felement Sdn Bhd. All Right Reserved.</div>
		</el-footer>

	</view>
</template>

<script>
	export default {
		name: "website-homepage",
		data() {
			return {
				input3: '',
				select: '',
				tabbleTap: {},
				activeIndex: 0,
				carouselmap: {},
				logo: '',
				span: 8,
				currentPage: 1, // 当前页码
				pageSize: 2, // 每页显示的条数
				cate: '',
				counttotal: 0,
				prounddata: '',
				homediable: true,
				imgt: '',
				title: '',
				total: '',
				price: '',
				imgt: '',
				imgarr: [],
				subtitles: [], // 字幕数组
				currentIndex: 0 ,// 当前显示的字幕索引
				interval:{}
			};
		},
		mounted() {
			this.showSubtitles();
			this.login()
			this.getcateList()
			this.getScreenWidth(); // 初始化获取屏幕宽度和缩放比例
			window.addEventListener('resize', this.handleResize); // 监听窗口大小变化
			this.getproundlist()
		},
		beforeDestroy() {
			// console.log('清停')
			this.clearSubtitleInterval()
			window.removeEventListener('resize', this.handleResize); // 移除监听事件
		},
		methods: {
			showSubtitles() {
				let _this = this
				this.interval = setInterval(() => {
					_this.currentIndex = (_this.currentIndex + 1) % _this.subtitles.length;
					// console.log(_this.currentIndex)
				}, 5000); // 设置滚动间隔时间
			},
			clearSubtitleInterval() {
			    clearInterval(this.interval);
			},
			login() {
				let _this = this
				_this.$axios.get('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.member')
					.then(res => {
						// console.log('登录状态',res)
						const {
							status
						} = res
						_this.$emit('status', status)
					})
					.catch(err => {
						console.log(err)
					})
			},
			handlelogo() {
				// console.log(11)
				this.clearSubtitleInterval()
				uni.navigateTo({
					url: '/pages/userLogin/userLogin'
				})
			},
			changePhoto(i) {
				console.log(i)
				let _this = this
				_this.imgt = _this.imgarr[i]
			},
			resert() {
				this.homediable = true
			},
			handelDetail(id) {
				console.log(id)
				let _this = this
				_this.homediable = false
				_this.$axios.get('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.home.goodsdetail&id=' + id)
					.then(res => {
						console.log(res)
						const {
							result: {
								title,
								productprice,
								total,
								thumb_url
							}
						} = res
						_this.title = title
						_this.price = productprice
						_this.total = total
						_this.imgarr = thumb_url
						_this.imgt = thumb_url[0]
					})
					.catch(err => {
						console.log(err)
					})
			},
			getcateList() {
				let _this = this
				//分类表
				_this.$axios.get(
						'/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.home.goodscate&pagesize=100&page=1')
					.then(res => {
						// console.log(res)
						const {
							result: {
								list
							}
						} = res
						_this.tabbleTap = list
					})
					.catch(err => {
						console.log(err)
					})
				//轮播图
				_this.$axios.get('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.home.banner')
					.then(res => {
						// console.log(res)
						const {
							result: {
								list,
								shopmes: {
									logo
								}
							}
						} = res
						_this.carouselmap = list
						_this.logo = logo
					})
					.catch(err => {
						console.log(err)
					})
				//广告
				_this.$axios.get(
						'/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.home.noticemes&page=1&pagesize=10')
					.then(res => {
						console.log(res)
						const {
							result: {
								list
							}
						} = res
						let ad = []
						for (let i = 0; i < list.length; i++) {
							ad.push(list[i].title)
						}
						console.log(ad)
						_this.subtitles = ad
					})
					.catch(err => {
						console.log(err)
					})


			},
			handleSelect(tab, event) {
				let _this = this
				// console.log(_this.activeIndex)
				_this.cate = _this.activeIndex
				_this.getproundlist()
			},
			// 处理每页显示条数变化
			handleSizeChange(val) {
				// console.log('处理每页显示条数变化',this.pageSize)
				this.pageSize = val;
				this.getproundlist();
			},
			// 处理当前页码变化
			handleCurrentChange(val) {
				// console.log('处理当前页码变化',val)
				this.currentPage = val;
				this.getproundlist();
			},
			getproundlist() {
				let _this = this
				_this.$axios.get('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.home.goodslist&page=' + _this
						.currentPage + '&pagesize=' + _this.pageSize + '&cate=' + _this.cate)
					.then(res => {
						// console.log(res)
						const {
							status,
							result: {
								list,
								total
							}
						} = res
						// if(status==1){
						_this.prounddata = list
						_this.counttotal = parseInt(total)
						// }else{
						// 	_this.counttotal = 0
						// }

					})
					.catch(err => {
						console.log(err)
					})
			},
			getScreenWidth() {
				this.screenWidth = window.innerWidth;
				if (this.screenWidth <= 990) {
					// this.drawerSize = '60%'
					this.span = 12
				} else {
					this.span = 8
				}
			},
			handleResize() {
				const newScreenWidth = window.innerWidth;
				if (newScreenWidth !== this.screenWidth) {
					this.screenWidth = newScreenWidth;
					console.log(newScreenWidth);
					if (newScreenWidth <= 990) {
						this.span = 12
					} else {
						this.span = 8
					}
				}
			},
		}
	}
</script>

<style scoped>
	.subtitle-item {
		color: #7dbcfc;
		white-space: nowrap;
		overflow: hidden;
		animation: scroll-left 10s linear;
		animation-fill-mode: forwards;
		width: 100%;
	}

	.hidden {
		display: none;
	}

	@keyframes scroll-left {
		0% {
			transform: translateX(100%);
		}

		100% {
			transform: translateX(-100%);
		}
	}




	.announcement-item {
		flex-shrink: 0;
		padding: 0 10px;
		height: 100%;
		line-height: 50px;
		background-color: #f5f5f5;
	}

	.announcement {
		height: 50px;
		line-height: 50px;
		text-align: center;
		background-color: #f5f5f5;
	}

	.image-container {
		display: flex;
		flex-wrap: wrap;
	}

	.product-image {
		width: 200px;
		height: 200px;
		object-fit: cover;
		transition: transform 0.3s;
	}

	.product-image:hover {
		transform: scale(1.2);
		/* 鼠标悬停时放大图片 */
	}

	.el-footer {
		height: 120rpx;
		position: fixed;
		width: 80%;
		bottom: 0;
		text-align: center;
	}

	.time {
		font-size: 13px;
		color: #999;
	}

	.bottom {
		margin-top: 13px;
		line-height: 12px;
	}

	.button {
		padding: 0;
		float: right;
	}

	.image {
		width: 40%;
		display: block;
	}

	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}

	.clearfix:after {
		clear: both
	}

	.el-select {
		width: 180rpx;
	}

	.sreach {
		width: 70%;
	}

	.el-menu-demo {
		width: 100% !important;
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

	.input-with-select .el-input-group__prepend {
		background-color: #fff;
	}

	.footer {
		height: 120rpx;
		background-color: #F5F5F5;
		line-height: 120rpx;
		text-align: center;
		font-size: 26rpx;
		width: 100%;
		color: rgb(91, 98, 107);
	}

	.header {
		display: flex;
		justify-content: space-between;
		line-height: 140rpx;
	}

	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 200px;
		margin: 0;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}

	.carousel-image {
		width: 100%;
		height: 100%;
		object-fit: fill;
		/* 适应方式，可根据需求选择合适的值，如：contain、cover、fill 等 */
	}


	.el-menu {
		display: flex;
		justify-content: space-between;
	}

	.pagination {
		display: flex;
		justify-content: center;
		margin: 35rpx 0rpx;
	}

	@media screen and (max-width: 990px) {
		/deep/.el-carousel__container {
			height: 300rpx;
		}

		.el-carousel {
			height: 300rpx;
		}

		.el-footer {
			width: 100%;
		}

		.logo img {
			width: 43% !important;
			height: 43% !important;
		}

		.sreach {
			width: 86% !important;
		}

		.footer {
			width: 100%;
			font-size: 20rpx;
		}

		.logo {
			width: 25% !important;
		}

		.el-select {
			width: 170rpx;
		}

		.el-input-group__append {
			width: 50% !important;
		}

		.home {
			height: 100vh;
		}

		/* .carousel-container,.el-carousel,.el-carousel .el-carousel__container{
			height: 300rpx !important;
			overflow: hidden;
		} */
	}
</style>