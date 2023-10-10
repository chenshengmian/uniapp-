<template>
	<view>
		<div class="gird-contails">
			<el-card class="box-card">
				<template #header>
					<div class="card-header">
						<span>电子钱包取款状况</span>
						<!-- <el-button class="button" text>Operation button</el-button> -->
					</div>
				</template>
				<div class="yearmonth">
					<div style="display: flex;">
						<div class="month">
							<el-select v-model="mouth" slot="prepend" placeholder="请选择" size="medium" >
								<div v-for="(item,index) in mouthArr">
									<el-option :label="item" :value="index"></el-option>
								</div>
							</el-select>
						</div>
						<div class="year">
							<el-select v-model="year" slot="prepend" placeholder="请选择" size="medium" >
								<div v-for="(item,index) in yearArr">
									<el-option :label="item" :value="index"></el-option>
								</div>
							</el-select>
						</div>
					</div>
					<div class="sumbit">
						<el-button type="primary" size="medium">提款状况查询</el-button>
					</div>
				</div>
				 <el-table
				    :data="tableData"
					class="custom-table"
				   >
				   
				    <el-table-column
				      prop="description"
				      label="申请日期"
				      s>
				    </el-table-column>
				    <el-table-column
				      prop="into"
				      label="银行名称">
				    </el-table-column>
					<el-table-column
					  prop="date"
					  label="银行户口持有者"
					  >
					</el-table-column>
					<el-table-column
					  prop="out"
					  label="银行账户号码">
					</el-table-column>
					<el-table-column
					  prop="balance"
					  label="转账金额">
					</el-table-column>
					<el-table-column
					  prop="balance"
					  label="状况">
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
				mouth:'',
				year:'',
				mouthArr:['January','February','March','April','May','June','July','August','September','October','November','December'],
				yearArr:[],
			};
		},
		mounted() {
			this.getMounth()
		},
		methods:{
			getMounth(){
				const current = new Date()
				const yearNew = current.getFullYear()
				this.yearArr = [yearNew-5,yearNew-4,yearNew-3,yearNew-2,yearNew-1,yearNew]
				const mouthNew = current.getMonth()
				this.mouth = this.mouthArr[mouthNew]
				this.year = yearNew
			}
		}
	}
</script>

<style>
	.month,.year{
		margin-right: 20rpx;
	}
	.yearmonth {
		display: flex;
	}
	
	@media screen and (max-width: 990px) {
		.yearmonth {
			display: block !important;
		}
	}
</style>

