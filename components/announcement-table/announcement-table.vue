<template>
	<el-card>
		<div v-if="andiable">
			<el-table :data="tableData" border style="width: 100%" @row-click="gotodetail">
				<el-table-column prop="id" label="ID" align="center">
				</el-table-column>
				<el-table-column prop="title" label="标题" align="center">
				</el-table-column>
				<el-table-column prop="detail" label="内容" align="center">
				</el-table-column>
				<el-table-column prop="createtime" label="更新时间" align="center">
				</el-table-column>
			</el-table>
		</div>
		<div v-else>
			<div  class="text item">
				<div>ID：{{id}}</div>
				<div>标题：{{title}}</div>
				<div>时间：{{time}}</div>
				<div>内容：{{detail}}</div>
				图片：<img :src="img" alt="">
			</div>
			<el-button size="mini" @tap="resert">返回列表</el-button>
		</div>
	</el-card>
</template>

<script>
	export default {
		data() {
			return {
				tableData: [],
				andiable:true,
				id:0,
				title:'',
				time:'',
				detail:'',
				img:'',
			}
		},
		mounted() {
			this.getannoumn()
		},
		methods:{
			resert(){
				this.andiable = true
			},
			getannoumn(){
				let _this = this
				_this.$axios.get(
						'/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.home.noticemes&page=1&pagesize=10')
					.then(res => {
						const {
							result: {
								list
							}
						} = res
						// console.log(list)
						_this.tableData = list
					})
					.catch(err => {
						console.log(err)
					})
			},
			async gotodetail(param){
				// console.log(param.id)
				let _this = this
				await _this.$axios.get('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.home.noticedetail&id='+ param.id)
					.then(res=>{
						console.log(res)
						const { result:{id,title,detail,thumb,createtime} } = res
						_this.id = id
						_this.title = title
						_this.detail = detail
						_this.img = thumb
						console.log(createtime)
						_this.time = _this.timp(createtime)
					})
					.catch(err=>{
						console.log(err)
					})
				_this.andiable = false
			},
			timp(ti){
				var temp = parseInt(ti)
				var date = new Date(temp);
				var Y = date.getFullYear()+'-';
				// console.log(Y)
				var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
				var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
				
				var h = (date.getHours() < 10 ? '0' + (date.getHours()) : date.getHours()) + ':';
				var m = (date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes()) + ':';
				var s = (date.getSeconds() < 10 ? '0' + (date.getSeconds()) : date.getSeconds());
				var strDate = Y + M + D + h + m + s; 
				return strDate
			}
		}
	}
</script>

<style>
	
	.text {
	  font-size: 28rpx;
	}
	
	.item {
	  margin-bottom: 36rpx;
	}
</style>