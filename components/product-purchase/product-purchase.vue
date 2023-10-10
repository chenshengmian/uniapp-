<template>
	<view>
		<el-card class="box-card">
			<div slot="header" class="clearfix">
				<span style="font-size: 32rpx;color: #79666B;"><b>Product Purchase</b></span>
			</div>
			<el-form :label-position="labelPosition" label-width="140px" :style="{marginLeft: fromleft}"
				:model="formLabelAlign">
				<el-form-item label="电子邮件	:">
					<el-input v-model="formLabelAlign.email" :style="{width: inputwith}" size="small"></el-input>
				</el-form-item>
				<el-form-item label="联系电话	:">
					<el-input v-model="formLabelAlign.phone" :style="{width: inputwith}" size="small"></el-input>
				</el-form-item>
			</el-form>
			<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
				<block v-for="item in tabbleTap">
					<el-menu-item :index="item.id">{{item.name}}</el-menu-item>
				</block>
			</el-menu>
			<el-table :data="tableData" style="width: 100%;margin-top: 20rpx;" @row-click="hanldedetail">
				<el-table-column fixed prop="id" label="ID" align="center">
				</el-table-column>
				<el-table-column fixed>
					<template slot-scope="scope">
						<img :src="scope.row.thumb" width="50" height="50" />
					</template>
				</el-table-column>
				<el-table-column prop="title" label="配套名字" align="center">
				</el-table-column>
				<el-table-column prop="total" label="FV" align="center">
				</el-table-column>
				<el-table-column prop="productprice" label="价格 MYR" align="center">
					<template slot-scope="scope">
						MYR    {{scope.row.productprice}}  
					</template>
				</el-table-column>
				<el-table-column prop="minprice" label="最低价 MYR" align="center">
					<template slot-scope="scope">
						MYR    {{scope.row.minprice}}  
					</template>
				</el-table-column>
				<!-- <el-table-column prop="count" label="数量" align="center">
					<template slot-scope="scope">
						<el-input size="small" v-model="scope.row.count"></el-input>
					</template>
				</el-table-column> -->
			</el-table>
			<!-- <div class="sumbit">
				 <el-button size="small" type="primary" @tap="hanldedetail">提交</el-button>
			</div> -->
			<div class="pagination sumbit">
				<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
					:current-page="currentPage" :page-sizes="[2, 4, 6, 8]" :page-size="pageSize"
					layout="total, sizes, prev, pager, next" :total="counttotal"></el-pagination>
			</div>
		</el-card>
	</view>
</template>

<script>
	export default {
		name: "product-purchase",
		data() {
			return {
				inputwith: '65%',
				currentPage1: 5,
				labelPosition: 'right',
				fromleft: '40rpx',
				formLabelAlign: {
					email: '',
					phone: '',
					id:'4-3'
				},
				tableData: '',
				counttotal: 0,
				tableData: [], // 表格数据源
				currentPage: 1, // 当前页码
				pageSize: 2, // 每页显示的条数
				activeIndex:'',
				tabbleTap:''
			};
		},
		mounted() {
			this.getScreenWidth(); // 初始化获取屏幕宽度和缩放比例
			window.addEventListener('resize', this.handleResize); // 监听窗口大小变化
			this.getProduct()
			this.getcatelist()
		},
		beforeDestroy() {
			window.removeEventListener('resize', this.handleResize); // 移除监听事件
		},
		methods: {
			handleSelect(param){
				// console.log(param)
				let self = this
				self.activeIndex = param
				self.getProduct()
			},
			getcatelist(){
				let self = this
				self.$axios.get('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.goods.goodscates&pagesize=100')
					.then(res=>{
						console.log(res)
						const { result:{list} } = res
						self.tabbleTap = list
					})
					.catch(err=>{
						console.log(err)
					})
			},
			// 处理每页显示条数变化
			handleSizeChange(val) {
				// console.log('处理每页显示条数变化',this.pageSize)
				this.pageSize = val;
				this.getProduct();
			},
			// 处理当前页码变化
			handleCurrentChange(val) {
				// console.log('处理当前页码变化',val)
				this.currentPage = val;
				this.getProduct();
			},
			getProduct() {
				let self = this
				self.$axios.get('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.goods.getlist&page=' + self.currentPage+'&pagesize='+self.pageSize+'&cate='+self.activeIndex)
					.then(res => {
						// console.log(res)
						const {
							result: {
								total,
								list
							}
						} = res
						console.log(list)
						if(total==undefined){
							self.counttotal = 0
						}else{
							self.counttotal = parseInt(total)
						}
						self.tableData = list
					})
					.catch(err => {
						console.log(err);
					})
			},
			hanldedetail(param){
				// console.log(this.tableData)
				// let newdata = [];
				// let alldata = this.tableData
				// for(let i=0;i<alldata.length;i++){
				// 	if(alldata[i].hasOwnProperty('count')){
				// 		newdata.push(alldata[i])
				// 	}
				// }
				// if(newdata==''){
				// 	this.$message({
				// 		showClose: true,
				// 		message: '请填写需要购买产品的数量',
				// 		type: 'warning'
				// 	});
				// }else{
				// 	newdata.push(this.formLabelAlign)
				console.log('parm',param)
				const { id } = param
				const array = {
					'index': '4-3',
					'id' : id,
					'email':this.formLabelAlign.email,
					'phone':this.formLabelAlign.phone
				}
				this.$emit('godatail',array)
				// }
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
	.sumbit{
		margin-top: 20rpx;
		display: flex;
		justify-content: center;
	}
</style>