<template>
	<view>
		<div class="gird-contails">
			<el-card class="box-card">
				<template #header>
					<div class="card-header">
						<span>电子钱包历史记录</span>
						<!-- <el-button class="button" text>Operation button</el-button> -->
					</div>
				</template>
				<div>
					<div class="mony">
						<div style="font-size: 30rpx;">钱包</div>
						<div>
							<el-select v-model="select" slot="prepend" placeholder="请选择" size="medium">
								<el-option label="现金积分 (CP)" value="1"></el-option>
								<el-option label="旅游积分 (TP)" value="2"></el-option>
								<el-option label="Product Point (PP)" value="3"></el-option>
							</el-select>
						</div>
					</div>
					<div class="datamonth">
						<div style="font-size: 30rpx;">年-月</div>
						<div class="block" style="display: inline-block;">
							<el-select v-model="mouth" slot="prepend" placeholder="请选择" size="medium"
								style="width: 100%;">
								<div v-for="(item,index) in mouthArr">
									<el-option :label="item" :value="index"></el-option>
								</div>
							</el-select>
						</div>
						<div class="block" style="display: inline-block;">
							<el-select v-model="year" slot="prepend" placeholder="请选择" size="medium"
								style="width: 100%;">
								<div v-for="(item,index) in yearArr">
									<el-option :label="item" :value="index"></el-option>
								</div>
							</el-select>
						</div>
					</div>
					<div class="sumbit">
						<el-button type="primary" size="medium">提交</el-button>
					</div>
				</div>
				<el-table :data="tableData" class="custom-table"  align="center">
					<el-table-column prop="date" label="日期">
					</el-table-column>
					<el-table-column prop="description" label="交易说明">
					</el-table-column>
					<el-table-column prop="into" label="进">
					</el-table-column>
					<el-table-column prop="out" label="出">
					</el-table-column>
					<el-table-column prop="balance" label="余额">
					</el-table-column>
				</el-table>
				<div class="pagination" style="display: flex;justify-content: center;margin-top: 20rpx;">
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
		name: "wallet-records",
		data() {
			return {
				select: '现金积分 (CP)',
				value2: '',
				value3: '',
				mouth: '',
				year: '',
				mouthArr: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
					'October', 'November', 'December'
				],
				yearArr: [],
			};
		},
		mounted() {
			this.getMounth()
			this.getuserinfo()
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
			getuserinfo(){
				let _this = this
				_this.$axios.get('')
					.then(res=>{
						console.log(res)
					})
					.catch(err=>{
						console.log(err)
					})
			}
		}
	}
</script>

<style>
	.gird-contails {
		display: grid;
		grid-template-columns: 100%;
	}

	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.text {
		font-size: 14px;
	}

	.item {
		margin-bottom: 18px;
	}

	.el-input__suffix-inner {
		display: none !important;
	}

	.mony {
		display: grid;
		grid-template-columns: 840rpx 2374rpx;
		margin-top: 10rpx;
	}

	.datamonth {
		display: grid;
		grid-template-columns: 840rpx 1190rpx 1190rpx;
		margin-top: 10rpx;
	}

	.sumbit {
		margin-left: 840rpx;
		margin-top: 10rpx;
	}

	.el-select {
		width: 100%;
	}

	/* 在屏幕宽度小于990px时 */
	@media screen and (max-width: 990px) {
		.mony {
			display: grid;
			grid-template-columns: 1fr;
			margin-top: 10rpx;
		}

		.datamonth {
			display: grid;
			grid-template-columns: 1fr;
			margin-top: 10rpx;
		}

		.sumbit {
			margin-left: 0rpx;
			margin-top: 10rpx;
		}

		table {
			width: auto !important;
		}
	}
</style>