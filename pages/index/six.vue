<template>
	<view class="content" :style="'min-height:' + this.$u.sys().windowHeight+'px;'">
		<block v-if="!show">
			<view class="tui-progress-text" style="width: 500rpx;height: 500rpx;background-size: 100% 100%;" :style="'background-image: url('+circleImgGif+');'" v-show="showGif">
				<view class="medium">厉害了!</view>
				<view class="tui-progress-num regular">您共答对<text style="color: #00FF36;margin: 0 10rpx;">{{count}}</text>题</view>
			</view>
			<view class="tui-progress-text" style="width: 500rpx;height: 500rpx;background-size: 100% 100%;" :style="'background-image: url('+circleImgPng+');'" v-show="!showGif">
				<view class="medium">厉害了!</view>
				<view class="tui-progress-num regular">您共答对<text style="color: #00FF36;margin: 0 10rpx;">{{count}}</text>题</view>
			</view>
			<!-- <image src="../../static/4.png" mode="aspectFit" style="width: 500rpx;height: 500rpx;" v-if="!showGif"></image> -->
			<!-- <tui-round-progress progressColor="#EB0909" gradualColor="#ff7900" :diam="diam"
			:lineWidth="30" :percentage="count*20" defaultColor="rgba(25,190,107,0.1)" :fontShow="false" lineCap="butt">
				<view class="tui-progress-text">
					<view class="medium">厉害了!</view>
					<view class="tui-progress-num regular">您共答对<text style="color: #00FF36;margin: 0 10rpx;">{{count}}</text>题</view>
				</view>
			</tui-round-progress> -->
			
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
			uni.preloadPage({url: "/pages/index/six_next"});
			this.count = e.count;
			if(this.count == 2){
				this.circleImgGif = '../../static/40.gif'
				this.circleImgPng = '../../static/40.png'
			}else if(this.count == 3){
				this.circleImgGif ='../../static/60.gif'
				this.circleImgPng ='../../static/60.png'
			}else if(this.count == 1){
				this.circleImgGif = '../../static/20.gif'
				this.circleImgPng = '../../static/20.png'
			}
			//px = rpx / 750 * wx.getSystemInfoSync().windowWidth
			this.diam = 500/ 750 * this.$u.sys().windowWidth
		},
		onReady() {
			setTimeout(()=>{
				this.$refs.sloading.stop();
			}, 200);
			setTimeout(()=>{
				this.showGif = false;
			},1000)
		},
		data() {
			return {
				diam:'',
				count:2,
				show:false,
				
				showGif:true,
				circleImgGif:'',
				circleImgPng:'',
				
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
					uni.redirectTo({url: 'six_next'});
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
		background-image: url(../../static/bg2.jpg);
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
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		color: #FFFFFF;
		font-size: 35rpx;
	}
</style>
