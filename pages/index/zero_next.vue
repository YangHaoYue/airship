<template>
	<view class="content" :style="'min-height:' + this.$u.sys().windowHeight+'px;'">
		<view class="u-text-center heavy" style="margin-top: 58rpx;font-size: 55rpx;">恭喜您！</view>
		<view class="u-text-center bold" style="margin-top: 42rpx;line-height: 1.7;font-size: 40rpx;">获得Payoneer派安盈25美金</view>
		<view class="u-text-center bold" style="line-height: 1.7;font-size: 40rpx;">优惠注册奖励</view>
		
		<view class="u-text-center medium" style="line-height: 1.7;font-size: 30rpx;margin-top: 32rpx;">点击下方“立即领取”</view>
		
		<view class="u-text-center bold" style="line-height: 1.7;font-size: 40rpx;margin-top: 140rpx;">填写个人资料后</view>
		<view class="u-text-center bold" style="line-height: 1.7;font-size: 40rpx;">即可获得优惠注册专属链接</view>
		
		<view class="u-text-center regular" style="line-height: 1.7;font-size: 30rpx;margin-top: 57rpx;color: #FFA800;">分享H5更有机会赢取价值160元</view>
		<view class="u-text-center regular" style="line-height: 1.7;font-size: 30rpx;color: #FFA800;margin-bottom: auto;">“跨境宇宙”礼品</view>
		
		<view class="u-flex u-row-between btn_gromp">
			<view class="btn1 medium u-flex u-row-center" @click="toform()">立即领取</view>
			<view class="btn2 medium u-flex u-row-center" @click="show = true">
				<view class="u-flex" style="flex-direction: column;">
					<view style="color: #FFEA00;font-size: 25rpx;margin-bottom: 10rpx;">分享h5</view>
					<view style="font-size: 35rpx;">赢取大礼</view>
				</view>
			</view>
		</view>
		
		<u-popup v-model="show" mode="center" border-radius="24" width="610" height="1011">
			<view class="popup">
				<image :src="img" mode="aspectFit"></image>
				<view class="footer">
					<view class="btn u-flex u-row-center medium" @click="show = false">长按图片保存</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		onLoad() {
			this.getPoster()
		},
		data() {
			return {
				show:false,
				shipName:uni.getStorageSync('shipName'),
				img:''
			}
		},
		methods: {
			getPoster(){
				this.http.get('Subject/getPoster',{
					openid:uni.getStorageSync('openid')
				},true).then(res=>{
					this.img = this.http.resourceUrl() + res.data
				})
			},
			toform(){
				uni.navigateTo({url: 'form?count=0'});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		/* align-items: center; */
		padding: 126rpx 77rpx 107rpx 69rpx;
		background-image: url(../../static/bg1.jpg);
		background-size: 100% 100%;
		color: #FFFFFF;
		font-size: 35rpx;
	}
	.btn_colorful{
		border-radius: 5000rpx;
		width: 411.3rpx;
		height: 112.5rpx;
		background: -webkit-linear-gradient(left,#FF331B,#ECC400);
		color: #FFFFFF;
		font-size: 35rpx;
		margin: 0 auto;
	}
	.btn_gromp{
		margin-top: 183rpx;
		line-height: 1;
		.btn1{
			width: 292rpx;
			height: 112rpx;
			background-color: #FF4900;
			font-size: 35rpx;
			border-radius: 5000rpx;
		}
		.btn2{
			width: 292rpx;
			height: 112rpx;
			background-color: #00A944;
			font-size: 35rpx;
			border-radius: 5000rpx;
		}
	}
	.popup{
		padding: 24rpx 25rpx 22rpx 23rpx;
		image{
			width: 562rpx;
			height: 860rpx;
		}
		.footer{
			display: flex;
			align-items: center;
			justify-items: center;
			width: 100%;
			.btn{
				width: 331rpx;
				height: 80rpx;
				border-radius: 5000rpx;
				border: 1rpx solid #666666;
				color: #333333;
				font-size: 25rpx;
				margin: 15rpx auto 12rpx;
				background-color: #FFFFFF;
			}
		}
	}
</style>
