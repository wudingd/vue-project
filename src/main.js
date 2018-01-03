//入口文件
import Vue from 'vue'

//导入根组件
import app from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import router from './router.js'
//导入 路由的包
import VueResource from 'vue-resource';
//  安装路由
Vue.use(VueResource);

//头部
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
//轮播图
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//底部
import './lib/mui/css/mui.min.css'
//引入图标
import './lib/mui/css/icons-extra.css'

var vm = new Vue({
  el:'#app',
  render:c=>c(app),
  router
})