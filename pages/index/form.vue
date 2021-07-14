<template>
	<view>
		<image src="../../static/title_img@2x.png" mode="aspectFit" style="width: 100%;height: 188rpx;"></image>
		<view class="form-item u-flex bg-white">
			<view class="u-font-30 medium" style="color: #333333;width: 200rpx;">公司名字</view>
			<u-input class="u-m-l-30 u-flex-1 u-font-33" v-model="office_name"></u-input>
		</view>
		<view class="form-item u-flex bg-white">
			<view class="u-font-30 medium" style="color: #333333;width: 200rpx;">姓名</view>
			<u-input class="u-m-l-30 u-flex-1" v-model="real_name"></u-input>
		</view>
		<view class="form-item u-flex bg-white">
			<view class="u-font-30 medium" style="color: #333333;width: 200rpx;">联系邮箱（如有payoneer注册邮箱请填，如无请填常用邮箱）</view>
			<u-input class="u-m-l-30 u-flex-1" type="textarea" v-model="email"></u-input>
		</view>
		<view class="form-item u-flex bg-white">
			<view class="u-font-30 medium" style="color: #333333;width: 200rpx;">联系手机</view>
			<u-input class="u-m-l-30 u-flex-1 u-font-33" v-model="tel_num"></u-input>
		</view>
		<view class="form-item u-flex bg-white">
			<view class="u-font-30 medium" style="color: #333333;width: 200rpx;">职位</view>
			<u-input class="u-m-l-30 u-flex-1" v-model="position"></u-input>
		</view>
		
		<view class="form-item u-flex bg-gray">
			<view class="u-font-28 medium" style="color: #9A9A9A;">跨境月销售额</view>
		</view>
		<block v-for="(item,index) in sell_amount_opt" :key="'money'+index">
		 	<view class="form-item u-flex bg-white u-row-between" @click="changMoney(item.id)">
		 		<view class="u-font-28 medium" style="color: #333333;width: 200rpx;">{{item.val}}</view>
				<image src="../../static/anniu_duihao@2x.png" mode="aspectFit" style="width: 46rpx;height: 38rpx;" v-if="compare(chooiceMoney,item.id)"></image>
		 	</view>
		</block>
		
		<view class="form-item u-flex bg-gray">
			<view class="u-font-28 medium" style="color: #9A9A9A;">对哪一个平台感兴趣</view>
		</view>
		<block v-for="(son,j) in plat_opt" :key="'position'+j">
		 	<view class="form-item u-flex bg-white" @click="changPosition(son.id)">
				<image src="../../static/xuan01@2x.png" mode="aspectFit" style="width: 43rpx;height: 45rpx;margin: 1rpx 2rpx;" v-if="compare(chooicePosition,son.id)"></image>
				<image src="../../static/circle.png" mode="aspectFit" style="width: 47rpx;height: 47rpx;" v-else></image>
		 		<view class="u-font-28 medium" style="color: #333333;margin-left: 39rpx;">{{son.val}}</view>
		 	</view>
		</block>
		
		
		
		<view class="form-item u-flex bg-gray">
			<view class="u-font-28 medium" style="color: #9A9A9A;">City on</view>
		</view>
		<block v-for="(dad,i) in city_opt" :key="'city'+i">
		 	<view class="form-item u-flex bg-white u-row-between" @click="changCity(dad.id)">
		 		<view class="u-font-28 medium" style="color: #333333;">{{dad.val}}</view>
				<image src="../../static/anniu_duihao@2x.png" mode="aspectFit" style="width: 46rpx;height: 38rpx;" v-if="compare(chooiceCity,dad.id)"></image>
		 	</view>
		</block>
		
		
		<view class="btn u-flex u-row-center bold" @click="submit">提交</view>
		<u-gap height="60" bgColor="#EFEEF4"></u-gap>
	</view>
</template>

<script>
	export default {
		onLoad(e) {
			this.count = e.count
			this.getOptions()
		},
		data() {
			return {
				count:'',
				office_name:'',
				real_name:'',
				email:'',
				position:'',
				tel_num:'',
				
				chooiceMoney:'',
				sell_amount_opt:[],
				
				chooicePosition:'',
				plat_opt:[],
				
				chooiceCity:'',
				city_opt:[]
			}
		},
		methods: {
			getOptions(){
				this.http.get('Subject/getOptions').then(res=>{
					this.city_opt = res.data.city_opt;
					this.plat_opt = res.data.plat_opt;
					this.sell_amount_opt = res.data.sell_amount_opt;
				})
			},
			compare(i,j){
				return i == j
			},
			changMoney(id){
				this.chooiceMoney = id;
			},
			changCity(id){
				this.chooiceCity = id;
			},
			changPosition(id){
				this.chooicePosition = id;
			},
			submit(){
				this.http.post('Subject/userInfo',{
					openid:uni.getStorageSync('openid'),
					office_name:this.office_name,
					position:this.position,
					email:this.email,
					real_name:this.real_name,
					tel_num:this.tel_num,
					sell_amount:this.chooiceMoney,
					plat:this.chooicePosition,
					city:this.chooiceCity,
				}).then(res=>{
					this.$u.toast(res.msg)
					if(res.code == 1000){
						setTimeout(()=>{
							if(this.count == 0){
								uni.navigateTo({url: 'last_page'});
							}else{
								uni.navigateTo({url: 'second_page'});
							}
/* 							window.location.href = 'https://payouts.payoneer.com/partners/or.aspx?pid=YOYIZC74IO2s4KZQp7tgsw%3d%3d&locale=zh-CN&rcid=300792&utm_source=wechat&utm_medium=social-media&utm_campaign=rocket-game-campaign' */
						},1500)
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	page{
		background-color: #EFEEF4;
	}
	.form-item{
		padding: 25rpx 30rpx;
		border-bottom: 1rpx solid #DCDCDC;
	}
	.bg-white{
		background-color: #FFFFFF;
	}
	.bg-gray{
		background-color: #EFEEF4;
	}
	.btn{
		width: 625rpx;
		height: 96rpx;
		background-color: #1AAC19;
		color: #FFFFFF;
		font-size: 35rpx;
		border-radius: 10rpx;
		margin: 59rpx auto  34rpx auto;
	}
</style>
