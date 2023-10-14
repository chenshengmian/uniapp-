<template>
	<view>
		<div class="gird-contails">
			<el-card class="box-card">
				<template #header>
					<div class="card-header">
						<span style="color: #5B626B;">小组业绩报告</span>
						<!-- <el-button class="button" text>Operation button</el-button> -->
					</div>
				</template>
				<div class="yearmonth">
					<div style="line-height: 72rpx;font-size: 26rpx;margin-right: 20rpx;">年度: </div>
					<div style="display: flex;">
						<div class="year">
							<el-select v-model="year" slot="prepend" placeholder="请选择" size="medium" >
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
				<div class="card-header" style="margin-top: 20rpx;">
					<span style="color: #5B626B;">小组业绩报告</span>
				</div>
				 <el-table
				    
					class="custom-table"
				   >
				   
				    <el-table-column
				      prop="description"
				      label="Rank"
				      s>
				    </el-table-column>
				    <el-table-column
				      prop="into"
				      label="Group Highest Rank">
				    </el-table-column>
					<el-table-column
					  prop="date"
					  label="2023-01"
					  >
					</el-table-column>
					<el-table-column
					  prop="out"
					  label="2023-02">
					</el-table-column>
					<el-table-column
					  prop="balance"
					  label="2023-03">
					</el-table-column>
					<el-table-column
					  prop="balance"
					  label="2023-04">
					</el-table-column>
					<el-table-column
					  prop="balance"
					  label="2023-05">
					</el-table-column>
					<el-table-column
					  prop="balance"
					  label="2023-06">
					</el-table-column>
					<el-table-column
					  prop="balance"
					  label="2023-07">
					</el-table-column>
					<el-table-column
					  prop="balance"
					  label="2023-08">
					</el-table-column>
					<el-table-column
					  prop="balance"
					  label="2023-04">
					</el-table-column>
					<el-table-column
					  prop="balance"
					  label="2023-09">
					</el-table-column>
					<el-table-column
					  prop="balance"
					  label="2023-10">
					</el-table-column>
					<el-table-column
					  prop="balance"
					  label="2023-11">
					</el-table-column>
					<el-table-column
					  prop="balance"
					  label="2023-12">
					</el-table-column>
					<el-table-column
					  prop="balance"
					  label="总计">
					</el-table-column>
				  </el-table>
			</el-card>
		</div>
	</view>
</template>

<script>
	export default {
		name: "performance-reports",
		data() {
			return {
				year:'',
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
				this.yearArr = [yearNew-1,yearNew]
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
		.sumbit{
			margin-top: 20rpx;
		}
	}
</style>

