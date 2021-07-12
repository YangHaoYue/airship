<template>
	<view class="content" :style="'min-height:' + this.$u.sys().windowHeight+'px;'">
		<block v-if="!show">
			<!-- <image src="../../static/ten.png" mode="aspectFit" style="width: 560rpx;height: 524rpx;"></image> -->
			<tui-round-progress progressColor="#5400FF" gradualColor="#FF1400" :diam="diam"
			:lineWidth="30" :percentage="count*20" defaultColor="rgba(25,190,107,0.1)" :fontShow="false" lineCap="butt">
				<view class="tui-progress-text">
					<view class="medium">厉害了!</view>
					<view class="tui-progress-num regular">您共答对<text style="color: #00FF36;margin: 0 10rpx;">{{count}}</text>题</view>
				</view>
			</tui-round-progress>
			<view class="u-text-center heavy" style="margin-top: 58rpx;font-size: 45rpx;">您已点亮了<text style="font-size: 60rpx;color: #FFD800;margin: 0 15rpx;">{{count*20}}%</text>能量环！</view>
			<view class="u-text-center medium" style="margin-top: 42rpx;line-height: 1.7;font-size: 35rpx;margin-bottom: auto;">点击“起飞”，即刻解锁跨境宝藏！</view>
			<!-- <view class="u-text-center heavy" style="margin: 116rpx auto 41rpx auto;font-size: 45rpx;">{{shipName}}</view> -->
			<view class="btn_colorful u-flex u-row-center medium" @click="play()">起飞</view>
		</block>
		<gal-css-animate v-else class="ship" animateName="bounceOutUp" duration="2s" timingFunction="ease-in" :autoPlay="false" ref="roket">
			<image src="../../static/feichuan@2x.png" mode="aspectFit"></image>
		</gal-css-animate>
		
		<gal-sloading ref="sloading" background="rgba(255,255,255,1)"></gal-sloading>
	</view>
</template>

<script>
	export default {
		onLoad(e) {
			uni.preloadPage({url: "/pages/index/ten_next"});
			this.count = e.count
			//px = rpx / 750 * wx.getSystemInfoSync().windowWidth
			this.diam = 500/ 750 * this.$u.sys().windowWidth
		},
		onReady() {
			setTimeout(()=>{
				this.$refs.sloading.stop();
			}, 200);
		},
		data() {
			return {
				diam:0,
				count:4,
				show:false,
				shipName:uni.getStorageSync('shipName')
			}
		},
		methods: {
			play(){
				this.show = true
				setTimeout(()=>{
					this.$refs.roket.play();
				},500)
				setTimeout(()=>{
					uni.navigateTo({url: 'ten_next'});
				},2500)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 126rpx 60rpx 76rpx 85rpx;
		background-image: url(../../static/bg3@2x.png);
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
	.ship{
		position: absolute;
		bottom: 0;
		left: 250rpx;
		image{
			width: 262rpx;
			height: 891rpx;
		}
	}
	.tui-progress-text{
		width: 100%;
		height: 500rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		position: absolute;
		left: 0;
		top: 0;
		color: #FFFFFF;
		font-size: 35rpx;
	}
</style>
