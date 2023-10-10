<template>
	<view>
		<el-card class="box-card">
			<div slot="header" class="clearfix">
				<span style="color: #5B6299;"><b>Member Tree Report</b></span>
			</div>
			<div class="Report">
				<div>
					<div>经销商编号</div>
					<div>MY60122122378</div>
				</div>
				<div>
					<div>经销商名字</div>
					<div>TAN LAY FONG</div>
				</div>
				<div>
					<div>Sponsor By</div>
					<div>MY60126656586</div>
				</div>
				<div>
					<div>推荐经销商名字</div>
					<div>TOH SIEH LING</div>
				</div>
				<div>
					<div>加入日期</div>
					<div>2023-07-30</div>
				</div>
				<div>
					<div>Rank</div>
					<div>CEO</div>
				</div>
				<div>
					<div>Network</div>
					<div><img src="../../static/img/VRep.jpg"></div>
				</div>
			</div>
			<el-row><img src="../../static/img/Rev.jpg" alt=""> - 从您的下属直到您自己的系谱报告</el-row>
			<el-row><img src="../../static/img/VRep.jpg" alt=""> - 系谱图</el-row>
			<el-table :data="tableData" style="width: 100%" :default-sort="{prop: 'date', order: 'descending'}">
				<el-table-column prop="address" label="经销商编号" :formatter="formatter">
				</el-table-column>
				<el-table-column prop="date" label="经销商名字" sortable width="180">
				</el-table-column>
				<el-table-column prop="name" label="推荐经销商编号"  width="180">
				</el-table-column>
				<el-table-column prop="address" label="推荐经销商名字" :formatter="formatter">
				</el-table-column>
				<el-table-column prop="address" label="加入日期"sortable :formatter="formatter">
				</el-table-column>
				<el-table-column prop="date" label="层次"  width="180">
				</el-table-column>
				<el-table-column prop="name" label="Rank"  width="180">
				</el-table-column>
				<el-table-column prop="address" label="Network" :formatter="formatter">
				</el-table-column>
			</el-table>
		</el-card>
	</view>
</template>

<script>
	export default {
		name: "member-tree",
		data() {
			return {

			};
		},
		methods: {
			formatter(row, column) {
				return row.address;
			}
		}
	}
</script>

<style>
	.Report {
		font-size: 26rpx;
		display: flex;
		justify-content: space-around;
		text-align: center;
	}

	.el-row {
		font-size: 26rpx;
		margin-top: 20rpx;
	}

	@media screen and (max-width:990px) {
		.Report {
			display: grid;
			grid-template-columns: 1fr;
		}
	}
</style>