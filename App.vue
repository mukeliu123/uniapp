<script>
	export default {
		onLaunch: function() {
			console.log('App Launch');
		},
		onShow: function(options) {
			console.log('App Show');
			// 从后台被scheme重新打开时调用
			    console.log(options);
		},
		onHide: function() {
			console.log('App Hide')
		},
		// 捕获 app error
		onError: function(err) {
			console.log('App Error')
			console.log(err)
		}
	}
</script>
<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-ui/index.scss";
</style>
<style lang="less">
	/* 引入iconfont字体 */
	@import './static/assets/icon/iconfont.css';
	/* 全局样式 */
	@import url("./style/index.less");
</style>
