(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-second_page"],{"014a":function(t,e,i){"use strict";var n=i("21b0"),a=i.n(n);a.a},"02ad":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={uButton:i("2f0a").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content",style:"min-height:"+this.$u.sys().windowHeight+"px;"},[n("v-uni-view",{staticClass:"u-flex u-row-between",staticStyle:{width:"100%"}},[n("v-uni-image",{staticClass:"logo",attrs:{src:i("4f4a"),mode:"aspectFit"}})],1),n("v-uni-view",{staticClass:"content_center"},[n("v-uni-view",{staticClass:"heavy",staticStyle:{"font-size":"35rpx","line-height":"1"}},[t._v("您已成功提交抽奖信息")]),n("v-uni-view",{staticClass:"heavy u-text-center",staticStyle:{"font-size":"35rpx","line-height":"1.5"}},[t._v("请您关注Payoneer微信公众号，第一时间获取得奖信息")]),n("v-uni-view",{staticClass:"bold",staticStyle:{"font-size":"30rpx","line-height":"1.5","margin-top":"43rpx"}},[t._v("复制下方链接，即可获得")]),n("v-uni-view",{staticClass:"bold",staticStyle:{"font-size":"30rpx","line-height":"1.5"}},[t._v("Payoneer派安盈25美金优惠奖励")]),n("v-uni-view",{staticClass:"bold u-line-5 u-text-center",staticStyle:{"font-size":"30rpx","line-height":"1.5","margin-top":"30rpx"}},[t._v(t._s(t.data))]),n("u-button",{staticClass:"u-m-t-30",attrs:{type:"warning",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copy.apply(void 0,arguments)}}},[t._v("点击复制")]),n("v-uni-view",{staticClass:"bold",staticStyle:{"font-size":"30rpx","margin-top":"58rpx","line-height":"1.3"}},[t._v("返回H5点击“分享赢取大礼” ，")]),n("v-uni-view",{staticClass:"bold",staticStyle:{"font-size":"30rpx","line-height":"1.3","margin-top":"20rpx"}},[t._v("更有机会赢取更多礼品并提高中奖几率哦。")])],1)],1)},r=[]},"0774":function(t,e,i){"use strict";i.r(e);var n=i("02ad"),a=i("9686");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("014a");var o,c=i("f0c5"),l=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"181fb996",null,!1,n["a"],o);e["default"]=l.exports},"0af0":function(t,e,i){"use strict";i.r(e);var n=i("3340"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"15c9":function(t,e,i){var n=i("3b79");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("132a1e62",n,!0,{sourceMap:!1,shadowMode:!1})},"1de5":function(t,e,i){"use strict";t.exports=function(t,e){return e||(e={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},"21b0":function(t,e,i){var n=i("dd11");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("146e0eb0",n,!0,{sourceMap:!1,shadowMode:!1})},"28ab":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-button",{staticClass:"u-btn u-line-1 u-fix-ios-appearance",class:["u-size-"+t.size,t.plain?"u-btn--"+t.type+"--plain":"",t.loading?"u-loading":"","circle"==t.shape?"u-round-circle":"",t.hairLine?t.showHairLineBorder:"u-btn--bold-border","u-btn--"+t.type,t.disabled?"u-btn--"+t.type+"--disabled":""],style:[t.customStyle,{overflow:t.ripple?"hidden":"visible"}],attrs:{id:"u-wave-btn","hover-start-time":Number(t.hoverStartTime),"hover-stay-time":Number(t.hoverStayTime),disabled:t.disabled,"form-type":t.formType,"open-type":t.openType,"app-parameter":t.appParameter,"hover-stop-propagation":t.hoverStopPropagation,"send-message-title":t.sendMessageTitle,"send-message-path":"sendMessagePath",lang:t.lang,"data-name":t.dataName,"session-from":t.sessionFrom,"send-message-img":t.sendMessageImg,"show-message-card":t.showMessageCard,"hover-class":t.getHoverClass,loading:t.loading},on:{getphonenumber:function(e){arguments[0]=e=t.$handleEvent(e),t.getphonenumber.apply(void 0,arguments)},getuserinfo:function(e){arguments[0]=e=t.$handleEvent(e),t.getuserinfo.apply(void 0,arguments)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.error.apply(void 0,arguments)},opensetting:function(e){arguments[0]=e=t.$handleEvent(e),t.opensetting.apply(void 0,arguments)},launchapp:function(e){arguments[0]=e=t.$handleEvent(e),t.launchapp.apply(void 0,arguments)},click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.click(e)}}},[t._t("default"),t.ripple?i("v-uni-view",{staticClass:"u-wave-ripple",class:[t.waveActive?"u-wave-active":""],style:{top:t.rippleTop+"px",left:t.rippleLeft+"px",width:t.fields.targetWidth+"px",height:t.fields.targetWidth+"px","background-color":t.rippleBgColor||"rgba(0, 0, 0, 0.15)"}}):t._e()],2)},r=[]},"2eb3":function(t,e,i){"use strict";function n(t){if(!document.queryCommandSupported("copy"))return!1;var e=document.createElement("textarea");e.value=t,e.readOnly="readOnly",document.body.appendChild(e),e.select(),e.setSelectionRange(0,t.length);var i=document.execCommand("copy");return e.remove(),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},"2f0a":function(t,e,i){"use strict";i.r(e);var n=i("28ab"),a=i("0af0");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("9758");var o,c=i("f0c5"),l=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"5c660135",null,!1,n["a"],o);e["default"]=l.exports},3340:function(t,e,i){"use strict";i("c975"),i("a9e3"),i("d3b7"),i("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-button",props:{hairLine:{type:Boolean,default:!0},type:{type:String,default:"default"},size:{type:String,default:"default"},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},openType:{type:String,default:""},formType:{type:String,default:""},appParameter:{type:String,default:""},hoverStopPropagation:{type:Boolean,default:!1},lang:{type:String,default:"en"},sessionFrom:{type:String,default:""},sendMessageTitle:{type:String,default:""},sendMessagePath:{type:String,default:""},sendMessageImg:{type:String,default:""},showMessageCard:{type:Boolean,default:!1},hoverBgColor:{type:String,default:""},rippleBgColor:{type:String,default:""},ripple:{type:Boolean,default:!1},hoverClass:{type:String,default:""},customStyle:{type:Object,default:function(){return{}}},dataName:{type:String,default:""},throttleTime:{type:[String,Number],default:1e3},hoverStartTime:{type:[String,Number],default:20},hoverStayTime:{type:[String,Number],default:150}},computed:{getHoverClass:function(){if(this.loading||this.disabled||this.ripple||this.hoverClass)return"";var t="";return t=this.plain?"u-"+this.type+"-plain-hover":"u-"+this.type+"-hover",t},showHairLineBorder:function(){return["primary","success","error","warning"].indexOf(this.type)>=0&&!this.plain?"":"u-hairline-border"}},data:function(){return{rippleTop:0,rippleLeft:0,fields:{},waveActive:!1}},methods:{click:function(t){var e=this;this.$u.throttle((function(){!0!==e.loading&&!0!==e.disabled&&(e.ripple&&(e.waveActive=!1,e.$nextTick((function(){this.getWaveQuery(t)}))),e.$emit("click",t))}),this.throttleTime)},getWaveQuery:function(t){var e=this;this.getElQuery().then((function(i){var n=i[0];if(n.width&&n.width&&(n.targetWidth=n.height>n.width?n.height:n.width,n.targetWidth)){e.fields=n;var a="",r="";a=t.touches[0].clientX,r=t.touches[0].clientY,e.rippleTop=r-n.top-n.targetWidth/2,e.rippleLeft=a-n.left-n.targetWidth/2,e.$nextTick((function(){e.waveActive=!0}))}}))},getElQuery:function(){var t=this;return new Promise((function(e){var i="";i=uni.createSelectorQuery().in(t),i.select(".u-btn").boundingClientRect(),i.exec((function(t){e(t)}))}))},getphonenumber:function(t){this.$emit("getphonenumber",t)},getuserinfo:function(t){this.$emit("getuserinfo",t)},error:function(t){this.$emit("error",t)},opensetting:function(t){this.$emit("opensetting",t)},launchapp:function(t){this.$emit("launchapp",t)}}};e.default=n},"3b79":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-btn[data-v-5c660135]::after{border:none}.u-btn[data-v-5c660135]{position:relative;border:0;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;overflow:visible;line-height:1;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;cursor:pointer;padding:0 %?40?%;z-index:1;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .15s;transition:all .15s}.u-btn--bold-border[data-v-5c660135]{border:1px solid #fff}.u-btn--default[data-v-5c660135]{color:#606266;border-color:#c0c4cc;background-color:#fff}.u-btn--primary[data-v-5c660135]{color:#fff;border-color:#2979ff;background-color:#2979ff}.u-btn--success[data-v-5c660135]{color:#fff;border-color:#19be6b;background-color:#19be6b}.u-btn--error[data-v-5c660135]{color:#fff;border-color:#fa3534;background-color:#fa3534}.u-btn--warning[data-v-5c660135]{color:#fff;border-color:#f90;background-color:#f90}.u-btn--default--disabled[data-v-5c660135]{color:#fff;border-color:#e4e7ed;background-color:#fff}.u-btn--primary--disabled[data-v-5c660135]{color:#fff!important;border-color:#a0cfff!important;background-color:#a0cfff!important}.u-btn--success--disabled[data-v-5c660135]{color:#fff!important;border-color:#71d5a1!important;background-color:#71d5a1!important}.u-btn--error--disabled[data-v-5c660135]{color:#fff!important;border-color:#fab6b6!important;background-color:#fab6b6!important}.u-btn--warning--disabled[data-v-5c660135]{color:#fff!important;border-color:#fcbd71!important;background-color:#fcbd71!important}.u-btn--primary--plain[data-v-5c660135]{color:#2979ff!important;border-color:#a0cfff!important;background-color:#ecf5ff!important}.u-btn--success--plain[data-v-5c660135]{color:#19be6b!important;border-color:#71d5a1!important;background-color:#dbf1e1!important}.u-btn--error--plain[data-v-5c660135]{color:#fa3534!important;border-color:#fab6b6!important;background-color:#fef0f0!important}.u-btn--warning--plain[data-v-5c660135]{color:#f90!important;border-color:#fcbd71!important;background-color:#fdf6ec!important}.u-hairline-border[data-v-5c660135]:after{content:" ";position:absolute;pointer-events:none;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transform-origin:0 0;transform-origin:0 0;left:0;top:0;width:199.8%;height:199.7%;-webkit-transform:scale(.5);transform:scale(.5);border:1px solid currentColor;z-index:1}.u-wave-ripple[data-v-5c660135]{z-index:0;position:absolute;border-radius:100%;background-clip:padding-box;pointer-events:none;-webkit-user-select:none;user-select:none;-webkit-transform:scale(0);transform:scale(0);opacity:1;-webkit-transform-origin:center;transform-origin:center}.u-wave-ripple.u-wave-active[data-v-5c660135]{opacity:0;-webkit-transform:scale(2);transform:scale(2);-webkit-transition:opacity 1s linear,-webkit-transform .4s linear;transition:opacity 1s linear,-webkit-transform .4s linear;transition:opacity 1s linear,transform .4s linear;transition:opacity 1s linear,transform .4s linear,-webkit-transform .4s linear}.u-round-circle[data-v-5c660135]{border-radius:%?100?%}.u-round-circle[data-v-5c660135]::after{border-radius:%?100?%}.u-loading[data-v-5c660135]::after{background-color:hsla(0,0%,100%,.35)}.u-size-default[data-v-5c660135]{font-size:%?30?%;height:%?80?%;line-height:%?80?%}.u-size-medium[data-v-5c660135]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;width:auto;font-size:%?26?%;height:%?70?%;line-height:%?70?%;padding:0 %?80?%}.u-size-mini[data-v-5c660135]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;width:auto;font-size:%?22?%;padding-top:1px;height:%?50?%;line-height:%?50?%;padding:0 %?20?%}.u-primary-plain-hover[data-v-5c660135]{color:#fff!important;background:#2b85e4!important}.u-default-plain-hover[data-v-5c660135]{color:#2b85e4!important;background:#ecf5ff!important}.u-success-plain-hover[data-v-5c660135]{color:#fff!important;background:#18b566!important}.u-warning-plain-hover[data-v-5c660135]{color:#fff!important;background:#f29100!important}.u-error-plain-hover[data-v-5c660135]{color:#fff!important;background:#dd6161!important}.u-info-plain-hover[data-v-5c660135]{color:#fff!important;background:#82848a!important}.u-default-hover[data-v-5c660135]{color:#2b85e4!important;border-color:#2b85e4!important;background-color:#ecf5ff!important}.u-primary-hover[data-v-5c660135]{background:#2b85e4!important;color:#fff}.u-success-hover[data-v-5c660135]{background:#18b566!important;color:#fff}.u-info-hover[data-v-5c660135]{background:#82848a!important;color:#fff}.u-warning-hover[data-v-5c660135]{background:#f29100!important;color:#fff}.u-error-hover[data-v-5c660135]{background:#dd6161!important;color:#fff}',""]),t.exports=e},"4f4a":function(t,e,i){t.exports=i.p+"static/img/Last_page_bg.5f11e917.png"},"5a28":function(t,e,i){t.exports=i.p+"static/img/bg_sucai@2x.f774771f.png"},9686:function(t,e,i){"use strict";i.r(e);var n=i("ed19"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},9758:function(t,e,i){"use strict";var n=i("15c9"),a=i.n(n);a.a},dd11:function(t,e,i){var n=i("24fb"),a=i("1de5"),r=i("5a28");e=n(!1);var o=a(r);e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.content[data-v-181fb996]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;\r\n  /* align-items: center; */padding:%?50?% %?45?% %?76?% %?39?%;background-image:url('+o+");background-size:100% 100%}.logo[data-v-181fb996]{height:%?80?%;width:%?328?%}.text-white[data-v-181fb996]{color:#fffefe}.text-blue[data-v-181fb996]{color:#00e4ff}.content_center[data-v-181fb996]{margin:%?86?% %?30?% auto;line-height:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.btn[data-v-181fb996]{border-radius:%?5000?%;width:%?411.3?%;height:%?112.5?%;background-color:#ff4900;color:#fff;font-size:%?35?%;margin:0 auto}",""]),t.exports=e},ed19:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("2eb3")),r={data:function(){return{show:!1,inviter_id:"",data:"https://register.payoneer.com.cn/fund-security/?utm_source=Baidu&utm_medium=search&utm_campaign=brandzone&utm_content=title"}},onLoad:function(){},methods:{copy:function(){var t=this.data,e=(0,a.default)(t);!1===e?uni.showToast({title:"不支持"}):uni.showToast({title:"复制成功",icon:"none"})}}};e.default=r}}]);