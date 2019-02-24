import VueRouter from 'vue-router'
import  home from './comp/tabbar/home.vue'
import  search from './comp/tabbar/search.vue'
import  shop from './comp/tabbar/shopcar.vue'
import  member from './comp/tabbar/member.vue'
import NewsList from './comp/news/NewsList.vue'
import newsinfo from './comp/news/newsinfo.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    { path: '/', redirect:"/home" },
    { path: '/home', component: home },
    { path: '/search', component: search },
    { path: '/member', component: member },
    { path: '/shop', component: shop },
    { path: '/home/NewsList', component: NewsList },
    { path: '/home/newsinfo/:id', component: newsinfo }
    
  ],
  linkActiveClass:'mui-active',
  

})

// 把路由对象暴露出去
export default router