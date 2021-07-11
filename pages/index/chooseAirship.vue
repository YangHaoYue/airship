<template>
	<view class="content" :style="'min-height:' + this.$u.sys().windowHeight+'px;'">
		<view class="title bold">
			先给你的飞船取个名字吧
		</view>
		<view class="center bold">
			<view class="card u-flex u-row-between u-col-center" :class="current == 1?'_selected':'nomal'" @click="change(1)">
				<view class="u-font-40 u-m-l-35 u-flex">
					<text class="u-m-r-30">A</text>
					<text :class="current === 1?'':'text-gray'" style="font-size: 30rpx;">大卖爆单号</text>
				</view>
				<view class="circle u-m-r-36"></view>
			</view>
			<view class="card u-flex u-row-between u-col-center" :class="current == 2?'_selected':'nomal'" @click="change(2)">
				<view class="u-font-40 u-m-l-35 u-flex">
					<text class="u-m-r-30">B</text>
					<text  :class="current === 2?'':'text-gray'" style="font-size: 30rpx;">派安盈号</text>
				</view>
				<view class="circle u-m-r-36"></view>
			</view>
			<view class="card u-flex u-row-between u-col-center" :class="current == 3?'_selected':'nomal'" @click="change(3)">
				<view class="u-font-40 u-m-l-35 u-flex u-flex-1">
					<text class="u-m-r-30">C</text>
					<u-input placeholder="请输入您飞船的名字" v-model="shipName" :clearable="false" @focus="change(3)"></u-input>
				</view>
				<view class="circle u-m-r-36 u-m-l-20"></view>
			</view>
		</view>
		<view class="btn u-flex u-row-center bold" @click="submit">就它了</view>
	</view>
</template>

<script>
	export default {
		onLoad() {
			uni.preloadPage({url: "/pages/index/firstQ"});
		},
		data() {
			return {
				current:1,
				shipName:''
			}
		},
		methods: {
			change(e){
				this.current = e
			},
			submit(){
				if(this.current == 1){
					uni.setStorageSync('shipName','大卖爆单号')
				}else if(this.current == 2){
					uni.setStorageSync('shipName','派安盈号')
				}else if(this.shipName != ''){
					uni.setStorageSync('shipName',this.shipName)
				}else{
					return this.$u.toast('给你的飞船起个名字吧！')
				}
				uni.redirectTo({url: 'firstQ'});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		/* align-items: center; */
		padding: 161rpx 84rpx 76rpx 85rpx;
		background-image: url(../../static/bg05_2.gif);
		background-size: 100% 100%;
	}
	.title{
		font-size: 47rpx;
		color: #FFFFFF;
		margin: 0 14rpx 0 9rpx;
	}
	.card{
		width: 581rpx;
		height: 100rpx;
		border-radius: 12rpx;
		margin-bottom: 37rpx;
	}
	._selected{
		background-color: #0086FF;
		color: #FFFFFF;
		/deep/ input{
			color: #FFFFFF;
		}
	}
	.nomal{
		background-color: #FFFFFF;
		color: #333333;
	}
	.center{
		margin: 98rpx auto auto;
	}
	.text-gray{
		color: #666666;
	}
	.circle{
		width: 43rpx;
		height: 43rpx;
		border-radius: 100%;
		background-color: #FFFFFF;
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
