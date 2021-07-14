<template>
	<view class="content" :style="'min-height:' + this.$u.sys().windowHeight+'px;'">
		<view class="u-flex u-row-between" style="width: 100%;">
			<image class="logo" src="../../static/Last_page_bg.png" mode="aspectFit"></image>
		</view>
		<view class="content_center">
			<!-- <view class="heavy" style="font-size: 40rpx;line-height: 1;">恭喜您！</view>
			<view class="heavy" style="font-size: 40rpx;line-height: 1.5;">成功获得Payoneer派安盈25美金</view>
			<view class="heavy" style="font-size: 40rpx;line-height: 1.5;">优惠注册奖励</view> -->
			
			<view class="bold u-text-center" style="font-size: 30rpx;line-height: 1.5;margin-top: 43rpx;">复制下方链接，完成注册，即可获得</view>
			<view class="bold" style="font-size: 30rpx;line-height: 1.5;">Payoneer派安盈25美金优惠奖励</view>
			<view class="bold u-line-5 u-text-center" style="font-size: 30rpx;line-height: 1.5;width: 500rpx;margin-top: 30rpx;">{{data}}</view>
			
			<u-button class="u-m-t-30" style="margin: 0 auto;" type="warning" size="mini" @click="copy">点击复制</u-button>
			
			<view class="bold" style="font-size: 30rpx;margin-top: 58rpx;line-height: 1.3;">返回H5点击 “分享赢取大礼”，</view>
			<view class="bold" style="font-size: 30rpx;line-height: 1.3;margin-top: 20rpx;">还有机会赢取价值160元“跨境宇宙”礼品</view>
			
			<!-- <view class="u-flex u-row-center">
				<image src="../../static/anniu_bg@2x.png" mode="aspectFit" style="width: 311rpx;height: 311rpx;margin: 33rpx auto;"></image>
			</view> -->
		</view>
		
		
	</view>
</template>

<script>
	import h5Copy from '@/js_sdk/junyi-h5-copy/junyi-h5-copy/junyi-h5-copy.js'
	export default {
		data() {
			return {
				show:false,
				inviter_id:'',
				data:'https://payouts.payoneer.com/partners/or.aspx?pid=YOYIZC74IO2s4KZQp7tgsw%3d%3d&locale=zh-CN&rcid=300792&utm_source=wechat&utm_medium=social-media&utm_campaign=rocket-game-campaign',
			}
		},
		onLoad() {

		},
		methods: {
			// 触发方法
			 copy() {
				   let content = this.data// 复制内容，必须字符串，数字需要转换为字符串
				   const result = h5Copy(content)
				   console.log(result);
				   if (result === false) {
					 uni.showToast({
					   title:'不支持',
					 })
				   } else {
					 uni.showToast({
					   title:'复制成功',
					   icon:'none'
					 })
				   }
			 }
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		/* align-items: center; */
		padding: 50rpx 45rpx 76rpx 39rpx;
		background-image: url(../../static/bg_sucai@2x.png);
		background-size: 100% 100%;
	}

	.logo {
		height: 80rpx;
		width: 328rpx;
	}
	.text-white{
		color: #FFFEFE;
	}
	.text-blue{
		color: #00E4FF;
	}
	.content_center{
		margin: 86rpx 50rpx auto;
		line-height: 1;
		display: flex;
		align-items: center;
		flex-direction: column;
	}
	.btn{
		border-radius: 5000rpx;
		width: 411.3rpx;
		height: 112.5rpx;
		background-color: #FF4900;
		color: #FFFFFF;
		font-size: 35rpx;
		margin: 0 auto;
	}
</style>
