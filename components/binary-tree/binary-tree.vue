<template>
	<view>
		<el-card class="box-card">
			<l-echart ref="chart" style="height: 78vh;"></l-echart>
		</el-card>
	</view>
</template>

<script>
	import LEchart from '@/uni_modules/lime-echart/components/l-echart/l-echart.vue';
	import * as echarts from 'echarts';
	export default {
		components: {
			LEchart
		},
		data() {
			return {
				
			}
		},
		async mounted() {
			var self = this
			this.$refs.chart.init(echarts, chart => {
				var data1 = uni.getStorageSync('data')
				// console.log(data1[0])
				var option = {
					series: [{
						type: 'tree',
						initialTreeDepth: 2,
						name: 'tree1',
						data: [data1[0]],
						top: '4%',
						left: '2%',
						bottom: '4%',
						right: '2%',
						symbolSize: [30, 30],
						symbol: 'emptyCircle', 
						lineStyle: {
							curveness: 0 // 设置连接线为直线
						},
						orient: 'TB',
						label: {
							normal: {
								position: 'inside',
								verticalAlign: 'middle',
								align: 'center', 
								color: 'black'
							}
						}
					}]
				};
				chart.setOption(option)
				
				chart.on('click',params=>{
					if(params.name==''){
						console.log('Clicked node:', params);
						let fatree = params.treeAncestors
						if(fatree[fatree.length-2].name !=''){
							let datato = {
								'index': 3,
								'nodeid':params.data.id
							}
							self.$emit('indexChange',datato)
						}else{
							self.$message('该节点的父节点还未注册！');
						}
					}else{
						self.$message({
							message: '该节点的已注册！',
							type: 'success'
						});
					}
					// if (params.data.children) {
					//  	params.data.children.forEach(child => {
					//  		child.name = '';
					//  	});
					//  	chart.setOption(option);
					// }
					// console.log('Clicked node:', params);
				})
			});
		},
	}
</script>