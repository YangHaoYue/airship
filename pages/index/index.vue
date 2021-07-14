<template>
	<view class="content" :style="'min-height:' + this.$u.sys().windowHeight+'px;'">
		<view class="u-flex u-row-between" style="width: 100%;">
			<image class="logo" src="../../static/logo@2x.png" mode="aspectFit"></image>
			<view class="u-font-30 text-white regular" @click="show = true">活动规则</view>
		</view>
		<view class="content_center">
			<view class="text-white heavy" style="font-size: 84rpx;line-height: 1;">遨游吧，跨境人</view>
			<view class="text-white bold" style="font-size: 58rpx;margin-top: 31rpx;line-height: 1.5;">限时活动进行中...</view>			
			<view class="text-blue regular" style="font-size: 35rpx;margin-top: 30rpx;">答题解锁跨境宝藏</view>
			<view class="text-blue regular" style="font-size: 35rpx;margin-top: 17rpx;">答对越多，礼品越多</view>
			
			<view class="text-white regular" style="font-size: 30rpx;margin-top: 34rpx;">立即开启跨境宇宙间的壮丽飞行吧！</view>
			<!-- <view class="text-white regular" style="font-size: 30rpx;line-height: 1.8;">世界的每个机会，你都有机会</view> -->
		</view>
		<navigator open-type="redirect" url="firstQ" class="btn u-flex u-row-center bold">开始答题</navigator>
		
		<u-popup v-model="show" mode="center" border-radius="24" width="652" height="1076">
			<view class="popup">
				<view class="head">
					<view class="title bold">活动规则</view>
					<scroll-view scroll-y="true" style="height: 799rpx;">
						<view class="data regular">
							<u-parse :html="data"></u-parse>
						</view>
					</scroll-view>
				</view>
				<view class="footer u-border-top" style="margin-top: 45rpx;">
					<view class="btn u-flex u-row-center bold" @click="show = false">确认</view>
				</view>
			</view>
		</u-popup>
		
		<!-- <gal-sloading ref="sloading" background="rgba(255,255,255,1)"></gal-sloading> -->
	</view>
</template>

<script>
	export default {
		onLoad(e) {
			let debug = e.debug || this.GetQueryString("debug");
			if(debug == 1){
				uni.clearStorage();
			}
			let from = e.from;
			let inviter_id = e.inviter_id;
			if(inviter_id){
				uni.setStorageSync('inviter_id',inviter_id);
			}
			if(from){
				uni.setStorageSync('from',from);
			}
			/* this.inviter_id = e.inviter_id */
		},
		onShow(e) {
			console.log(e);
			uni.preloadPage({url: "/pages/index/ten_next"});
			uni.preloadPage({url: "/pages/index/six_next"});
			uni.preloadPage({url: "/pages/index/zero_next"});
			uni.preloadPage({url: "/pages/index/chooseAirship"});
			this.getActRule();
			let code = uni.getStorageSync('openid') /* || this.GetQueryString("openid"); */
			let has_answer = uni.getStorageSync('has_answer') || this.GetQueryString('has_answer');
			let right_count = uni.getStorageSync('right_count') || this.GetQueryString('right_count');
			
			console.log(code);
			if(code == null||code == ''){
				this.getOpenid();
			}else if(has_answer == 1){
				if(right_count == 4||right_count == 5){
					uni.redirectTo({url: 'ten_next'});
				}else if(right_count == 1||right_count == 2||right_count == 3){
					uni.redirectTo({url: 'six_next'});
				}else{
					uni.redirectTo({url: 'zero_next'});
				}
			}else{
				uni.setStorageSync('openid',code)
			}
		},
		onReady() {
			/* setTimeout(()=>{
				this.$refs.sloading.stop();
				this.show = true;
			}, 1000); */
		},
		data() {
			return {
				show:false,
				inviter_id:'',
				data:'',
				urls: [
					'../../static/logo@2x.png',
					'../../static/bg1.jpg',
					'../../static/bg2.jpg',
					'../../static/bg_sucai@2x.png',
					'../../static/bg05_2.gif',
					'../../static/Q3A.jpg',
					'../../static/Q3B.jpg',
					'../../static/Q3C.jpg',
					'../../static/Last_page_bg.png',
				],
			}
		},
		mounted() {
			this.preLoad();
		},
		methods: {
			getOpenid(){
				let openid = this.randomString(24);
				this.http.post('auth/upload',{
					openid:openid,
					inviter_id:uni.getStorageSync('inviter_id'),
					from:uni.getStorageSync('from')
				}).then(res=>{
					if(res.code == 1000){
						uni.setStorageSync('openid',openid)
					}
				})
				/* window.location.href = this.http.interfaceUrl() +'auth/oauth' */
			},
			//
			getActRule(){
				this.http.get('Subject/getActRule',{},true).then(res=>{
					if(res.code == 1000){
						this.data = res.data
					}
				})
			},
			preLoad() { //预加载图片
				for (let url of this.urls) {
					let image = new Image()
					image.src = url
					console.log(url)
				}
			},
			//获取当前url地址上的值
			GetQueryString(name){
			     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
			     var r = window.location.search.substr(1).match(reg);
			     if(r!=null)return  unescape(r[2]); return null;
			},
			//随机字符串
			randomString(len) {
			 　　len = len || 32;
			 　　var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
			 　　var maxPos = $chars.length;
			 　　var pwd = '';
			 　　for (let i = 0; i < len; i++) {
			 　　　　pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
			 　　}
			 　　return pwd;
			 }
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		/* align-items: center; */
		padding: 38rpx 45rpx 76rpx 37rpx;
		background-image: url(../../static/index_bg@2x.png);
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
		margin: 106rpx 0rpx auto 46rpx;
		line-height: 1;
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
	.popup{
		display: flex;
		align-items: center;
		justify-items: center;
		flex-direction: column;
		line-height: 1;
		.head{
			.title{
				font-size: 35rpx;
				text-align: center;
				color: #333333;
				margin: 41rpx auto 39rpx;
			}
			.data{
				overflow: auto;
				width: 551rpx;
				background-color: #FFFFFF;
				margin: 1rpx 54rpx 0rpx 47rpx;
				font-size: 26rpx;
				color: #666666;
				line-height: 1.8;
			}
		}
		.footer{
			display: flex;
			align-items: center;
			justify-items: center;
			width: 100%;
			.btn{
				width: 195rpx;
				height: 69rpx;
				border-radius: 5000rpx;
				border: 1rpx solid #D6D6D6;
				color: #FF4900;
				font-size: 30rpx;
				margin: 27rpx auto 22rpx;
				background-color: #FFFFFF;
			}
		}
	}
</style>
