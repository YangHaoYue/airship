<template>
	<view class="content">
		<view :class="{'ball-box':true,'ball-box-translate fadeOut':showAnimation}" @click="start()">
			<image :class="{'ball-translate fadeOut':showAnimation}" class="logo" src="/static/logo.png"></image>
		</view>
		<tui-round-progress progressColor="#EB0909" fontColor="#EB0909" gradualColor="#ff7900" :diam="200" 
		:lineWidth="20" :percentage="60" counterclockwise :fontShow="false">
			<view class="tui-progress-text">
				<view>血压测量进度</view>
				<view class="tui-progress-num">{{progress2}}%</view>
			</view>
		</tui-round-progress>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				showAnimation:false
			}
		},
		onLoad() {
			
		},
		methods: {
			start(e){
			  this.showAnimation = true
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 40rpx;
	}
	
	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 100rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}
	.ball-box{
	  position: absolute;
	  top: 400px;
	  left: 10px;
	  /* background: #f80; */
	  background: transparent;
	  transition: transform 0.5s linear;
	}
	.ball-box-translate{
	  transform: translateX(300px);
	}
	.ball-translate{
	  transform: translateY(-400px);
	  transition: transform 0.5s cubic-bezier(.74,.18,.92,.38);
	}
	// .fly-item {
	//     /* 水平移动, 线性匀速 */
	//     transition-timing-function: linear;
	// }
	// .fly-item > image {
	//     /* 垂直移动, 先慢后快 */
	//     transition-timing-function: 10s cubic-bezier(.74,.18,.92,.38);
	// }
	
	.tui-progress-text{
		width: 100%;
		height: 130px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding-top: 40rpx;
		position: absolute;
		left: 0;
		top: 0;
	}
</style>
