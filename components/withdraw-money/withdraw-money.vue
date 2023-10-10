<template>
	<view>
		<el-card class="box-card">
			<div slot="header" class="clearfix">
				<span>电子钱包取款</span>
			</div>
			<div style="font-size: 26rpx;text-decoration: underline;">账户摘要</div>
			<el-row>
				<el-col :span="elleft">现金积分余额</el-col>
				<el-col :span="elright">：0.00</el-col>
			</el-row>
			<el-row>
				<el-col :span="elleft">可转账余额</el-col>
				<el-col :span="elright">：0.00</el-col>
			</el-row>
			<el-row>
				<el-col :span="elleft">类型</el-col>
				<el-col :span="elright">：转账至银行户口</el-col>
			</el-row>
			<el-row>
				<el-col :span="elleft">银行类型</el-col>
				<el-col :span="elright">：0.00</el-col>
			</el-row>
			<el-row>
				<el-col :span="elleft">银行户口持有者</el-col>
				<el-col :span="elright">：TAN LAY FONG</el-col>
			</el-row>
			<el-row>
				<el-col :span="elleft">银行账户密码（例子：521481676243）</el-col>
				<el-col :span="elright"><span>：</span><el-input size="small"></el-input></el-col>
			</el-row>
			<el-row>
				<el-col :span="elleft">确认账户</el-col>
				<el-col :span="elright"><span>：</span><el-input size="medium"></el-input></el-col>
			</el-row>
			<el-row>
				<el-col :span="elleft">账户摘要</el-col>
				<el-col :span="elright"><span>：</span><el-input size="medium"></el-input></el-col>
			</el-row>
			<el-row>
				<el-col :span="elleft">银行地址</el-col>
				<el-col :span="elright"><span>：</span><el-input size="medium"></el-input></el-col>
			</el-row>
			<el-row>
				<el-col :span="elleft">银行分行</el-col>
				<el-col :span="elright"><span>：</span><el-input size="medium"></el-input></el-col>
			</el-row>
			<el-row>
				<el-col :span="elleft">银行国际代码</el-col>
				<el-col :span="elright"><span>：</span><el-input size="medium"></el-input></el-col>
			</el-row>
			<el-row>
				<el-col :span="elleft">身份证证明文件类型</el-col>
				<el-col :span="elright"><span>：</span><el-input size="medium"></el-input></el-col>
			</el-row>
			<el-row>
				<el-col :span="elleft">身份/护照/公司号码</el-col>
				<el-col :span="elright"><span>：</span><el-input size="medium"></el-input></el-col>
			</el-row>
			<el-row>
				<el-col :span="elleft">电邮</el-col>
				<el-col :span="elright"><span>：</span><el-input size="medium"></el-input></el-col>
			</el-row>
			<el-row>
				<el-col :span="elleft">转账金额</el-col>
				<el-col :span="elright"><span>：</span><el-input size="medium"></el-input></el-col>
			</el-row>
			<el-row>
				<el-col :span="elleft"></el-col>
				<el-col :span="elright" style="margin-top: 25rpx;"><el-checkbox v-model="checked">Save bank infomation above</el-checkbox></el-col>
			</el-row>
			<el-row>
				<el-col :span="elleft"></el-col>
				<el-col :span="elright" style="margin-top: 25rpx;color: red;">Any request for cash withdrawal from CP wallet is subjected to an admin fee of USD 1 per transaction</el-col>
			</el-row>
		</el-card>

	</view>
</template>

<script>
	export default {
		name: "withdraw-money",
		data() {
			return {
				elleft:'5',
				elright:'8'
			};
		},
		mounted() {
			this.getScreenWidth(); // 初始化获取屏幕宽度和缩放比例
			window.addEventListener('resize', this.handleResize); // 监听窗口大小变化
		},
		beforeDestroy() {
		    window.removeEventListener('resize', this.handleResize); // 移除监听事件
		},
		methods:{
			getScreenWidth() {
			    this.screenWidth = window.innerWidth;
				if(this.screenWidth<=990){
				 	this.elleft = '20'
					this.elright = '24'
				}else {
				 	this.elleft = '5'
				 	this.elright = '8'
				}
			},
			handleResize() {
			    const newScreenWidth = window.innerWidth;
			    if (newScreenWidth !== this.screenWidth) {
			        this.screenWidth = newScreenWidth;
			        console.log(newScreenWidth);
					if(newScreenWidth<=990){
						this.elleft = '20'
						this.elright = '24'
					}else {
						this.elleft = '5'
						this.elright = '8'
					}
			    }
			},
		}
	}
</script>

<style>
	.el-col {
		border-radius: 4px;
		display: flex;
		margin-top: 10rpx;
	}
	.el-col span{
		display: inline-block;
		margin-top: 10rpx;
	}

	.bg-purple-dark {
		background: #99a9bf;
	}

	.bg-purple {
		background: #d3dce6;
	}

	.bg-purple-light {
		background: #e5e9f2;
	}

	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}
	.el-row{
		font-size: 26rpx;
	}
	.el-input{
		display: inline-block;
	}
	@media screen and (max-width: 990px) {
		.el-row{
			display: grid;
			grid-template-columns: 1fr;
		}
	}
</style>