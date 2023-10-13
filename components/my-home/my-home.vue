<template>
	<view>
		<div class="grid-container">
			<el-card class="box-card frist">
				<div class="fristcard">
					<el-avatar class="atvatone" :src="avatarUrl"
						style="width: 300rpx;height: 300rpx;background-color: #EBBD6A;" />
					<div>
						<span class="spanone"
							style="font-size: 48rpx;color: #5B626B;margin-top: 70rpx;display:inline-block "><b>TAN LAY
								FONG</b></span><br />
						<span style="color:#74626B;font-size: 30rpx;font-weight: 500;">{{nickname}}</span><br />
						<!-- <span style="color:#60626B;font-weight: 600;">Five Fortunes Package</span><br /> -->
					</div>
				</div>
				<div style="margin-top: 60rpx;">
					<div class="fristcardbottom">Register Point</div>
					<div class="fristcardbottomtwo">MYR {{registerPoint}}</div>
				</div>
				<div>
					<div class="fristcardbottom">Joining Date</div>
					<div class="fristcardbottomtwo">{{joiningDate}}</div>
				</div>
				<div>
					<div class="fristcardbottom">Product Point</div>
					<div class="fristcardbottomtwo">MYR  {{credit5}}</div>
				</div>
				<div>
					<div class="fristcardbottom">Total Cash Point</div>
					<div class="fristcardbottomtwo">MYR    {{credit2}}</div>
				</div>
				<div style="margin-top: 20rpx;">
					<el-tag @tap="handleAdstatus(0)">查看协议</el-tag>
					<el-tag @tap="handleAdstatus(1)" style="margin-left: 20rpx;">查看弹窗</el-tag>
				</div>
				<!-- <div>
					<div class="fristcardbottom">Product Point (PP)</div> 
					<div class="fristcardbottomtwo">MYR 0.00</div>
				</div>
				<div>
					<div class="fristcardbottom">Current Month Floating Bonus</div>
					<div class="fristcardbottomtwo">MYR 0.00</div>
				</div>
				<div>
					<div class="fristcardbottom">Current Month Personal Purchase FV</div>
					<div class="fristcardbottomtwo">0</div>
				</div>
				<div>
					<div class="fristcardbottom">Current Month Personal Sponsor FV</div>
					<div class="fristcardbottomtwo">0</div>
				</div>
				<div>
					<div class="fristcardbottom">Retail Percentage</div>
					<div class="fristcardbottomtwo">30%</div>
				</div>
				<div>
					<div class="fristcardbottom">Personal Sales FV</div>
					<div class="fristcardbottomtwo">0</div>
				</div>
				<div>
					<div class="fristcardbottom">Millionaire + Challenge Date</div>
					<div class="fristcardbottomtwo">28/09/2023</div>
				</div> -->
				<!-- <div>
					<div class="fristcardbottom">Referral Link</div>
					<div class="fristcardbottomtwo"><a
							href="https://ioffice.felement.vip/SignUp/?r=MY60122122378">https://ioffice.felement.vip/SignUp/?r=MY60122122378</a>
					</div>
				</div> -->
			</el-card>
			<el-card class="box-card second">
				<div style="font-size: 28rpx;font-weight: 500;color: #6F7078;">
					GROUP MEMBERS
				</div>
				<div style="margin-top: 20rpx;font-size: 40rpx;font-weight: 600;color: #5B626B;">0</div>
			</el-card>
			<el-card class="box-card three">
				<div style="font-size: 28rpx;font-weight: 500;color: #6F7078;">
					GROUP SALES (FV)
				</div>
				<div style="margin-top: 20rpx;font-size: 40rpx;font-weight: 600;color: #5B626B;">0.00</div>
			</el-card>
			<el-card class="box-card four">
				<div style="font-size: 28rpx;font-weight: 500;color: #6F7078;">
					COMMISSION (MYR)
				</div>
				<div style="margin-top: 20rpx;font-size: 40rpx;font-weight: 600;color: #5B626B;">0.00</div>
			</el-card>
			<el-card class="box-card wu">
				<div style="font-size: 28rpx;font-weight: 500;color: #6F7078;">
					Bonus Type (MYR)
				</div>
				<!-- <div class="container">
					<div class="box">
						<div class="boxtwo">0.00</div>
						<div class="fivetwo">Retail Bonus</div>
					</div>
					<div class="box">
						<div class="boxtwo">0.00</div>
						<div class="fivetwo">Network Bonus</div>
					</div>
					<div class="box">
						<div class="boxtwo">0.00</div>
						<div class="fivetwo">Matching Bonus</div>
					</div>
					<div class="box">
						<div class="boxtwo">0.00</div>
						<div class="fivetwo">Travel Bonus</div>
					</div>
					<div class="box">
						<div class="boxtwo">0.00</div>
						<div class="fivetwo">Gold Millionaire Pool</div>
					</div>
					<div class="box">
						<div class="boxtwo">0.00</div>
						<div class="fivetwo">Platinm Millionaire Pool</div>
					</div>
					<div class="box">
						<div class="boxtwo">0.00</div>
						<div class="fivetwo">Diamond Millionaire Pool</div>
					</div>
				</div>
				<div style="margin-top: 400rpx;color: #ADB5BD;"> -->
					<!-- <div style="display: flex;justify-content: center;font-size: 40rpx;font-weight: 800;">Retail Bonus
					</div>
					<div style="display: flex;justify-content: center;font-size: 40rpx;">{{RetailBonus}}</div>
				</div> -->
				<div v-for="item in typesArray" style="color: #ADB5BD;font-size: 28rpx;margin-top: 20rpx;">
					<div class="bonustype">
						<div>{{item.levelname_en}}{{item.levelname}}:</div>
						<div>{{item.bonus}}</div>
					</div>
				</div>
			</el-card>
			<el-card class="box-card sex">
				<div style="font-size: 28rpx;font-weight: 500;color: #6F7078;">
					Monthly Earnings (MYR)
				</div>
				<div v-for="item in weeksArray" style="color: #ADB5BD;font-size: 28rpx;margin-top: 20rpx;">
					<div class="bonustype">
						<div>{{item.begintimestr}}至{{item.endtimestr}}:</div>
						<div>{{item.sumordermoney}}</div>
					</div>
				</div>
				<div style="color: #ADB5BD;font-size: 28rpx;margin-top: 20rpx;">Total Cash Point:{{sumbonus}}</div>
				<div style="color: #ADB5BD;font-size: 28rpx;margin-top: 20rpx;">Total Withdraw:{{totalWithdraw}}</div>
			</el-card>


		</div>
		<div style="width: 100%;">
			<el-card class="box-card news">
				<div slot="header" class="clearfix headers">
					<div class="yearmonth">
						<div style="font-size: 20rpx;font-weight: 600;line-height: 72rpx;">
							新闻/公告
						</div>
						<div class="gt" style="display: flex;">
							<div class="monthright" style="font-size: 20rpx;line-height: 72rpx;">年-月：</div>
							<div class="year">
								<el-select v-model="year" slot="prepend" placeholder="请选择" size="medium" @change="gettable">
									<div v-for="(item,index) in yearArr">
										<el-option :label="item" :value="item"></el-option>
									</div>
								</el-select>
							</div>
							<div class="month">
								<el-select v-model="mouth" slot="prepend" placeholder="请选择" size="medium" @change="gettable">
									<div v-for="o in 12" :key="o" class="text item">
										<el-option :label="o" :value="o"></el-option>
									</div>
								</el-select>
							</div>
						</div>
					</div>
				</div>
				<announcement-table :year="year" :mouth='mouth'/>
				<!-- <div class="lastcard">
					<div style="font-size: 20rpx;font-weight: 600;">下载中心</div>
					<div><a
							href="https://ioffice.felement.vip/Content2/uploads/20230303091534FELEMENT-Distributors-Policy--Procedures.pdf">
							DISTRIBUTORS' POLICY & PROCEDURES
						</a></div>
					<div><a
							href="https://ioffice.felement.vip/Content2/uploads/20230303091712FELEMENT-Distributor-Agreement.pdf">
							DISTRIBUTORS' AGREEMENT
						</a></div>
					<div><a
							href="https://ioffice.felement.vip/Content2/uploads/2023030309394020230214_Maintain-Account-Active.pdf">
							MAINTAIN ACCOUNT ACTIVE
						</a></div>
					<div><a
							href="https://ioffice.felement.vip/Content2/uploads/2023030309400320230215_Felement-New-Members-Group.pdf">
							FELEMENT WHATSAPP & TELEGRAM GROUP
						</a></div>
					<div><a
							href="https://ioffice.felement.vip/Content2/uploads/2023030309411520230214_Withholding-Tax-For-Agents.pdf">
							WITHOLDING TAX FOR AGENTS
						</a></div>
				</div> -->
			</el-card>
		</div>
	</view>
</template>

<script>
	import AnnouncementTable from '@/components/announcement-table/announcement-table.vue'
	export default {
		components:{
			AnnouncementTable
		},
		name: "my-home",
		data() {
			return {
				avatarUrl: 'https://ioffice.felement.vip/Content/images/company/logo500.png',
				mouth: 0,
				year: 0,
				yearArr: [],
				joiningDate: '',
				RetailBonus:'',
				nickname:'',
				credit2:'',
				registerPoint:'',
				credit5:'',
				typesArray:[],
				weeksArray:[],
				sumbonus:'',
				totalWithdraw:''
			};
		},
		mounted() {
			this.getMounth()
			this.getinfo()
		},
		methods: {
			handleAdstatus(type){
				// console.log(type)
				const array = {
					'type' : type,
					'ad':true
				}
				this.$emit('changeAd',array)
			},
			getMounth() {
				const current = new Date()
				const yearNew = current.getFullYear()
				this.yearArr = [yearNew - 1, yearNew]
				const mouthNew = current.getMonth()
				this.mouth = mouthNew + 1
				this.year = yearNew
			},
			async getinfo() {
				let _this = this
				await _this.$axios.get('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.member.infomes')
					.then(res => {
						// console.log(res)
						const {
							result: {
								jointime,
								nickname,
								childrenordermoney,
								commissionmoney,
								credit2,
								credit1,
								credit5,
								flevelchildrennum,
								allglobonus,
								alllevelmes,
								monthmes,
								bonuslevelmes:{
									bonus,
									level,
									levelname,
									levelname_en,
									
								}
							}
						} = res
						_this.typesArray = alllevelmes
						_this.joiningDate = jointime
						_this.nickname = nickname
						_this.credit2 = credit2
						_this.registerPoint = credit1
						_this.credit5 = credit5
						_this.weeksArray = monthmes
						_this.sumbonus = childrenordermoney
						_this.totalWithdraw = allglobonus
					})
					.catch(err => {
						console.log(err)
					})
			}
		}
	}
</script>

<style>
	/* .frist{
		margin-right: 40rpx;
	} */
	/* .grid-container .box-card{
		padding: 20rpx;
	} */
	.bonustype{
		display: flex;
		justify-content: space-between;
	}
	.lastcard {
		font-size: 20rpx;
	}

	.lastcard div {
		margin-top: 24rpx;
	}

	.lastcard div a {
		text-decoration: none;
		color: #8273BE;
	}

	.headers {
		/* display: flex;
		justify-content: space-between; */
	}

	.month,
	.year {
		margin-right: 20rpx;
	}

	.yearmonth {
		display: flex;
		justify-content: space-between;
	}


	.fristcardbottomtwo a {
		text-decoration: none;
		color: #8273BE;
	}

	.monthright {
		display: inline-block;
	}

	.container {
		margin-top: 20rpx;
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		/* 每行两个等分的列 */
		justify-items: center;
		/* 在水平方向上居中对齐 */
		align-items: center;
		/* 在垂直方向上居中对齐 */
		gap: 20rpx;
		/* 盒子之间的间距，可根据实际需求调整 */
		text-align: center;
	}

	.box {
		margin-top: 40rpx;
	}

	.boxtwo {
		font-weight: 600;
		color: #5B626B;
	}

	.fivetwo {
		font-size: 24rpx;
		color: #6c757d;
	}

	.second,
	.three,
	.four {
		position: relative;
		width: 100%;
		height: 100%;
	}

	/* .second{
		margin-right: 40rpx;
	}
	.three{
		margin-right: 40rpx;
	}
	.wu{
		margin-right: 40rpx;
		margin-top: 40rpx;
	} */
	/* .sex{
		margin-top: 40rpx;
	} */

	.second::after,
	.three::after,
	.four::after {
		content: "";
		position: absolute;
		bottom: 0;
		right: 0;
		width: 65%;
		height: 65%;
		background-image: url("../../static/img/card-logo.png");
		background-size: contain;
		background-repeat: no-repeat;
		background-position: bottom right;
		pointer-events: none;
	}

	.fristcard {
		display: flex;
		justify-content: space-around;
	}

	.news {
		margin-top: 50rpx;
	}

	.grid-container {
		display: grid;
		grid-template-rows: 250rpx 1500rpx;
		grid-template-columns: 31% 23% 23% 23%;
		/* width: 95%; */
		/* gap: 50rpx; */
	}

	.box-card {
		grid-column: span 1;
		background-color: #fff;
		padding: 20rpx;
	}

	.box-card:nth-child(1) {
		grid-column: 1;
		grid-row: 1 / span 2;
	}

	.sex {
		grid-column: span 2;
	}

	.fristcardbottom {
		font-size: 24rpx;
		color: #5B626B;
		margin-top: 20rpx;
	}

	.fristcardbottomtwo {
		font-size: 32rpx;
		color: #323232;
		font-weight: 600;
		/* margin-top: 20rpx; */
	}

	/* 在屏幕宽度小于990px时 */
	@media screen and (max-width: 990px) {
		.bonustype{
			display: grid;
			grid-template-columns: 1fr;
		}
		.grid-container {
			grid-template-columns: 100%;

		}

		.box-card {
			grid-column: 1 / span 1;
		}

		.fristcard {
			display: grid;
			grid-template-columns: 1fr;
		}

		.yearmonth {
			display: grid;
			grid-template-columns: 1fr;
		}

		.monthright {
			width: 160rpx;

		}
	}

	@media screen and (min-width: 990px) and (max-width: 1500px) {
		.fristcard {
			display: grid;
			grid-template-columns: 1fr;
		}

		.atvatone span {
			width: 200rpx;
			height: 200rpx;
		}
	}
</style>