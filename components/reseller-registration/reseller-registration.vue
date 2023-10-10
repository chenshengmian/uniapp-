<template>
	<view>
		<el-dialog
		  title="经销商注册"
		  :visible.sync="dialogVisible"
		  :width="width"
		  :modal = 'modal'
		  >
		  <span>{{isresgistra}}</span>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="dialogVisible = false">取 消</el-button>
		    <el-button type="primary" @click="goredistration">确 定</el-button>
		  </span>
		</el-dialog>

		<el-card class="box-card">
			<div class="resgister">注册</div>
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm"  class="demo-ruleForm" :label-position="labelPosition" label-width="100px">
				<el-form-item label="新经销商名称:" prop="name" :label-width="labelw">
					<div>
						<el-input v-model="ruleForm.name" ></el-input>
					</div>
				</el-form-item>
				<el-form-item label="Nickname/ Representative Name:" prop="nickname" :label-width="labelw">
				    <el-input v-model="ruleForm.nickname" ></el-input>
				</el-form-item>
				<el-form-item label="国籍:" prop="region" :label-width="labelw">
					<el-select v-model="ruleForm.region" placeholder="请选择国籍">
						<el-option label="CHINA" value="CHINA"></el-option>
						<el-option label="MALAYSIA" value="MALAYSIA"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="性别:" prop="gender" :label-width="labelw">
					<el-select v-model="ruleForm.gender">
						<el-option label="男" value="0"></el-option>
						<el-option label="女" value="1"></el-option>
					</el-select>
				</el-form-item>
				<!-- <el-form-item label="出生日期:" prop="time" :label-width="labelw">
					<el-col span="15">
						<el-form-item prop="time">
							<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.time"
								style="width: 100%;"></el-date-picker>
						</el-form-item>
					</el-col>
				</el-form-item> -->
				<el-form-item label="身份证明文件:" prop="filetype" :label-width="labelw">
					<el-select v-model="ruleForm.filetype">
						<el-option label="-" value="-"></el-option>
						<el-option label="公司注册号码" value="0"></el-option>
						<el-option label="身份证号码" value="1"></el-option>
						<el-option label="护照号码" value="2"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="公司注册号码/身份证号码/护照号码:" prop="number" :label-width="labelw">
					<el-input v-model="ruleForm.number"></el-input>
				</el-form-item>
				<el-form-item label="电邮:" prop="email" :label-width="labelw">
					<div class="email" style="display: flex;">
						<el-input v-model="ruleForm.email"></el-input>
						<el-button  @tap="sendEamil">发送邮箱验证</el-button>
						<el-input v-model="code" placeholder="请填写验证码"></el-input>
					</div>
				</el-form-item>
				<el-form-item label="销售员id:" prop="superiorID" :label-width="labelw" >
					<el-input v-model="ruleForm.superiorID" placeholder="选填若为空默认为推荐人ID"></el-input>
				</el-form-item>
				<el-form-item label="电话号码:" :label-width="labelw" prop="selectedPrefix">
					 <el-row>
					    <el-col :span="8">
					      <el-select v-model="ruleForm.prefixes" @change="handlePrefixChange">
					        <el-option label="+86" value="+86"></el-option>
					        <el-option label="+80" value="+80"></el-option>
					      </el-select>
					    </el-col>
					    <el-col :span="20">
					      <el-input v-model="ruleForm.phoneNumber" :placeholder="placeholder"></el-input>
					    </el-col>
					  </el-row>
				</el-form-item>
				<el-form-item label="OTP:" prop="otp" :label-width="labelw">
					<el-row>
						<el-col :span="14">
							<el-input v-model="ruleForm.otp"></el-input>
						</el-col>
						<el-col :span="1">
							<el-button type="primary" >Send OTP</el-button>
						</el-col>
					</el-row>
				</el-form-item>
				<el-form-item label="地址:" prop="address" :label-width="labelw">
					<el-input v-model="ruleForm.address"></el-input>
				</el-form-item>
				<el-form-item label="城市:" prop="city" :label-width="labelw">
					<el-input v-model="ruleForm.city"></el-input>
				</el-form-item>
				<el-form-item label="州	:" prop="state" :label-width="labelw">
					<el-input v-model="ruleForm.state"></el-input>
				</el-form-item>
				<el-form-item label="邮政编码 :" prop="zipcode" :label-width="labelw">
					<el-input v-model="ruleForm.zipcode"></el-input>
				</el-form-item>
				<el-form-item label="国家:" prop="country" :label-width="labelw">
					<el-select v-model="ruleForm.country" placeholder="请选择国家">
						<el-option label="CHINA" value="CHINA"></el-option>
						<el-option label="MALAYSIA" value="MALAYSIA"></el-option>
					</el-select>
				</el-form-item>
				<!-- <el-form-item label="Product Package Type:" prop="filetype" :label-width="labelw">
					<el-select v-model="ruleForm.filetype">
						<el-option label="-" value="-"></el-option>
						<el-option label="双喜临门配套 | DOUBLE HAPPINESS PACKAGE" value="registerNum"></el-option>
						<el-option label="五福临门配套 | FIVE FORTUNES PACKAGE" value="iduentityNum"></el-option>
						<el-option label="双喜临门配套 x 2 | DOUBLE HAPPINESS PACKAGE x 2" value="postcordNum"></el-option>
						<el-option label="六六大顺配套 | FANTASTIC SIX PACKAGE" value="postcordNum"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="发货方式 :" prop="country" :label-width="labelw">
					<el-radio-group v-model="ruleForm.country">
						<el-radio label="Pick Up Office"></el-radio>
						<el-radio label="邮寄"></el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="收据人名字	:" prop="Recipientofreceipt" :label-width="labelw">
					<el-input v-model="ruleForm.Recipientofreceipt"></el-input>
				</el-form-item>
				<el-form-item label="Total Weight :" prop="totalWeight" :label-width="labelw">
					0
				</el-form-item>
				<el-form-item label="Zone :" prop="zone	" :label-width="labelw">
					<el-select v-model="ruleForm.zone">
						<el-option label="西马 | WEST MALAYSIA" value="west"></el-option>
						<el-option label="东马 | EAST MALAYSIA" value="east"></el-option>
						<el-option label="新加坡 | SINGAPORE" value="news"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="运费 :" prop="freight" :label-width="labelw">
					0.00
				</el-form-item>
				<el-form-item label="总计 :" prop="total" :label-width="labelw">
					0.00
				</el-form-item> -->
				<el-form-item label="TWG三赢模式 :" prop="paymentType" :label-width="labelw">
					<el-radio-group v-model="ruleForm.paymentType" >
						<el-radio border :label="0" >参与</el-radio>
						<el-radio border :label="1" >不参与</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="会员等级:" prop="membershipLevel" :label-width="labelw">
					<el-radio-group v-model="ruleForm.membershipLevel" style="">
						<block v-for="item in ruleForm.datas">
							<el-radio border :label="item.id" :key="item.id">
								{{ item.levelname }}
							</el-radio>
						</block>
					</el-radio-group>
				</el-form-item>
				<el-form-item :label-width="labelw">
					  <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
				</el-form-item>
			</el-form>
		</el-card>
	</view>
</template>

<script>
	export default {
		props:{
			nodeid:{
				type:String,
				default:''
			}
		},
		name: "reseller-registration",
		data() {
			return {
				width:'30%',
				modal:false,
				dialogVisible: false,
				labelPosition:'top',
				isresgistra:'',
				userinfo:{},
				ruleForm: {
					name: '',
					region: '',
					nickname:'',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					email:'',
					resource: '',
					desc: '',
					gender:'',
					time:'',
					filetype:'',
					number:'',
					selectedPrefix: '+86', // 默认选择的地区号码前缀
					otp:'',
					address:'',
					city:'',
					state:'',
					zipcode:'',
					region:'',
					filetype:'',
					country:'',
					Recipientofreceipt:'',
					zone:'',
					paymentType:'',
					superiorID:'',
					phoneNumber: '', // 输入的电话号码		
					prefixes:'',
					membershipLevel:'',
					userid:'',
					datas:'',
					nodeid:this.nodeid,
					country:''
				},
				emailCode:'', 
				code:'',
				placeholder: '请输入电话号码', // 输入框的占位符
				labelw:'540rpx',
				rules: {
					name: [{
							required: true,
							message: '一如在你的公司注册/身份证/护照。你未来不能改变这。',
							trigger: 'blur'
						},
					],
					email:[{
						required: true,
						message: '请输入邮箱地址',
						trigger: 'blur'
					},{
						type: 'email', 
						message: '请输入正确的邮箱地址',
						trigger: ['blur', 'change']
					}],
					region: [{
						required: true,
						message: '请选择活动区域',
						trigger: 'change'
					}],
					country:[{
						required: true,
						message: '请选择地区',
						trigger: 'change'
					}],
					paymentType:[{
						required: true,
						message: '请勾选参与或不参与TWG三赢模式',
						trigger: 'change'
					}],
					membershipLevel:[{
						required: true,
						message: '请勾选会员等级',
						trigger: 'change'
					}],
					date1: [{
						type: 'date',
						required: true,
						message: '请选择日期',
						trigger: 'change'
					}],
					date2: [{
						type: 'date',
						required: true,
						message: '请选择时间',
						trigger: 'change'
					}],
					type: [{
						type: 'array',
						required: true,
						message: '请至少选择一个活动性质',
						trigger: 'change'
					}],
					resource: [{
						required: true,
						message: '请选择活动资源',
						trigger: 'change'
					}],
					desc: [{
						required: true,
						message: '请填写活动形式',
						trigger: 'blur'
					}],
					gender:[{
						required: true,
						message: '请选择性别',
						trigger: 'blur'
					}],
					time:[{
						required: true,
						message: '请选择出生日期',
						trigger: 'blur'
					}],
					filetype:[{
						required: true,
						message: '请选择身份证明文件',
						trigger: 'blur'
					}],
					number:[{
						required: true,
						message: '一如在你的公司注册/身份证/护照。你未来不能改变这。*',
						trigger: 'blur'
						}
						,{
							min: 7,
							message: '长度最少为 7 个字符',
							trigger: 'blur'
						}
					]
				}
			};
		},
		mounted() {
			this.getScreenWidth(); // 初始化获取屏幕宽度和缩放比例
			window.addEventListener('resize', this.handleResize); // 监听窗口大小变化
			this.getballInfo()
		},
		beforeDestroy() {
		    window.removeEventListener('resize', this.handleResize); // 移除监听事件
		},
		methods: {
			getballInfo(){
				// console.log('获取到nodeid',this.nodeid)
				let self = this
				self.$axios.get('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.member.regstep&nodeid='+self.nodeid)
					.then(res=>{
						console.log(res)
						const { result:{memberlevel,userinfo} } = res
						self.ruleForm.datas = memberlevel
						self.userinfo = userinfo
					})
					.catch(err=>{
						console.log(err)
					})
			},
			submitForm(formName) {
				let self = this
				const {credit2} = self.userinfo
				let id = self.ruleForm.membershipLevel
				let data = self.ruleForm.datas
				const ball = data.find(res=>{
					return parseInt(res.id) == id
				})
				// console.log(ball)
				const { price,levelname } = ball
				if(parseFloat(price)>parseFloat(credit2)){
					self.$message('余额不足！');
				}else{
					self.dialogVisible = true
					self.isresgistra = '是否使用余额'+credit2+'购买'+levelname+'消费'+price+'元'
				}
			},
			goredistration(){
				let self = this
				self.dialogVisible = false
				// if(self.code == self.emailCode&&self.code != ''){
					const { userinfo } = uni.getStorageSync('tokenArray')
					if(self.ruleForm.superiorID == ''){
						 self.ruleForm.superiorID = userinfo
					}
					self.$axios.post('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.member.reg',self.ruleForm)
						.then(res=>{
							const  {status,result:{message}} = res
							// console.log(res)
							if(status==0){
								self.$message(message)
							}else{
								const { userinfo } = uni.getStorageSync('tokenArray')
								let array = {
									'userid' : userinfo
								}
								self.$axios.post('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.member.selectTree',array)
									.then(res=>{
										const { result } = res
										uni.setStorageSync('data',result)
										// console.log('更新',result)
										self.$emit('handlereg','6')
									})
									.catch(err=>{
										console.log(err)
									})
							}
							
						})
						.catch(res=>{
							console.log(res)
						})
				// }
				// else{
				// 	self.$message('邮箱验证码错误！');
				// }
			},
			handlePrefixChange() {
			    // 处理地区号码前缀变化的逻辑
			},
			getScreenWidth() {
				let self = this
			    self.screenWidth = window.innerWidth;
				if(self.screenWidth<=990){
					self.labelPosition = 'top'
					self.width = '80%'
				}else {
				 	self.labelw = '540rpx'
					self.labelPosition = 'right'
					self.width = '30%'
				}
			},
			handleResize() {				
				let self = this
			    const newScreenWidth = window.innerWidth;
			    if (newScreenWidth !== self.screenWidth) {
			        self.screenWidth = newScreenWidth;
					if(newScreenWidth<=990){
						// console.log(newScreenWidth);
						self.labelPosition = 'top'
						self.width = '80%'
					}else {
						self.labelw = '540rpx'
						self.labelPosition = 'right'
						self.width = '30%'
					}
			    }
			},
			sendEamil(){
				let self = this
				let array = {
					'email' : self.ruleForm.email
				}
				self.$axios.post('/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.email.ts',array)
					.then(res=>{
						// console.log(res)
						const {status, result:{message} } = res
						self.emailCode = message
						if(status==1){
							self.$message({
								message: '邮箱已发送，请不要重复发送!',
								type: 'success'
							})
						}else{
							self.$message('请检查验证码是否正确！')
						}
					})
					.catch(err=>{
						console.log(err)
					})
			}
		}
	}
</script>

<style>

	
	*{
		font-size: 26rpx;
		touch-action: pan-y;
	}
	.dome {
		display: flex;
		/* justify-content: space-between; */
	}

	.text {
		font-size: 26rpx;
	}

	.item {
		padding: 36rpx 0;
	}

	.resgister {
		display: flex;
		justify-content: center;
	}
	.el-form-item__label{
		width: 100% !important;
	}
	/* 在屏幕宽度小于990px时 */
	@media screen and (max-width: 990px) {
		/* .el-form-item{
			display: flex;
			flex-wrap: wrap;
		}
		.el-form .el-form-item__label{
			width: auto !important;
		}
		.el-form-item__content{
			margin-left: 0rpx;
		} */
		/* .email{
			display: grid !important;
			grid-template-columns: 1fr;
		} */
	}
</style>