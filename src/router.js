/**
 * Created by F1231657 on 2018/1/4.
 */
// 1.引入vue和vue-router并赋值给相应的Vue和Router
import Vue from 'vue';
import Router from 'vue-router';

import City from './pages/city/City';
import Home from './pages/home/Home';
import Detail from './pages/detail/Detail';

// 2.通过Vue的use方法注入Router
Vue.use(Router)
// 3.创建 router 实例，然后传 `routes` 配置
const router = new Router({
    // 指定路由选中时的样式类名
    linkActiveClass: 'active',
    hashbang: true, // 将路径格式化为#!开头
    mode: 'history',
    history: true, // 启用HTML5 history模式，可以使用pushState和replaceState来管理记录
    /**
     * 4.@desc 路由配置配置具体的路径
     */
    routes: [
        {
            path: '/',
            name: "Home",
            component: Home
        },
        {
            path: '/city',
            name: 'City',
            component: City
        },
        {
            path: '/detail/:id',
            name: 'Detail',
            component: Detail
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition
        } else {
          return { x: 0, y: 0 }
        }
      }
})
/**
 * @desc 全局监听路由变化
 */
// router.beforeEach((to, from, next) => {
//     store.dispatch('updateHistoryLength') // 变化时更新路由切换长度
//     next()
// })
// 5.导出路由
export default router
