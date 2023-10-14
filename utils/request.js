import axios from 'axios'
import configs from './config.json'
import { Loading } from 'element-ui';
const request = axios.create({
	baseURL: configs.https,
	timeout: 5000,
})
request.interceptors.request.use(
	async (config) => {
		if (config.url == '/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.account' || config.url ==
			'/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp.account.login') {
			// console.log(config.url)
		} else {
			const { refershtoken,userinfo,access_token } = uni.getStorageSync('tokenArray')
			// config.headers['Authorization'] = `Bearer ${access_token}`
			const refid = {
				'refershtoken': refershtoken,
				'userid': userinfo,
			}
			const headers = {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${access_token}`
			};
			await axios.post(configs.https+'/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp', refid, {
					headers
				})
				.then(res => {
					// console.log('token刷新11',res)
					const newrefid = {
						'refershtoken': res.data.result.refersh_token,
						'userinfo': userinfo,
						'access_token': res.data.result.access_token
					}
					uni.setStorageSync('tokenArray',newrefid)	
					config.headers['Authorization'] = `Bearer ${res.data.result.access_token}`
					// console.log(config)
				})
				.catch(err => {
					console.log(err)
				})
			
		}
		// uni.showLoading({
		// 	title: '加载中...',
		// 	mask: true,
		// })
		// Loading.service();
		
		return config
	},
	(error) => {
		return Promise.reject(error);
	}
)

request.interceptors.response.use(
	(response) => {
		// let loadingInstance = Loading.service();
		// loadingInstance.close();
		return response.data;
	},
	(error) => {
		// let loadingInstance = Loading.service();
		// loadingInstance.close();
		return Promise.reject(error);
	}
)
// console.log('token',uni.getStorageSync('tokenArray'))
// 定时器，每15分钟更新一次
// if(uni.getStorageSync('tokenArray')){
setInterval(() => {
	newtoken()
}, 15*60*1000);
// }
function newtoken(){
	const { refershtoken,userinfo,access_token } = uni.getStorageSync('tokenArray')
	// console.log('token',uni.getStorageSync('tokenArray'))
	const refid = {
		'refershtoken': refershtoken,
		'userid': userinfo,
	}
	const headers = {
		'Content-Type': 'application/json',
		'Authorization': `Bearer ${access_token}`
	};
	axios.post(configs.https+'/plugin/index.php?i=1&f=guide&m=many_shop&d=mobile&r=uniapp', refid, {
			headers
		})
		.then(res => {
			// console.log('token刷新',res)
			const newrefid = {
				'refershtoken': res.data.result.refersh_token,
				'userinfo': userinfo,
				'access_token': res.data.result.access_token
			}
			uni.setStorageSync('tokenArray',newrefid)			
		})
		.catch(err => {
			console.log(err)
		})
}




export default request