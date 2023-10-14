<script>
	
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		globalData:{
			//修改获取全局变量  getApp().globalData.app = ''
			access_token:'',
			refersh_token:'',
			userinfo:0
		}
	}
</script>

<style>
	/*每个页面公共css */

</style>
