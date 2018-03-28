import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from '@/views/GoodsList'  // 商品列表
import Cart from '@/views/Cart'  // 购物车列表
import Address from '@/views/Address'  // 地址列表
import OrderConfirm from '@/views/OrderConfirm'  // 订单确认页面
import OrderSuccess from '@/views/OrderSuccess'  //  订单成功页面

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GoodsList',
      component: GoodsList
    }
  ]
})
