(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-zero"],{"01b9":function(t,a,e){"use strict";var n=e("f3d0"),r=e.n(n);r.a},"05f9":function(t,a,e){"use strict";e.r(a);var n=e("9264"),r=e.n(n);for(var i in n)"default"!==i&&function(t){e.d(a,t,(function(){return n[t]}))}(i);a["default"]=r.a},"1de5":function(t,a,e){"use strict";t.exports=function(t,a){return a||(a={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),a.hash&&(t+=a.hash),/["'() \t\n]/.test(t)||a.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},2733:function(t,a,e){"use strict";var n=e("a63a"),r=e.n(n);r.a},3396:function(t,a,e){var n=e("24fb"),r=e("1de5"),i=e("95fa");a=n(!1);var s=r(i);a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.content[data-v-0a9c679d]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?126?% %?60?% %?76?% %?85?%;background-image:url('+s+");background-size:100% 100%;color:#fff;font-size:%?35?%}.btn_colorful[data-v-0a9c679d]{border-radius:%?5000?%;width:%?411.3?%;height:%?112.5?%;background:-webkit-linear-gradient(left,#ff331b,#ecc400);color:#fff;font-size:%?35?%;margin:0 auto}.ship[data-v-0a9c679d]{position:absolute;bottom:0;left:%?250?%}.ship uni-image[data-v-0a9c679d]{width:%?262?%;height:%?891?%}.tui-progress-text[data-v-0a9c679d]{width:100%;height:%?500?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;position:absolute;left:0;top:0;color:#fff;font-size:%?35?%}",""]),t.exports=a},"3b15":function(t,a,e){"use strict";e("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={props:{autoPlay:{type:Boolean,default:!0},timingFunction:{type:String,default:"ease-in"},duration:{type:String,default:"1s"},animateName:{type:String,default:"flash"},fillMode:{type:String,default:"none"},delay:{type:String,default:"0ms"},iterationCount:{type:[String,Number],default:1}},data:function(){return{intervalId:null,playing:!1}},created:function(){this.autoPlay&&this.play()},mounted:function(){this.$emit("onMounted")},methods:{play:function(){var t=this;this.playing=!1,this.$nextTick((function(){t.playing=!0}))},loop:function(t){var a=this;t||(t=200),this.intervalId=setInterval((function(){a.play()}),t)},stop:function(){clearInterval(this.intervalId)}}};a.default=n},"43bf":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={onLoad:function(){uni.preloadPage({url:"/pages/index/zero_next"}),this.diam=500/750*this.$u.sys().windowWidth},onReady:function(){var t=this;setTimeout((function(){t.$refs.sloading.stop()}),200)},data:function(){return{diam:0,show:!1,shipName:uni.getStorageSync("shipName")}},methods:{play:function(){var t=this;this.show=!0,setTimeout((function(){t.$refs.roket.play()}),500),setTimeout((function(){uni.redirectTo({url:"zero_next"})}),2500)}}};a.default=n},7401:function(t,a,e){t.exports=e.p+"static/img/feichuan@2x.594fdc60.png"},"799e":function(t,a,e){"use strict";e.d(a,"b",(function(){return r})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){return n}));var n={tuiRoundProgress:e("3dae").default,galCssAnimate:e("abf1").default,galSloading:e("e1af").default},r=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",{staticClass:"content",style:"min-height:"+this.$u.sys().windowHeight+"px;"},[t.show?n("gal-css-animate",{ref:"roket",staticClass:"ship",attrs:{animateName:"bounceOutUp",duration:"2s",timingFunction:"ease-in",autoPlay:!1}},[n("v-uni-image",{attrs:{src:e("7401"),mode:"aspectFit"}})],1):[n("tui-round-progress",{attrs:{progressColor:"#EB0909",gradualColor:"#ff7900",diam:t.diam,lineWidth:30,percentage:0,defaultColor:"rgba(25,190,107,0.1)",fontShow:!1,lineCap:"butt"}},[n("v-uni-view",{staticClass:"tui-progress-text"},[n("v-uni-view",{staticClass:"tui-progress-num regular"},[t._v("您共答对"),n("v-uni-text",{staticStyle:{color:"#00FF36",margin:"0 10rpx"}},[t._v("0")]),t._v("题")],1)],1)],1),n("v-uni-view",{staticClass:"u-text-center heavy",staticStyle:{"margin-top":"58rpx","font-size":"45rpx"}},[t._v("很遗憾，您未能点亮能量环！")]),n("v-uni-view",{staticClass:" medium u-text-center",staticStyle:{"margin-top":"42rpx","line-height":"1.7","font-size":"35rpx","margin-bottom":"auto"}},[t._v("没关系，跨境的征途不是永远一帆风顺的，让Payoneer陪您在跨境的宇宙解锁宝藏吧")]),n("v-uni-view",{staticClass:"btn_colorful u-flex u-row-center medium",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.play()}}},[t._v("起飞试试！")])],n("gal-sloading",{ref:"sloading",attrs:{background:"rgba(255,255,255,1)"}})],2)},i=[]},"7e04":function(t,a,e){"use strict";e.r(a);var n=e("3b15"),r=e.n(n);for(var i in n)"default"!==i&&function(t){e.d(a,t,(function(){return n[t]}))}(i);a["default"]=r.a},"7fc5":function(t,a,e){"use strict";e.r(a);var n=e("799e"),r=e("f816");for(var i in r)"default"!==i&&function(t){e.d(a,t,(function(){return r[t]}))}(i);e("01b9");var s,o=e("f0c5"),l=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"0a9c679d",null,!1,n["a"],s);a["default"]=l.exports},9264:function(t,a,e){"use strict";e("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={props:{size:{type:Number,default:50},colors:{type:Array,default:function(){return["#FF6347","#D6FF7F","#9055FF","#c4d8f0"]}},background:{type:String,default:"rgba(255,255,255,0.92)"},title:{type:String,default:"loading ..."}},data:function(){return{status:1}},methods:{stop:function(){this.status=2},loading:function(){this.status=1},stopfun:function(t){return t.stopPropagation(),null}}};a.default=n},"95fa":function(t,a,e){t.exports=e.p+"static/img/bg2.54d7be66.jpg"},a63a:function(t,a,e){var n=e("d424");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=e("4f06").default;r("b4436c3c",n,!0,{sourceMap:!1,shadowMode:!1})},abf1:function(t,a,e){"use strict";e.r(a);var n=e("d0be"),r=e("7e04");for(var i in r)"default"!==i&&function(t){e.d(a,t,(function(){return r[t]}))}(i);var s,o=e("f0c5"),l=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"f211f8ea",null,!1,n["a"],s);a["default"]=l.exports},d0be:function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return r})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){return n}));var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{class:t.playing?t.animateName:"",style:{"animation-duration":t.duration,"animation-timing-function":t.timingFunction,"animation-fill-mode":t.fillMode,"animation-delay":t.delay,"animation-iteration-count":t.iterationCount}},[t._t("default")],2)},i=[]},d424:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,".gal-sloading[data-v-e8d502a2]{width:100%;height:100vh;position:fixed;z-index:9999;left:0;top:0;bottom:0}.gal-sloading-body[data-v-e8d502a2]{position:relative}.gal-sloading-body > uni-view[data-v-e8d502a2]{border-radius:100%}.gal-sloading-text[data-v-e8d502a2]{line-height:%?60?%;text-align:center;font-size:%?22?%;margin-top:%?28?%}.rush1[data-v-e8d502a2]{-webkit-animation:rush1-data-v-e8d502a2 4s infinite;animation:rush1-data-v-e8d502a2 4s infinite}.rush2[data-v-e8d502a2]{-webkit-animation:rush2-data-v-e8d502a2 4s infinite;animation:rush2-data-v-e8d502a2 4s infinite}.rush3[data-v-e8d502a2]{-webkit-animation:rush3-data-v-e8d502a2 4s infinite;animation:rush3-data-v-e8d502a2 4s infinite}.rush4[data-v-e8d502a2]{-webkit-animation:rush4-data-v-e8d502a2 4s infinite;animation:rush4-data-v-e8d502a2 4s infinite}@-webkit-keyframes rush1-data-v-e8d502a2{from{-webkit-transform:translate(0);transform:translate(0)}25%{-webkit-transform:translate(100%);transform:translate(100%)}50%{-webkit-transform:translate(100%,100%);transform:translate(100%,100%)}75%{-webkit-transform:translateY(100%);transform:translateY(100%)}}@keyframes rush1-data-v-e8d502a2{from{-webkit-transform:translate(0);transform:translate(0)}25%{-webkit-transform:translate(100%);transform:translate(100%)}50%{-webkit-transform:translate(100%,100%);transform:translate(100%,100%)}75%{-webkit-transform:translateY(100%);transform:translateY(100%)}}@-webkit-keyframes rush2-data-v-e8d502a2{from{-webkit-transform:translate(0);transform:translate(0)}25%{-webkit-transform:translateY(100%);transform:translateY(100%)}50%{-webkit-transform:translate(-100%,100%);transform:translate(-100%,100%)}75%{-webkit-transform:translate(-100%);transform:translate(-100%)}}@keyframes rush2-data-v-e8d502a2{from{-webkit-transform:translate(0);transform:translate(0)}25%{-webkit-transform:translateY(100%);transform:translateY(100%)}50%{-webkit-transform:translate(-100%,100%);transform:translate(-100%,100%)}75%{-webkit-transform:translate(-100%);transform:translate(-100%)}}@-webkit-keyframes rush3-data-v-e8d502a2{from{-webkit-transform:translate(0);transform:translate(0)}25%{-webkit-transform:translateY(-100%);transform:translateY(-100%)}50%{-webkit-transform:translate(100%,-100%);transform:translate(100%,-100%)}75%{-webkit-transform:translate(100%);transform:translate(100%)}}@keyframes rush3-data-v-e8d502a2{from{-webkit-transform:translate(0);transform:translate(0)}25%{-webkit-transform:translateY(-100%);transform:translateY(-100%)}50%{-webkit-transform:translate(100%,-100%);transform:translate(100%,-100%)}75%{-webkit-transform:translate(100%);transform:translate(100%)}}@-webkit-keyframes rush4-data-v-e8d502a2{from{-webkit-transform:translate(0);transform:translate(0)}25%{-webkit-transform:translate(-100%);transform:translate(-100%)}50%{-webkit-transform:translate(-100%,-100%);transform:translate(-100%,-100%)}75%{-webkit-transform:translateY(-100%);transform:translateY(-100%)}}@keyframes rush4-data-v-e8d502a2{from{-webkit-transform:translate(0);transform:translate(0)}25%{-webkit-transform:translate(-100%);transform:translate(-100%)}50%{-webkit-transform:translate(-100%,-100%);transform:translate(-100%,-100%)}75%{-webkit-transform:translateY(-100%);transform:translateY(-100%)}}@-webkit-keyframes backColor-data-v-e8d502a2{from{background-color:#82466e}25%{background-color:#425e82}50%{background-color:#826f4d}75%{background-color:#5e825a}}@keyframes backColor-data-v-e8d502a2{from{background-color:#82466e}25%{background-color:#425e82}50%{background-color:#826f4d}75%{background-color:#5e825a}}",""]),t.exports=a},e1af:function(t,a,e){"use strict";e.r(a);var n=e("e701"),r=e("05f9");for(var i in r)"default"!==i&&function(t){e.d(a,t,(function(){return r[t]}))}(i);e("2733");var s,o=e("f0c5"),l=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"e8d502a2",null,!1,n["a"],s);a["default"]=l.exports},e701:function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return r})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){return n}));var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return 1==t.status?e("v-uni-view",{staticClass:"gal-sloading gal-flex gal-columns gal-justify-content-center gal-align-items-center",style:{background:t.background},on:{touchmove:function(a){a.stopPropagation(),a.preventDefault(),arguments[0]=a=t.$handleEvent(a),t.stopfun.apply(void 0,arguments)},click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.stopfun.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"gal-flex gal-rows gal-wrap gal-sloading-body",style:{width:2*t.size+"rpx",height:2*t.size+"rpx"}},t._l(4,(function(a,n){return e("v-uni-view",{key:n,class:["rush"+(n+1)],style:{width:t.size+"rpx",height:t.size+"rpx",background:t.colors[n]}})})),1),e("v-uni-view",{staticClass:"gal-sloading-text gal-color-gray"},[t._v(t._s(t.title))]),e("v-uni-view",{staticStyle:{height:"100rpx"}})],1):t._e()},i=[]},f3d0:function(t,a,e){var n=e("3396");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=e("4f06").default;r("473db3f2",n,!0,{sourceMap:!1,shadowMode:!1})},f816:function(t,a,e){"use strict";e.r(a);var n=e("43bf"),r=e.n(n);for(var i in n)"default"!==i&&function(t){e.d(a,t,(function(){return n[t]}))}(i);a["default"]=r.a}}]);