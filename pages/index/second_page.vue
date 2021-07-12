<template>
	<view class="content" :style="'min-height:' + this.$u.sys().windowHeight+'px;'">
		<view class="u-flex u-row-between" style="width: 100%;">
			<image class="logo" src="../../static/Last_page_bg.png" mode="aspectFit"></image>
		</view>
		<view class="content_center">
			<view class="heavy" style="font-size: 35rpx;line-height: 1;">您已成功提交抽奖信息</view>
			<view class="heavy u-text-center" style="font-size: 35rpx;line-height: 1.5;">请您关注Payoneer微信公众号，第一时间获取得奖信息</view>
			<!-- <view class="heavy" style="font-size: 35rpx;line-height: 1.5;">密切关注Payoneer派安盈微信公众号，</view>
			<view class="heavy" style="font-size: 35rpx;line-height: 1.5;">第一时间获取得奖信息哦！</view> -->
			
			<view class="bold" style="font-size: 30rpx;line-height: 1.5;margin-top: 43rpx;">复制下方链接，即可获得</view>
			<view class="bold" style="font-size: 30rpx;line-height: 1.5;">Payoneer派安盈25美金优惠奖励</view>
			<view class="bold u-line-5 u-text-center" style="font-size: 30rpx;line-height: 1.5;margin-top: 30rpx;">{{data}}</view>
			
			<u-button class="u-m-t-30" type="warning" size="mini" @click="copy">点击复制</u-button>
			
			<view class="bold" style="font-size: 30rpx;margin-top: 58rpx;line-height: 1.3;">返回H5点击“分享赢取大礼” ，</view>
			<view class="bold" style="font-size: 30rpx;line-height: 1.3;margin-top: 20rpx;">更有机会赢取更多礼品并提高中奖几率哦。</view>
			
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
				   let content = this.data // 复制内容，必须字符串，数字需要转换为字符串
				   const result = h5Copy(content)
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
		margin: 86rpx 30rpx auto;
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
