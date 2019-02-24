// 入口文件
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router'

import app from './App.vue'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/fonts/mui-icons-extra.ttf'
import { Header } from 'mint-ui';
import moment from 'moment'



import VueResource from 'Vue-resource'
Vue.use(VueResource)
Vue.http.options.root="http://www.liulongbin.top:3005/"

import { Swipe, SwipeItem } from 'mint-ui';  
  
Vue.component(Swipe.name, Swipe);  
Vue.component(SwipeItem.name, SwipeItem);  

Vue.component(Header.name, Header)

Vue.filter('my_filter',function(data,params){
    return moment(data).format(params)
})
var vm=new Vue({
    el:"#app",
    render:c=>c(app),
    router
})
