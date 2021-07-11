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
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	/*每个页面公共css */
	@import "@/static/GAL/css/gal.css";
	/* @import "@/common/font.css";
	@import "@/common/bold.css";
	@import "@/common/Heavy.css";
	@import "@/common/medium.css"; */
</style>
