<template>
	<view>
		<div class="gird-contails">
			<el-card class="box-card">
				<template #header>
					<div class="card-header">
						<span>购买历史记录</span>
						<!-- <el-button class="button" text>Operation button</el-button> -->
					</div>
				</template>
				<div class="yearmonth">
					<div style="line-height: 72rpx;font-size: 26rpx;margin-right: 20rpx;">年-月: </div>
					<div class="online">
						<div class="month">
							<el-select v-model="mouth" slot="prepend" placeholder="请选择" size="medium">
								<div v-for="(item,index) in mouthArr">
									<el-option :label="item" :value="item"></el-option>
								</div>
							</el-select>
						</div>
						<div class="year">
							<el-select v-model="year" slot="prepend" placeholder="请选择" size="medium">
								<div v-for="item in yearArr">
									<el-option :label="item" :value="item"></el-option>
								</div>
							</el-select>
						</div>
						<div class="year">
							<el-select v-model="member" slot="prepend" placeholder="请选择" size="medium">
								<div v-for="(item,index) in memberArr">
									<el-option :label="item" :value="++index"></el-option>
								</div>
							</el-select>
						</div>
					</div>
					<div class="sumbit">
						<el-button type="primary" size="medium" @tap="handleSelect">提交</el-button>
					</div>
				</div>
				<el-table :data="tableData" class="custom-table">

					<el-table-column prop="goodtype.name" label="等级名称" align="center">
					</el-table-column>
					<el-table-column prop="ordersn" label="订单单号" align="center">
					</el-table-column>
				<!-- 	<el-table-column prop="into" label="税务发票编号" align="center">
					</el-table-column> -->
					<el-table-column prop="price" label="数额" align="center">
						<template slot-scope="scope">
							MYR    {{scope.row.price}}  
						</template>
					</el-table-column>
					<el-table-column prop="statusstr" label="付款状况" align="center">
					</el-table-column>
				</el-table>
				<div class="pagination">
					<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
						:current-page="currentPage" :page-sizes="[2, 4, 6, 8]" :page-size="pageSize"
						layout="total, sizes, prev, pager, next" :total="counttotal"></el-pagination>
				</div>
			</el-card>
		</div>
	</view>
</template>

<script>
	export default {
		name: "purchase-history",
		data() {
			return {
				mouth: '',
				year: '',
				mouthArr: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
					'October', 'November', 'December'
				],
				memberArr: ['会员的订单', '帮注册会员的订单'],
				yearArr: [],
				tableData: [],
				member: '',
				counttotal: 0,
				currentPage: 1, // 当前页码
				pageSize: 2, // 每页显示的条数
			};
		},
		mounted() {
			this.getMounth()
			this.gethistory()
		},
		methods: {
			getMounth() {
				const current = new Date()
				const yearNew = current.getFullYear()
				this.yearArr = [yearNew - 5, yearNew - 4, yearNew - 3, yearNew - 2, yearNew - 1, yearNew]
				const mouthNew = current.getMonth()
				this.mouth = this.mouthArr[mouthNew]
				this.year = yearNew
			},
			gethistory() {
				let self = this
				self.$axios.get('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.order&page=' + self
						.currentPage + '&type=' + self.member + '&pagesize=' + self.pageSize + '&year=' + self.year+'&month='+self.mouth)
					.then(res => {
						const { result:{list} } = res
						console.log(list)
						self.tableData = list
						self.counttotal = list.length
					})
					.catch(err => {
						console.log(err)
					})
			},
			handleSelect() {
				let self = this
				self.gethistory()
				// console.log(self.member)
			}
		}
	}
</script>

<style>
	.month,
	.year {
		margin-right: 20rpx;
	}

	.pagination {
		display: flex;
		justify-content: center;
		margin-top: 20rpx;
	}

	.yearmonth {
		display: flex;
	}

	.online {
		display: flex;
	}

	@media screen and (max-width: 990px) {
		.yearmonth {
			display: block !important;
		}

		.sumbit {
			margin-top: 20rpx;
		}

		.online {
			display: grid;
			grid-template-columns: 1fr;
		}

		.online div {
			margin-top: 20rpx;
		}
	}
</style>