import Vue from 'vue'
import App from './App'

import tuiRoundProgress from './components/tui-round-progress/tui-round-progress.vue'
Vue.component('tui-round-progress',tuiRoundProgress)

import tuiCircularProgress from './components/tui-circular-progress/tui-circular-progress.vue'
Vue.component('tui-circular-progress',tuiCircularProgress)

import http from './common/httpRequest'
Vue.prototype.http = http

Vue.config.productionTip = false

App.mpType = 'app'

// 引入全局uView
import uView from 'uview-ui'
Vue.use(uView);

const app = new Vue({
    ...App
})
app.$mount()
