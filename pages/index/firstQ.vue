<template>
	<view class="content" :style="'min-height:' + this.$u.sys().windowHeight+'px;'">
		<!-- <view class="u-font-26 medium" style="line-height: 1.3;margin-bottom: 73rpx;color: #FFFEFE;width: 571rpx;">
			{{questionList[current].title.case1}}
			<view>{{questionList[current].title.case2}}</view>
		</view> -->
		<!-- <view class="bold" style="color: #FFFFFF;">
			第{{'1'}}题/共五题
		</view> -->
		<view class="title bold" style="font-weight: bold;">
			Q{{current+1}}   {{questionList[current].quest}}<text class="regular" v-if="current == 2">（左右滑动查看）</text>
		</view>
		<view class="center">
			<block v-for="(item,index) in questionList[current].anser" :key="index" v-if="current !=2">
				<view class="card u-flex u-row-between u-col-center" :style="item.ishight?'height: 129rpx;':''"
				 :class="chooice != ''&& chooice == item.title?item.title == questionList[current].right?'right':'wrong':chooice != ''&&item.title == questionList[current].right?'right':''" @click="change(item.title)">
					<view class="u-m-l-35 u-flex">
						<text class="u-font-40 u-m-r-30 bold">{{item.title}}</text>
						<text class="medium" :class="[chooice == item.title||chooice != ''&&item.title == questionList[current].right?'':'text-gray',chooice != '' && chooice == item.title && item.isheight?'':'u-line-1']" :style="item.ishight?'line-height: 1.5;':''" style="font-size: 30rpx;">{{item.value}}</text>
					</view>
					<image src="../../static/chahao@2x.png" style="width: 30rpx;height: 30rpx;margin: 0 26rpx 0 40rpx;" v-if="chooice == item.title&&item.title != questionList[current].right"></image>
					<image src="../../static/duihao@2x.png" style="width: 46rpx;height: 38rpx;margin: 0 19rpx;" v-else-if="chooice == item.title&&item.title == questionList[current].right||chooice != ''&&item.title == questionList[current].right"></image>
					<view style="width: 46rpx;height: 38rpx;margin: 0 19rpx;background-color: #FFFFFF;" v-else></view>
				</view>
			</block>
			<view class="photoCard" v-if="current == 2">
				<swiper class="screen-swiper" :indicator-dots="false" :circular="false" :autoplay="false" interval="5000" duration="500" @change="swiperChange">
					<swiper-item v-for="(item,i) in questionList[current].anser" :key="i">
						<view class="u-flex" style="margin: 0rpx 0rpx 45rpx 3rpx;line-height: 1;">
							<text class="u-font-40 u-m-r-30 bold">{{item.title}}</text>
							<text class="medium text-gray u-font-30">{{item.value}}</text>
						</view>
						<view class="u-flex u-row-right u-col-bottom"
						 style="background-size: 100% 100%;width: 521rpx;height: 400rpx;" :style="'background-image:url('+item.img+');'">
							<view class="u-flex u-row-center imgChooice" @click="change(item.title)"
							style="width: 89rpx;height: 89rpx;background-size: 100% 100%;background-image: url(../../static/anniu_bg@2x.png);">
								<image src="../../static/anniu_duihao@2x.png" mode="aspectFit" style="height: 38rpx;width: 46rpx;"></image>
							</view>
						</view>
					</swiper-item>
				</swiper>
				<view class="u-flex u-row-center" style="margin: 22rpx 0rpx 23rpx;">
					<view class="idot" :class="index == 0 ? 'selected':'nomal'"></view>
					<view class="idot" :class="index == 1 ? 'selected':'nomal'" style="margin: 0 42rpx;"></view>
					<view class="idot" :class="index == 2 ? 'selected':'nomal'"></view>
				</view>
			</view>
		</view>
		
		<u-popup v-model="show" mode="center" border-radius="24" width="652" :height="current == 4?'950':'773'">
			<view class="popup">
				<view class="head u-flex u-row-between u-col-top">
					<image class="img1" src="../../static/beijingsucai@2x.png" mode="aspectFit"></image>
					<view class="u-m-t-10 u-flex-1 bold u-text-center" style="font-size: 47rpx;color: #FF4E00; line-height: 1.5;">
						<view>{{chooice == questionList[current].right?'恭喜你，答对了':'对不起，答错了'}}</view>
						<view>正确答案是：{{questionList[current].right}}</view>
					</view>
					<image class="close" src="../../static/guanbi@2x.png" mode="aspectFit" @click="show = false"></image>
				</view>
				<view class="u-m-t-28 bold u-text-center" style="font-size: 35rpx;color: #000000;">{{questionList[current].modal.title}}</view>
				<view :style="current == 4?'margin:36rpx 53rpx 0rpx 52rpx;':'margin:49rpx 53rpx 0rpx 52rpx;'">
					<image v-if="current == 4" src="../../static/Q5.png" mode="aspectFit" style="width: 521rpx;height: 400rpx;margin: 0 21rpx 32rpx 12rpx;"></image>
					<view class="u-font-30 regular text-gray" style="line-height: 1.5;">
						{{questionList[current].modal.case1}}
					</view>
					<view class="u-font-30 u-m-t-40 regular text-gray" style="line-height: 1.5;">
						{{questionList[current].modal.case2}}
					</view>
				</view>
			</view>
		</u-popup>
		
		<view class="btn u-flex u-row-center medium" v-if="chooice != ''&&current < 4" @click="nextQuestion">继续答题</view>
		<view class="btn_colorful u-flex u-row-center medium" v-if="chooice != ''&&current == 4" @click="light">点亮能量环</view>
	</view>
</template>

<script>
	export default {
		onLoad() {
			uni.preloadPage({url: "/pages/index/ten"});
			uni.preloadPage({url: "/pages/index/six"});
			uni.preloadPage({url: "/pages/index/zero"});
		},
		data() {
			return {
				show:false,
				current:0,
				currentName:'一',
				chooice:'',
				count:0,
				//当时图片问题时，当前处于哪一个滑块
				index:0,
				questionList:[
					{
						title:{
							case1:'在起飞前，让我们点亮飞船能量，答对题目即可点亮能量环。总共五题，答对越多，奖励越丰富。',
							case2:'话不多说，让我们开始吧.....',
						},
						quest:'你知道，黑五的“黑”指的是什么？',
						anser:[
							{title:'A',value:'天黑时候就去商场排队',ishight:false},
							{title:'B',value:'黑五那天商场黑压压的人群',ishight:false},
							{title:'C',value:'商家在账本上用黑色笔记账',ishight:false},
							{title:'D',value:'周五下班玩太嗨导致第二天黑眼圈',ishight:false},
						],
						right:'C',
						modal:{
							title:'商家在账本上用黑色笔记账',
							case1:'十一月前，商家账簿上都是红色的赤字，年终购物季开始，赤字变黑，商家开始盈利，黑五的“黑”是繁荣盈利的意思。',
							case2:'其实不仅是黑五，一年当中不同时段、不同平台都充满机遇，Payoneer橄榄枝计划，助力商家入驻全球30+个高速增长的平台，让您的跨境业务全年段、多市场扩展。',
						}
					},
					{
						title:{
							case1:'怎么样，第一题应该难不住你吧？',
							case2:'让我们接着挑战',
						},
						quest:'请问以下哪个选项的缩写词是跨境“黑话”?',
						anser:[
							{title:'A',value:'yyds u1s1 awsl nsdd',ishight:false},
							{title:'B',value:'cx kdl drl plgg',ishight:false},
							{title:'C',value:'FBA SKU KYC P卡',ishight:false},
							{title:'D',value:'GG MM 886',ishight:false},
						],
						right:'C',
						modal:{
							title:'FBA SKU KYC P卡',
							case1:'FBA：亚马逊自营的物流系统；SKU：即库存进出计量的单位；KYC：即对账户持有人的强化审查；P卡：是众多客户对Payoneer的昵称。',
							case2:'',
						}
					},
					{
						title:{
							case1:'不会说“黑话”的跨境人，不是好的韭菜',
							case2:'嘿，跨境人，你认得出来哪个是你吗？',
						},
						quest:'以下三人，你认为哪个是跨境人？',
						anser:[
							{title:'A',value:'',img:'../../static/Q3A.jpg'},
							{title:'B',value:'',img:'../../static/Q3B.jpg'},
							{title:'C',value:'',img:'../../static/Q3C.jpg'}
						],
						right:'A',
						modal:{
							title:'夜晚顶着黑眼圈盯着屏幕的守夜人',
							case1:'当一个合格的跨境人，基础素养，就是要克服时差问题。',
							case2:'跨境很辛苦，我们心疼你，Payoneer派安盈微信公众号，为跨境人整理干货、举办直播分享，帮助跨境人迅速掌握市场动向，大卖全球。',
						}
					},
					{
						title:{
							case1:'',
							case2:'',
						},
						quest:'你知道为什么古代的钱大多是圆型的吗？',
						anser:[
							{title:'A',value:'方便携带',ishight:false},
							{title:'B',value:'天圆地方，圆圆满满',ishight:false},
							{title:'C',value:'古人以圆象征吉祥之意！',ishight:false},
							{title:'D',value:'以上全是',ishight:false},
						],
						right:'D',
						modal:{
							title:'以上全是',
							case1:'古时候以为天圆地方，相信圆象征吉祥之意，因此出现了圆形的铜钱。同时，圆形四周光滑无棱角，古人出门携带方便。',
							case2:'Payoneer派安盈以全新的品牌形象登陆纳斯达克，圆圈形的logo象征着通达包容，连接您与世界的每一个机会。',
						}
					},
					{
						title:{
							case1:'',
							case2:'',
						},
						quest:'跨境圈TOP1内卷的情景是….',
						anser:[
							{title:'A',value:'众多竞品不得不采用低价策略',ishight:false},
							{title:'B',value:'被人跟卖、被抄袭产品搭配',ishight:false},
							{title:'C',value:'疯狂抢流量，站外投放成本巨蹭',ishight:true},
							{title:'D',value:'对不起，作为卷王行业，以上都是',ishight:true},
						],
						right:'D',
						modal:{
							title:'对不起，作为卷王行业，以上都是',
							case1:'逃离内卷，了解一下“随心付”吧 ，不论是支付广告，还是平台或独立站的店铺月租，随心付支持几乎全部跨境卖家可能用到的付款场景。现在加入还有机会享受高达0.5%的返还奖励，用越多，返越多。',
							case2:'',
						}
					},
				]
			}
		},
		methods: {
			change(e){
				if(this.chooice != '') return
				this.$set(this,'chooice',e)
				this.show = true;
				if(e == this.questionList[this.current].right) this.count ++
				console.log(this.count);
			},
			swiperChange(e){
				this.index = e.detail.current;
			},
			nextQuestion(){
				this.chooice = '';
				this.current += 1;
				this.show = false;
				switch (this.current){
					case 1:
						this.currentName = '二'
						break;
					case 2:
						this.currentName = '三'
						break;
					case 3:
						this.currentName = '四'
						break;
					case 4:
						this.currentName = '五'
						break;
				}
			},
			light(){
				this.http.post('Subject/submitRightCount',{
					openid:uni.getStorageSync('openid'),
					right_count:this.count
				}).then(res=>{
					if(res.code == 1000){
						if(this.count == 4||this.count == 5){
							uni.redirectTo({url: 'ten?count='+this.count});
						}else if(this.count == 1||this.count == 2||this.count == 3){
							uni.redirectTo({url: 'six?count='+this.count});
						}else{
							uni.redirectTo({url: 'zero?count='+this.count});
						}
					}else{
						this.$u.toast(res.msg)
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		/* align-items: center; */
		padding: 161rpx 75rpx 76rpx;
		background-image: url(../../static/bg05_2.gif);
		background-size: 100% 100%;
	}
	.title{
		font-size: 50rpx;
		color: #FFFEFE;
		margin-left: 5rpx;
	}
	.card{
		width: 581rpx;
		height: 100rpx;
		border-radius: 12rpx;
		margin-bottom: 37rpx;
		background-color: #FFFFFF;
		color: #333333;
	}
	.right{
		background-color: #00CE8D;
		color: #FFFFFF;
	}
	.wrong{
		background-color: #FF3232;
		color: #FFFFFF;
	}
	.center{
		margin: 88rpx auto auto;
	}
	.text-gray{
		color: #666666;
	}
	.photoCard{
		border-radius: 12rpx;
		background-color: #FFFFFF;
		width: 581rpx;
		height: 611rpx;
		padding: 35rpx 28rpx 23rpx 32rpx;
		.screen-swiper{
			height: 501rpx;
		}
		.imgChooice{
			transform: translateY(25rpx);
		}
		.idot{
			border-radius: 5000rpx;
			height: 30rpx;
			width: 30rpx;
		}
		.selected{
			background-color: #FF4900;
		}
		.nomal{
			background-color: #E0E0E0;
		}
	}
	.popup{
		display: flex;
		align-items: center;
		justify-items: center;
		flex-direction: column;
		line-height: 1;
		padding-top: 9rpx;
		.head{
			width: 100%;
			.img1{
				width: 113rpx;
				height: 117rpx;
			}
			.close{
				width: 30rpx;
				height: 30rpx;
				margin: 21rpx 31rpx 0 30rpx;
			}
		}
	}
	.btn{
		border-radius: 5000rpx;
		width: 411.3rpx;
		height: 112.5rpx;
		background-color: #FF4900;
		color: #FFFFFF;
		font-size: 35rpx;
		margin: 91rpx auto 0;
		min-height: 112rpx;
		position: fixed;
		bottom: 67rpx;
		z-index: 10075;
		left: 0;
		right: 0;
	}
	.btn_colorful{
		border-radius: 5000rpx;
		width: 411.3rpx;
		height: 112.5rpx;
		background: -webkit-linear-gradient(left,#FF331B,#ECC400);
		color: #FFFFFF;
		font-size: 35rpx;
		margin: 0 auto;
		min-height: 112rpx;
		z-index: 10075;
		position: fixed;
		bottom: 67rpx;
		left: 0;
		right: 0;
	}
</style>
