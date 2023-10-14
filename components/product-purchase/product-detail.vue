<template>
	<view>
		<el-card class="box-card">
			<div slot="header" class="clearfix">
				<span style="font-size: 32rpx;color: #79666B;display: flex;justify-content: center;"><b>Product
						Purchase</b></span>
			</div>
			<el-form :label-position="labelPosition" label-width="140px" :style="{marginLeft: fromleft}">
				<div style="display: flex;justify-content: space-around;">
					<div>
						<el-form-item label="电子邮件	:">
							{{email}}
						</el-form-item>
						<el-form-item label="联系电话	:">
							{{phone}}
						</el-form-item>
					</div>
					<div style="line-height: 280rpx;">
						<el-button size="mini" @tap="hanlderesrt">返回列表</el-button>
					</div>
				</div>
			</el-form>
			<el-table :data="tableData" style="width: 100%">
				<el-table-column fixed prop="id" label="ID" align="center">
				</el-table-column>
				<el-table-column fixed>
					<template slot-scope="scope">
						<block v-for="item in scope.row.thumb_url">
							<img :src="item" width="50" height="50" />
						</block>
					</template>
				</el-table-column>
				<el-table-column prop="title" label="配套名字" align="center">
				</el-table-column>
				<el-table-column prop="total" label="FV" align="center">
				</el-table-column>
				<el-table-column prop="productprice" label="价格 MYR" align="center">
				</el-table-column>
				<el-table-column prop="minprice" label="最低价 MYR" align="center">
				</el-table-column>
				<el-table-column prop="maxprice" label="最高价 MYR" align="center">
				</el-table-column>
				<!-- <el-table-column prop="totalnum" label="数量" align="center">
				</el-table-column>
				<el-table-column prop="totalprice" label="总计 MYR" align="center">
				</el-table-column> -->
			</el-table>
		</el-card>
	</view>
</template>

<script>
	export default {
		name: "product-detail",
		props: {
			todatail: {
				type: Object,
				default: {}
			},
		},
		data() {
			return {
				inputwith: '65%',
				currentPage1: 5,
				labelPosition: 'right',
				fromleft: '40rpx',
				email: '',
				phone: '',
				tableData: [],
			};
		},
		mounted() {
			this.initialize()
			window.addEventListener('resize', this.handleResize); // 监听窗口大小变化
		},
		beforeDestroy() {
			window.removeEventListener('resize', this.handleResize); // 移除监听事件
		},
		methods: {
			hanlderesrt(){
				let _this = this
				_this.$emit('getresrt','4-1')
			},
			initialize() {
				console.log('接收到的数据', this.todatail)
				let productDetails = this.todatail
				let self = this
				const {
					phone,
					email,
					id
				} = productDetails
				// console.log(id)
				self.email = email
				self.phone = phone
				self.$axios.get(
						'/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.goods.detail&id=' + id)
					.then(res => {
						const {
							result
						} = res
						let newresult = []
						newresult.push(result)
						self.tableData = newresult
					})
					.catch(err => {
						console.log(err)
					})
			},
			getScreenWidth() {
				this.screenWidth = window.innerWidth;
				if (this.screenWidth <= 990) {
					// this.labelw = '220rpx'
					this.labelPosition = 'top'
					this.inputwith = '100%'
					this.fromleft = '0rpx'
				} else {
					this.labelPosition = 'right'
					this.inputwith = '65%'
					this.fromleft = '40rpx'
				}
			},
			handleResize() {
				const newScreenWidth = window.innerWidth;
				if (newScreenWidth !== this.screenWidth) {
					this.screenWidth = newScreenWidth;
					console.log(newScreenWidth);
					if (newScreenWidth <= 990) {
						this.fromleft = '0rpx'
						this.labelPosition = 'top'
						this.inputwith = '100%'
					} else {
						this.fromleft = '40rpx'
						this.labelPosition = 'right'
						this.inputwith = '65%'
					}
				}
			},
		}
	}
</script>

<style>
	.equal-width-column {
		width: 100%;
	}

	.sumbit {
		margin-top: 20rpx;
		display: flex;
		justify-content: center;
	}
</style>