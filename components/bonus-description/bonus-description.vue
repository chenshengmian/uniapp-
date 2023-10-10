<template>
	<view>
		<div class="gird-contails">
			<el-card class="box-card">
				<template #header>
					<div class="card-header">
						<span>奖金说明</span>
						<!-- <el-button class="button" text>Operation button</el-button> -->
					</div>
				</template>
				<div class="yearmonth">
					<div style="font-size: 26rpx;margin-top: 20rpx;">年-月：</div>
					<div style="display: flex;">
						<div class="year">
							<el-select v-model="year" slot="prepend" placeholder="请选择" size="medium">
								<div v-for="(item,index) in yearArr">
									<el-option :label="item" :value="index"></el-option>
								</div>
							</el-select>
						</div>
						<div class="month">
							<el-select v-model="mouth" slot="prepend" placeholder="请选择" size="medium">
								<div v-for="o in 12" :key="o" class="text item">
									<el-option :label="o" :value="o"></el-option>
								</div>
							</el-select>
						</div>
						<div class="year">
							<el-select v-model="year" slot="prepend" placeholder="请选择" size="medium">
								<div v-for="(item,index) in yearArr">
									<el-option :label="item" :value="index"></el-option>
								</div>
							</el-select>
						</div>
						<div class="month">
							<el-select v-model="mouth" slot="prepend" placeholder="请选择" size="medium">
								<div v-for="o in 12" :key="o" class="text item">
									<el-option :label="o" :value="o"></el-option>
								</div>
							</el-select>
						</div>
					</div>
					<div class="sumbit">
						<el-button type="primary" size="medium">提款状况查询</el-button>
					</div>
				</div>
				<div class="bonuscontent">
					<div class="text item bonusleft" >
						<div>经销商编号 : <span style="margin-left: 10rpx; display: inline-block;"> MY60122122378</span>
						</div>
						<div>经销商名字 : <span style="margin-left: 10rpx; display: inline-block;"> TAN LAY FONG</span></div>
						<div><span style="margin-left: 24rpx; display: inline-block;">加入日期 : </span><span
								style="margin-left: 10rpx; display: inline-block;"> 7/30/2023 6:05:00 PM</span></div>
						<div>经销商配套 : <span style="margin-left: 10rpx; display: inline-block;"> Five Fortunes
								Package</span></div>
						<div><span style="margin-left: 78rpx; display: inline-block;">级别 : </span><span
								style="margin-left: 10rpx; display: inline-block;"> CEO</span></div>
					</div>
					<div class="bonusAll" style="margin-top: 20rpx;">
						<div class="bonustitle">奖金摘要</div>
						<div class="bonusright"><span>Retail Bonus (Personal)</span>0.00</span></div>
						<div class="bonusright"><span>Retail Bonus (Overriding)</span></span>0.00</span></div>
						<div class="bonusright"><span>Network Bonus</span></span>0.00</span></div>
						<div class="bonusright"><span>Matching Bonus</span></span>0.00</span></div>
						<div class="bonusright"><span>Travel Bonus</span></span>0.00</span></div>
						<div class="bonusright"><span>Gold Millionaire Pool</span></span>0.00</span></div>
						<div class="bonusright"><span>Retail Bonus (Overriding)</span></span>0.00</span></div>
						<div class="bonusright"><span>Platinm Millionaire Pool</span></span>0.00</span></div>
						<div class="bonusright"><span>Diamond Millionaire Pool</span></span>0.00</span></div>
						<div class="bonusright"><span>总计</span></span>0.00</span></div>

					</div>
				</div>
				<div class="tabletitle">Retail Bonus (Personal)</div>
				<el-table :data="tableData" class="custom-table">

					<el-table-column prop="description" label="日期" >
					</el-table-column>
					<el-table-column prop="into" label="经销商编号">
					</el-table-column>
					<el-table-column prop="date" label="经销商名字">
					</el-table-column>
					<el-table-column prop="out" label="Sales Order No">
					</el-table-column>
					<el-table-column prop="balance" label="奖金">
					</el-table-column>
				</el-table>
				<div class="tabletitle">Retail Bonus (Overriding)</div>
				<el-table :data="tableData" class="custom-table">
				
					<el-table-column prop="description" label="日期" >
					</el-table-column>
					<el-table-column prop="into" label="经销商编号">
					</el-table-column>
					<el-table-column prop="date" label="经销商名字">
					</el-table-column>
					<el-table-column prop="out" label="Sales Order No">
					</el-table-column>
					<el-table-column prop="balance" label="奖金">
					</el-table-column>
				</el-table>
				<div class="tabletitle">Network Bonus</div>
				<el-table :data="tableData" class="custom-table">
				
					<el-table-column prop="description" label="日期" >
					</el-table-column>
					<el-table-column prop="into" label="经销商编号">
					</el-table-column>
					<el-table-column prop="date" label="经销商名字">
					</el-table-column>
					<el-table-column prop="out" label="Sales Order No">
					</el-table-column>
					<el-table-column prop="balance" label="奖金">
					</el-table-column>
				</el-table>
				<div class="tabletitle">Matching Bonus</div>
				<el-table :data="tableData" class="custom-table">
				
					<el-table-column prop="description" label="日期" >
					</el-table-column>
					<el-table-column prop="into" label="经销商编号">
					</el-table-column>
					<el-table-column prop="date" label="经销商名字">
					</el-table-column>
					<el-table-column prop="out" label="Sales Order No">
					</el-table-column>
					<el-table-column prop="balance" label="奖金">
					</el-table-column>
				</el-table>
				<div class="tabletitle">Travel Bonus</div>
				<el-table :data="tableData" class="custom-table">
				
					<el-table-column prop="description" label="日期" >
					</el-table-column>
					<el-table-column prop="into" label="经销商编号">
					</el-table-column>
					<el-table-column prop="date" label="经销商名字">
					</el-table-column>
					<el-table-column prop="out" label="Sales Order No">
					</el-table-column>
					<el-table-column prop="balance" label="奖金">
					</el-table-column>
				</el-table>
				<div class="tabletitle">Gold Millionaire Pool</div>
				<el-table :data="tableData" class="custom-table">
				
					<el-table-column prop="description" label="日期" >
					</el-table-column>
					<el-table-column prop="into" label="经销商编号">
					</el-table-column>
					<el-table-column prop="date" label="经销商名字">
					</el-table-column>
					<el-table-column prop="out" label="Sales Order No">
					</el-table-column>
					<el-table-column prop="balance" label="奖金">
					</el-table-column>
				</el-table>
				<div class="tabletitle">Platinm Millionaire Pool</div>
				<el-table :data="tableData" class="custom-table">
				
					<el-table-column prop="description" label="日期" >
					</el-table-column>
					<el-table-column prop="into" label="经销商编号">
					</el-table-column>
					<el-table-column prop="date" label="经销商名字">
					</el-table-column>
					<el-table-column prop="out" label="Sales Order No">
					</el-table-column>
					<el-table-column prop="balance" label="奖金">
					</el-table-column>
				</el-table>
				<div class="tabletitle">Diamond Millionaire Pool</div>
				<el-table :data="tableData" class="custom-table">
					<el-table-column prop="description" label="日期" >
					</el-table-column>
					<el-table-column prop="into" label="经销商编号">
					</el-table-column>
					<el-table-column prop="date" label="经销商名字">
					</el-table-column>
					<el-table-column prop="out" label="Sales Order No">
					</el-table-column>
					<el-table-column prop="balance" label="奖金">
					</el-table-column>
				</el-table>
			</el-card>
		</div>
	</view>
</template>

<script>
	export default {
		name: "withdrawal-status",
		data() {
			return {
				mouth: '',
				year: '',
				yearArr: [],
			};
		},
		mounted() {
			this.getMounth()
		},
		methods: {
			getMounth() {
				const current = new Date()
				const yearNew = current.getFullYear()
				this.yearArr = [yearNew - 2, yearNew - 1, yearNew]
				const mouthNew = current.getMonth()
				this.mouth = mouthNew + 1
				this.year = yearNew
			}
		}
	}
</script>

<style>
	.bonusleft div{
		margin-top: 18rpx;
	}
	.bonusleft{
		margin-left: 400rpx;
	}
	
	.tabletitle{
		font-size: 26rpx;
		border-bottom: 1rpx solid #E9ECEF;
		display: flex;
		justify-content: center;
		margin-top: 30rpx;
		margin-bottom: 30rpx;
	}
	
	.bonustitle {
		display: flex;
		justify-content: center;
	}

	.bonuscontent {
		display: grid;
		grid-template-columns: 50% 50%;
		font-size: 26rpx;
	}

	.bonusright span {
		display: inline-block;
	}

	.bonusright {
		display: flex;
		justify-content: space-between;
		border-bottom: 1rpx solid #E9ECEF;
		padding: 20rpx;
	}

	.month,
	.year {
		margin-right: 20rpx;
	}

	.yearmonth {
		display: grid;
		grid-template-columns: 3% 40% 10% ;
	}

	@media screen and (max-width: 990px) {
		.yearmonth {
			grid-template-columns: 1fr;
		}
		.yearmonth div{
			margin-top: 10rpx;
		}
		.bonuscontent{
			display: grid;
			grid-template-columns: 1fr;
			width: 100%;
		}
		.bonusleft{
			margin-left: 20rpx;
		}
	}
	
</style>